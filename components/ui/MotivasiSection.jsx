import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";

export default function MotivasiSection({
  quote = "Learn today. Build tomorrow. Inspire the future.",
  author = "- HIMAUNTIKA",
  image = "/images/agus.jpg",
}) {
  return (
    <section
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[140px]" />

        {/* Side glow */}
        <div className="absolute top-0 left-[-200px] w-[350px] h-[350px] bg-fuchsia-600/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-[-200px] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">

            <Sparkles className="w-3.5 h-3.5 text-purple-400" />

            <span className="text-xs text-purple-300 tracking-[0.2em] uppercase font-medium">
              A Message From HIMAUNTIKA
            </span>

          </div>

        </motion.div>


        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Outer glow */}

          <div className="absolute inset-0 bg-purple-600/10 blur-3xl rounded-[40px]" />


          {/* Card */}

          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.025] backdrop-blur-xl">

            {/* Top gradient line */}

            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />


            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">

              {/* =================================================
                  IMAGE SIDE
              ================================================= */}

              <div className="relative min-h-[360px] lg:min-h-[500px] overflow-hidden">

                {/* Image */}

                <img
                  src={image}
                  alt="HIMAUNTIKA"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Purple overlay */}

                <div className="absolute inset-0 bg-purple-900/10 mix-blend-screen" />


                {/* Floating badge */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md"
                >

                  <span className="text-xs text-gray-300">
                    ✦ Keep Growing
                  </span>

                </motion.div>


                {/* Image caption */}

                <div className="absolute bottom-7 left-7 right-7">

                  <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-2">
                    HIMAUNTIKA
                  </p>

                  <p className="text-white font-semibold text-lg">
                    Learn. Create. Inspire.
                  </p>

                </div>

              </div>


              {/* =================================================
                  QUOTE SIDE
              ================================================= */}

              <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">

                {/* Decorative quote */}

                <Quote className="absolute top-8 right-8 md:top-12 md:right-12 w-20 h-20 text-purple-500/[0.08]" />


                {/* Small label */}

                <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-6">
                  Daily Motivation
                </p>


                {/* Quote */}

                <div className="relative">

                  <span className="absolute -left-3 -top-8 text-6xl md:text-8xl font-serif text-purple-500/20">
                    “
                  </span>

                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                    }}
                    className="relative text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
                  >

                    <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                      {quote}
                    </span>

                  </motion.h2>

                </div>


                {/* Author */}

                <div className="flex items-center gap-3 mt-8">

                  <div className="w-10 h-[2px] bg-purple-500" />

                  <p className="text-sm text-gray-400">
                    {author}
                  </p>

                </div>


                {/* Description */}

                <p className="mt-8 text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
                  Setiap proses memiliki tantangan. Terus belajar,
                  berani mencoba, dan jangan takut untuk menciptakan
                  sesuatu yang baru. Karena langkah kecil hari ini
                  bisa menjadi awal dari sesuatu yang besar di masa depan.
                </p>


                {/* CTA */}

                <div className="mt-10">

                  <motion.a
                    href="#join"
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-purple-600/10 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >

                    <span className="text-sm font-semibold">
                      Be Part of The Journey
                    </span>

                    <ArrowUpRight
                      className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />

                  </motion.a>

                </div>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-14 text-center"
        >

          <p className="text-xs md:text-sm text-gray-500">
            Because technology grows faster when people grow together.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">

            <span className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500" />

            <span className="text-purple-400 text-xs">
              HIMAUNTIKA
            </span>

            <span className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500" />

          </div>

        </motion.div>

      </div>
    </section>
  );
}