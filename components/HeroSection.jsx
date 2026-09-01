"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Cpu,
  Users,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Members",
    icon: Users,
  },
  {
    value: "10+",
    label: "Projects",
    icon: Cpu,
  },
  {
    value: "20+",
    label: "Activities",
    icon: Sparkles,
  },
];

export default function HeroSection() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      {/* Purple glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[130px]" />

      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-700/10 blur-[130px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black/40 to-black" />

      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-[25%] left-[12%] w-1.5 h-1.5 bg-purple-400 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-[35%] right-[18%] w-2 h-2 bg-pink-400 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-purple-300 rounded-full"
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16">
        
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md text-purple-300 text-xs md:text-sm mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-purple-500" />
            </span>

            HIMAUNTIKA • TECHNOLOGY • COMMUNITY
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
          >
            <span className="text-white">
              Build.
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Learn.
            </span>{" "}
            <span className="text-white">
              Innovate.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="max-w-2xl mx-auto mt-7 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            HIMAUNTIKA adalah ruang bagi mahasiswa Teknik Informatika
            untuk berkembang, berkolaborasi, berkarya, dan menciptakan
            inovasi melalui teknologi.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-9"
          >
            <button
              onClick={() => scrollToSection("join")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20"
            >
              Bergabung Bersama Kami

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollToSection("projekan")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-gray-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30"
            >
              Eksplor Projek

              <Code2
                size={18}
                className="text-purple-400 transition-transform duration-300 group-hover:rotate-6"
              />
            </button>
          </motion.div>

          {/* ================================================= */}
          {/* STATS */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="grid grid-cols-3 max-w-2xl mx-auto mt-16 border-y border-white/10"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`py-5 px-3 ${
                    index !== stats.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex justify-center mb-2">
                    <Icon
                      size={17}
                      className="text-purple-400"
                    />
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
          }}
          onClick={() => scrollToSection("modules")}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Explore
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
