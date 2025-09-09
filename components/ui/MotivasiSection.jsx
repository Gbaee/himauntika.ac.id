import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function MotivasiSection({ quote, author, image }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // stop observe setelah kelihatan sekali
          }
        });
      },
      { threshold: 0.3 } // aktif kalau 30% section kelihatan
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
      className="relative py-16 md:py-20 bg-gradient-to-b from-purple-950 via-black to-purple-900 border-y-4 border-purple-600"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Foto di sebelah kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={image || "/images/motivation-photo.jpg"}
            alt="Motivasi"
            className="w-full max-w-md object-cover rounded-2xl shadow-2xl border border-purple-700"
          />
        </motion.div>

        {/* Teks Motivasi */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <Card className="bg-black/50 border border-purple-700 shadow-lg rounded-2xl">
            <CardContent className="p-6 md:p-10">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic mb-6">
                {quote || (
                  <>
                    "The <span className="font-bold text-purple-300">best
                    investment</span> you can make, is an{" "}
                    <span className="font-bold text-purple-300">
                      investment in yourself
                    </span>
                    ... <br />
                    The more you{" "}
                    <span className="font-bold text-purple-300">learn</span>,
                    the more you'll{" "}
                    <span className="font-bold text-purple-300">earn</span>."
                  </>
                )}
              </p>
              <p className="text-gray-400 font-semibold text-right">
                {author || "- Warren Buffet"}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
