import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logoLight from '../assets/1.png';
import logoDark from '../assets/2.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', 'services', 'industries', 'workflow', 'technologies', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    // Theme detection
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    handleScroll();
    checkTheme();

    window.addEventListener('scroll', handleScroll);

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 pointer-events-none">
      <div className="container mx-auto px-6 flex justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          style={{
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
            backgroundColor: isScrolled
              ? (isDarkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)')
              : 'transparent',
            border: isScrolled
              ? (isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)')
              : '1px solid transparent',
          }}
          className={`w-full max-w-5xl px-6 py-3 rounded-[2rem] flex justify-between items-center pointer-events-auto transition-all duration-500 ${isScrolled ? 'shadow-2xl scale-[1.02]' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="apxzon"
              className="h-8 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`text-xs lg:text-sm  font-bold transition-all tracking-tight relative py-1 ${activeSection === link.href ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'}`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-300 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <div className="h-6 w-px bg-border/50 mx-2" />
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 lg:px-8 py-3 rounded-4xl liquid-glass-btn text-foreground text-sm font-extrabold shadow-xl"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Nav Right Side */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-[calc(100%+12px)] left-6 right-6 overflow-hidden rounded-[2.5rem] nav-glass pointer-events-auto shadow-2xl border border-white/10"
          >
            <div className="flex flex-col space-y-4 p-8 bg-background/40 backdrop-blur-3xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-2xl font-bold transition-all text-left ${activeSection === link.href ? 'text-green-300' : 'text-foreground/60 hover:text-foreground'}`}
                >
                  {link.name}
                </button>
              ))}
              <hr className="border-border/30 my-2" />
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 rounded-2xl liquid-glass-btn text-foreground font-bold text-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
