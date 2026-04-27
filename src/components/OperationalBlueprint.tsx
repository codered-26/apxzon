import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ClipboardCheck,
  Layers,
  Cpu,
  Search,
  Rocket,
  LifeBuoy
} from 'lucide-react';
import InteractiveGrid from './InteractiveGrid';

const blueprintSteps = [
  {
    id: "",
    phase: "Discovery",
    title: "Requirement gathering",
    icon: ClipboardCheck,
    details: ["Requirements Documentation", "Business Analysis", " Timeline"],
    iconBg: "bg-blue-500/30",
    iconText: "text-foreground"
  },
  {
    id: "",
    phase: "Architecture",
    title: "Design & Architecture",
    icon: Layers,
    details: ["System Architecture", "UI/UX Design", "Prototyping"],
    iconBg: "bg-purple-500/30",
    iconText: "text-foreground"
  },
  {
    id: "",
    phase: "Implementation",
    title: "Development Process",
    icon: Cpu,
    details: ["Agile Methodology", "Version Control", "Coding Standards"],
    iconBg: "bg-emerald-500/30",
    iconText: "text-foreground"
  },
  {
    id: "",
    phase: "Verification",
    title: "Testing & QA",
    icon: Search,
    details: ["Test Planning", "Code Reviews", "Bug Tracking"],
    iconBg: "bg-amber-500/30",
    iconText: "text-foreground"
  },
  {
    id: "",
    phase: "Execution",
    title: "Deployment & Release",
    icon: Rocket,
    details: ["Release Planning", "Staging Environment", "Deployment"],
    iconBg: "bg-rose-500/30",
    iconText: "text-foreground"
  },
  {
    id: "",
    phase: "Optimization",
    title: "Maintenance & Support",
    icon: LifeBuoy,
    details: ["Bug Fixes", "Performance Tuning", "Customer Support"],
    iconBg: "bg-cyan-500/30",
    iconText: "text-foreground"
  }
];

const BlueprintCard: React.FC<{ step: typeof blueprintSteps[0], index: number }> = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-center justify-center w-full mb-2 sm:mb-4 lg:mb-4 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}
    >
      {/* Content Card */}
      <div className={`w-full lg:w-[45%] group`}>
        <div className="relative p-4 sm:p-6 rounded-[2rem] glass-card border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 overflow-hidden">

          {/* Background Number */}
          <span className="absolute top-4 right-8 text-8xl font-black text-foreground/5 select-none transition-all duration-700 group-hover:text-foreground/10 group-hover:scale-110 pointer-events-none">
            {step.id}
          </span>

          <div className="relative z-10">
            <div className={`flex items-center gap-4 mb-4`}>
              <div className={`w-14 h-14 rounded-2xl ${step.iconBg} backdrop-blur-md border border-foreground/10 flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <step.icon size={28} className={`stroke-[2.5px] ${step.iconText}`} />
              </div>
              <div>
                <span className="text-[12px] tracking-[0.2em] font-bold text-orange-600/80 mb-1 block">
                  {step.id ? `Phase ${step.id} • ` : ""}{step.phase}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-none">
                  {step.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {step.details.map((detail, i) => (
                <motion.span
                  key={detail}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="px-3 py-1.5 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-full text-[10px] sm:text-xs font-bold text-foreground/70 transition-colors cursor-default"
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] dark:opacity-[0.05]" />
        </div>
      </div>

      {/* Center Line Connector Node (Desktop) */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-foreground z-20 transition-transform duration-500 group-hover:scale-150">
        <div className={`absolute inset-0 rounded-full ${step.iconBg.replace('/30', '/60')} animate-ping opacity-0 group-hover:opacity-100`} />
      </div>
    </motion.div>
  );
};

const OperationalBlueprint: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="py-10 lg:py-14 bg-background relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 selection:bg-orange-300/30">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <InteractiveGrid />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-10" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-left mb-8 lg:mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
          >
            Our Operational <span className="text-foreground/60 text-orange-300">Blueprint</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 text-base sm:text-xl md:text-2xl max-w-3xl font-medium"
          >
            A systematic approach to engineering excellence, ensuring every project
            is delivered with precision and quality.
          </motion.p>
        </div>

        {/* Blueprint Layout */}
        <div className="relative">
          {/* Animated Path (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 via-orange-300 to-rose-400 shadow-[0_0_15px_rgba(253,186,116,0.5)]"
            />
          </div>

          <div className="flex flex-col relative z-20">
            {blueprintSteps.map((step, i) => (
              <BlueprintCard key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Call to Action or Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 lg:mt-8 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-24 bg-gradient-to-b from-foreground/20 to-transparent mb-8" />
            <p className="text-sm font-bold tracking-widest uppercase opacity-40">
              End of Blueprint
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-orange-300/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default OperationalBlueprint;
