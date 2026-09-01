"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Buka Puasa Bersama",
    category: "Events",
    year: "2025",
    image: "/images/buka-puasa.jpg",
    description:
      "Momen kebersamaan HIMAUNTIKA dalam mempererat silaturahmi dan persaudaraan.",
  },
  {
    id: 2,
    title: "Workshop Arduino",
    category: "Projects",
    year: "2023",
    image: "/images/workshop.jpg",
    description:
      "Kegiatan pembelajaran dan eksplorasi teknologi Arduino bersama mahasiswa Teknik Informatika.",
  },
  {
    id: 3,
    title: "Seminar Go Digital",
    category: "Events",
    year: "2025",
    image: "/images/seminar.jpg",
    description:
      "Seminar mengenai perkembangan teknologi, Artificial Intelligence, dan dunia digital.",
  },
  {
    id: 4,
    title: "Futsal HIMAUNTIKA",
    category: "Activities",
    year: "2024",
    image: "/images/futsal.jpg",
    description:
      "Membangun teamwork, sportivitas, dan kebersamaan melalui kegiatan olahraga.",
  },
  {
    id: 5,
    title: "Project IoT",
    category: "Projects",
    year: "2025",
    image: "/images/koleksi_1.jpg",
    description:
      "Eksplorasi Internet of Things melalui project dan prototype yang dikembangkan mahasiswa.",
  },
  {
    id: 6,
    title: "Prototype Smart Parking",
    category: "Projects",
    year: "2025",
    image: "/images/koleksi_2.jpg",
    description:
      "Prototype sistem parkir otomatis berbasis sensor dan mikrokontroler.",
  },
  {
    id: 7,
    title: "Project Smart Irrigation",
    category: "Projects",
    year: "2025",
    image: "/images/koleksi_3.jpg",
    description:
      "Prototype penyiraman tanaman otomatis menggunakan sensor kelembapan tanah.",
  },
  {
    id: 8,
    title: "Moments Together",
    category: "Activities",
    year: "2025",
    image: "/images/struktural.jpg",
    description:
      "Dokumentasi kebersamaan dan perjalanan HIMAUNTIKA dalam berorganisasi.",
  },
];

const categories = ["All", "Events", "Projects", "Activities"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentIndex = selectedImage
    ? filteredItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;

    setSelectedImage(filteredItems[previousIndex]);
  };

  const handleNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;

    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black py-24 md:py-32 px-4 md:px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06),transparent_45%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-wider uppercase">
            <Camera className="w-4 h-4" />
            Our Moments
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Moments That{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Matter.
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Setiap kegiatan memiliki cerita. Dari belajar teknologi,
            mengembangkan project, hingga membangun kebersamaan.
            Inilah perjalanan HIMAUNTIKA yang kami abadikan dalam
            setiap momen.
          </p>
        </motion.div>

        {/* ================= FILTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* ================= GALLERY GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 bg-white/[0.03] ${
                  index === 0 || index === 5
                    ? "lg:col-span-2 lg:row-span-2"
                    : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative w-full ${
                    index === 0 || index === 5
                      ? "h-[360px] md:h-[440px]"
                      : "h-[250px]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-purple-300 font-semibold">
                        {item.category}
                      </span>

                      <span className="w-1 h-1 rounded-full bg-gray-500" />

                      <span className="text-[10px] text-gray-400">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            More moments. More stories. More reasons to grow together.
          </p>

          <div className="mt-5 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 md:left-8 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                <div className="relative w-full h-[55vh] md:h-[70vh]">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="p-5 md:p-6 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
                      {selectedImage.category}
                    </span>

                    <span className="text-gray-600">•</span>

                    <span className="text-xs text-gray-500">
                      {selectedImage.year}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}