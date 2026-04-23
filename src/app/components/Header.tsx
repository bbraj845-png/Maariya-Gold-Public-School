import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/WhatsApp_Image_2026-04-12_at_17.34.58.jpeg";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Admission", path: "/admission" },
  { label: "Fees & Academics", path: "/fees-academics" },
  { label: "Gallery", path: "/gallery" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in admission at Maariya Gold Public School. Please share details."
  );
  const whatsappLink = `https://wa.me/919873074979?text=${whatsappMessage}`;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(253, 251, 247, 0.97)"
            : "rgba(253, 251, 247, 0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: isScrolled ? "0 2px 24px rgba(10,25,47,0.10)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(10,25,47,0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] md:h-20">

            {/* ── Logo + School Name ─────────────────────────────────── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group flex-shrink-0 min-w-0"
              aria-label="Maariya Gold Public School – Home"
            >
              {/* Crest badge */}
              <div
                className="w-11 h-11 flex-shrink-0 overflow-hidden transition-transform duration-200 group-hover:scale-[1.05]"
                style={{
                  borderRadius: "10px",
                  border: "1.5px solid rgba(212,175,55,0.50)",
                  background: "#fff",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={logoImg}
                  alt="Maariya Gold Public School crest"
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "block",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  draggable={false}
                />
              </div>

              {/* School Name — two-line stacked, always visible */}
              <div className="flex flex-col justify-center min-w-0" style={{ gap: "1px" }}>
                {/* Primary: MAARIYA GOLD */}
                <span
                  className="block"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#0A192F",
                    fontSize: "clamp(12.5px, 3.6vw, 15px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: "0.045em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  MAARIYA GOLD
                </span>

                {/* Secondary: PUBLIC SCHOOL — gold accent */}
                <span
                  className="block"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#D4AF37",
                    fontSize: "clamp(8px, 2vw, 9.5px)",
                    fontWeight: 700,
                    letterSpacing: "0.17em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  PUBLIC SCHOOL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
                  style={{
                    color: isActive(link.path) ? "#D4AF37" : "#0A192F",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      background: "#D4AF37",
                      transform: isActive(link.path) ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderColor: "#0A192F",
                  color: "#0A192F",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0A192F";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#0A192F";
                }}
              >
                Enquire Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#0A192F" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{ background: "#0A192F" }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  {/* Logo in drawer */}
                  <div
                    className="flex-shrink-0 overflow-hidden"
                    style={{
                      height: "42px",
                      width: "42px",
                      borderRadius: "9px",
                      background: "#fff",
                      border: "1.5px solid rgba(212,175,55,0.55)",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={logoImg}
                      alt="Maariya Gold Public School"
                      style={{ height: "100%", width: "100%", objectFit: "contain", objectPosition: "center", display: "block" }}
                      draggable={false}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-serif)", lineHeight: 1.2 }}>
                      Maariya Gold
                    </div>
                    <div className="text-white/50" style={{ fontSize: "9.5px", letterSpacing: "0.09em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}>
                      Public School
                    </div>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white p-1">
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl mb-1 transition-all duration-200"
                      style={{
                        background: isActive(link.path) ? "rgba(212,175,55,0.15)" : "transparent",
                        color: isActive(link.path) ? "#D4AF37" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="px-4 pb-8 pt-4 border-t border-white/10 space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{ background: "#D4AF37", color: "#0A192F" }}
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}