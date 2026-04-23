import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, BookOpen, Monitor, FlaskConical, Music, Dumbbell, Award, Phone, ArrowRight } from "lucide-react";
import { ScrollReveal, SectionHeading } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import heroImg from "../../imports/WhatsApp_Image_2026-04-12_at_5.55.05_PM.jpeg";

const ACADEMIC_TABS = [
  {
    id: "primary",
    label: "Primary",
    sub: "Nursery – Class V",
    icon: BookOpen,
    description: "Our Primary Years Program (PYP) builds a strong foundation through an inquiry-based, play-integrated approach. We nurture curiosity, creativity, and critical thinking from the earliest years.",
    subjects: ["English Language & Literature", "Hindi", "Mathematics", "Environmental Studies", "General Science", "Computer Basics", "Arts & Crafts", "Physical Education", "Music & Dance"],
    highlights: [
      "Activity-based learning with hands-on projects",
      "Story-telling, roleplay & creative expression",
      "Regular reading programs & library visits",
      "Focus on foundational literacy & numeracy",
      "Regular parent-teacher communication",
    ],
    color: "#D4AF37",
  },
  {
    id: "middle",
    label: "Middle School",
    sub: "Classes VI – VIII",
    icon: Monitor,
    description: "Middle School is where academic rigor deepens and students begin to explore their interests. We use the Socratic method, collaborative projects, and digital tools to make learning relevant and exciting.",
    subjects: ["English", "Hindi / Sanskrit", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science", "Computer Science", "Drawing / Fine Arts", "Physical Education"],
    highlights: [
      "Smart classroom-based interactive learning",
      "Science Lab experiments every week",
      "Coding & digital literacy programs",
      "Subject-specific club activities",
      "Career awareness sessions from Class VII",
    ],
    color: "#A3B18A",
  },
  {
    id: "secondary",
    label: "Secondary",
    sub: "Classes IX – X",
    icon: FlaskConical,
    description: "Our Secondary program is CBSE-aligned and designed for board exam excellence. Students receive personalized coaching, regular assessments, and comprehensive study materials to achieve top results.",
    subjects: ["English Communicative", "Hindi Course A/B", "Mathematics Standard/Basic", "Science", "Social Science", "Information Technology (Optional)", "AI & Robotics (Optional)"],
    highlights: [
      "Expert teachers with 10+ years CBSE experience",
      "Weekly mock tests & performance tracking",
      "Individual doubt-clearing sessions",
      "Study materials & question bank provided",
      "100% board pass rate since inception",
    ],
    color: "#F28C8C",
  },
];

const FEE_STRUCTURE = [
  {
    level: "Nursery & KG",
    admission: "₹5,000",
    annual: "₹18,000",
    monthly: "₹1,800",
    transport: "₹1,200 / month",
    highlight: false,
  },
  {
    level: "Class I – V",
    admission: "₹8,000",
    annual: "₹24,000",
    monthly: "₹2,200",
    transport: "₹1,400 / month",
    highlight: false,
  },
  {
    level: "Class VI – VIII",
    admission: "₹10,000",
    annual: "₹28,000",
    monthly: "₹2,600",
    transport: "₹1,400 / month",
    highlight: true,
  },
  {
    level: "Class IX – X",
    admission: "₹12,000",
    annual: "₹32,000",
    monthly: "₹3,000",
    transport: "₹1,400 / month",
    highlight: false,
  },
];

const FACILITIES_INCLUDED = [
  { icon: Monitor, label: "Smart Classroom Access" },
  { icon: FlaskConical, label: "Science Lab Sessions" },
  { icon: BookOpen, label: "Library Membership" },
  { icon: Dumbbell, label: "Sports Facilities" },
  { icon: Music, label: "Cultural Programs" },
  { icon: Award, label: "Certifications & Awards" },
];

export default function FeesAcademicsPage() {
  const [activeTab, setActiveTab] = useState("primary");
  const activeData = ACADEMIC_TABS.find((t) => t.id === activeTab)!;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-56 md:h-72 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="Academics" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,25,47,0.55), rgba(10,25,47,0.88))" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
              style={{ background: "rgba(212,175,55,0.25)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)" }}>
              ✦ Curriculum & Fees
            </span>
            <h1 className="text-white">Fees & Academics</h1>
          </motion.div>
        </div>
      </section>

      {/* ── ACADEMICS TABS ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Our Curriculum"
            title="World-Class Academic Programs"
            subtitle="A CBSE-aligned curriculum that blends traditional wisdom with modern pedagogy — designed to challenge, inspire, and empower every learner."
          />

          {/* Tab Navigation */}
          <ScrollReveal className="mb-8">
            <div
              className="flex flex-col sm:flex-row gap-3 p-1.5 rounded-2xl max-w-2xl mx-auto"
              style={{ background: "rgba(10,25,47,0.06)" }}
            >
              {ACADEMIC_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-250"
                  style={{
                    background: activeTab === tab.id ? "#0A192F" : "transparent",
                    color: activeTab === tab.id ? "#fff" : "#6b7280",
                    boxShadow: activeTab === tab.id ? "0 4px 12px rgba(10,25,47,0.2)" : "none",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <div>{tab.label}</div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: activeTab === tab.id ? "rgba(255,255,255,0.6)" : "#9ca3af" }}
                  >
                    {tab.sub}
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div
                    className="rounded-2xl p-6 md:p-8"
                    style={{ background: "#fff", border: "1.5px solid rgba(10,25,47,0.08)", boxShadow: "0 4px 20px rgba(10,25,47,0.06)" }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${activeData.color}15` }}
                      >
                        <activeData.icon size={22} style={{ color: activeData.color }} />
                      </div>
                      <div>
                        <h3 className="mb-0" style={{ color: "#0A192F" }}>{activeData.label}</h3>
                        <p className="text-xs" style={{ color: "#9ca3af", fontFamily: "var(--font-sans)" }}>{activeData.sub}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                      {activeData.description}
                    </p>

                    <h4 className="mb-3 text-sm" style={{ color: "#0A192F" }}>Key Highlights</h4>
                    <ul className="space-y-2">
                      {activeData.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: activeData.color }} />
                          <span className="text-sm" style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subjects Sidebar */}
                <div>
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "#0A192F", boxShadow: "0 8px 32px rgba(10,25,47,0.2)" }}
                  >
                    <h4 className="text-white mb-4">Subjects Offered</h4>
                    <ul className="space-y-2.5">
                      {activeData.subjects.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: activeData.color }}
                          />
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)" }}>
                            {sub}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <Link
                        to="/admission"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                        style={{ background: activeData.color, color: activeData.id === "secondary" ? "#fff" : "#0A192F", fontFamily: "var(--font-sans)" }}
                      >
                        Apply Now <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── FEE STRUCTURE ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f2eb" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Transparent Pricing"
            title="Fee Structure 2025–26"
            subtitle="No hidden charges. Full transparency. We believe every family deserves to plan with clarity and confidence."
          />

          {/* Desktop Table */}
          <ScrollReveal>
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-lg" style={{ border: "1.5px solid rgba(10,25,47,0.08)" }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#0A192F" }}>
                    {["Level", "Admission Fee", "Annual Charges", "Monthly Tuition", "Transport (Optional)"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4 text-left text-xs font-semibold tracking-wider uppercase"
                        style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEE_STRUCTURE.map((row, i) => (
                    <tr
                      key={row.level}
                      style={{
                        background: row.highlight ? "rgba(212,175,55,0.06)" : i % 2 === 0 ? "#fff" : "#faf9f6",
                        borderLeft: row.highlight ? "4px solid #D4AF37" : "4px solid transparent",
                      }}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold" style={{ color: "#0A192F", fontFamily: "var(--font-sans)" }}>
                            {row.level}
                          </span>
                          {row.highlight && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
                            >
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      {[row.admission, row.annual, row.monthly, row.transport].map((val, vi) => (
                        <td key={vi} className="px-5 py-4 text-sm font-medium" style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {FEE_STRUCTURE.map((row, i) => (
              <ScrollReveal key={row.level} delay={i * 0.07}>
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "#fff",
                    border: row.highlight ? "2px solid #D4AF37" : "1.5px solid rgba(10,25,47,0.08)",
                    boxShadow: "0 4px 16px rgba(10,25,47,0.06)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm" style={{ color: "#0A192F" }}>{row.level}</h4>
                    {row.highlight && (
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}>
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Admission", value: row.admission },
                      { label: "Annual", value: row.annual },
                      { label: "Monthly", value: row.monthly },
                      { label: "Transport", value: row.transport },
                    ].map((item) => (
                      <div key={item.label} className="px-3 py-2.5 rounded-xl" style={{ background: "#faf9f6" }}>
                        <p className="text-xs mb-0.5" style={{ color: "#9ca3af" }}>{item.label}</p>
                        <p className="text-sm font-semibold" style={{ color: "#0A192F" }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Note */}
          <ScrollReveal className="mt-6">
            <div
              className="rounded-2xl p-5 flex gap-3"
              style={{ background: "rgba(10,25,47,0.04)", border: "1px solid rgba(10,25,47,0.08)" }}
            >
              <div className="text-lg flex-shrink-0">ℹ️</div>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: "#0A192F", fontFamily: "var(--font-sans)" }}>
                  Fee Notes
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                  Admission fee is a one-time payment. Annual charges cover development, technology, and library fees. Monthly tuition is due on or before the 10th of each month. Fee concessions available for siblings and meritorious students. For SC/ST fee waivers, please contact the admissions office. All fees are subject to annual revision per CBSE guidelines.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            badge="All-Inclusive"
            title="What's Included in Your Fees"
            subtitle="Every student at Maariya Gold gets access to premium facilities at no extra cost."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FACILITIES_INCLUDED.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "#fff", border: "1.5px solid rgba(10,25,47,0.08)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(10,25,47,0.06)" }}
                  >
                    <item.icon size={18} style={{ color: "#0A192F" }} />
                  </div>
                  <span className="text-xs font-medium" style={{ color: "#0A192F", fontFamily: "var(--font-sans)" }}>
                    {item.label}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEE CTA ──────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#0A192F" }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h3 className="text-white mb-3">Questions About Fees?</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)" }}>
              Our admissions counsellors are happy to discuss fee structures, payment plans, and available scholarships.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#D4AF37", color: "#0A192F", fontFamily: "var(--font-sans)" }}
              >
                Apply Now <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919873074979"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all hover:scale-[1.02]"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff", fontFamily: "var(--font-sans)" }}
              >
                <Phone size={16} /> Talk to Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}