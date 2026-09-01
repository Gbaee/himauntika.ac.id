import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkles, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeSection from "@/components/ui/HomeSection";
import MotivasiSection from "@/components/ui/MotivasiSection";
import StatsSection from "@/components/ui/StatsSection";
import WhyHimauntika from "@/components/ui/WhyHimauntika";
import LearningHub from "@/components/ui/LearningHub";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import EventActivities from "@/components/ui/EventActivities";
import JoinCTASection from "@/components/ui/JoinCTASection";
import Footer from "@/components/ui/Footer";
import GallerySection from "@/components/ui/GallerySection";

// Komponen Visi & Misi
function VisiMisiSection() {
  const missions = [
    "Membantu kemajuan sistem komputerisasi Fakultas Teknik Program Studi Informatika di UNIS Tangerang",

    "Membangkitkan mental dan kemampuan terpendam yang dimiliki mahasiswa Teknik Informatika guna membangun mereka agar menjadi pribadi yang mandiri.",

    "Menyelenggarakan perkumpulan belajar dalam bidang akademik Program Studi Teknik Informatika guna menciptakan mahasiswa Teknik Informatika yang cerdas.",

    "Menyiapkan sumber daya manusia yang berkualitas di bidang teknologi informatika.",

    "Menghasilkan generasi muda yang terampil, berkualitas, mandiri, dan berwawasan luas.",

    "Membuat program yang sesuai dengan identitas dan asas organisasi serta berguna untuk mencapai tujuan dalam menciptakan mahasiswa dan mahasiswi Program Studi Teknik Informatika yang dapat berkreativitas dalam bidang akademik Teknik Informatika.",
  ];

  return (
    <section
      id="visi-misi"
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Purple ambient glow */}
        <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-purple-700/20 rounded-full blur-[130px]" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[130px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

            <span className="text-xs md:text-sm text-purple-300 font-medium tracking-wide">
              OUR PURPOSE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">

            Visi &{" "}

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              Misi
            </span>

          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Setiap langkah HIMAUNTIKA berawal dari tujuan yang jelas.
            Kami membangun ruang untuk belajar, berkembang, berkolaborasi,
            dan menciptakan perubahan melalui teknologi.
          </p>

        </motion.div>


        {/* =====================================================
            OUR VISION
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-purple-600/10 blur-3xl rounded-[40px]" />

          <div className="relative overflow-hidden rounded-[32px] border border-purple-500/30 bg-gradient-to-br from-purple-900/40 via-black/60 to-black/80 backdrop-blur-xl">

            {/* Decorative number */}
            <div className="absolute -right-8 -top-12 text-[180px] md:text-[240px] font-black text-purple-500/[0.04] select-none">
              01
            </div>

            {/* Top line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-transparent" />

            <div className="p-7 md:p-12 lg:p-14">

              {/* Label */}
              <div className="flex items-center gap-3 mb-7">

                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <span className="text-2xl">
                    ✦
                  </span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
                    Our Vision
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Visi HIMAUNTIKA
                  </h3>
                </div>

              </div>


              {/* Vision Quote */}
              <div className="relative max-w-5xl">

                <span className="absolute -left-2 -top-6 text-6xl md:text-8xl text-purple-500/20 font-serif">
                  “
                </span>

                <p className="relative text-lg md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-medium">
                  Meningkatkan kualitas dan kreatifitas mahasiswa khususnya
                  dalam bidang akademik Teknik Informatika guna memajukan
                  sistem komputerisasi di UNIS Tangerang, serta menanamkan
                  jiwa persaudaraan yang dilandaskan dengan iman dan takwa
                  dikalangan mahasiswa Teknik Informatika guna melahirkan
                  mahasiswa yang unggul demi memajukan Program Studi Teknik
                  Informatika UNIS Tangerang agar lebih dikenal oleh
                  masyarakat luas.
                </p>

              </div>


              {/* Bottom info */}
              <div className="flex flex-wrap items-center gap-3 mt-10">

                <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                  Academic Excellence
                </span>

                <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                  Technology
                </span>

                <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                  Brotherhood
                </span>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            OUR MISSION
        ===================================================== */}

        <div>

          {/* Mission heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >

            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-3">
              Our Mission
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

              <h3 className="text-3xl md:text-4xl font-black text-white">
                What We Stand For
              </h3>

              <p className="text-sm text-gray-500 max-w-md md:text-right">
                Enam langkah utama yang menjadi dasar kami dalam
                mengembangkan mahasiswa dan organisasi.
              </p>

            </div>

          </motion.div>


          {/* Mission Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {missions.map((mission, index) => (

              <motion.div
                key={index}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative"
              >

                <div className="relative h-full min-h-[180px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl p-6 md:p-7 hover:border-purple-500/40 transition-all duration-500">

                  {/* Hover glow */}

                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                  {/* Number */}

                  <div className="relative flex items-start justify-between mb-8">

                    <span className="text-4xl font-black text-white/[0.07] group-hover:text-purple-500/20 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all">
                      ↗
                    </div>

                  </div>


                  {/* Mission */}

                  <p className="relative text-sm md:text-base text-gray-300 leading-relaxed">
                    {mission}
                  </p>


                  {/* Bottom accent */}

                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:w-full transition-all duration-500" />

                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >

          <div className="inline-flex flex-col items-center">

            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-5" />

            <p className="text-sm md:text-base text-gray-500">
              One vision. One mission. One HIMAUNTIKA.
            </p>

            <p className="mt-2 text-purple-400 font-semibold">
              Build • Learn • Collaborate • Innovate
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default function HimauntikaPage() {
  const [activeSection, setActiveSection] = useState("bph");
  const [activeDivision, setActiveDivision] = useState(null);
  const [activeMenu, setActiveMenu] = useState("home");
  const [showProjectsPage, setShowProjectsPage] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      "stats",
      "why",
      "modules",
      "struktural",
      "visi-misi",
    ];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveMenu(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bph = [
    {
      role: "Ketua Himpunan",
      name: "Muhammad Eko Maulana",
      img: "/images/ekoo.JPG",
    },
    {
      role: "Wakil Ketua Himpunan",
      name: "Luthfi Azami Kusuma",
      img: "/images/azamm.JPG",
    },
    {
      role: "Sekretaris",
      name: "Esai Septiana",
      img: "/images/esaii.JPG",
    },
    { role: "Bendahara", name: "Layyinatus Syifa", img: "/images/layyinatus.jpeg" },
    { role: "Koor Umum", name: "Agus Nugrohojati", img: "/images/agus.jpg" },
  ];

  const divisions = {
    pendidikan: [
      {
        role: "Koordinator Pendidikan",
        name: "Muhammad Ikbaar Agassy",
        img: "/images/ikbaar.jpg",
      },
      {
        role: "Anggota",
        name: "Syahdan Pratama",
        img: "/images/syahdan.jpg",
      },
      {
        role: "Anggota",
        name: "Muhammad Bayu Prawira",
        img: "/images/bayu.jpg",
      },
      {
        role: "Anggota",
        name: "Muhammad Azwan W. M.",
        img: "/images/azwan.jpeg",
      },{
        role: "Anggota",
        name: "Dafa Raihan Dwi Aditiya",
        img: "/images/dafa.jpg",
      },{
        role: "Anggota",
        name: "Pragita Fernanda",
        img: "/images/2.jpg",
      },
      { role: "Anggota", name: "Wanda Sofiah", img: "/images/wanda.jpg" },
      {
        role: "Anggota",
        name: "Achmad Prasetyo",
        img: "/images/pras.jpg",
      },
      {
        role: "Anggota",
        name: "Bisri Sulhi",
        img: "/images/bisri.jpg",
      },
      {
        role: "Anggota",
        name: "Sanjaya Putra Ismoyo",
        img: "/images/sanjaya.jpg",
      },
      {
        role: "Anggota",
        name: "Wardah Hamidah",
        img: "/images/wardah.jpg",
      },
      {
        role: "Anggota",
        name: "Bunga Qomarun Nisa",
        img: "/images/bunga.jpg",
      },
    ],
    kaderisasi: [
      {
        role: "Koordinator Kaderisasi",
        name: "Nabihi Ramdhani",
        img: "/images/nabihii.png",
      },
      { role: "Anggota", name: "Eka Ramadhani", img: "/images/eka.jpeg" },
      {
        role: "Anggota",
        name: "Siti Holisatun Nazwa",
        img: "/images/awa.JPG",
      },
      {
        role: "Anggota",
        name: "Perdy Jasti Wijaya",
        img: "/images/perdi.png",
      },
      { role: "Anggota", name: "Ahmad Sonhaji", img: "/images/sonhaji.png" },
      {
        role: "Anggota",
        name: "Nayla Mutia Ifana",
        img: "/images/nayla.jpg",
      },
      {
        role: "Anggota",
        name: "Aulia Rahma Ramdhiany",
        img: "/images/aul.jpeg",
      },
      {
        role: "Anggota",
        name: "Tri Yunita Mahadewi",
        img: "/images/try.JPG",
      },
      {
        role: "Anggota",
        name: "Tri Aditya Gusti Firdaus",
        img: "/images/aditya.jpg",
      },
      {
        role: "Anggota",
        name: "Arlyn Ailsya Zakianie",
        img: "/images/arlyn.jpg",
      },
      {
        role: "Anggota",
        name: "Dhaffa Arrizky Aulia",
        img: "/images/Dhaffa.jpg",
      },
      {
        role: "Anggota",
        name: "Siti Nuraeny",
        img: "/images/Siti Nuraeny.jpg",
      },
      {
        role: "Anggota",
        name: "alattar Rasyid Rusmawan",
        img: "/images/nuraeny.jpg",
      },
    ],
    humas: [
      {
        role: "Koordinator Humas",
        name: "Chantika Haerul Putri",
        img: "/images/cantika.jpg",
      },
      { role: "Anggota", name: "Felix Ando Tokysia", img: "/images/felix.jpg" },
      { role: "Anggota", name: "Nazwa Amelia", img: "/images/amel.jpg" },
      {
        role: "Anggota",
        name: "Ade Nurul Fadhilah",
        img: "/images/ade.jpg",
      },
      {
        role: "Anggota",
        name: "Muhammad Azriel Fachrial",
        img: "/images/azril.jpeg",
      },
      {
        role: "Anggota",
        name: "Ahmad Baihaqi",
        img: "/images/baihaqi.jpg",
      },
      {
        role: "Anggota",
        name: "Akmal Kurniawan",
        img: "/images/akmal.jpg",
      },
      {
        role: "Anggota",
        name: "Najwa Syifa Aulia",
        img: "/images/syifa.jpg",
      },
      {
        role: "Anggota",
        name: "Khalifah Putra Gilang Ramadhan",
        img: "/images/gilang.jpg",
      },
    ],
    asset: [
      {
        role: "Koordinator Asset & Logistik",
        name: "Zamar Balfas Abdullah",
        img: "/images/balfas.jpg",
      },
      {
        role: "Anggota",
        name: "Rulie Pernanda Kesuma",
        img: "/images/rulie.jpg",
      },
      {
        role: "Anggota",
        name: "Arief Trio Dewantoro",
        img: "/images/arif.jpg",
      },
      {
        role: "Anggota",
        name: "Muhammad Syibli Al-ghifari",
        img: "/images/alghifari.jpg",
      },
      {
        role: "Anggota",
        name: "Ryan Maulana",
        img: "/images/ryan.jpg",
      },
      {
        role: "Anggota",
        name: "Al-ghifari Desdi Akbar Manurung",
        img: "/images/desdi.jpg",
      },
    ],
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  //bagian dari section projek
  if (showProjectsPage) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950 text-white">
        <section className="py-16 md:py-20 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-300 text-center mb-8">
            Koleksi Projekan HIMAUNTIKA
          </h2>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            Dokumentasi projek sensor dan IoT Himauntika.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <Card
                key={idx}
                className="bg-black/40 border border-purple-700 hover:scale-105 transition-transform"
              >
                <CardContent className="p-4 text-center">
                  {proj.type === "image" && (
                    <img
                      src={proj.src}
                      alt={proj.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                  )}
                  {proj.type === "video" && (
                    <video
                      src={proj.src}
                      controls
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                  )}
                  {proj.type === "youtube" && (
                    <div className="aspect-w-16 aspect-h-9 mb-3">
                      <iframe
                        src={proj.src}
                        title={proj.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-40 rounded-lg"
                      ></iframe>
                    </div>
                  )}
                  <h4 className="text-sm md:text-base font-semibold text-purple-300">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-gray-400">{proj.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setShowProjectsPage(false)}
              className="bg-red-600 hover:bg-red-700 px-6 py-2"
            >
              Keluar
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950 text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyHimauntika />
      <LearningHub />
      <ProjectShowcase />
      <EventActivities />

      {/* Struktur */}
      {/* =====================================================
    ORGANIZATION / STRUKTUR HIMAUNTIKA
===================================================== */}

      <section
        id="struktural"
        className="relative py-24 px-4 md:px-6 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[-150px] w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-[-150px] w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px]" />

          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-300 text-xs md:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              OUR ORGANIZATION
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Struktur{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                HIMAUNTIKA
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Kenali orang-orang di balik HIMAUNTIKA. Bersama dalam satu
              struktur, satu visi, dan satu semangat untuk membangun mahasiswa
              Teknik Informatika yang kreatif, inovatif, dan berdaya saing.
            </p>
          </motion.div>

          {/* ================= BPH ================= */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-400 text-lg">♛</span>
              </div>

              <div>
                <p className="text-xs text-purple-400 uppercase tracking-[0.25em] font-semibold">
                  Leadership
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Badan Pengurus Harian
                </h3>
              </div>
            </div>

            {/* BPH Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {bph.map((person, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl group-hover:border-purple-500/50 transition-all duration-500">
                    {/* Top Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-600/20 to-transparent" />

                    <div className="relative p-6">
                      {/* Photo */}
                      <div className="relative w-28 h-28 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl group-hover:bg-purple-500/50 transition-all" />

                        <img
                          src={person.img}
                          alt={person.name}
                          className="relative w-full h-full rounded-full object-cover border-2 border-purple-500/50 group-hover:border-purple-400 transition-all duration-500"
                        />

                        {/* Online indicator */}
                        <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-black" />
                      </div>

                      {/* Role */}
                      <p className="text-center text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">
                        {person.role}
                      </p>

                      {/* Name */}
                      <h4 className="text-center text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {person.name}
                      </h4>

                      {/* Small divider */}
                      <div className="w-10 h-[2px] bg-purple-500 mx-auto mt-4 opacity-50 group-hover:w-16 transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= DIVISI ================= */}
          <div>
            {/* Section title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-400 text-lg">◈</span>
              </div>

              <div>
                <p className="text-xs text-purple-400 uppercase tracking-[0.25em] font-semibold">
                  Departments
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Divisi HIMAUNTIKA
                </h3>
              </div>
            </div>

            {/* Division Cards */}
            {!activeDivision && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {Object.keys(divisions).map((div, idx) => (
                  <motion.div
                    key={div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.1,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    onClick={() => setActiveDivision(div)}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-full min-h-[260px] rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden p-6 hover:border-purple-500/50 transition-all duration-500">
                      {/* Glow */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/40 transition-all" />

                      {/* Number */}
                      <div className="relative flex justify-between items-start mb-10">
                        <span className="text-4xl font-black text-white/10 group-hover:text-purple-500/20 transition-colors">
                          0{idx + 1}
                        </span>

                        <div className="w-10 h-10 rounded-xl border border-purple-500/20 bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:rotate-12 transition-transform">
                          →
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h4 className="text-xl font-bold text-white mb-3 capitalize group-hover:text-purple-300 transition-colors">
                          {div === "asset"
                            ? "Asset & Logistik"
                            : `Divisi ${div}`}
                        </h4>

                        <p className="text-sm text-gray-400 leading-relaxed">
                          Divisi yang berperan dalam menjalankan program,
                          mengembangkan potensi anggota, serta mendukung
                          aktivitas HIMAUNTIKA.
                        </p>
                      </div>

                      {/* Bottom */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {divisions[div].length} Anggota
                        </span>

                        <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Lihat anggota →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ================= DETAIL DIVISI ================= */}

            <AnimatePresence mode="wait">
              {activeDivision && (
                <motion.div
                  key={activeDivision}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Header detail */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
                    <div>
                      <p className="text-xs text-purple-400 uppercase tracking-[0.25em] mb-2">
                        Department
                      </p>

                      <h3 className="text-3xl md:text-4xl font-black text-white capitalize">
                        {activeDivision === "asset"
                          ? "Asset & Logistik"
                          : `Divisi ${activeDivision}`}
                      </h3>
                    </div>

                    <Button
                      onClick={() => setActiveDivision(null)}
                      className="bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 transition-all rounded-xl"
                    >
                      ← Kembali ke Divisi
                    </Button>
                  </div>

                  {/* Member grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {divisions[activeDivision].map((anggota, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.08,
                        }}
                        whileHover={{
                          y: -8,
                        }}
                        className="group"
                      >
                        <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6 overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                          {/* Background glow */}
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all" />

                          {/* Image */}
                          <div className="relative w-24 h-24 mx-auto mb-5">
                            <img
                              src={anggota.img}
                              alt={anggota.name}
                              className="w-full h-full object-cover rounded-full border border-purple-500/40 group-hover:border-purple-400 transition-all"
                            />
                          </div>

                          {/* Role */}
                          <p className="relative text-center text-xs uppercase tracking-wider text-purple-400 mb-2">
                            {anggota.role}
                          </p>

                          {/* Name */}
                          <h4 className="relative text-center font-semibold text-white">
                            {anggota.name}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <GallerySection />
      <VisiMisiSection />
      <MotivasiSection
        quote="HIMAUNTIKA bukan hanya organisasi, tapi ruang untuk menemukan versi terbaik dari dirimu."
        author="- Ketua Himpunan"
        image="/images/ekobg.png"
      />
      <JoinCTASection />
      <Footer />
    </div>
  );
}
