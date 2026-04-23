import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy, Users, BookOpen, Microscope, Dumbbell, Music, Star,
  ChevronDown, ArrowRight, Phone, Award, Shield, Heart, Zap, Globe, CheckCircle
} from "lucide-react";
import { ScrollReveal, SectionHeading } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PosterPopup } from "../components/PosterPopup";
import schoolHeroImg from "figma:asset/0d8d15182ce0d9170e8fa95340926f89b3570e2a.png";
import sportsImg from "figma:asset/32eccfe2cf6682c9de621a90007519601ca7540b.png";
import artsImg from "figma:asset/15facb40bed45609cb8a94018fa87c556f9f79d3.png";
import scienceExhibitionImg from "figma:asset/03eac904f5ce2079033ef9319c8492e1f3b4d21b.png";
import votingRightsImg from "figma:asset/f53c3431e400241443a50a21e29a39c8b7fcbb11.png";
import teacherTrainingImg from "figma:asset/0a03d1ab309297669a26dd44c7b977148f0d16cc.png";

// ── Image URLs ──────────────────────────────────────────────────────────────
const CLASSROOM_IMG = "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const ROBOTICS_IMG = "https://images.unsplash.com/photo-1743677077216-00a458eff9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const LIBRARY_IMG = "https://images.unsplash.com/photo-1602114324271-08ea0e9f7a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const ARTS_IMG = "https://images.unsplash.com/photo-1724136789349-60c9d69c537a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";

// ── Why Choose Us Data ───────────────────────────────────────────────────────
const WHY_ITEMS = [
  {
    icon: Shield,
    title: "Safe & Secure Campus",
    desc: "24/7 CCTV surveillance, trained security personnel, and a fully fenced campus for complete peace of mind.",
    color: "#0A192F",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    desc: "Consistently top-performing students in board exams. Best school in Bhondsi, Gurugram for academic results.",
    color: "#D4AF37",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    desc: "Beyond books — sports, arts, music, and life skills form the foundation of every child's growth.",
    color: "#F28C8C",
  },
  {
    icon: Zap,
    title: "Modern Infrastructure",
    desc: "Smart classrooms, robotics lab, science labs, and digital resources that make learning exciting.",
    color: "#A3B18A",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Highly qualified, caring teachers committed to personalized attention and every child's success.",
    color: "#0A192F",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "A curriculum designed to prepare students for the 21st century with critical thinking and global awareness.",
    color: "#D4AF37",
  },
];

// ── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "2,000+", label: "Happy Students" },
  { value: "26+", label: "Years of Excellence" },
  { value: "120+", label: "Expert Faculty" },
  { value: "98%", label: "Parent Satisfaction" },
];

// ── FAQs ─────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is the admission process at Maariya Gold Public School?",
    a: "Our admission process is simple: Enquire online or visit the campus → Interaction & assessment → Document submission → Fee payment & enrollment. We welcome students from Nursery to Class X.",
  },
  {
    q: "Is Maariya Gold Public School affiliated with CBSE?",
    a: "Yes, Maariya Gold Public School follows the CBSE curriculum, ensuring a nationally recognized and high-quality education for all students.",
  },
  {
    q: "What facilities are available for students?",
    a: "We offer smart classrooms, a robotics lab, modern science labs, a sports complex, indoor games area, a well-stocked library, music & art studios, and a safe transport facility.",
  },
  {
    q: "What is the student-teacher ratio?",
    a: "We maintain a healthy 20:1 student-teacher ratio to ensure personalized attention and quality learning for every child.",
  },
  {
    q: "Are there extracurricular activities available?",
    a: "Absolutely! We offer cricket, football, basketball, yoga, dance, music, robotics club, debate, and various leadership programs throughout the year.",
  },
  {
    q: "What are the school timings?",
    a: "School timings are 8:00 AM to 2:30 PM (Monday to Saturday). We also offer after-school activity programs from 2:30 PM to 4:30 PM.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.07}>
      <div
        className="rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer"
        style={{
          border: open ? "1.5px solid #D4AF37" : "1.5px solid rgba(10,25,47,0.1)",
          background: open ? "rgba(212,175,55,0.04)" : "#fff",
          boxShadow: open ? "0 4px 24px rgba(212,175,55,0.1)" : "none",
        }}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <p className="text-sm font-semibold" style={{ color: "#0A192F", fontFamily: "var(--font-sans)" }}>
            {q}
          </p>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0"
          >
            <ChevronDown size={18} style={{ color: open ? "#D4AF37" : "#0A192F" }} />
          </motion.div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p
                className="px-5 pb-4 text-sm leading-relaxed"
                style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
              >
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

function EnquiryForm() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in admission at Maariya Gold Public School. Please share details."
  );
  const whatsappLink = `https://wa.me/919873074979?text=${whatsappMessage}`;

  return (
    <div
      className="rounded-3xl p-6 md:p-8 shadow-2xl"
      style={{
        background: "#fff",
        boxShadow: "0 12px 48px rgba(10,25,47,0.12), 0 2px 8px rgba(10,25,47,0.06)",
      }}
    >
      <div className="mb-6">
        <span
          className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37" }}
        >
          ✦ Free Counselling
        </span>
        <h3 className="mt-3 text-xl md:text-2xl" style={{ color: "#0A192F" }}>
          Connect on WhatsApp
        </h3>
        <p className="text-sm mt-1" style={{ color: "#6b7280" }}>
          Chat directly with our admissions team and get instant guidance.
        </p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <Phone size={16} /> Chat on WhatsApp
      </a>
    </div>
  );
}

export default function HomePage() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in admission at Maariya Gold Public School. Please share details."
  );
  const whatsappLink = `https://wa.me/919873074979?text=${whatsappMessage}`;

  return (
    <div>
      <PosterPopup />
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden">
        {/* ── Background: actual school photo ── */}
        <div className="absolute inset-0">
          <img
            src={schoolHeroImg}
            alt="Students of Maariya Gold Public School"
            className="w-full h-full"
            style={{
              objectFit: "cover",
              /* Push frame down so student faces dominate, hiding most of
                 the pink banner in the top portion */
              objectPosition: "center 62%",
            }}
            draggable={false}
          />

          {/* Layer 1 — cinematic base: heavy navy left (text area) → light right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(108deg, rgba(4,10,22,0.94) 0%, rgba(6,15,32,0.83) 35%, rgba(8,20,42,0.58) 62%, rgba(10,24,48,0.22) 100%)",
            }}
          />

          {/* Layer 2 — top suppressor: kills the bright pink banner */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(4,10,22,0.90) 0%, rgba(4,10,22,0.60) 20%, rgba(4,10,22,0.18) 44%, transparent 60%)",
            }}
          />

          {/* Layer 3 — bottom anchor: grounds students into the dark field */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(4,10,22,0.72) 0%, rgba(4,10,22,0.28) 18%, transparent 38%)",
            }}
          />

          {/* Layer 4 — edge vignette: cinematic depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 110% 90% at 72% 55%, transparent 38%, rgba(4,10,22,0.60) 100%)",
            }}
          />

          {/* Layer 5 — colour grade: subtle warm-gold tint to marry the
              brand palette with the real photo colours */}
          <div
            className="absolute inset-0 mix-blend-color"
            style={{ background: "rgba(10,25,47,0.18)" }}
          />
        </div>

        {/* Decorative gold line */}
        <div
          className="absolute top-0 left-0 w-1.5 h-full"
          style={{ background: "linear-gradient(180deg, #D4AF37, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Hero Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
                  style={{
                    background: "rgba(212,175,55,0.2)",
                    color: "#D4AF37",
                    border: "1px solid rgba(212,175,55,0.35)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Star size={12} fill="#D4AF37" /> Best School in Bhondsi, Gurugram
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white mb-5"
                style={{ fontFamily: "var(--font-serif)", lineHeight: 1.1 }}
              >
                Where Excellence
                <br />
                <span style={{ color: "#D4AF37" }}>Meets Joy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-sans)", maxWidth: "480px" }}
              >
                Nurturing bright minds since 2000 in Maruti Kunj, Bhondsi. A CBSE school where academic rigour meets holistic growth — modern facilities, expert teachers, and a campus where every child thrives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Enquire Now <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+919873074979"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] border"
                  style={{
                    borderColor: "rgba(255,255,255,0.35)",
                    color: "#fff",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <Phone size={16} /> Call Admissions
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                {["CBSE Affiliated", "20+ Clubs", "Safe Campus"].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <CheckCircle size={13} style={{ color: "#A3B18A" }} />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Enquiry Form (desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:block"
            >
              <EnquiryForm />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.3)" }} />
          <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
        </motion.div>
      </section>


      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section style={{ background: "#0A192F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: "#D4AF37", fontFamily: "var(--font-serif)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)" }}>
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Why Parents Choose Us"
            title="The Maariya Gold Difference"
            subtitle="We combine academic excellence with a joyful environment — because we believe the best learning happens when children feel safe, inspired, and excited to grow."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(10,25,47,0.12)" }}
                  className="group p-6 rounded-2xl border transition-all duration-300 cursor-default"
                  style={{
                    background: "#fff",
                    border: "1.5px solid rgba(10,25,47,0.08)",
                    boxShadow: "0 2px 8px rgba(10,25,47,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon size={22} style={{ color: item.color }} />
                  </div>
                  <h4 className="mb-2" style={{ color: "#0A192F", fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDY WITH FUN — BENTO GRID ──────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f2eb" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Study with Fun"
            title="World-Class Facilities"
            subtitle="Every corner of our campus is designed to spark curiosity, build confidence, and make learning an adventure."
          />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Smart Classrooms — large */}
            <ScrollReveal className="md:col-span-7" delay={0.05}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
                style={{ height: "320px" }}
              >
                <img
                  src={teacherTrainingImg}
                  alt="Teacher's Training"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover", objectPosition: "center 40%" }}
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
                    style={{ background: "#D4AF37", color: "#0A192F" }}
                  >
                    Teacher's Training
                  </span>
                  <h3 className="text-white">Empowering Teachers to Shape the Future</h3>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Sports — small top right */}
            <ScrollReveal className="md:col-span-5" delay={0.12}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
                style={{ height: "320px" }}
              >
                <img
                  src={sportsImg}
                  alt="Sports Complex"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
                    style={{ background: "#A3B18A", color: "#fff" }}
                  >
                    Sports & Fun
                  </span>
                  <h3 className="text-white" style={{ fontSize: "1.1rem" }}>Champions in the Making</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Karate, yoga, badminton & cooking
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Robotics Lab */}
            <ScrollReveal className="md:col-span-4" delay={0.18}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
                style={{ height: "260px" }}
              >
                <img
                  src={scienceExhibitionImg}
                  alt="Science Exhibition"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover", objectPosition: "center 35%" }}
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 55%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
                    style={{ background: "#F28C8C", color: "#fff" }}
                  >
                    Science Exhibition
                  </span>
                  <h3 className="text-white" style={{ fontSize: "1rem" }}>Future Innovators</h3>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Library */}
            <ScrollReveal className="md:col-span-4" delay={0.24}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
                style={{ height: "260px" }}
              >
                <img
                  src={votingRightsImg}
                  alt="Awareness of Their Rights"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 55%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
                    style={{ background: "#0A192F", color: "#D4AF37" }}
                  >
                    Awareness of Their Rights
                  </span>
                  <h3 className="text-white" style={{ fontSize: "1rem" }}>Importance of Right to Vote</h3>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Arts */}
            <ScrollReveal className="md:col-span-4" delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
                style={{ height: "260px" }}
              >
                <img
                  src={artsImg}
                  alt="Arts & Culture"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 55%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
                    style={{ background: "#D4AF37", color: "#0A192F" }}
                  >
                    Arts & Culture
                  </span>
                  <h3 className="text-white" style={{ fontSize: "1rem" }}>Express & Create</h3>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A192F 0%, #162d4f 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 50%, #A3B18A 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4">
              Give Your Child the Best Start
            </h2>
            <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)" }}>
              Admissions open for Academic Year 2025–26. Limited seats available. Secure your child's future at Maariya Gold Public School, Bhondsi, Gurugram.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #f0d87a)",
                  color: "#0A192F",
                  fontFamily: "var(--font-sans)",
                  boxShadow: "0 4px 20px rgba(212,175,55,0.4)",
                }}
              >
                Apply for Admission <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919873074979"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                  background: "rgba(255,255,255,0.08)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <Phone size={16} /> +91 98730 74979
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            subtitle="Everything parents need to know about admissions, facilities, and school life at Maariya Gold."
          />
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
          <ScrollReveal delay={0.3} className="text-center mt-8">
            <p className="text-sm" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
              Still have questions?{" "}
              <a href="tel:+919873074979" className="font-semibold transition-colors hover:opacity-80" style={{ color: "#D4AF37" }}>
                Call us at +91 98730 74979
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}