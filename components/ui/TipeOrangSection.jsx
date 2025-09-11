import Image from "next/image";
import { motion } from "framer-motion";

export default function TipeOrangSection() {
  return (
    <section
      id="tipeorang"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-black text-white"
    >
      {/* Judul */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        di Dunia ini Ada 2 Tipe Orang,
      </h2>

      {/* Grid Card */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Card 1 dengan custom badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg"
        >
          {/* ✅ Custom SVG Badge */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="#1DA1F2"
                d="M22.25 12c0-1.1.9-2 2-2h.75c1.1 0 2-.9 2-2v-.75c0-1.1-.9-2-2-2h-.75c-1.1 0-2-.9-2-2V2.5c0-1.1-.9-2-2-2h-.75c-1.1 0-2 .9-2 2v.75c0 1.1-.9 2-2 2h-.75c-1.1 0-2 .9-2 2V8c0 1.1.9 2 2 2h.75c1.1 0 2 .9 2 2v.75c0 1.1.9 2 2 2h.75c1.1 0 2-.9 2-2V12z"
              />
              <path
                fill="#fff"
                d="M10.5 13.5l-2-2L7 13l3.5 3.5L17 10.5l-1.5-1.5-5 5z"
              />
            </svg>
          </div>

          <Image
            src="/images/orang-melompat.jpg" // ganti sesuai gambarmu
            alt="Orang"
            width={500}
            height={600}
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex items-end justify-center p-6">
            <p className="text-lg font-semibold">
              Orang Yang Mau Melompat <br /> Untuk Merubah Hidupnya
            </p>
          </div>
        </motion.div>

        {/* Card 2 biasa */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg"
        >
          <Image
            src="/images/berdiam-diri.jpg" // ganti sesuai gambarmu
            alt="Orang yang mau berdiam diri"
            width={500}
            height={600}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex items-end justify-center p-6">
            <p className="text-lg font-semibold">
              Dan Yang Mau <br /> Berdiam Diri.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
