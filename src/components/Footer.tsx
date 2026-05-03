import React, { useState, useEffect } from 'react';
import { Globe, Mail, MessageSquare, Share2 } from 'lucide-react';
import logoLight from '../assets/1.png';
import logoDark from '../assets/2.png';
import logoFirst from '../assets/3.png';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-10 sm:py-12 bg-background border-t border-border px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <img
                src={logoFirst}
                alt="Logo"
                className="h-10 w-auto object-contain transition-all duration-300"
              />
              <img
                src={isDarkMode ? logoDark : logoLight}
                alt="algowill"
                className="h-16 w-auto object-contain transition-all duration-300 mt-2"
              />
            </div>
            <p className="text-foreground/80 text-sm max-w-sm leading-relaxed mb-8 font-medium">
              Empowering businesses with cutting-edge digital solutions. From boutique applications to enterprise-grade infrastructure, we build the future of technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://algowill.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="p-2 rounded-full glass-card text-foreground/60 hover:text-foreground hover:border-foreground/50 transition-all"
              >
                <Globe size={20} />
              </a>
              <a
                href="mailto:algowill0@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full glass-card text-foreground/60 hover:text-foreground hover:border-foreground/50 transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/916382831505"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full glass-card text-foreground/60 hover:text-foreground hover:border-foreground/50 transition-all"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (navigator.share) {
                    navigator.share({ title: 'algowill', url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                aria-label="Share"
                className="p-2 rounded-full glass-card text-foreground/60 hover:text-foreground hover:border-foreground/50 transition-all"
              >
                <Share2 size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-foreground/80 font-medium">
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Web Applications</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AI & Automation</a></li>
            </ul>
          </div>


        </div>

        <div className="pt-8 sm:pt-12 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} algowill. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-foreground/40">
            <a href="#" className="hover:text-foreground">Sitemap</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
