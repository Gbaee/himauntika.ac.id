"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Sparkles,
  Code2,
  Heart,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-black text-gray-300">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Purple glow */}

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-[-150px] w-[350px] h-[350px] bg-purple-800/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-[-150px] w-[350px] h-[350px] bg-fuchsia-800/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Technology grid */}

      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-950/60 via-black/70 to-purple-950/40 p-8 md:p-10"
        >

          {/* Glow */}

          <div className="absolute -right-20 -top-20 w-56 h-56 bg-purple-600/20 blur-3xl rounded-full" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">

            {/* CTA Text */}

            <div className="text-center md:text-left">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 mb-4">

                <Sparkles className="w-3.5 h-3.5 text-purple-400" />

                <span className="text-xs text-purple-300 font-medium tracking-wider uppercase">
                  Stay Connected
                </span>

              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Punya ide besar?
              </h2>

              <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
                Jangan berhenti di ide. Mari belajar, berkolaborasi,
                dan menciptakan sesuatu yang berdampak bersama HIMAUNTIKA.
              </p>

            </div>


            {/* CTA Button */}

            <motion.a
              href="mailto:himauntika@unis.ac.id"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group shrink-0 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-600/20 transition-all duration-300"
            >

              <span>
                Contact Us
              </span>

              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

            </motion.a>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">


          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-2">

            {/* Logo / Brand */}

            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-500/20">

                <Code2 className="w-6 h-6 text-white" />

              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  HIMAUNTIKA
                </h3>

                <p className="text-xs text-purple-400 tracking-wider">
                  INFORMATICS COMMUNITY
                </p>

              </div>

            </div>


            {/* Description */}

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Himpunan Mahasiswa Teknik Informatika Universitas Islam
              Syekh-Yusuf yang menjadi ruang bagi mahasiswa untuk belajar,
              berkembang, berkolaborasi, dan menciptakan inovasi di bidang
              teknologi.
            </p>


            {/* Location */}

            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">

              <MapPin className="w-4 h-4 text-purple-400" />

              <span>
                Universitas Islam Syekh-Yusuf, Tangerang
              </span>

            </div>


            {/* Social Media */}

            <div className="flex items-center gap-3 mt-7">

              {/* Instagram */}

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
                aria-label="Instagram HIMAUNTIKA"
              >

                <Instagram className="w-5 h-5" />

              </motion.a>


              {/* TikTok */}

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
                aria-label="TikTok HIMAUNTIKA"
              >

                <Music2 className="w-5 h-5" />

              </motion.a>


              {/* Email */}

              <motion.a
                href="mailto:himauntika@unis.ac.id"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
                aria-label="Email HIMAUNTIKA"
              >

                <Mail className="w-5 h-5" />

              </motion.a>

            </div>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div>

            <h4 className="text-sm font-semibold text-white mb-5">
              Explore
            </h4>

            <div className="flex flex-col gap-3">

              <a
                href="#home"
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                <span>
                  Home
                </span>

                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>


              <a
                href="#modules"
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                <span>
                  Modul Pembelajaran
                </span>

                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>


              <a
                href="#projekan"
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                <span>
                  Project Showcase
                </span>

                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>


              <a
                href="#events"
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                <span>
                  Events & Activities
                </span>

                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>


              <a
                href="#struktural"
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                <span>
                  Organization
                </span>

                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>


              <a
                href="#visi-misi"
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                <span>
                  Vision & Mission
                </span>

                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

            </div>

          </div>


          {/* =================================================
              COMMUNITY
          ================================================= */}

          <div>

            <h4 className="text-sm font-semibold text-white mb-5">
              Community
            </h4>


            <div className="space-y-4">

              {/* Join */}

              <a
                href="#join"
                className="group block"
              >

                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition">

                    <Sparkles className="w-4 h-4 text-purple-400" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-300 group-hover:text-purple-400 transition">
                      Join HIMAUNTIKA
                    </p>

                    <p className="text-xs text-gray-600">
                      Become part of the community
                    </p>

                  </div>

                </div>

              </a>


              {/* Email */}

              <a
                href="mailto:himauntika@unis.ac.id"
                className="group block"
              >

                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition">

                    <Mail className="w-4 h-4 text-purple-400" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-300 group-hover:text-purple-400 transition">
                      Email Us
                    </p>

                    <p className="text-xs text-gray-600">
                      himauntika@unis.ac.id
                    </p>

                  </div>

                </div>

              </a>


              {/* Technology */}

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">

                  <Code2 className="w-4 h-4 text-purple-400" />

                </div>

                <div>

                  <p className="text-sm text-gray-300">
                    Technology
                  </p>

                  <p className="text-xs text-gray-600">
                    IoT • Robotics • Informatics
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="relative my-10">

          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

          <div className="absolute left-1/2 -translate-x-1/2 -top-2 px-4 bg-black">

            <div className="w-4 h-4 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center">

              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Copyright */}

          <p className="text-xs text-gray-600 text-center md:text-left">
            © {currentYear} HIMAUNTIKA — Universitas Islam Syekh-Yusuf.
            All rights reserved.
          </p>


          {/* Built With */}

          <div className="flex items-center gap-2 text-xs text-gray-600">

            <span>
              Built with
            </span>

            <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />

            <span>
              by HIMAUNTIKA
            </span>

          </div>


          {/* Back To Top */}

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group flex items-center gap-2 text-xs text-gray-500 hover:text-purple-400 transition-colors"
          >

            <span>
              Back to top
            </span>

            <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all">

              <ArrowUp className="w-4 h-4" />

            </div>

          </motion.button>

        </div>

      </div>

    </footer>
  );
}