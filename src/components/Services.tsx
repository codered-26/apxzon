import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Layout,
  Palette,
  ShoppingCart,
  LifeBuoy,
  Search,
  Zap
} from 'lucide-react';
import ScrollRevealText from './ScrollRevealText';

const services = [
  {
    title: "Mobile Application",
    description: "iOS and Android apps with React Native.",
    icon: Smartphone,
    color: " bg-blue-500/20"
  },
  {
    title: "Web Application",
    description: "Responsive web platforms with React.",
    icon: Globe,
    color: " bg-indigo-500/20"
  },
  {
    title: "Cloud Support",
    description: "AWS, Azure, and GCP management.",
    icon: Cloud,
    color: " bg-cyan-500/20"
  },
  {
    title: "AI Integration",
    description: "AI models and payment gateways.",
    icon: Brain,
    color: " bg-purple-500/20"
  },
  {
    title: "UI & UX Design",
    description: "Intuitive and stunning interfaces.",
    icon: Palette,
    color: " bg-pink-500/20"
  },
  {
    title: "Ecommerce",
    description: "Stores designed to boost sales.",
    icon: ShoppingCart,
    color: " bg-orange-500/20"
  },
  {
    title: "WordPress",
    description: "Custom themes and plugins.",
    icon: Layout,
    color: " bg-emerald-500/20"
  },
  {
    title: "Support",
    description: "24/7 technical reliability.",
    icon: LifeBuoy,
    color: " bg-rose-500/20"
  },
  {
    title: "SEO Services",
    description: "Technical SEO and content.",
    icon: Search,
    color: " bg-teal-500/20"
  },
  {
    title: "n8n Automation",
    description: "Workflows and connecting apps.",
    icon: Zap,
    color: " bg-amber-500/20"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 lg:py-12 bg-background relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2"
            >
              Our <span className="text-foreground/40 text-orange-300">Services</span>
            </motion.h2>

            <ScrollRevealText
              className="text-base sm:text-xl md:text-2xl font-bold leading-[1.1] max-w-4xl text-foreground/60"
              text="Comprehensive digital solutions designed to accelerate your business growth and technological capability."
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card p-4 rounded-xl flex flex-col justify-start group transition-all duration-300 border border-foreground/10 bg-foreground/5 hover:bg-foreground/10"
              >
                <div className="flex flex-col gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${service.color.split(' ')[1]} group-hover:scale-110 shadow-lg shadow-transparent group-hover:shadow-current/20`}>
                    <service.icon size={22} className={service.color.split(' ')[0]} />
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold mb-1 tracking-tight leading-tight transition-colors duration-300 ${service.color.split(' ')[0]} group-hover:brightness-125`}>
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 text-[10px] leading-tight font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
