import { motion } from "motion/react";
import { Heart, Star, Shield, Globe, Target, Users, BookOpen, Award, Lightbulb } from "lucide-react";
import { ScrollReveal, SectionHeading } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import schoolBuildingImg from "figma:asset/ca5cf3043e1e586a48cd8835ead3028a1e7b08cf.png";
import aboutHeroImg from "figma:asset/d1d03729f547f4ad7f993593d72f5dd568284156.png";
import principalImg from "../../imports/WhatsApp_Image_2026-04-12_at_5.50.32_PM.jpeg";

const SCHOOL_IMG = "https://images.unsplash.com/photo-1764943630631-b63aadf86e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80";
const CAMPUS_IMG = "https://images.unsplash.com/photo-1673029388674-18d9538e1c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";

const CORE_VALUES = [
  { icon: Heart, label: "Compassion", desc: "Nurturing empathy and kindness in every interaction", color: "#F28C8C" },
  { icon: Star, label: "Excellence", desc: "Relentless pursuit of academic and personal best", color: "#D4AF37" },
  { icon: Shield, label: "Integrity", desc: "Building honest, responsible citizens of tomorrow", color: "#0A192F" },
  { icon: Lightbulb, label: "Innovation", desc: "Embracing creativity and forward-thinking minds", color: "#A3B18A" },
  { icon: Globe, label: "Global Outlook", desc: "Preparing students for a connected, diverse world", color: "#D4AF37" },
  { icon: Target, label: "Purpose", desc: "Every child discovers their unique strength and path", color: "#F28C8C" },
];

const MILESTONES = [
  { year: "2000", event: "School founded with 120 students in Bhondsi, Gurugram" },
  { year: "2012", event: "CBSE affiliation granted — began Grades I to VIII" },
  { year: "2015", event: "State-of-the-art sports complex and smart classrooms inaugurated" },
  { year: "2018", event: "Extended to Grade X; 100% board pass rate in first year" },
  { year: "2021", event: "Robotics & STEM Lab launched; Digital learning integrated" },
  { year: "2024", event: "Achieved 2,000+ enrolled students; expanded campus" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-64 md:h-80 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={aboutHeroImg}
            alt="Maariya Gold Public School Students"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(10,25,47,0.5) 0%, rgba(10,25,47,0.82) 100%)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
              style={{ background: "rgba(212,175,55,0.25)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)" }}
            >
              ✦ About Us
            </span>
            <h1 className="text-white">Our Story & Legacy</h1>
          </motion.div>
        </div>
      </section>

      {/* ── INTRODUCTION ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20"
                  style={{ background: "#D4AF37" }}
                />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: "380px" }}>
                  <ImageWithFallback
                    src={schoolBuildingImg}
                    alt="Maariya Gold Public School Building"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
                {/* Floating stat badge */}
                <div
                  className="absolute -bottom-4 -right-4 rounded-2xl p-4 shadow-xl"
                  style={{ background: "#0A192F" }}
                >
                  <div className="text-2xl font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-serif)" }}>26+</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
                style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37" }}
              >
                ✦ Who We Are
              </span>
              <h2 className="mb-4">Shaping Futures Since 2000</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                Maariya Gold Public School is one of the premier educational institutions in Bhondsi, Gurugram, Haryana. Founded with the vision of providing world-class education in a nurturing environment, we have grown from a modest start to a thriving community of over 2,000 students.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                As a CBSE-affiliated school, we blend rigorous academics with a rich co-curricular program — creating confident, curious, and compassionate young individuals ready to excel in a rapidly changing world. Our campus at Maruti Kunj, Bhondsi is a safe, joyful place where learning truly comes alive.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "2,000+ Students", color: "#0A192F" },
                  { icon: Award, label: "CBSE Affiliated", color: "#D4AF37" },
                  { icon: BookOpen, label: "Nursery to Class X", color: "#A3B18A" },
                  { icon: Star, label: "98% Parent Trust", color: "#F28C8C" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15` }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <span className="text-xs font-semibold" style={{ color: "#0A192F", fontFamily: "var(--font-sans)" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f2eb" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="Our Purpose" title="Mission & Vision" />
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.05}>
              <div
                className="rounded-3xl p-8 h-full"
                style={{
                  background: "#0A192F",
                  boxShadow: "0 8px 32px rgba(10,25,47,0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(212,175,55,0.2)" }}
                >
                  <Target size={22} style={{ color: "#D4AF37" }} />
                </div>
                <h3 className="text-white mb-3">Our Mission</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)" }}>
                  To provide an inclusive, innovative, and high-quality CBSE education that develops the intellectual, emotional, physical, and social capabilities of every child — empowering them to become responsible, successful, and compassionate leaders.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div
                    className="w-10 h-1 rounded-full"
                    style={{ background: "#D4AF37" }}
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div
                className="rounded-3xl p-8 h-full border"
                style={{
                  background: "#fff",
                  border: "1.5px solid rgba(10,25,47,0.08)",
                  boxShadow: "0 4px 20px rgba(10,25,47,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(212,175,55,0.1)" }}
                >
                  <Globe size={22} style={{ color: "#D4AF37" }} />
                </div>
                <h3 className="mb-3" style={{ color: "#0A192F" }}>Our Vision</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                  To be the most trusted and preferred school in Gurugram — a beacon of holistic education where every child discovers their unique potential, and every family feels proud to be part of our community.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div
                    className="w-10 h-1 rounded-full"
                    style={{ background: "#D4AF37" }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL'S MESSAGE ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading badge="Leadership" title="Principal's Message" />
          <ScrollReveal>
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(10,25,47,0.08)",
                boxShadow: "0 8px 40px rgba(10,25,47,0.08)",
              }}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image side */}
                <div className="md:col-span-2 relative min-h-64">
                  <ImageWithFallback
                    src={principalImg}
                    alt="School Principal"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "280px", objectPosition: "center top" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.1) 100%)" }}
                  />
                </div>
                {/* Text side */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-4xl mb-4" style={{ color: "#D4AF37", fontFamily: "var(--font-serif)" }}>"</div>
                  <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}>
                    At Maariya Gold Public School, we don't just teach subjects — we nurture souls. Every child who walks through our gates is unique, gifted, and deserving of the very best. Our dedicated faculty and modern infrastructure exist for one purpose: to ensure your child doesn't just succeed academically, but flourishes as a complete human being.
                    <br /><br />
                    I invite every parent to visit our campus and see firsthand the warmth, discipline, and joy that defines life here in Bhondsi. Your child's best chapter begins at Maariya Gold.
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#0A192F" }}
                    >
                      <span className="text-xs font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-serif)" }}>PS</span>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: "#6b7280" }}>Principal, Maariya Gold Public School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#0A192F" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Our Foundation"
            title="Core Values"
            subtitle="These six pillars guide every decision, every lesson, and every relationship at Maariya Gold."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {CORE_VALUES.map((val, i) => (
              <ScrollReveal key={val.label} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 text-center cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${val.color}20` }}
                  >
                    <val.icon size={22} style={{ color: val.color }} />
                  </div>
                  <h4 className="text-white mb-2">{val.label}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)" }}>
                    {val.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES TIMELINE ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeading badge="Our Journey" title="26 Years of Excellence" />
          <div className="relative pl-8 md:pl-0">
            {/* Vertical line */}
            <div
              className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #D4AF37, rgba(212,175,55,0.1))", transform: "translateX(-50%)" }}
            />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.08}>
                  <div className={`flex items-start gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content card */}
                    <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div
                        className="inline-block rounded-2xl px-5 py-4 shadow-sm"
                        style={{ background: "#fff", border: "1.5px solid rgba(10,25,47,0.08)" }}
                      >
                        <span
                          className="text-xs font-bold tracking-wider"
                          style={{ color: "#D4AF37", fontFamily: "var(--font-sans)" }}
                        >
                          {m.year}
                        </span>
                        <p className="text-sm mt-1" style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}>
                          {m.event}
                        </p>
                      </div>
                    </div>

                    {/* Dot — centered on the line */}
                    <div className="flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 relative z-10">
                      <div
                        className="w-5 h-5 rounded-full border-4 border-white"
                        style={{ background: "#D4AF37", boxShadow: "0 0 0 4px rgba(212,175,55,0.25)" }}
                      />
                    </div>

                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}