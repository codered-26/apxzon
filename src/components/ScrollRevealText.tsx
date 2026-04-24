import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"]
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </div>
  );
};

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const scaleX = useTransform(progress, range, [0, 1]);
  const opacity = useTransform(progress, range, [0.3, 1]); // Dim the text slightly when not highlighted

  return (
    <span className="relative mr-3 mb-1 inline-block px-1">
      <motion.span
        style={{ scaleX, transformOrigin: 'left' }}
        className="absolute inset-0 -z-10 rounded-[4px] bg-green-200 dark:bg-white/20 h-[1.1em] top-1/2 -translate-y-1/2"
      />
      <motion.span style={{ opacity }} className="text-foreground">
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollRevealText;
