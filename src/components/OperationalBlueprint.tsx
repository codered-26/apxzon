import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Layers,
  Cpu,
  Search,
  Rocket,
  LifeBuoy
} from 'lucide-react';

const blueprintSteps = [
  {
    title: "Planning & Requirements",
    icon: ClipboardCheck,
    details: ["Stakeholder Involvement", "Requirements Documentation", "Business Analysis", "Project Scope & Timeline"]
  },
  {
    title: "Design & Architecture",
    icon: Layers,
    details: ["System Architecture", "UI/UX Design", "Prototyping", "Technology Stack"]
  },
  {
    title: "Development Process",
    icon: Cpu,
    details: ["Agile Methodology", "Version Control", "Branching Strategy", "Coding Standards"]
  },
  {
    title: "Testing & QA",
    icon: Search,
    details: ["Test Planning", "Code Reviews", "Bug Tracking"]
  },
  {
    title: "Deployment & Release",
    icon: Rocket,
    details: ["Release Planning", "Staging Environment", "Deployment Pipeline", "Monitoring & Logging"]
  },
  {
    title: "Maintenance & Support",
    icon: LifeBuoy,
    details: ["Bug Fixes", "Patch Management", "Performance Tuning", "Customer Support"]
  }
];

const OperationalBlueprint: React.FC = () => {
  return (
    <section className="py-14 lg:py-16 bg-background overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <div className="text-left mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }} // Changed y to x for a nice left-to-right entrance
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
            // Removed mx-auto to keep it pinned left
            className="text-foreground/80 text-base sm:text-xl md:text-2xl max-w-3xl font-medium"
          >
            A systematic approach to engineering excellence, ensuring every project
            is delivered with precision and quality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {blueprintSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-3xl glass-card relative ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <div className={`p-2 rounded-xl bg-foreground/10 text-foreground ${i % 2 === 0 ? 'lg:order-2' : ''}`}>
                        <step.icon size={24} />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold">{step.title}</h3>
                    </div>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {step.details.map((detail) => (
                        <span key={detail} className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-foreground/80">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Node (Desktop) */}
                <div className="hidden lg:flex relative z-10 w-12 h-12 rounded-full bg-background border-4 border-foreground items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>

                {/* Empty space for balance */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalBlueprint;
