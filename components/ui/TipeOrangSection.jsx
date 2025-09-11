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
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg"
        >
          <Image
            src="/images/lompat.jpg" // ganti sesuai gambarmu
            alt="Orang yang mau melompat"
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

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg"
        >
          <Image
            src="/images/duduk.jpg" // ganti sesuai gambarmu
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
