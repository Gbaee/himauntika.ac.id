"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "modules", label: "Modul" },
  { id: "struktural", label: "Struktural" },
  { id: "visi-misi", label: "Visi & Misi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ================================
  // DETEKSI SCROLL & ACTIVE SECTION
  // ================================
  useEffect(() => {
    const handleScroll = () => {
      // Efek navbar ketika di-scroll
      setScrolled(window.scrollY > 30);

      // Ambil semua section berdasarkan ID
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      // Posisi scroll untuk menentukan section aktif
      const scrollPosition = window.scrollY + 180;

      let current = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Jalankan sekali ketika component pertama kali dimuat
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================================
  // SMOOTH SCROLL
  // ================================
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Tutup mobile menu setelah klik
    setMobileOpen(false);
  };

  return (
    <>
      {/* ========================================
          NAVBAR
      ======================================== */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "px-4 md:px-8 py-3"
            : "px-4 md:px-8 py-5"
        }`}
      >
        {/* NAVBAR CONTAINER */}
        <div
          className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "bg-black/70 border-purple-500/20 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              : "bg-black/20 border-white/5 backdrop-blur-md"
          }`}
        >
          {/* NAVBAR CONTENT */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3">

            {/* ========================================
                LOGO
            ======================================== */}
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3"
            >
              {/* Logo Icon */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20 overflow-hidden">
                <span className="text-white font-black text-sm relative z-10">
                  H
                </span>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block text-left">
                <p className="font-bold tracking-wide text-white leading-none">
                  HIMAUNTIKA
                </p>

                <p className="text-[10px] text-purple-300 mt-1 tracking-[0.2em]">
                  UNIS TANGERANG
                </p>
              </div>
            </button>

            {/* ========================================
                DESKTOP NAVIGATION
            ======================================== */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {/* Active Background */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-purple-500/10 border border-purple-500/10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Label */}
                  <span className="relative z-10">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* ========================================
                DESKTOP CTA
            ======================================== */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("join")}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join Us

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>

                {/* Hover Shine */}
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>

            {/* ========================================
                MOBILE MENU BUTTON
            ======================================== */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-purple-500/20 bg-purple-500/10 text-white"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ========================================
          MOBILE MENU
      ======================================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl md:hidden"
          >
            {/* Mobile Menu Content */}
            <div className="flex flex-col h-full pt-28 px-6">

              {/* Navigation Label */}
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">
                Navigation
              </p>

              {/* Navigation Items */}
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-between py-5 border-b border-white/10 text-left"
                  >
                    {/* Item Label */}
                    <span
                      className={`text-2xl font-semibold ${
                        activeSection === item.id
                          ? "text-purple-400"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={22}
                      className="text-gray-500"
                    />
                  </motion.button>
                ))}
              </div>

              {/* ========================================
                  MOBILE CTA
              ======================================== */}
              <div className="mt-auto pb-10">
                <button
                  onClick={() => scrollToSection("join")}
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 text-white font-semibold shadow-lg shadow-purple-900/30"
                >
                  Join HIMAUNTIKA →
                </button>

                <p className="text-center text-xs text-gray-500 mt-5">
                  Technology • Community • Future
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}