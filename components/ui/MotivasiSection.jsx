import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MotivasiSection({ quote, author }) {
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

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed"
        >
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
              <span className="font-bold text-purple-300">learn</span>, the more
              you’ll{" "}
              <span className="font-bold text-purple-300">earn</span>.
            </>
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-gray-400 font-semibold"
        >
          {author || "- Warren Buffet"}
        </motion.p>
      </div>
    </section>
  );
}
