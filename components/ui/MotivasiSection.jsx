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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-b from-purple-950 via-black/90 to-purple-950 border-y-8 border-purple-700"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-0 rounded-2xl overflow-hidden shadow-2xl border border-purple-800">
        {/* Gambar kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="h-full w-full"
        >
          <img
            src={image || "/images/motivation-photo.jpg"}
            alt="Motivasi"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Teks motivasi kanan */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center bg-gradient-to-br from-black/95 via-purple-950/90 to-black/95 p-10 text-center md:text-left"
        >
          <div>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic mb-6">
              {quote || (
                <>
                  "The <span className="font-bold text-purple-300">best investment</span> you can make, is an {" "}
                  <span className="font-bold text-purple-300">investment in yourself</span>... <br />
                  The more you <span className="font-bold text-purple-300">learn</span>, the more you'll {" "}
                  <span className="font-bold text-purple-300">earn</span>."
                </>
              )}
            </p>
            <p className="text-purple-300 font-semibold text-right">
              {author || "- Warren Buffet"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
