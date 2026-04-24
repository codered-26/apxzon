import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Stethoscope,
  Wallet,
  GraduationCap,
  Plane,
  Truck,
  Building2,
  Rocket
} from 'lucide-react';

const industries = [
  {
    id: "01",
    name: "Retail & E-commerce",
    description: "Scalable stores and automation that elevate customer experience.",
    icon: ShoppingBag,
    image: "/ecommerce.png",
    className: "lg:col-span-7 md:col-span-8 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-orange-500/30",
    iconText: "text-white"
  },
  {
    id: "02",
    name: "Healthcare",
    description: "Secure, compliant digital solutions that improve patient care.",
    icon: Stethoscope,
    image: "/healthcare.png",
    className: "lg:col-span-5 md:col-span-4 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-rose-500/30",
    iconText: "text-white"
  },
  {
    id: "03",
    name: "Finance & Banking",
    description: "Robust financial platforms for transactions and compliance.",
    icon: Wallet,
    image: "/banking.png",
    className: "lg:col-span-5 md:col-span-4 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-emerald-500/30",
    iconText: "text-white"
  },
  {
    id: "04",
    name: "Education",
    description: "Smart learning platforms modernizing academic operations.",
    icon: GraduationCap,
    image: "/education.png",
    className: "lg:col-span-7 md:col-span-8 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-blue-500/30",
    iconText: "text-white"
  },
  {
    id: "05",
    name: "Travel",
    description: "Automated booking solutions that simplify guest satisfaction.",
    icon: Plane,
    image: "/travel.png",
    className: "lg:col-span-8 md:col-span-8 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-cyan-500/30",
    iconText: "text-white"
  },
  {
    id: "06",
    name: "Logistics",
    description: "Tracking and fleet management for efficient supply chains.",
    icon: Truck,
    image: "/logistic.png",
    className: "lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-amber-500/30",
    iconText: "text-white"
  },
  {
    id: "07",
    name: "Real Estate",
    description: "Management platforms to accelerate property sales.",
    icon: Building2,
    image: "/realestate.png",
    className: "lg:col-span-4 md:col-span-4 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-violet-500/30",
    iconText: "text-white"
  },
  {
    id: "08",
    name: "Startups & SMEs",
    description: "Scalable digital solutions engineered helping companies innovate fast.",
    icon: Rocket,
    image: "/startup.png",
    className: "lg:col-span-8 md:col-span-8 sm:col-span-2 col-span-1 h-[320px]",
    iconBg: "bg-pink-500/30",
    iconText: "text-white"
  }
];

const Industries: React.FC = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentIndustries = page === 0 ? industries.slice(0, 4) : industries.slice(4, 8);

  return (
    <section id="industries" className="py-12 lg:py-16 bg-background relative overflow-hidden selection:bg-green-300/30 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              Industries <span className="text-green-300">We Serve</span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setPage(dot)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${page === dot ? 'w-8 bg-green-300' : 'w-2 bg-white/20'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[auto] sm:min-h-[660px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4"
            >
              {currentIndustries.map((industry) => (
                <div
                  key={industry.name}
                  className={`group relative rounded-[2.5rem] overflow-hidden bg-background border border-white/5 ${industry.className}`}
                >
                  {/* Background Image */}
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full text object-cover transition-all duration-1000 group-hover:scale-110"
                  />

                  {/* Dark Gradient Scrim for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/40" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 rounded-2xl ${industry.iconBg} ${industry.iconText} backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <industry.icon size={22} className="stroke-[2.5px]" />
                      </div>
                      <span className="text-6xl font-black text-white/10 select-none group-hover:text-white/20 transition-opacity">
                        {industry.id}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight [font-family:'Poppins',sans-serif] [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                        {industry.name}
                      </h3>
                      <p className="text-sm lg:text-base font-semibold leading-relaxed max-w-sm text-white/80 [font-family:'Poppins',sans-serif] [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-300/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
};

export default Industries;
