"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Users,
  Sparkles,
  X,
  MapPin,
  Clock,
  Heart,
  GraduationCap,
  Trophy,
  Presentation,
} from "lucide-react";

const events = [
  {
    id: 1,
    year: "2025",
    date: "2025",
    title: "Buka Puasa Bersama 2025",
    description:
      "Buka Puasa Bersama HIMAUNTIKA menjadi momen untuk mempererat silaturahmi, berbagi cerita, dan membangun rasa kebersamaan antar mahasiswa.",
    category: "Social",
    icon: Heart,
    image: "/images/buka-puasa.jpg",
    featured: true,
  },
  {
    id: 2,
    year: "2023",
    date: "2023",
    title: "Workshop Arduino",
    description:
      "Pelatihan langsung mengenai Arduino dan berbagai macam sensor sebagai pengenalan teknologi mikrokontroler kepada mahasiswa.",
    category: "Technology",
    icon: GraduationCap,
    image: "/images/workshop.jpg",
  },
  {
    id: 3,
    year: "2025",
    date: "2025",
    title: "Seminar Go Digital",
    description:
      "Seminar terbuka mengenai perkembangan Artificial Intelligence dan penerapannya di dunia industri.",
    category: "Seminar",
    icon: Presentation,
    image: "/images/seminar.jpg",
  },
  {
    id: 4,
    year: "2024",
    date: "2024",
    title: "Futsal Bareng HIMAUNTIKA",
    description:
      "Kegiatan olahraga bersama yang menjadi ruang untuk membangun kerja sama tim, sportivitas, dan mempererat hubungan antar anggota.",
    category: "Sport",
    icon: Trophy,
    image: "/images/futsal.jpg",
  },
];

const categories = ["All", "Technology", "Seminar", "Social", "Sport"];

export default function EventActivities() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  const featuredEvent = events.find((event) => event.featured);

  return (
    <section
      id="events"
      className="relative py-24 px-4 md:px-6 bg-black overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-700/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-pink-700/10 rounded-full blur-[120px]" />

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
                Event & Activities
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Experiences That
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {" "}Matter.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
                Bukan hanya tentang belajar di kelas. HIMAUNTIKA menghadirkan
                berbagai kegiatan yang menjadi ruang untuk berkembang,
                berkolaborasi, dan menciptakan pengalaman bersama.
              </p>
            </div>

            {/* Event statistics */}

            <div className="hidden lg:flex items-center gap-5">

              <div className="text-right">
                <p className="text-3xl font-bold text-white">
                  {events.length}+
                </p>

                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Activities
                </p>
              </div>

              <div className="w-px h-10 bg-purple-900" />

              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5 text-purple-400" />

                <span className="text-sm">
                  Community
                </span>
              </div>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FEATURED EVENT
        ====================================================== */}

        {featuredEvent && (
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
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Featured badge */}

                  <div className="absolute top-5 left-5">

                    <span className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-purple-500/40 text-xs font-semibold text-purple-300">
                      <Sparkles className="w-3 h-3" />
                      Featured Event
                    </span>

                  </div>

                  {/* Year */}

                  <div className="absolute bottom-5 left-6">

                    <span className="text-7xl font-black text-white/10">
                      {featuredEvent.year}
                    </span>

                  </div>

                </div>

                {/* Content */}

                <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">

                  <div className="flex items-center gap-2 mb-4">

                    <span className="text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">
                      {featuredEvent.category}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-gray-700" />

                    <span className="text-xs text-gray-500">
                      HIMAUNTIKA
                    </span>

                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold text-white">
                    {featuredEvent.title}
                  </h3>

                  <p className="mt-5 text-sm md:text-base text-gray-400 leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  {/* Info */}

                  <div className="flex flex-wrap gap-4 mt-6">

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CalendarDays className="w-4 h-4 text-purple-400" />
                      {featuredEvent.year}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users className="w-4 h-4 text-purple-400" />
                      HIMAUNTIKA
                    </div>

                  </div>

                  {/* Button */}

                  <button
                    onClick={() => setSelectedEvent(featuredEvent)}
                    className="mt-8 w-fit flex items-center gap-2 px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  >
                    Explore Event

                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
            EVENT GRID
        ====================================================== */}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >

          <AnimatePresence mode="popLayout">

            {filteredEvents.map((event, index) => {

              const Icon = event.icon;

              return (
                <motion.div
                  layout
                  key={event.id}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="group"
                >

                  <div
                    onClick={() => setSelectedEvent(event)}
                    className="relative h-full overflow-hidden rounded-3xl border border-purple-900/40 bg-white/[0.02] cursor-pointer hover:border-purple-600/50 hover:-translate-y-2 transition-all duration-500"
                  >

                    {/* Image */}

                    <div className="relative h-56 overflow-hidden">

                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      {/* Year */}

                      <div className="absolute top-4 left-4">

                        <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-gray-300">
                          {event.year}
                        </span>

                      </div>

                      {/* Category */}

                      <div className="absolute top-4 right-4">

                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/20 text-[10px] uppercase tracking-wider text-purple-300">
                          <Icon className="w-3 h-3" />
                          {event.category}
                        </span>

                      </div>

                      {/* Hover icon */}

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                        <div className="w-12 h-12 rounded-full bg-purple-600/90 flex items-center justify-center shadow-2xl shadow-purple-900/50">

                          <ArrowUpRight className="w-5 h-5 text-white" />

                        </div>

                      </div>

                    </div>

                    {/* Content */}

                    <div className="p-5">

                      <div className="flex items-center gap-2 mb-2">

                        <CalendarDays className="w-3.5 h-3.5 text-purple-400" />

                        <span className="text-xs text-gray-500">
                          {event.year}
                        </span>

                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {event.title}
                      </h3>

                      <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {event.description}
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
              );
            })}

          </AnimatePresence>

        </motion.div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {filteredEvents.length === 0 && (
          <div className="py-16 text-center">

            <CalendarDays className="w-10 h-10 text-purple-500 mx-auto mb-4" />

            <h3 className="text-lg font-semibold text-white">
              Belum ada event
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Event dengan kategori ini belum tersedia.
            </p>

          </div>
        )}

        {/* =====================================================
            BOTTOM MESSAGE
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
                  More Than An Organization
                </p>

                <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                  Every event creates a new story.
                </h3>

                <p className="mt-2 text-sm text-gray-500 max-w-xl">
                  Belajar, bermain, berkolaborasi, dan berkembang bersama
                  komunitas mahasiswa Teknik Informatika.
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
                Join HIMAUNTIKA

                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </motion.div>

      </div>

      {/* =====================================================
          EVENT MODAL
      ====================================================== */}

      <AnimatePresence>

        {selectedEvent && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-800/50 bg-[#080808] shadow-2xl shadow-purple-900/20"
            >

              {/* Close */}

              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}

              <div className="relative">

                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full max-h-[430px] object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

              </div>

              {/* Content */}

              <div className="p-6 md:p-10">

                <div className="flex items-center gap-3 mb-4">

                  <span className="text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">
                    {selectedEvent.category}
                  </span>

                  <span className="w-1 h-1 rounded-full bg-gray-700" />

                  <span className="text-xs text-gray-500">
                    {selectedEvent.year}
                  </span>

                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {selectedEvent.title}
                </h3>

                <p className="mt-5 text-sm md:text-base text-gray-400 leading-relaxed">
                  {selectedEvent.description}
                </p>

                {/* Event info */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">

                  <div className="flex items-center gap-3 rounded-2xl border border-purple-900/40 bg-white/[0.02] p-4">

                    <CalendarDays className="w-5 h-5 text-purple-400" />

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-600">
                        Year
                      </p>

                      <p className="text-sm text-gray-300">
                        {selectedEvent.year}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-purple-900/40 bg-white/[0.02] p-4">

                    <Users className="w-5 h-5 text-purple-400" />

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-600">
                        Organizer
                      </p>

                      <p className="text-sm text-gray-300">
                        HIMAUNTIKA
                      </p>
                    </div>

                  </div>

                </div>

                {/* Tags */}

                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-700/30 text-xs text-purple-300">
                    Community
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-700/30 text-xs text-purple-300">
                    HIMAUNTIKA
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-700/30 text-xs text-purple-300">
                    Experience
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