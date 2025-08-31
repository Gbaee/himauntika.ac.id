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
    const sections = ["home", "modules", "struktural", "join"];
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
      name: "Naza Salsabila Putri",
      img: "/images/nazaa.jpg",
    },
    {
      role: "Sekretaris",
      name: "Nabila Vidia Putri",
      img: "/images/nabila.jpg",
    },
    { role: "Bendahara", name: "Layyinatus Syifa", img: "/images/sipaa.jpg" },
    { role: "Koor Umum", name: "Lutfi Azami Kusuma", img: "/images/azam.jpg" },
  ];

  const divisions = {
    pendidikan: [
      {
        role: "Koordinator Pendidikan",
        name: "Agus Nugrohojati",
        img: "/images/agus.jpg",
      },
      {
        role: "Anggota",
        name: "Muhammad Ikbaar Agassy",
        img: "/images/ikbaar.jpg",
      },
      { role: "Anggota", name: "Wanda Sofiah", img: "/images/wanda.jpg" },
      {
        role: "Anggota",
        name: "Rizki Adnan Halim",
        img: "/images/caplang.jpg",
      },
    ],
    kaderisasi: [
      {
        role: "Koordinator Kaderisasi",
        name: "Bisri Sulhi",
        img: "/images/bisri.jpg",
      },
      { role: "Anggota", name: "Muhamad Eko Maulana", img: "/images/eko.jpg" },
      {
        role: "Anggota",
        name: "Raja Akbar Sanjaini",
        img: "/images/akbar.jpg",
      },
      {
        role: "Anggota",
        name: "Rulie Pernanda Kesuma",
        img: "/images/rulie.jpg",
      },
      { role: "Anggota", name: "Esai Septiana", img: "/images/essai.jpg" },
    ],
    humas: [
      {
        role: "Koordinator Humas",
        name: "Chantika Haerul Putri",
        img: "/images/chantika.jpg",
      },
      { role: "Anggota", name: "Felix Ando Tokysia", img: "/images/felix.jpg" },
      { role: "Anggota", name: "Nazwa Amelia", img: "/images/amel.jpg" },
    ],
    asset: [
      {
        role: "Koordinator Asset & Logistik",
        name: "Nabihi Ramadhani",
        img: "/images/nabihi.jpg",
      },
      {
        role: "Anggota",
        name: "Zamar Balfas Abdullah",
        img: "/images/balfas.jpg",
      },
    ],
  };

  const modules = [
    {
      title: "Belajar Dasar Pemrograman C++",
      desc: "Modul dasar untuk memahami syntax dan struktur C++.",
      link: "https://youtu.be/r4fZPG5N6tk?si=3tvYq6_AK-eiAyis",
    },
    {
      title: "Pengantar Database MySQL",
      desc: "Dasar-dasar penggunaan MySQL untuk mahasiswa TI.",
      link: "https://youtu.be/xYBclb-sYQ4?si=Vq7OOfO4S0fxDTYL",
    },
    {
      title: "Jaringan Komputer untuk Pemula",
      desc: "Memahami konsep jaringan komputer secara sederhana.",
      link: "https://www.youtube.com/watch?v=qiQR5rTSshw",
    },
    {
      title: "Pemrograman Arduino Untuk Pemula",
      desc: "Modul Pengenalan Arduino.",
      link: "https://youtu.be/y2umEZuKdhw?si=1vhYfYwhK-XrejSr",
    },
  ];

  const projects = [
    {
      type: "image",
      src: "/images/koleksi_1.jpg",
      title: "Projek Himauntika",
      desc: "dokumentasi projekan iot & arduino.",
    },
    {
      type: "image",
      src: "/images/koleksi_2.jpg",
      title: "Projek Himauntika",
      desc: "prototype palang parkir otomatis dan lampu otomatis.",
    },
    {
      type: "image",
      src: "/images/koleksi_3.jpg",
      title: "Projek Himauntika",
      desc: "prototype penyiraman tanah otomatis menggunakan sensor kelembapan.",
    },
    {
      type: "video",
      src: "/videos/sensor-hujan.mp4",
      title: "Prototype Menggunakan Sensor Hujan",
      desc: "Prototype Menggunakan Sensor Hujan",
    },
    {
      type: "video",
      src: "/videos/sensor-palang.mp4",
      title: "Prototype palang otomatis",
      desc: "Prototype Palang Otomatis",
    },
    {
      type: "video",
      src: "/videos/sensor-rfid.mp4",
      title: "Prototype pintu otomatis menggunakan RFID",
      desc: "Prototype Pintu Otomatis Menggunakan RFID",
    },
    {
      type: "video",
      src: "/videos/sensor-ultrasonik.mp4",
      title: "Prototype Menggunakan Sensor Ultrasonik",
      desc: "Prototype Menggunakan Sensor Ultrasonik",
    },
    {
      type: "video",
      src: "/videos/sensor-kelembapan.mp4",
      title: "Prototype penyiraman otomatis menggunakan Sensor kelembapan",
      desc: "Prototype penyiraman otomatis menggunakan Sensor kelembapan",
    },
    {
      type: "video",
      src: "/videos/sensor-suara.mp4",
      title: "Prototype Menggunakan Sensor Suara",
      desc: "Prototype Menggunakan Sensor Suara",
    },
  ];

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
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4 md:p-6 bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-purple-300">
          HIMAUNTIKA
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-2 md:mt-0 justify-center">
          {[
            { id: "home", label: "Home" },
            { id: "modules", label: "Modul" },
            { id: "struktural", label: "struktural" },
            { id: "join", label: "Bergabung" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative pb-1 text-sm md:text-base transition-colors duration-300 ${
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
        className="flex flex-col items-center justify-center py-16 md:py-24 px-4 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-purple-300 mb-4">
          Selamat Datang di Website HIMAUNTIKA
        </h2>
        <p className="max-w-2xl mb-6 text-sm md:text-base">
          Wadah mahasiswa Teknik Informatika UNIS untuk belajar, berkembang, dan
          berorganisasi.
        </p>
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-lg"
        >
          <a
            id="join"
            href="https://forms.gle/CtR2TTjDATaFiNVb6"
            target="_blank"
          >
            Bergabung Sekarang
          </a>
        </Button>
      </section>

      {/* Modul */}
      <section id="modules" className="py-16 md:py-20 px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-300 mb-8 md:mb-10">
          Modul Pembelajaran Teknik Informatika
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <a
              key={idx}
              href={mod.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="bg-black/40 border border-purple-700 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-4 md:p-6 text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-purple-300 mb-2">
                    {mod.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300">{mod.desc}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Struktur */}
      <section id="struktural" className="py-16 md:py-20 px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-300 mb-8 md:mb-10">
          Struktur Organisasi
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                      className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-base md:text-lg font-semibold text-purple-300">
                      {person.role}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">
                      {person.name}
                    </p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.keys(divisions).map((div) => (
                    <Card
                      key={div}
                      className="bg-black/50 border border-purple-700 p-6 text-center hover:scale-105 transition-transform"
                    >
                      <h4 className="text-lg md:text-xl font-semibold text-purple-300 mb-4">
                        {div.charAt(0).toUpperCase() + div.slice(1)}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 mb-4">
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
                    <Card className="bg-black/60 border border-purple-700 p-4 md:p-6">
                      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <h4 className="text-xl md:text-2xl font-bold text-purple-300 text-center md:text-left">
                          Divisi{" "}
                          {activeDivision.charAt(0).toUpperCase() +
                            activeDivision.slice(1)}
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
                                className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full mb-2 object-cover"
                              />
                              <h4 className="text-sm md:text-base font-semibold text-purple-300">
                                {anggota.role}
                              </h4>
                              <p className="text-xs md:text-sm text-gray-300">
                                {anggota.name}
                              </p>
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

      {/* Kenapa HIMAUNTIKA */}
      <section id="kenapa" className="py-16 md:py-20 px-4 md:px-6 bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Teks di kiri */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">
              Kenapa HIMAUNTIKA?
            </h3>
            <p
              className="text-sm md:text-base text-gray-300 leading-relaxed text-justify"
              style={{ textAlign: "justify" }}
            >
              Menjadi mahasiswa bukan hanya soal datang kuliah, mencatat, dan
              pulang. Di Himpunan Mahasiswa Unis Teknik Informatika, kamu akan
              menemukan ruang untuk berkembang lebih jauh, bukan hanya secara
              akademik tetapi juga dalam berkarya dan berorganisasi. Di sini,
              kita belajar bersama tentang Internet of Things (IoT) dan
              Robotics, berbagi materi perkuliahan agar semakin paham, sekaligus
              melatih kepemimpinan serta keterampilan organisasi. Himpunan ini
              menjadi wadah bagi mahasiswa IT untuk tumbuh, berkolaborasi, dan
              menjadikan ide-ide besar menjadi nyata. Bergabunglah dengan kami,
              karena bersama-sama kita bisa membuktikan bahwa mahasiswa Teknik
              Informatika UNIS mampu melahirkan generasi yang kreatif, inovatif,
              dan siap menghadapi tantangan masa depan.
            </p>
          </div>

          {/* Gambar di kanan */}
          <div className="flex justify-center">
            <img
              src="/images/struktural.jpg"
              alt="Kenapa HIMAUNTIKA"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projekan Section */}
      <section
        id="projekan"
        className="py-16 md:py-20 px-4 md:px-6 bg-black/40"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Gambar di kiri */}
          <div className="flex justify-center order-1 md:order-none">
            <img
              src="/images/projekan-foto.jpg"
              alt="Projekan IoT & Robotic"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Teks di kanan */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">
              Projek IoT & Robotic di HIMAUNTIKA
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
              HIMAUNTIKA tidak hanya menjadi wadah belajar dan berbagi materi,
              tetapi juga tempat untuk berkarya melalui projek nyata di bidang
              <span className="font-semibold text-purple-300">
                {" "}
                Internet of Things (IoT) dan Robotics
              </span>
              . Kami sering membuat projek mulai dari perangkat cerdas sederhana
              hingga sistem otomatisasi yang bermanfaat. Dokumentasi lengkap
              projek ini bisa kamu lihat di halaman khusus.
            </p>
            <Button
              onClick={() => setShowProjectsPage(true)}
              className="mt-6 bg-purple-600 hover:bg-purple-700"
            >
              Lihat Selengkapnya
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE BARU (Events) START ===== */}
      <section id="events" className="py-16 md:py-20 px-4 md:px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-300 text-center mb-12">
            Event & Kegiatan HIMAUNTIKA
          </h3>

          {/* Garis tipis di tengah */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px bg-purple-700/70 -translate-x-1/2 pointer-events-none" />

            {[
              {
                year: "2025",
                title: "Buka Puasa Bersama 2025",
                desc: "Buka Puasa Bersama HIMAUNTIKA bukan sekadar makan bareng, tapi juga jadi momen hangat untuk mempererat silaturahmi, berbagi cerita, dan menumbuhkan rasa kebersamaan di antara mahasiswa. Lewat kegiatan ini, kita belajar arti kebersamaan, kepedulian, dan persaudaraan yang sesungguhnya.",
                img: "/images/buka-puasa.jpg",
              },
              {
                year: "2025",
                title: "Workshop Arduino",
                desc: "Pelatihan langsung tentang Arduino dan berbagai macam jenis sensor.",
                img: "/images/workshop.jpg",
              },
              {
                year: "2025",
                title: "Seminar Go Digital",
                desc: "Seminar terbuka mengenai perkembangan Artificial Intelligence dan penerapannya di industri.",
                img: "/images/seminar.jpg",
              },
              {
                year: "2025",
                title: "Futsal bareng HIMAUNTIKA",
                desc: "Main futsal bareng HIMAUNTIKA bukan cuma soal ngejar bola, tapi juga ngejar kebersamaan. Lewat sportivitas dan semangat tim, kita belajar kerja sama, saling support, dan pastinya seru-seruan bareng di luar kelas.",
                img: "/images/futsal.jpg",
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative md:grid md:grid-cols-2 gap-6 items-center mb-14"
              >
                {/* Icon centang biru di tengah */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 md:top-1 z-10">
                  <div className="bg-black rounded-full border border-purple-700 p-1 shadow">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Kartu event – ditempatkan bergantian kiri/kanan */}
                <div
                  className={
                    idx % 2 === 0
                      ? "md:pr-10"
                      : "md:order-2 md:pl-10"
                  }
                >
                  <Card className="bg-black/50 border border-purple-700 hover:scale-[1.02] transition-transform">
                    <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Text */}
                      <div className={idx % 2 === 0 ? "md:text-right" : "md:text-left"}>
                        <span className="text-sm text-gray-400">{event.year}</span>
                        <h4 className="text-lg md:text-xl font-semibold text-purple-300 mb-2">
                          {event.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                          {event.desc}
                        </p>
                      </div>

                      {/* Image */}
                      <div className="flex justify-center">
                        <Image
                          src={event.img}
                          alt={event.title}
                          width={400}
                          height={200}
                          className="w-full max-w-sm h-40 object-cover rounded-xl border border-purple-700"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Kolom kosong hanya untuk menjaga grid 2 kolom & alternating */}
                <div className={idx % 2 === 0 ? "" : "md:order-1"} />
              </motion.div>
            ))}
          </div>

          {/* Ajakan */}
          <p className="text-center text-gray-400 mt-12 italic">
            Event berikutnya bisa jadi tempat kamu mulai cerita di HIMAUNTIKA ✨
          </p>
        </div>
      </section>
      {/* ===== TIMELINE BARU (Events) END ===== */}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md py-6 text-center text-gray-400 text-sm md:text-base">
        <p>© 2025 HIMAUNTIKA - Universitas Islam Syekh Yusuf</p>
      </footer>
    </div>
  );
}
