import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Pause } from "lucide-react";
import posterImage from "figma:asset/d7869725b73bd7e172e896e7c513a74927e1dbfe.png";

const SESSION_KEY = "mgps_poster_seen";
const AUTO_CLOSE_MS = 5000;

export function PosterPopup() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const [paused, setPaused] = useState(false);

  // How many ms remain when we pause — starts at full duration
  const remainingRef = useRef<number>(AUTO_CLOSE_MS);
  // When the current running segment started
  const segmentStartRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef<boolean>(false);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleClose = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
    clearTimer();
  }, []);

  // Start (or resume) the countdown interval
  const startInterval = useCallback((closeFn: () => void) => {
    clearTimer();
    segmentStartRef.current = Date.now();

    timerRef.current = setInterval(() => {
      if (pausedRef.current) return; // safety guard — shouldn't fire but just in case
      const elapsed = Date.now() - segmentStartRef.current;
      const timeLeft = remainingRef.current - elapsed;
      const pct = Math.max(0, (timeLeft / AUTO_CLOSE_MS) * 100);
      setProgress(pct);
      if (pct === 0) {
        clearTimer();
        closeFn();
      }
    }, 50);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const showTimer = setTimeout(() => {
      setVisible(true);
      remainingRef.current = AUTO_CLOSE_MS;
      startInterval(handleClose);
    }, 600);

    return () => {
      clearTimeout(showTimer);
      clearTimer();
    };
  }, [handleClose, startInterval]);

  // Pause: freeze the remaining time, stop interval
  const handlePause = useCallback(() => {
    if (pausedRef.current) return;
    pausedRef.current = true;
    setPaused(true);
    // Save how much time is left at this moment
    const elapsed = Date.now() - segmentStartRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    clearTimer();
  }, []);

  // Resume: restart interval with remaining time
  const handleResume = useCallback(() => {
    if (!pausedRef.current) return;
    pausedRef.current = false;
    setPaused(false);
    startInterval(handleClose);
  }, [handleClose, startInterval]);

  // Unified event handlers — works for both mouse & touch
  const onHoldStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    // Don't intercept the close button
    if ((e.target as HTMLElement).closest("button, a")) return;
    handlePause();
  }, [handlePause]);

  const onHoldEnd = useCallback(() => {
    handleResume();
  }, [handleResume]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998]"
            style={{
              background: "rgba(5, 10, 25, 0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
            onClick={handleClose}
          />

          {/* Poster Card */}
          <motion.div
            key="poster"
            initial={{ opacity: 0, scale: 0.86, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.35, ease: [0.34, 1.26, 0.64, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative pointer-events-auto select-none"
              style={{
                width: "100%",
                maxWidth: "min(92vw, 440px)",
                borderRadius: "16px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
                overflow: "hidden",
                // Subtle scale-down when paused to show "held" state
                transform: paused ? "scale(0.985)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              onClick={e => e.stopPropagation()}
              // Mouse events (desktop hold)
              onMouseDown={onHoldStart}
              onMouseUp={onHoldEnd}
              onMouseLeave={onHoldEnd}
              // Touch events (mobile hold)
              onTouchStart={onHoldStart}
              onTouchEnd={onHoldEnd}
              onTouchCancel={onHoldEnd}
            >
              {/* Progress bar */}
              <div
                className="absolute top-0 left-0 h-1 z-10"
                style={{
                  width: `${progress}%`,
                  background: paused
                    ? "linear-gradient(90deg, #94A3B8, #CBD5E1)"
                    : "linear-gradient(90deg, #D4AF37, #f5d76e)",
                  transition: paused ? "background 0.2s" : "width 0.05s linear, background 0.2s",
                  borderRadius: "0 2px 2px 0",
                }}
              />

              {/* Close button */}
              <button
                onClick={handleClose}
                aria-label="Close popup"
                className="absolute top-2.5 right-2.5 z-20 flex items-center justify-center rounded-full transition-all active:scale-90"
                style={{
                  width: "34px",
                  height: "34px",
                  background: "rgba(10, 10, 20, 0.72)",
                  backdropFilter: "blur(4px)",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                  color: "#fff",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              {/* Paused indicator badge */}
              <AnimatePresence>
                {paused && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(10, 10, 20, 0.72)",
                      backdropFilter: "blur(4px)",
                      border: "1.5px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <Pause size={10} color="#D4AF37" fill="#D4AF37" />
                    <span style={{ color: "#fff", fontSize: "10px", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                      Hold to read
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Poster image */}
              <img
                src={posterImage}
                alt="Free Admission – Maariya Gold Public School"
                draggable={false}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  userSelect: "none",
                  WebkitUserDrag: "none" as any,
                  pointerEvents: "none",
                }}
              />

              {/* CTA strip */}
              <div
                className="flex items-center justify-between gap-2 px-4 py-3"
                style={{ background: "#0A192F" }}
              >
                <div>
                  <p style={{ color: "#D4AF37", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.04em" }}>
                    FREE ADMISSION OPEN
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>
                    Pre-Nursery · Nursery · Prep · Class I
                  </p>
                </div>
                <a
                  href="tel:+919873074979"
                  className="flex-shrink-0 px-4 py-2 rounded-xl flex items-center gap-1.5 active:scale-95 transition-transform"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #c49b28)",
                    color: "#0A192F",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}