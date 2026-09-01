import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export default function JoinCTASection() {
  return (
    <section
      id="join"
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[150px]" />

        {/* Left glow */}
        <div className="absolute top-0 left-[-200px] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

        {/* Right glow */}
        <div className="absolute bottom-0 right-[-200px] w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px]" />

        {/* Technology grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:50px_50px]" />

      </div>


      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-[12%] text-purple-400"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-[15%] text-purple-400 text-xl"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-[20%] text-fuchsia-400"
      >
        •
      </motion.div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Main CTA Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >

          {/* Outer glow */}

          <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-[50px]" />


          {/* Card */}

          <div className="relative overflow-hidden rounded-[40px] border border-purple-500/30 bg-gradient-to-br from-purple-950/80 via-black/80 to-black backdrop-blur-xl">

            {/* Top gradient */}

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />


            {/* Decorative circles */}

            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-purple-500/10" />

            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-purple-500/10" />

            <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full border border-purple-500/10" />


            <div className="relative px-6 py-14 md:px-12 md:py-20 lg:px-20 text-center">

              {/* =================================================
                  BADGE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-7"
              >

                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-purple-400 opacity-75 animate-ping" />

                  <span className="relative inline-flex rounded-full w-2 h-2 bg-purple-400" />
                </span>

                <span className="text-xs md:text-sm text-purple-300 font-medium tracking-[0.2em] uppercase">
                  Join The Community
                </span>

              </motion.div>


              {/* =================================================
                  HEADING
              ================================================= */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight"
              >

                Ready to{" "}

                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                  Build
                </span>

                ?

                <br />

                <span className="text-white">
                  Your Future Starts Here.
                </span>

              </motion.h2>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="max-w-2xl mx-auto mt-7 text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Jangan hanya menjadi penonton perkembangan teknologi.
                Bergabung bersama HIMAUNTIKA, temukan lingkungan untuk
                belajar, berkolaborasi, mengembangkan kemampuan, dan
                menciptakan karya yang nyata.
              </motion.p>


              {/* =================================================
                  CTA BUTTONS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
              >

                {/* Primary CTA */}

                <motion.a
                  href="mailto:himauntika@unis.ac.id?subject=Ingin Bergabung dengan HIMAUNTIKA"
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-600/20 transition-all duration-300"
                >

                  <Users className="w-5 h-5" />

                  <span>
                    Join HIMAUNTIKA
                  </span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

                </motion.a>


                {/* Secondary CTA */}

                <motion.a
                  href="#projekan"
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-white font-semibold transition-all duration-300"
                >

                  <span>
                    Explore Our Projects
                  </span>

                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                </motion.a>

              </motion.div>


              {/* =================================================
                  MINI STATS
              ================================================= */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-14">

                {/* Stat 1 */}

                <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.025] border border-white/5">

                  <Code2 className="w-5 h-5 text-purple-400" />

                  <div className="text-left">

                    <p className="text-sm font-semibold text-white">
                      Technology
                    </p>

                    <p className="text-xs text-gray-500">
                      Learn & Build
                    </p>

                  </div>

                </div>


                {/* Stat 2 */}

                <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.025] border border-white/5">

                  <Users className="w-5 h-5 text-purple-400" />

                  <div className="text-left">

                    <p className="text-sm font-semibold text-white">
                      Community
                    </p>

                    <p className="text-xs text-gray-500">
                      Grow Together
                    </p>

                  </div>

                </div>


                {/* Stat 3 */}

                <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.025] border border-white/5">

                  <Zap className="w-5 h-5 text-purple-400" />

                  <div className="text-left">

                    <p className="text-sm font-semibold text-white">
                      Innovation
                    </p>

                    <p className="text-xs text-gray-500">
                      Create Impact
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  BOTTOM MESSAGE
              ================================================= */}

              <div className="flex items-center justify-center gap-3 mt-12">

                <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-purple-500" />

                <Sparkles className="w-4 h-4 text-purple-400" />

                <span className="text-xs md:text-sm text-gray-500">
                  Learn • Create • Collaborate • Innovate
                </span>

                <Sparkles className="w-4 h-4 text-purple-400" />

                <span className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-purple-500" />

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}