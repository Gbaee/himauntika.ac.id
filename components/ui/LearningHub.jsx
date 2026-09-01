"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Code2,
  Database,
  Network,
  Cpu,
  BookOpen,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Dasar Pemrograman C++",
    shortTitle: "C++ Programming",
    desc: "Pelajari dasar syntax, variable, conditional, looping, function, hingga konsep dasar pemrograman C++.",
    level: "Beginner",
    type: "Video Learning",
    icon: Code2,
    category: "Programming",
    link: "https://youtu.be/r4fZPG5N6tk?si=3tvYq6_AK-eiAyis",
  },
  {
    number: "02",
    title: "Pengantar Database MySQL",
    shortTitle: "MySQL Database",
    desc: "Memahami konsep database, tabel, query, dan dasar penggunaan MySQL untuk mahasiswa Teknik Informatika.",
    level: "Beginner",
    type: "Video Learning",
    icon: Database,
    category: "Database",
    link: "https://youtu.be/xYBclb-sYQ4?si=Vq7OOfO4S0fxDTYL",
  },
  {
    number: "03",
    title: "Jaringan Komputer",
    shortTitle: "Computer Network",
    desc: "Mengenal konsep dasar jaringan komputer, komunikasi data, perangkat jaringan, dan bagaimana jaringan bekerja.",
    level: "Beginner",
    type: "Video Learning",
    icon: Network,
    category: "Networking",
    link: "https://www.youtube.com/watch?v=qiQR5rTSshw",
  },
  {
    number: "04",
    title: "Pemrograman Arduino",
    shortTitle: "Arduino Programming",
    desc: "Mengenal Arduino, sensor, actuator, dan bagaimana membuat prototype sistem elektronik sederhana.",
    level: "Beginner",
    type: "Video Learning",
    icon: Cpu,
    category: "IoT & Robotics",
    link: "https://youtu.be/y2umEZuKdhw?si=1vhYfYwhK-XrejSr",
  },
];

export default function LearningHub() {
  return (
    <section
      id="modules"
      className="relative py-24 px-4 md:px-6 bg-black overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-700/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          {/* Small badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-700/40 bg-purple-600/10">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />

              <span className="text-xs font-semibold tracking-[0.2em] text-purple-400 uppercase">
                Learning Hub
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Upgrade Your
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {" "}Tech Skills.
                </span>
              </h2>

              <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                Materi pembelajaran yang dirancang untuk membantu mahasiswa
                Teknik Informatika memahami teknologi dari dasar hingga mampu
                mengembangkan project sendiri.
              </p>
            </div>

            {/* Right info */}
            <div className="hidden lg:flex items-center gap-3 text-sm text-gray-500">
              <BookOpen className="w-5 h-5 text-purple-400" />

              <span>
                {modules.length} Learning Modules
              </span>
            </div>
          </div>
        </motion.div>

        {/* ================= MODULE GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.a
                key={module.number}
                href={module.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative block"
              >
                <div className="relative h-full min-h-[290px] overflow-hidden rounded-3xl border border-purple-900/50 bg-gradient-to-br from-purple-950/30 via-black to-black p-6 md:p-7 transition-all duration-500 group-hover:border-purple-500/60 group-hover:shadow-[0_20px_60px_rgba(168,85,247,0.12)]">

                  {/* Hover glow */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-600/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl border border-purple-700/40 bg-purple-600/10 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:border-purple-500/50 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Number */}
                    <span className="text-4xl font-black text-purple-900/50 group-hover:text-purple-700/50 transition-colors">
                      {module.number}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="relative mt-7 flex items-center gap-2">
                    <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                      {module.category}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-gray-700" />

                    <span className="text-xs text-gray-500">
                      {module.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-3 text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm text-gray-500 leading-relaxed max-w-lg">
                    {module.desc}
                  </p>

                  {/* Bottom */}
                  <div className="relative mt-7 flex items-center justify-between">

                    {/* Type */}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Play className="w-3.5 h-3.5 text-purple-400" />

                      <span>{module.type}</span>
                    </div>

                    {/* Start learning */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span>Start Learning</span>

                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Bottom animated line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-3xl border border-purple-900/40 bg-gradient-to-r from-purple-950/30 via-black to-purple-950/20 p-6 md:p-8">

            {/* Glow */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-purple-600/10 blur-[70px] rounded-full" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div>
                <p className="text-sm font-semibold text-purple-400">
                  KEEP LEARNING
                </p>

                <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                  Belajar hari ini, bangun sesuatu besok.
                </h3>

                <p className="mt-2 text-sm text-gray-500 max-w-xl">
                  Jangan hanya menjadi pengguna teknologi. Mulai belajar,
                  bereksperimen, dan ciptakan teknologi versimu sendiri.
                </p>
              </div>

              <div className="shrink-0">
                <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-purple-700/40 bg-purple-600/10 text-sm font-semibold text-purple-300">
                  <Code2 className="w-4 h-4" />
                  <span>Start Building</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
