import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

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
    const sections = ["home", "modules", "struktural", "kenapa", "projekan", "events", "join"];
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
    { role: "Ketua Himpunan", name: "Naza Salsabila Putri", img: "/images/nazaa.jpg" },
    { role: "Sekretaris", name: "Nabila Vidia Putri", img: "/images/nabila.jpg" },
    { role: "Bendahara", name: "Layyinatus Syifa", img: "/images/sipaa.jpg" },
    { role: "Koor Umum", name: "Lutfi Azami Kusuma", img: "/images/azam.jpg" },
  ];

  const divisions = {
    pendidikan: [
      { role: "Koordinator Pendidikan", name: "Agus Nugrohojati", img: "/images/agus.jpg" },
      { role: "Anggota", name: "Muhammad Ikbaar Agassy", img: "/images/ikbaar.jpg" },
      { role: "Anggota", name: "Wanda Sofiah", img: "/images/wanda.jpg" },
      { role: "Anggota", name: "Rizki Adnan Halim", img: "/images/caplang.jpg" },
    ],
    kaderisasi: [
      { role: "Koordinator Kaderisasi", name: "Bisri Sulhi", img: "/images/bisri.jpg" },
      { role: "Anggota", name: "Muhamad Eko Maulana", img: "/images/eko.jpg" },
      { role: "Anggota", name: "Raja Akbar Sanjaini", img: "/images/akbar.jpg" },
      { role: "Anggota", name: "Rulie Pernanda Kesuma", img: "/images/rulie.jpg" },
      { role: "Anggota", name: "Esai Septiana", img: "/images/essai.jpg" },
    ],
    humas: [
      { role: "Koordinator Humas", name: "Chantika Haerul Putri", img: "/images/chantika.jpg" },
      { role: "Anggota", name: "Felix Ando Tokysia", img: "/images/felix.jpg" },
      { role: "Anggota", name: "Nazwa Amelia", img: "/images/amel.jpg" },
    ],
    asset: [
      { role: "Koordinator Asset & Logistik", name: "Nabihi Ramadhani", img: "/images/nabihi.jpg" },
      { role: "Anggota", name: "Zamar Balfas Abdullah", img: "/images/balfas.jpg" },
    ],
  };

  const modules = [
    { title: "Belajar Dasar Pemrograman C++", desc: "Modul dasar untuk memahami syntax dan struktur C++.", link: "https://youtu.be/r4fZPG5N6tk?si=3tvYq6_AK-eiAyis" },
    { title: "Pengantar Database MySQL", desc: "Dasar-dasar penggunaan MySQL untuk mahasiswa TI.", link: "https://youtu.be/xYBclb-sYQ4?si=Vq7OOfO4S0fxDTYL" },
    { title: "Jaringan Komputer untuk Pemula", desc: "Memahami konsep jaringan komputer secara sederhana.", link: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
    { title: "Pemrograman Arduino Untuk Pemula", desc: "Modul Pengenalan Arduino.", link: "https://youtu.be/y2umEZuKdhw?si=1vhYfYwhK-XrejSr" },
  ];

  const projects = [
    { type: "image", src: "/images/koleksi_1.jpg", title: "Projek Himauntika", desc: "dokumentasi projekan iot & arduino." },
    { type: "image", src: "/images/koleksi_2.jpg", title: "Projek Himauntika", desc: "prototype palang parkir otomatis dan lampu otomatis." },
    { type: "image", src: "/images/koleksi_3.jpg", title: "Projek Himauntika", desc: "prototype penyiraman tanah otomatis menggunakan sensor kelembapan." },
    { type: "video", src: "/videos/sensor-hujan.mp4", title: "Prototype Menggunakan Sensor Hujan", desc: "Prototype Menggunakan Sensor Hujan" },
    { type: "video", src: "/videos/sensor-palang.mp4", title: "Prototype palang otomatis", desc: "Prototype Palang Otomatis" },
    { type: "video", src: "/videos/sensor-rfid.mp4", title: "Prototype pintu otomatis menggunakan RFID", desc: "Prototype Pintu Otomatis Menggunakan RFID" },
    { type: "video", src: "/videos/sensor-ultrasonik.mp4", title: "Prototype Menggunakan Sensor Ultrasonik", desc: "Prototype Menggunakan Sensor Ultrasonik" },
    { type: "video", src: "/videos/sensor-kelembapan.mp4", title: "Prototype penyiraman otomatis menggunakan Sensor kelembapan", desc: "Prototype penyiraman otomatis menggunakan Sensor kelembapan" },
    { type: "video", src: "/videos/sensor-suara.mp4", title: "Prototype Menggunakan Sensor Suara", desc: "Prototype Menggunakan Sensor Suara" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // halaman projekan khusus
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
              <Card key={idx} className="bg-black/40 border border-purple-700 hover:scale-105 transition-transform">
                <CardContent className="p-4 text-center">
                  {proj.type === "image" && (
                    <img src={proj.src} alt={proj.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                  )}
                  {proj.type === "video" && (
                    <video src={proj.src} controls className="w-full h-40 object-cover rounded-lg mb-3" />
                  )}
                  <h4 className="text-sm md:text-base font-semibold text-purple-300">{proj.title}</h4>
                  <p className="text-xs text-gray-400">{proj.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button onClick={() => setShowProjectsPage(false)} className="bg-red-600 hover:bg-red-700 px-6 py-2">
              Keluar
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950 text-white">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4 md:p-6 bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-purple-300">HIMAUNTIKA</h1>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-2 md:mt-0 justify-center">
          {[{ id: "home", label: "Home" }, { id: "modules", label: "Modul" }, { id: "struktural", label: "Struktural" }, { id: "kenapa", label: "Kenapa" }, { id: "projekan", label: "Projek" }, { id: "events", label: "Event" }].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative pb-1 text-sm md:text-base transition-colors duration-300 ${
                activeMenu === item.id ? "text-purple-400 font-semibold" : "hover:text-purple-400"
              }`}
            >
              {item.label}
              {activeMenu === item.id && <motion.span layoutId="underline" className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400 rounded-full" />}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="flex flex-col items-center justify-center py-16 md:py-24 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-purple-300 mb-4">Selamat Datang di Website HIMAUNTIKA</h2>
        <p className="max-w-2xl mb-6 text-sm md:text-base">Wadah mahasiswa Teknik Informatika UNIS untuk belajar, berkembang, dan berorganisasi.</p>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-lg">
          <a id="join" href="https://forms.gle/CtR2TTjDATaFiNVb6" target="_blank">Bergabung Sekarang</a>
        </Button>
      </section>

      {/* Modul */}
      <section id="modules" className="py-16 md:py-20 px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-300 mb-8 md:mb-10">Modul Pembelajaran Teknik Informatika</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <a key={idx} href={mod.link} target="_blank" rel="noopener noreferrer">
              <Card className="bg-black/40 border border-purple-700 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-4 md:p-6 text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-purple-300 mb-2">{mod.title}</h4>
                  <p className="text-xs md:text-sm text-gray-300">{mod.desc}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Struktur */}
      {/* ... struktur organisasi tetap sama ... */}

      {/* 🔥 Timeline Wrapper untuk Kenapa & Projek */}
      <div className="relative border-l-4 border-purple-600 ml-6">
        {/* Kenapa */}
        <div className="relative mb-16">
          <div className="absolute -left-[34px] top-2 bg-purple-600 rounded-full p-1">
            <CheckCircle className="text-blue-400 w-6 h-6" />
          </div>
          <section id="kenapa" className="py-16 md:py-20 px-4 md:px-6 bg-black/40">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Kenapa HIMAUNTIKA?</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
                  Menjadi mahasiswa bukan hanya soal datang kuliah, mencatat, dan pulang. Di Himpunan Mahasiswa Unis Teknik Informatika, kamu akan menemukan ruang untuk berkembang lebih jauh, bukan hanya secara akademik tetapi juga dalam berkarya dan berorganisasi. 
                  Di sini, kita belajar bersama tentang Internet of Things (IoT) dan Robotics, berbagi materi perkuliahan agar semakin paham, sekaligus melatih kepemimpinan serta keterampilan organisasi.
                </p>
              </div>
              <div className="flex justify-center">
                <img src="/images/struktural.jpg" alt="Kenapa HIMAUNTIKA" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
              </div>
            </div>
          </section>
        </div>

        {/* Projek */}
        <div className="relative mb-16">
          <div className="absolute -left-[34px] top-2 bg-purple-600 rounded-full p-1">
            <CheckCircle className="text-blue-400 w-6 h-6" />
          </div>
          <section id="projekan" className="py-16 md:py-20 px-4 md:px-6 bg-black/40">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center order-1 md:order-none">
                <img src="/images/projekan-foto.jpg" alt="Projekan IoT & Robotic" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Projek IoT & Robotic di HIMAUNTIKA</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
                  HIMAUNTIKA tidak hanya menjadi wadah belajar dan berbagi materi, tetapi juga tempat untuk berkarya melalui projek nyata di bidang IoT dan Robotics. Kami sering membuat projek mulai dari perangkat cerdas sederhana hingga sistem otomatisasi yang bermanfaat.
                </p>
                <Button onClick={() => setShowProjectsPage(true)} className="mt-6 bg-purple-600 hover:bg-purple-700">Lihat Selengkapnya</Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Event Section tetap sama */}
      {/* Footer tetap sama */}
    </div>
  );
}
