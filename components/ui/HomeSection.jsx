import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden"
    >
      {/* Background modern interaktif */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-purple-950" />
      <div className="absolute inset-0 overflow-hidden">
        {/* Lingkaran glowing */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-300" />

        {/* Garis diagonal futuristik */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute bottom-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
        />

        {/* Partikel bintang bergerak */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Konten */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-purple-300 drop-shadow-lg mb-4"
        >
          Selamat Datang di Website HIMAUNTIKA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-2xl mb-8 text-sm md:text-lg mx-auto text-gray-300"
        >
          Wadah mahasiswa Teknik Informatika UNIS untuk belajar, berkembang, dan
          berorganisasi.
        </motion.p>

        {/* Gambar Hero */}
        <motion.img
          src="/images/struktural.jpg"
          alt="Hero HIMAUNTIKA"
          className="rounded-3xl shadow-2xl w-full max-w-3xl object-cover border border-purple-700/50 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />

        {/* Tombol Join */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <a
              id="join"
              href="https://forms.gle/beq3D7vJSo7geFgUA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bergabung Sekarang ✨
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
