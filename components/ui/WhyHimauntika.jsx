"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Users,
  Lightbulb,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    number: "01",
    title: "Technology",
    description:
      "Belajar dan mengeksplorasi teknologi seperti IoT, Arduino, Robotics, pemrograman, dan berbagai teknologi terbaru.",
  },
  {
    icon: Users,
    number: "02",
    title: "Community",
    description:
      "Bertemu dengan mahasiswa Informatika lainnya, berbagi pengalaman, membangun relasi, dan berkembang bersama.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Creativity",
    description:
      "Mengubah ide menjadi sesuatu yang nyata melalui project, eksperimen, diskusi, dan kegiatan kreatif.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Growth",
    description:
      "Mengembangkan kemampuan akademik, leadership, komunikasi, teamwork, dan pengalaman berorganisasi.",
  },
];

export default function WhyHimauntika() {
  return (
    <section
      id="why"
      className="relative py-24 px-4 md:px-6 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-700/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-purple-500" />

            <span className="text-purple-400 text-sm font-semibold tracking-[0.25em] uppercase">
              Why HIMAUNTIKA?
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Bukan hanya organisasi.
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ini tempat untuk berkembang.
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            HIMAUNTIKA hadir sebagai ruang bagi mahasiswa Teknik Informatika
            untuk belajar lebih banyak, bertemu orang-orang baru, membangun
            pengalaman, dan mengubah ide menjadi karya nyata.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative min-h-[420px] rounded-3xl border border-purple-800/40 bg-gradient-to-br from-purple-950/50 via-black to-black overflow-hidden">

              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-purple-600/20 rounded-full blur-[80px]" />
              </div>

              {/* Center content */}
              <div className="relative h-full min-h-[420px] flex flex-col items-center justify-center text-center p-8">

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-24 h-24 rounded-3xl border border-purple-500/40 bg-purple-600/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.2)]"
                >
                  <Cpu className="w-12 h-12 text-purple-400" />
                </motion.div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  Learn.
                  <span className="text-purple-400"> Build.</span>
                  <span className="text-pink-400"> Grow.</span>
                </h3>

                <p className="mt-4 text-gray-500 text-sm max-w-sm">
                  Satu tempat untuk belajar teknologi, membuat project,
                  berkolaborasi, dan berkembang bersama.
                </p>

                {/* Floating labels */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute top-10 right-8 px-3 py-2 rounded-full border border-purple-700/40 bg-black/70 backdrop-blur-md text-xs text-purple-300"
                >
                  IoT
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-16 left-8 px-3 py-2 rounded-full border border-purple-700/40 bg-black/70 backdrop-blur-md text-xs text-purple-300"
                >
                  Robotics
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-10 right-12 px-3 py-2 rounded-full border border-purple-700/40 bg-black/70 backdrop-blur-md text-xs text-purple-300"
                >
                  Collaboration
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right reasons */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <div className="relative flex gap-4 md:gap-5 p-5 rounded-2xl border border-purple-900/40 bg-black/30 hover:bg-purple-950/20 hover:border-purple-600/50 transition-all duration-300">

                    {/* Number */}
                    <span className="absolute top-4 right-5 text-xs text-gray-700 font-mono">
                      {reason.number}
                    </span>

                    {/* Icon */}
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-purple-600/10 border border-purple-700/30 flex items-center justify-center group-hover:bg-purple-600/20 transition-all">
                      <Icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Text */}
                    <div className="pr-8">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {reason.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight className="absolute bottom-5 right-5 w-4 h-4 text-gray-700 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}