import Image from "next/image";
import { motion } from "framer-motion";

function VerifiedBadge() {
  return (
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 24 24"
        className="drop-shadow-lg"
      >
        <circle cx="12" cy="12" r="10" fill="#1D9BF0" />
        <path
          fill="white"
          d="M10.6 13.8l-2.1-2.1L7 13.2l3.6 3.6 6-6-1.5-1.5z"
        />
      </svg>
    </div>
  );
}

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
        {/* Card 1 (dengan badge verified) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg"
        >
          {/* Badge di atas card */}
          <VerifiedBadge />

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

        {/* Card 2 (tanpa badge) */}
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
