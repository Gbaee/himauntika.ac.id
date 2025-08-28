import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HimauntikaPage() {
  const [activeSection, setActiveSection] = useState("bph");
  const [activeDivision, setActiveDivision] = useState(null);
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "modules", "struktur", "join"];
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
    ],
    kaderisasi: [
      { role: "Koordinator Kaderisasi", name: "Bisri Sulhi", img: "/images/kader1.jpg" },
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
    {
      title: "Belajar Dasar Pemrograman C++",
      desc: "Modul dasar untuk memahami syntax dan struktur C++.",
      link: "https://www.youtube.com/watch?v=Rub-JsjMhWY",
    },
    {
      title: "Pengantar Database MySQL",
      desc: "Dasar-dasar penggunaan MySQL untuk mahasiswa TI.",
      link: "https://www.geeksforgeeks.org/mysql-tutorial/",
    },
    {
      title: "Jaringan Komputer untuk Pemula",
      desc: "Memahami konsep jaringan komputer secara sederhana.",
      link: "https://www.youtube.com/watch?v=qiQR5rTSshw",
    },
    {
      title: "Dasar-Dasar IoT dengan ESP32",
      desc: "Pengenalan Internet of Things menggunakan ESP32.",
      link: "https://randomnerdtutorials.com/getting-started-with-esp32/",
    },
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
      <nav className="flex justify-between items-center p-6 bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-purple-300">HIMAUNTIKA</h1>
        <div className="flex gap-6">
          {[
            { id: "home", label: "Home" },
            { id: "modules", label: "Modul" },
            { id: "struktur", label: "Struktur" },
            { id: "join", label: "Bergabung" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative pb-1 transition-colors duration-300 ${
                activeMenu === item.id
                  ? "text-purple-400 font-semibold"
                  : "hover:text-purple-400"
              }`}
            >
              {item.label}
              {activeMenu === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <h2 className="text-4xl font-bold text-purple-300 mb-4">
          Selamat Datang di Website HIMAUNTIKA
        </h2>
        <p className="max-w-2xl mb-6">
          Wadah mahasiswa Teknik Informatika UNIS untuk belajar, berkembang, dan
          berorganisasi.
        </p>
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl shadow-lg"
        >
          <a
            id="join"
            href="https://forms.gle/your-google-form-link"
            target="_blank"
          >
            Bergabung Sekarang
          </a>
        </Button>
      </section>

      {/* Modul */}
      <section id="modules" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center text-purple-300 mb-10">
          Modul Pembelajaran Teknik Informatika
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <a
              key={idx}
              href={mod.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="bg-black/40 border border-purple-700 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">
                    {mod.title}
                  </h4>
                  <p className="text-sm text-gray-300">{mod.desc}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Struktur */}
      <section id="struktur" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center text-purple-300 mb-10">
          Struktur Organisasi
        </h3>
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={() => setActiveSection("bph")}
            className="bg-purple-700 hover:bg-purple-800"
          >
            BPH
          </Button>
          <Button
            onClick={() => setActiveSection("divisi")}
            className="bg-purple-700 hover:bg-purple-800"
          >
            Divisi
          </Button>
        </div>

        <AnimatePresence>
          {activeSection === "bph" && (
            <motion.div
              key="bph"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {bph.map((person, idx) => (
                <Card
                  key={idx}
                  className="bg-black/40 border border-purple-700"
                >
                  <CardContent className="p-6 text-center">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-lg font-semibold text-purple-300">
                      {person.role}
                    </h4>
                    <p className="text-sm text-gray-400">{person.name}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {activeSection === "divisi" && (
            <motion.div
              key="divisi"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              {!activeDivision && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.keys(divisions).map((div) => (
                    <Card
                      key={div}
                      className="bg-black/50 border border-purple-700 p-6 text-center hover:scale-105 transition-transform"
                    >
                      <h4 className="text-xl font-semibold text-purple-300 mb-4">
                        {div.charAt(0).toUpperCase() + div.slice(1)}
                      </h4>
                      <p className="text-gray-400 mb-4">
                        Divisi {div} berfokus pada kegiatan dan pengembangan
                        sesuai bidangnya di HIMAUNTIKA.
                      </p>
                      <Button
                        onClick={() => setActiveDivision(div)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Lihat Anggota
                      </Button>
                    </Card>
                  ))}
                </div>
              )}

              <AnimatePresence>
                {activeDivision && (
                  <motion.div
                    key="division-detail"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-black/60 border border-purple-700 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-2xl font-bold text-purple-300">
                          Divisi {activeDivision.charAt(0).toUpperCase() + activeDivision.slice(1)}
                        </h4>
                        <Button
                          onClick={() => setActiveDivision(null)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Keluar
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {divisions[activeDivision].map((anggota, idx) => (
                          <Card
                            key={idx}
                            className="bg-black/40 border border-purple-700 hover:scale-105 transition-transform"
                          >
                            <CardContent className="p-4 text-center">
                              <img
                                src={anggota.img}
                                alt={anggota.name}
                                className="w-20 h-20 mx-auto rounded-full mb-2 object-cover"
                              />
                              <h4 className="text-sm font-semibold text-purple-300">
                                {anggota.role}
                              </h4>
                              <p className="text-xs text-gray-300">{anggota.name}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md py-6 text-center text-gray-400">
        <p>© 2025 HIMAUNTIKA - Universitas Islam Syekh Yusuf</p>
      </footer>
    </div>
  );
}
