import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MotivasiSection({ quote, author, image }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-purple-950/20 via-black to-purple-900/20 overflow-hidden"
    >
      {/* Border atas tipis */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      {/* Border bawah tipis */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Foto Motivasi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-full max-w-md h-[320px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={image || "/images/motivation-photo.jpg"}
              alt="Motivasi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Teks Motivasi tanpa kotak */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-6 italic">
            {quote || (
              <>
                The{" "}
                <span className="font-bold text-white">
                  best investment
                </span>{" "}
                you can make, is an{" "}
                <span className="font-bold text-purple-300">
                  investment in yourself
                </span>
                ... <br />
                The more you{" "}
                <span className="font-bold text-purple-300">learn</span>, the
                more you’ll{" "}
                <span className="font-bold text-purple-300">earn</span>.
              </>
            )}
          </p>
          <p className="text-lg text-gray-400 font-semibold">
            {author || "- Warren Buffet"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
