import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function GallerySection() {
  const images = [
    {
      src: "/images/gallery1.jpg",
      alt: "Presentasi Grafik",
    },
    {
      src: "/images/gallery2.jpg",
      alt: "Tim Ronald Capital",
    },
    {
      src: "/images/gallery3.jpg",
      alt: "Seminar Pasar Crypto",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 px-4 md:px-6 bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-3xl md:text-4xl font-extrabold text-center mb-14 drop-shadow-lg text-purple-300"
      ></motion.h3>

      {/* Grid Gambar */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <Card
            key={idx}
            className="bg-black/50 border border-purple-700 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <CardContent className="p-0">
              <div className="w-full h-72 relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Text / Quote */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-10 text-lg md:text-xl font-semibold"
      >
        <span className="text-white">
          "HIMAUNTIKA hadir bukan untuk menjadi yang terbaik{" "}
          <span className="text-purple-400">
            tapi untuk melahirkan yang terbaik, 
          </span>{" "}
          Karena setiap langkah kecil yang kamu ambil di HIMAUNTIKA adalah
          bagian dari perjalanan besar menuju{" "}
          <span className="text-blue-400">Masa Depan"</span>."
        </span>
      </motion.p>

      <p className="text-center text-gray-400 mt-4 text-sm md:text-base">
        – Himpunan Mahasiswa Unis Teknik Informatika
      </p>
    </section>
  );
}
