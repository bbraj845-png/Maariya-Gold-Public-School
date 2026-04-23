import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logoImg from "../../imports/WhatsApp_Image_2026-04-12_at_17.34.58.jpeg";

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Admission", path: "/admission" },
  { label: "Fees & Academics", path: "/fees-academics" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/admission" },
];

export function Footer() {
  return (
    <footer style={{ background: "#060f1e" }}>
      {/* Top gold accent bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #D4AF37, #f0d87a, #D4AF37)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Crest — same treatment as Header */}
              <div
                className="flex-shrink-0 overflow-hidden"
                style={{
                  height: "44px",
                  width: "44px",
                  borderRadius: "8px",
                  background: "#fff",
                  border: "1px solid rgba(212,175,55,0.45)",
                  padding: "2px",
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
              <div>
                <div className="text-base font-bold text-white" style={{ fontFamily: "var(--font-serif)", lineHeight: 1.2 }}>
                  Maariya Gold Public School
                </div>
                <div style={{ fontSize: "9.5px", letterSpacing: "0.09em", textTransform: "uppercase", fontFamily: "var(--font-sans)", color: "rgba(212,175,55,0.65)", marginTop: "2px" }}>
                  Bhondsi · Gurugram
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Maariya Gold Public School is one of the best schools in Bhondsi, Gurugram, Haryana — offering holistic, CBSE-aligned education that nurtures academic excellence, character, and creativity in a safe, joyful learning environment.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1CSRC1vUQn/" },
                { Icon: Instagram, href: "https://www.instagram.com/mgpsmaruti?igsh=NWNxd2p4bmQ5aTF0" },
                { Icon: Youtube, href: "https://www.youtube.com/@Mgps0999" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D4AF37";
                    e.currentTarget.style.color = "#0A192F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:w-2"
                      style={{ background: "#D4AF37" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(212,175,55,0.15)" }}
                >
                  <MapPin size={14} style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Address</p>
                  <p className="text-sm text-white/70 leading-snug">
                    Building No. 264, Maruti Kunj,<br />Bhondsi, Gurugram, Haryana — 122102
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(212,175,55,0.15)" }}
                >
                  <Phone size={14} style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Phone</p>
                  <a href="tel:+919873074979" className="text-sm text-white/70 hover:text-yellow-400 transition-colors">
                    +91 98730 74979
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(212,175,55,0.15)" }}
                >
                  <Mail size={14} style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Email</p>
                  <a href="mailto:mgpsmarutikunj@gmail.com" className="text-sm text-white/70 hover:text-yellow-400 transition-colors">
                    mgpsmarutikunj@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Find Us
            </h4>
            <div className="rounded-xl overflow-hidden border border-white/10" style={{ height: "180px" }}>
              <iframe
                title="Maariya Gold Public School Location"
                src="https://maps.google.com/maps?q=Maariya+Gold+Public+School%2C+Building+No+264%2C+Maruti+Kunj%2C+Bhondsi%2C+Gurugram%2C+Haryana+122102&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-white/40 mt-2">
              Bldg. 264, Maruti Kunj, Bhondsi, Gurugram
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Maariya Gold Public School, Bhondsi, Gurugram. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Best School in Bhondsi · CBSE Affiliated · Gurugram, Haryana
          </p>
        </div>
      </div>
    </footer>
  );
}