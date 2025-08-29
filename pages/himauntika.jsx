import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HimauntikaPage() {
  const [activeSection, setActiveSection] = useState("bph");
  const [activeDivision, setActiveDivision] = useState(null);
  const [activeMenu, setActiveMenu] = useState("home");
  const [showProjects, setShowProjects] = useState(false);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "modules", "struktural", "join", "projekan"];
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

  const projects = [
    { id: 1, title: "Smart Lamp IoT", category: "IoT", type: "image", src: "/images/projek1.jpg" },
    { id: 2, title: "Line Follower Robot", category: "Robotics", type: "image", src: "/images/projek2.jpg" },
    { id: 3, title: "AI Chatbot", category: "AI", type: "image", src: "/images/projek3.jpg" },
    { id: 4, title: "Home Automation", category: "IoT", type: "video", src: "/videos/projek4.mp4" },
    { id: 5, title: "Humanoid Robot", category: "Robotics", type: "image", src: "/images/projek5.jpg" },
    { id: 6, title: "AI Face Recognition", category: "AI", type: "video", src: "/videos/projek6.mp4" },
    { id: 7, title: "IoT Weather Station", category: "IoT", type: "image", src: "/images/projek7.jpg" },
  ];

  const filteredProjects = category === "All" ? projects : projects.filter((p) => p.category === category);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

      {/* Bagian Projekan */}
      <section id="projekan" className="py-16 md:py-20 px-4 md:px-6 bg-black/40">
        {!showProjects ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center order-1 md:order-none">
              <img src="/images/projekan.jpg" alt="Projekan IoT & Robotic" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Projek IoT & Robotic di HIMAUNTIKA</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
                HIMAUNTIKA tidak hanya menjadi wadah belajar, tetapi juga tempat berkarya melalui projek nyata di bidang <span className="font-semibold text-purple-300">IoT</span>, <span className="font-semibold text-purple-300">Robotics</span>, dan <span className="font-semibold text-purple-300">AI</span>. Klik tombol di bawah untuk melihat dokumentasi projek kami.
              </p>
              <Button onClick={() => setShowProjects(true)} className="mt-6 bg-purple-600 hover:bg-purple-700">Lihat Selengkapnya</Button>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex gap-2">
                {["All", "IoT", "Robotics", "AI"].map((cat) => (
                  <Button key={cat} onClick={() => { setCategory(cat); setCurrentPage(1); }} className={`${category === cat ? "bg-purple-700" : "bg-purple-600 hover:bg-purple-700"}`}>
                    {cat}
                  </Button>
                ))}
              </div>
              <Button onClick={() => { setShowProjects(false); setCategory("All"); setCurrentPage(1); }} className="bg-red-600 hover:bg-red-700">Keluar</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {paginatedProjects.map((project) => (
                <Card key={project.id} className="bg-black/50 border border-purple-700 hover:scale-105 transition-transform">
                  <CardContent className="p-4 text-center">
                    {project.type === "image" ? (
                      <img src={project.src} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                    ) : (
                      <video controls className="w-full h-40 rounded-lg mb-3">
                        <source src={project.src} type="video/mp4" />
                      </video>
                    )}
                    <h4 className="text-base font-semibold text-purple-300">{project.title}</h4>
                    <p className="text-xs text-gray-400">{project.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-2">
              <Button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="bg-purple-600 hover:bg-purple-700">Prev</Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button key={i} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? "bg-purple-700" : "bg-purple-600 hover:bg-purple-700"}`}>
                  {i + 1}
                </Button>
              ))}
              <Button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="bg-purple-600 hover:bg-purple-700">Next</Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
