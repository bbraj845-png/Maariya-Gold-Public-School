import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ImageOff } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ScrollReveal, SectionHeading } from "../components/ScrollReveal";

const FILTERS = ["All", "Campus", "Events", "Sports", "Academics"];

const galleryImageModules = import.meta.glob("../../imports/gallery/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const CATEGORY_BY_INDEX: Array<"Campus" | "Events" | "Sports" | "Academics"> = [
  "Academics",
  "Events",
  "Events",
  "Events",
  "Campus",
  "Events",
  "Events",
  "Academics",
  "Campus",
  "Events",
  "Academics",
  "Academics",
  "Academics",
  "Campus",
  "Sports",
  "Sports",
  "Campus",
  "Sports",
  "Sports",
  "Sports",
  "Academics",
  "Academics",
  "Events",
  "Academics",
  "Events",
  "Sports",
  "Sports",
  "Events",
  "Academics",
  "Academics",
  "Academics",
  "Academics",
  "Events",
  "Events",
  "Campus",
  "Campus",
];

const GALLERY_ITEMS: { src: string; category: string; title: string; aspect: string }[] = Object.entries(galleryImageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src], index) => {
    return {
      src,
      category: CATEGORY_BY_INDEX[index] ?? "Events",
      title: `Our Moment ${index + 1}`,
      aspect: "auto",
    };
  });

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0);
  const nextImg = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % filtered.length : 0);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-56 md:h-72 flex items-end overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A192F, #162d4f)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 60%), radial-gradient(circle at 70% 50%, #A3B18A 0%, transparent 60%)",
          }}
        />

        {/* Floating preview images */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="grid grid-cols-6 gap-1 h-full">
            {GALLERY_ITEMS.slice(0, 6).map((item, i) => (
              <div key={i} className="overflow-hidden">
                <img src={item.src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,25,47,0.5), rgba(10,25,47,0.9))" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
              style={{ background: "rgba(212,175,55,0.25)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)" }}>
              ✦ Photo Gallery
            </span>
            <h1 className="text-white">Life at Maariya Gold</h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FDFBF7" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Our Moments"
            title="Campus Life & Activities"
            subtitle="A glimpse into the vibrant, joyful, and inspiring world inside Maariya Gold Public School."
          />

          {/* Filter Tabs */}
          <ScrollReveal className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {FILTERS.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  whileTap={{ scale: 0.96 }}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    background: activeFilter === f ? "#0A192F" : "#fff",
                    color: activeFilter === f ? "#fff" : "#6b7280",
                    border: activeFilter === f ? "none" : "1.5px solid rgba(10,25,47,0.12)",
                    boxShadow: activeFilter === f ? "0 4px 12px rgba(10,25,47,0.2)" : "none",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {f}
                  <span
                    className="ml-1.5 text-xs"
                    style={{ color: activeFilter === f ? "rgba(255,255,255,0.6)" : "#9ca3af" }}
                  >
                    ({f === "All" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === f).length})
                  </span>
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-5">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(10,25,47,0.06)" }}
                  >
                    <ImageOff size={36} style={{ color: "#D4AF37" }} />
                  </div>
                  <div className="text-center">
                    <p className="text-base font-semibold mb-1" style={{ color: "#0A192F", fontFamily: "var(--font-serif)" }}>
                      Photos Coming Soon
                    </p>
                    <p className="text-sm" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
                      Our school gallery will be updated with real campus photos shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3, 1200: 4 }}
                >
                  <Masonry gutter="12px">
                    {filtered.map((item, i) => (
                      <motion.div
                        key={`${activeFilter}-${i}`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.4 }}
                        className="relative group cursor-pointer rounded-2xl overflow-hidden"
                        onClick={() => openLightbox(i)}
                        style={{ boxShadow: "0 2px 8px rgba(10,25,47,0.08)" }}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ display: "block" }}
                        />
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                          style={{ background: "rgba(10,25,47,0.72)" }}
                        >
                          <ZoomIn size={28} className="text-white mb-2" />
                          <p className="text-xs font-semibold text-white">{item.title}</p>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full mt-1.5"
                            style={{ background: "rgba(212,175,55,0.3)", color: "#D4AF37" }}
                          >
                            {item.category}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(6,15,30,0.95)" }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="rounded-2xl object-contain max-h-[70vh] w-auto max-w-full"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
              />
              <div className="mt-4 text-center">
                <p className="text-base font-semibold text-white" style={{ fontFamily: "var(--font-serif)" }}>
                  {filtered[lightboxIndex].title}
                </p>
                <span
                  className="text-xs px-3 py-1 rounded-full mt-1.5 inline-block"
                  style={{ background: "rgba(212,175,55,0.2)", color: "#D4AF37" }}
                >
                  {filtered[lightboxIndex].category}
                </span>
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}>
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}