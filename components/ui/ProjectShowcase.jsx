"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Cpu,
  Wifi,
  Zap,
  X,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "IoT & Arduino Collection",
    description:
      "Kumpulan prototype berbasis IoT dan Arduino yang dikembangkan sebagai media pembelajaran dan eksplorasi teknologi oleh mahasiswa HIMAUNTIKA.",
    category: "IoT",
    type: "image",
    src: "/images/koleksi_1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Parking System",
    description:
      "Prototype sistem parkir otomatis menggunakan sensor ultrasonik, servo, LED, buzzer, dan mikrokontroler.",
    category: "IoT",
    type: "image",
    src: "/images/koleksi_2.jpg",
  },
  {
    id: 3,
    title: "Automatic Plant Watering",
    description:
      "Prototype penyiraman tanaman otomatis menggunakan sensor kelembapan tanah untuk mendeteksi kondisi media tanam.",
    category: "Automation",
    type: "image",
    src: "/images/koleksi_3.jpg",
  },
  {
    id: 4,
    title: "Rain Sensor Prototype",
    description:
      "Prototype otomatisasi menggunakan sensor hujan untuk mendeteksi kondisi lingkungan secara real-time.",
    category: "Sensor",
    type: "video",
    src: "/videos/sensor-hujan.mp4",
  },
  {
    id: 5,
    title: "Automatic Barrier Gate",
    description:
      "Prototype palang otomatis menggunakan sensor jarak dan motor servo sebagai sistem akses kendaraan.",
    category: "Automation",
    type: "video",
    src: "/videos/sensor-palang.mp4",
  },
  {
    id: 6,
    title: "RFID Automatic Door",
    description:
      "Prototype pintu otomatis menggunakan RFID sebagai sistem identifikasi dan kontrol akses.",
    category: "IoT",
    type: "video",
    src: "/videos/sensor-rfid.mp4",
  },
  {
    id: 7,
    title: "Ultrasonic Sensor",
    description:
      "Eksperimen sensor ultrasonik untuk mengukur jarak dan mendukung sistem otomatisasi.",
    category: "Sensor",
    type: "video",
    src: "/videos/sensor-ultrasonik.mp4",
  },
  {
    id: 8,
    title: "Smart Irrigation",
    description:
      "Sistem penyiraman otomatis berbasis sensor kelembapan untuk menjaga kondisi tanah.",
    category: "Automation",
    type: "video",
    src: "/videos/sensor-kelembapan.mp4",
  },
  {
    id: 9,
    title: "Sound Sensor Project",
    description:
      "Eksperimen menggunakan sensor suara untuk mendeteksi input suara sebagai pemicu sistem.",
    category: "Sensor",
    type: "video",
    src: "/videos/sensor-suara.mp4",
  },
];

const categories = ["All", "IoT", "Automation", "Sensor"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProject = projects.find((project) => project.featured);

  return (
    <section
      id="projekan"
      className="relative py-24 px-4 md:px-6 bg-black overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute top-20 left-0 w-80 h-80 bg-purple-700/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px]" />

      {/* Technology grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-700/40 bg-purple-600/10">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />

              <span className="text-xs font-semibold tracking-[0.2em] text-purple-400 uppercase">
                Project Showcase
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Ideas Into
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {" "}Reality.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
                Dari eksperimen sederhana hingga prototype teknologi,
                HIMAUNTIKA menjadi ruang bagi mahasiswa untuk belajar,
                bereksperimen, dan mengubah ide menjadi karya nyata.
              </p>
            </div>

            {/* Project counter */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <p className="text-3xl font-bold text-white">
                  {projects.length}+
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Projects
                </p>
              </div>

              <div className="h-10 w-px bg-purple-900" />

              <div className="flex gap-3">
                <Cpu className="w-5 h-5 text-purple-400" />
                <Wifi className="w-5 h-5 text-purple-400" />
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* =====================================================
            FEATURED PROJECT
        ====================================================== */}

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="group relative overflow-hidden rounded-[2rem] border border-purple-800/40 bg-gradient-to-br from-purple-950/30 via-black to-black">

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Image */}
                <div className="relative min-h-[300px] lg:min-h-[430px] overflow-hidden">

                  <img
                    src={featuredProject.src}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Featured badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-purple-500/40 text-xs font-semibold text-purple-300">
                      Featured Project
                    </span>
                  </div>

                  {/* Project number */}
                  <div className="absolute bottom-5 left-5">
                    <span className="text-7xl font-black text-white/10">
                      01
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">
                      {featuredProject.category}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-gray-700" />

                    <span className="text-xs text-gray-500">
                      HIMAUNTIKA
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold text-white">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 text-sm md:text-base text-gray-400 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Arduino", "Sensor", "Automation"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-700/30 text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="mt-8 w-fit flex items-center gap-2 px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  >
                    Explore Project

                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =====================================================
            FILTER
        ====================================================== */}

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                  : "bg-white/[0.03] border border-purple-900/40 text-gray-400 hover:text-white hover:border-purple-700"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">

            {filteredProjects.map((project, index) => (

              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="group"
              >

                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-full overflow-hidden rounded-3xl border border-purple-900/40 bg-white/[0.02] cursor-pointer hover:border-purple-600/50 hover:-translate-y-2 transition-all duration-500"
                >

                  {/* Media */}
                  <div className="relative h-52 overflow-hidden">

                    {project.type === "image" ? (
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <video
                        src={project.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    {/* Type */}
                    <div className="absolute top-4 right-4">

                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10">

                        {project.type === "video" ? (
                          <Play className="w-3 h-3 text-purple-400" />
                        ) : (
                          <Cpu className="w-3 h-3 text-purple-400" />
                        )}

                        <span className="text-[10px] uppercase tracking-wider text-gray-300">
                          {project.type === "video" ? "Video" : "Project"}
                        </span>

                      </div>

                    </div>

                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                      <div className="w-12 h-12 rounded-full bg-purple-600/90 flex items-center justify-center shadow-2xl shadow-purple-900/50">

                        {project.type === "video" ? (
                          <Play className="w-5 h-5 text-white fill-white" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        )}

                      </div>

                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-purple-400 font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-xs text-gray-600">
                        View details
                      </span>

                      <ArrowUpRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                    </div>

                  </div>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />

                </div>

              </motion.div>

            ))}

          </AnimatePresence>
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >

          <div className="relative overflow-hidden rounded-3xl border border-purple-900/40 bg-gradient-to-r from-purple-950/20 via-black to-purple-950/20 p-7 md:p-9">

            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">
                  Build Something
                </p>

                <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                  Punya ide project?
                </h3>

                <p className="mt-2 text-sm text-gray-500 max-w-xl">
                  Jangan berhenti di ide. Diskusikan, eksperimenkan,
                  dan wujudkan project teknologi bersama HIMAUNTIKA.
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("join");

                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                Join The Community

                <ExternalLink className="w-4 h-4" />
              </button>

            </div>

          </div>

        </motion.div>

      </div>

      {/* =========================================================
          PROJECT MODAL
      ========================================================== */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-800/50 bg-[#080808] shadow-2xl shadow-purple-900/20"
            >

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media */}
              <div className="relative">

                {selectedProject.type === "image" ? (
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.title}
                    className="w-full max-h-[450px] object-cover"
                  />
                ) : (
                  <video
                    src={selectedProject.src}
                    controls
                    autoPlay
                    className="w-full max-h-[450px] object-contain bg-black"
                  />
                )}

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />

              </div>

              {/* Modal content */}
              <div className="p-6 md:p-10">

                <div className="flex items-center gap-3 mb-4">

                  <span className="text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">
                    {selectedProject.category}
                  </span>

                  <span className="w-1 h-1 rounded-full bg-gray-700" />

                  <span className="text-xs text-gray-500">
                    HIMAUNTIKA PROJECT
                  </span>

                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-700/30 text-xs text-purple-300">
                    Technology
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-700/30 text-xs text-purple-300">
                    Innovation
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-700/30 text-xs text-purple-300">
                    HIMAUNTIKA
                  </span>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}