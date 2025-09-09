// components/Footer.jsx
import { Mail, Instagram, Music2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black/70 via-black/80 to-black text-gray-300 py-16 px-6 overflow-hidden">
      {/* Background animated orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-700/20 rounded-full blur-3xl animate-pulse" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & tagline */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            HIMAUNTIKA - UNIS Tangerang
          </h2>
          <p className="text-sm text-gray-400 max-w-md">
            Organisasi mahasiswa yang bergerak dalam bidang teknologi dan inovasi,
            menjadi wadah pengembangan diri bagi mahasiswa Informatika untuk
            menciptakan karya yang bermanfaat.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <a href="#kenapa" className="hover:text-pink-400 transition">
            Tentang Kami
          </a>
          <a href="#events" className="hover:text-pink-400 transition">
            Acara & Kegiatan
          </a>
          <a href="#join" className="hover:text-pink-400 transition">
            Bergabung
          </a>
          <a href="/contact" className="hover:text-pink-400 transition">
            Kontak
          </a>
        </div>

        {/* CTA & socials */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 shadow-lg"
            >
              <a href="#join">Join Us</a>
            </Button>
            <Button
              asChild
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 shadow-lg"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>

          <div className="flex space-x-6 mt-4">
            <motion.a
              href="https://www.tiktok.com/@himauntika_unis?_t=ZS-8za4SlFpu78&_r=1"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="hover:text-pink-500 transition"
            >
              <Music2 className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/himauntika_unis?utm_source=qr&igsh=MWN5OG9uOWY5bGNtZg=="
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="hover:text-purple-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="himauntika@unis.ac.id"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="hover:text-blue-400 transition"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

      {/* Copyright */}
      <div className="relative z-10 text-center text-xs md:text-sm text-gray-500">
        © 2025 HIMAUNTIKA - Universitas Islam Syekh-Yusuf. All rights reserved.
      </div>
    </footer>
  );
}
