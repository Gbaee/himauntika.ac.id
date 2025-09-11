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
        {/* Card 1 - Dengan Verified Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg"
        >
          <Image
            src="/images/orang-melompat.jpg" // ganti sesuai gambarmu
            alt="Orang"
            width={500}
            height={600}
            className="w-full h-[400px] object-cover"
          />

          {/* Verified Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
            >
              <path
                fill="#1D9BF0"
                d="M22.5 12c0 1.1-.6 2.1-1.5 2.6.1.3.1.6.1.9 0 1.7-1.3 3-3 3-.3 0-.6 0-.9-.1-.5.9-1.5 1.5-2.6 1.5s-2.1-.6-2.6-1.5c-.3.1-.6.1-.9.1-1.7 0-3-1.3-3-3 0-.3 0-.6.1-.9-.9-.5-1.5-1.5-1.5-2.6s.6-2.1 1.5-2.6c-.1-.3-.1-.6-.1-.9 0-1.7 1.3-3 3-3 .3 0 .6 0 .9.1.5-.9 1.5-1.5 2.6-1.5s2.1.6 2.6 1.5c.3-.1.6-.1.9-.1 1.7 0 3 1.3 3 3 0 .3 0 .6-.1.9.9.5 1.5 1.5 1.5 2.6z"
              />
              <path
                fill="#fff"
                d="M10.6 13.6 9 12l-1.4 1.4L10.6 16l5-5-1.4-1.4z"
              />
            </svg>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex items-end justify-center p-6">
            <p className="text-lg font-semibold">
              Orang Yang Mau Melompat <br /> Untuk Merubah Hidupnya
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
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
