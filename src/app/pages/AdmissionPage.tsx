import { motion } from "motion/react";
import { CheckCircle, Download, Phone, MessageCircle, Clock, FileText, Users, Award } from "lucide-react";
import { ScrollReveal, SectionHeading } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import admissionHeroImg from "../../imports/WhatsApp_Image_2026-04-12_at_15.50.48.jpeg";

const HERO_IMG = "https://images.unsplash.com/photo-1597743622436-c6b5661731e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80";

const STEPS = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Enquire",
    desc: "Fill the online form or call us. Our team will reach out within 24 hours to guide you through the next steps.",
    color: "#D4AF37",
  },
  {
    num: "02",
    icon: Users,
    title: "Campus Visit",
    desc: "Schedule a personal tour. Meet our faculty, explore facilities, and feel the warm, nurturing atmosphere of our campus.",
    color: "#A3B18A",
  },
  {
    num: "03",
    icon: FileText,
    title: "Apply",
    desc: "Complete the application form and submit required documents. Our team provides full support throughout this process.",
    color: "#F28C8C",
  },
  {
    num: "04",
    icon: Award,
    title: "Enroll",
    desc: "Receive your admission letter, complete fee payment, and officially welcome your child to the Maariya Gold family!",
    color: "#0A192F",
  },
];

const ELIGIBILITY = [
  { class: "Nursery", age: "3–4 years" },
  { class: "KG", age: "4–5 years" },
  { class: "Class I", age: "5–6 years" },
  { class: "Class II–V", age: "6–11 years" },
  { class: "Class VI–VIII", age: "11–14 years" },
  { class: "Class IX–X", age: "14–16 years" },
];

const DOCS = [
  "Birth Certificate (Original + Photocopy)",
  "Previous School's Transfer Certificate (Class II onwards)",
  "Previous Year's Report Card / Mark Sheet",
  "Residential Proof (Aadhar Card / Utility Bill)",
  "Passport Size Photographs (4 copies)",
  "Aadhar Card of Child & Parents",
  "Caste Certificate (if applicable)",
  "Medical Fitness Certificate",
];

function AdmissionSupportCard() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in admission at Maariya Gold Public School. Please share details."
  );
  const whatsappLink = `https://wa.me/919873074979?text=${whatsappMessage}`;
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-2xl"
      style={{
        background: "#fff",
        border: "1.5px solid rgba(10,25,47,0.08)",
        boxShadow: "0 12px 48px rgba(10,25,47,0.12)",
      }}
    >
      <div style={{ background: "linear-gradient(135deg, #0A192F, #162d4f)", padding: "24px 32px" }}>
        <h3 className="text-white mb-1">Admission Help Desk</h3>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)" }}>
          Academic Year 2025–26 - Limited seats available
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-4">
        <p className="text-sm leading-relaxed" style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}>
          We have removed online forms from the website. For fast admissions support, chat directly with our team on WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.02]"
          style={{
            background: "#25D366",
            fontFamily: "var(--font-sans)",
            boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
          }}
        >
          <MessageCircle size={16} /> Chat with Admissions on WhatsApp
        </a>
        <a
          href="tel:+919873074979"
          className="inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] border"
          style={{ borderColor: "#0A192F", color: "#0A192F", fontFamily: "var(--font-sans)" }}
        >
          <Phone size={16} /> Call Admissions
        </a>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl text-sm"
          style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", color: "#0A192F" }}
        >
          Quick response hours: Monday to Saturday, 9:00 AM to 4:00 PM.
        </motion.div>
      </div>
    </div>
  );
}

export default function AdmissionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-56 md:h-72 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={admissionHeroImg} alt="Admission" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,25,47,0.6), rgba(10,25,47,0.88))" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
              style={{ background: "rgba(212,175,55,0.25)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)" }}>
              ✦ Admissions 2025–26
            </span>
            <h1 className="text-white">Begin Your Child's Journey</h1>
          </motion.div>
        </div>
      </section>

      {/* ── ADMISSION STEPS ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Simple Process"
            title="4 Easy Steps to Enroll"
            subtitle="We've made the admission process as smooth and stress-free as possible for parents."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative">
                  {i < STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
                      style={{ background: "linear-gradient(to right, rgba(212,175,55,0.4), transparent)", width: "calc(100% - 2rem)", left: "calc(50% + 2rem)" }}
                    />
                  )}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative z-10 p-6 rounded-2xl text-center"
                    style={{
                      background: "#fff",
                      border: "1.5px solid rgba(10,25,47,0.08)",
                      boxShadow: "0 4px 16px rgba(10,25,47,0.06)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: `${step.color}15` }}
                    >
                      <step.icon size={28} style={{ color: step.color }} />
                    </div>
                    <div
                      className="text-xs font-bold tracking-widest mb-2"
                      style={{ color: step.color, fontFamily: "var(--font-sans)" }}
                    >
                      STEP {step.num}
                    </div>
                    <h4 className="mb-2" style={{ color: "#0A192F" }}>{step.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSION SUPPORT + ELIGIBILITY ──────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f2eb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Admission Support */}
            <ScrollReveal direction="left">
              <AdmissionSupportCard />
            </ScrollReveal>

            {/* Right: Eligibility + Docs */}
            <div className="space-y-8">
              {/* Age Eligibility */}
              <ScrollReveal direction="right" delay={0.05}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#fff", border: "1.5px solid rgba(10,25,47,0.08)", boxShadow: "0 4px 16px rgba(10,25,47,0.06)" }}
                >
                  <h3 className="mb-4">Age Eligibility</h3>
                  <div className="space-y-2">
                    {ELIGIBILITY.map((row) => (
                      <div
                        key={row.class}
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl"
                        style={{ background: "#faf9f6" }}
                      >
                        <span className="text-sm font-semibold" style={{ color: "#0A192F", fontFamily: "var(--font-sans)" }}>
                          {row.class}
                        </span>
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37" }}
                        >
                          {row.age}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Documents Required */}
              <ScrollReveal direction="right" delay={0.1}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#fff", border: "1.5px solid rgba(10,25,47,0.08)", boxShadow: "0 4px 16px rgba(10,25,47,0.06)" }}
                >
                  <h3 className="mb-4">Documents Required</h3>
                  <ul className="space-y-2">
                    {DOCS.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#A3B18A" }} />
                        <span className="text-sm" style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* CTA buttons */}
              <ScrollReveal direction="right" delay={0.15}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] border"
                    style={{ borderColor: "#0A192F", color: "#0A192F", fontFamily: "var(--font-sans)", background: "transparent" }}
                  >
                    <Download size={16} /> Download Prospectus
                  </button>
                  <a
                    href="tel:+919873074979"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #0A192F, #162d4f)", fontFamily: "var(--font-sans)" }}
                  >
                    <Phone size={16} /> Call Admissions
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICE HOURS ─────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "#0A192F" }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,175,55,0.2)" }}>
                  <Clock size={22} style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Admissions Office Hours</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Mon–Sat: 9:00 AM – 4:00 PM &nbsp;|&nbsp; Closed on Sundays & Public Holidays
                  </p>
                </div>
              </div>
              <a
                href="tel:+919873074979"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm flex-shrink-0 transition-all hover:scale-[1.02]"
                style={{ background: "#D4AF37", color: "#0A192F", fontFamily: "var(--font-sans)" }}
              >
                <Phone size={16} /> +91 98730 74979
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}