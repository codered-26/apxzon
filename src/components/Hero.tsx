import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import HeroText from './HeroText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-[1.1]">
              <HeroText text="Elevate Your" /><br />
              <span className="text-foreground text-gray-500 font-black">
                Digital Presence
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-foreground/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto font-medium px-2">
              From mobile applications to cloud-native architectures, we build scalable, high-performance solutions tailored to your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-4xl bg-green-300 text-gray-900 font-bold flex items-center justify-center gap-2 group transition-all shadow-lg shadow-foreground/20 border-1 border-gray-500"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-4xl bg-foreground/5 text-foreground font-bold backdrop-blur-md border border-foreground/10 flex items-center justify-center gap-2 hover:bg-foreground/10 transition-all"
              >
                Explore Services
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute left-[10%] bottom-[10%] w-[400px] h-[400px] bg-foreground/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Hero;
