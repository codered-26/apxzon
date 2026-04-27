import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Zap,
  Code,
  Coffee,
  Braces,
  Server,
  Database,
  Box,
  Cloud,
  Shield,
  Palette,
  Terminal
} from 'lucide-react';
import InteractiveGrid from './InteractiveGrid';

const technologies = [
  { name: 'React', icon: Atom },
  { name: 'n8n', icon: Zap },
  { name: 'Python', icon: Braces },
  { name: 'Java', icon: Coffee },
  { name: 'JavaScript', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Express.js', icon: Terminal },
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Box },
  { name: 'Cloud', icon: Cloud },
  { name: 'AWS', icon: Cloud },
  { name: 'Tailwind', icon: Palette },
  { name: 'Kubernetes', icon: Shield },
];

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-10 lg:py-12 bg-background relative overflow-hidden border-y border-border px-4 sm:px-8 md:px-12 lg:px-22">
      {/* Interactive Shape Grid */}
      <div className="absolute inset-0 z-0">
        <InteractiveGrid />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <div className="absolute top-20 left-[10%] w-32 h-32 border border-foreground/5 rounded-3xl" />
        <div className="absolute bottom-40 right-[15%] w-48 h-48 border border-foreground/5 rounded-[3rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/[0.02] rounded-full blur-3xl saturate-150" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            Powering Your Success with{' '}
            <span className="text-green-300 ml-80">World Class Stack</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-12">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-3 transition-colors group"
            >
              <div className="p-4 rounded-2xl glass-card text-foreground group-hover:shadow-lg transition-all">
                <tech.icon size={32} />
              </div>
              <span className="text-sm font-medium text-foreground/70">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
