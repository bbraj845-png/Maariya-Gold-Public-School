import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in admission at Maariya Gold Public School. Could you please share details about the admission process?"
    );
    window.open(`https://wa.me/919873074979?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
      {/* Expanded Chat Prompt */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "#fff",
              border: "1px solid rgba(10,25,47,0.1)",
              maxWidth: "240px",
              boxShadow: "0 8px 32px rgba(10,25,47,0.15)",
            }}
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center gap-3" style={{ background: "#25D366" }}>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white">Admissions Team</p>
                <p className="text-xs text-white/80">Typically replies in minutes</p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-white/80 hover:text-white ml-1 flex-shrink-0"
              >
                <X size={14} />
              </button>
            </div>

            {/* Chat Bubble */}
            <div className="px-4 py-3">
              <div
                className="rounded-xl rounded-tl-none px-3 py-2 text-sm leading-relaxed max-w-full"
                style={{ background: "#f0ede6", color: "#0A192F" }}
              >
                👋 Hi! Interested in admissions at <strong>Maariya Gold Public School</strong>? Chat with us!
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 pb-4">
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-95"
                style={{ background: "#25D366" }}
              >
                Chat with Admissions!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.button>

      {/* Pulse Ring */}
      <motion.div
        className="absolute bottom-0 right-0 w-14 h-14 rounded-full -z-10 pointer-events-none"
        style={{ background: "rgba(37,211,102,0.3)" }}
        animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}