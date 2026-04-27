import React from "react";
import { motion } from "framer-motion";

interface HeroTextProps {
  text: string;
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({
  text,
  className = "",
}) => {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap justify-center items-center font-black ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
            >
              {/* Main Character */}
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: (wordIndex * 5 + i) * 0.04 + 0.3, duration: 0.8 }}
                className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-black text-foreground tracking-tight block"
                style={{ fontWeight: 900 }}
              >
                {char}
              </motion.span>

              {/* Top Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: (wordIndex * 5 + i) * 0.04,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                className="absolute inset-0 text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-black text-green-300 z-10 pointer-events-none block"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)", fontWeight: 900 }}
              >
                {char}
              </motion.span>

              {/* Middle Slice Layer */}
              <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "-100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: (wordIndex * 5 + i) * 0.04 + 0.1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                className="absolute inset-0 text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-black text-foreground/40 z-10 pointer-events-none block"
                style={{
                  clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                  fontWeight: 900
                }}
              >
                {char}
              </motion.span>

              {/* Bottom Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: (wordIndex * 5 + i) * 0.04 + 0.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                className="absolute inset-0 text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-black text-green-300 z-10 pointer-events-none block"
                style={{
                  clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                  fontWeight: 900
                }}
              >
                {char}
              </motion.span>
            </div>
          ))}
          {/* Add space after the word except for the last word */}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

export default HeroText;
