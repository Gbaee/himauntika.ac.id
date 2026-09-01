"use client";

import { motion } from "framer-motion";
import { Users, Cpu, CalendarDays, Code2 } from "lucide-react";

const stats = [
  {
    value: "48+",
    label: "Anggota Aktif",
    description: "Mahasiswa yang berkembang bersama",
    icon: Users,
  },
  {
    value: "10+",
    label: "Project Teknologi",
    description: "IoT, Arduino & Robotics",
    icon: Cpu,
  },
  {
    value: "5+",
    label: "Event & Kegiatan",
    description: "Belajar, berbagi & berkolaborasi",
    icon: CalendarDays,
  },
  {
    value: "∞",
    label: "Ide & Kreativitas",
    description: "Ruang untuk menciptakan sesuatu",
    icon: Code2,
  },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-20 px-4 md:px-6 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-700/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            HIMAUNTIKA IN NUMBERS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Berkembang Bersama,
            <span className="text-purple-400"> Berkarya Bersama.</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            HIMAUNTIKA menjadi ruang bagi mahasiswa Teknik Informatika untuk
            belajar, berkolaborasi, dan menciptakan karya melalui teknologi.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-purple-800/40 bg-gradient-to-br from-purple-950/40 via-black to-black p-5 md:p-7 overflow-hidden transition-all duration-500 group-hover:border-purple-500/70 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]">
                  
                  {/* Hover glow */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:bg-purple-600/20 transition-all duration-300">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Number */}
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="mt-2 text-sm md:text-base font-semibold text-purple-300">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
