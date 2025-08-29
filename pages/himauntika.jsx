import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HimauntikaPage() {
  const [activeSection, setActiveSection] = useState("bph");
  const [activeDivision, setActiveDivision] = useState(null);
  const [activeMenu, setActiveMenu] = useState("home");
  const [showProjekanDetail, setShowProjekanDetail] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "modules", "struktural", "projekan", "join"];
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
    { title: "Belajar Dasar Pemrograman C++", desc: "Modul dasar untuk memahami syntax dan struktur C++.", link: "https://www.youtube.com/watch?v=Rub-JsjMhWY" },
    { title: "Pengantar Database MySQL", desc: "Dasar-dasar penggunaan MySQL untuk mahasiswa TI.", link: "https://www.geeksforgeeks.org/mysql-tutorial/" },
    { title: "Jaringan Komputer untuk Pemula", desc: "Memahami konsep jaringan komputer secara sederhana.", link: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
    { title: "Dasar-Dasar IoT dengan ESP32", desc: "Pengenalan Internet of Things menggunakan ESP32.", link: "https://randomnerdtutorials.com/getting-started-with-esp32/" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950 text-white">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4 md:p-6 bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-purple-300">HIMAUNTIKA</h1>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-2 md:mt-0 justify-center">
          {[
            { id: "home", label: "Home" },
            { id: "modules", label: "Modul" },
            { id: "struktural", label: "Struktural" },
            { id: "projekan", label: "Projekan" },
            { id: "join", label: "Bergabung" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative pb-1 text-sm md:text-base transition-colors duration-300 ${
                activeMenu === item.id ? "text-purple-400 font-semibold" : "hover:text-purple-400"
              }`}
            >
              {item.label}
              {activeMenu === item.id && (
                <motion.span layoutId="underline" className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* --- Jika user klik Lihat Selengkapnya --- */}
      {showProjekanDetail ? (
        <section id="projekan-detail" className="py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-300">Koleksi Projekan HIMAUNTIKA</h3>
              <Button onClick={() => setShowProjekanDetail(false)} className="bg-red-600 hover:bg-red-700">Keluar</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Contoh projekan */}
              <Card className="bg-black/40 border border-purple-700">
                <CardContent className="p-4 text-center">
                  <img src="/images/projek1.jpg" alt="Projek 1" className="w-full h-40 object-cover rounded-lg mb-3" />
                  <h4 className="text-purple-300 font-semibold">Smart Home IoT</h4>
                  <p className="text-xs text-gray-400">Projek otomatisasi rumah berbasis IoT.</p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border border-purple-700">
                <CardContent className="p-4 text-center">
                  <video controls className="w-full h-40 rounded-lg mb-3">
                    <source src="/videos/projek2.mp4" type="video/mp4" />
                  </video>
                  <h4 className="text-purple-300 font-semibold">Line Follower Robot</h4>
                  <p className="text-xs text-gray-400">Robot mengikuti garis menggunakan sensor.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* --- Projekan awal (tetap ada) + tombol lihat selengkapnya --- */}
          <section id="projekan" className="py-16 md:py-20 px-4 md:px-6 bg-black/40">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center order-1 md:order-none">
                <img src="/images/projekan.jpg" alt="Projekan IoT & Robotic" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Projek IoT & Robotic di HIMAUNTIKA</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed" style={{ textAlign: "justify" }}>
                  HIMAUNTIKA tidak hanya menjadi wadah belajar dan berbagi materi, tetapi juga tempat untuk berkarya melalui projek nyata di bidang
                  <span className="font-semibold text-purple-300"> Internet of Things (IoT) dan Robotics</span>. Kami sering membuat projek mulai dari perangkat cerdas sederhana hingga sistem otomatisasi yang bermanfaat. Tujuannya bukan hanya untuk mengasah keterampilan teknis, tetapi juga membangun budaya kolaborasi, kreativitas, dan inovasi.
                </p>
                <Button onClick={() => setShowProjekanDetail(true)} className="mt-6 bg-purple-600 hover:bg-purple-700">
                  Lihat Selengkapnya
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md py-6 text-center text-gray-400 text-sm md:text-base">
        <p>© 2025 HIMAUNTIKA - Universitas Islam Syekh Yusuf</p>
      </footer>
    </div>
  );
}
