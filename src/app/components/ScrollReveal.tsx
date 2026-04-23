import { ReactNode } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ badge, title, subtitle, center = true, light = false }: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      {badge && (
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
          style={{
            background: light ? "rgba(212,175,55,0.2)" : "rgba(212,175,55,0.12)",
            color: "#D4AF37",
            border: "1px solid rgba(212,175,55,0.3)",
          }}
        >
          ✦ {badge}
        </span>
      )}
      <h2
        className="mb-3"
        style={{
          fontFamily: "var(--font-serif)",
          color: light ? "#fff" : "#0A192F",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""}`}
          style={{ color: light ? "rgba(255,255,255,0.7)" : "#6b7280", fontFamily: "var(--font-sans)" }}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
