import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/algowill0@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Service Required": formData.service,
          "Project Details": formData.message,
          _subject: `New Project Inquiry from ${formData.name}`,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        alert('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('Failed to send message. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Mobile Application",
    "Web Application",
    "Cloud Support",
    "AI Integration",
    "Automation",
    "Other"
  ];

  return (
    <section id="contact" className="py-14 lg:py-16 bg-background relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-8">
              Let's Build Something <span className="text-green-300">Extraordinary</span>
            </h2>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-sm font-medium">
              Ready to elevate your digital presence? Reach out to us today and let's discuss how we can help your business grow.
            </p>

            <div className="space-y-5 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-foreground/80 font-medium">algowill0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-foreground/80 font-medium">+91 6382831505</p>
                  <p className="text-foreground/80 font-medium">+91 9043011375</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">location</h4>
                  <p className="text-foreground/80 font-medium">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-8 md:p-5 shadow-2xl relative min-h-[450px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!showSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold ml-1 opacity-70 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-background border border-border focus:border-foreground rounded-xl px-5 py-3.5 outline-none transition-all"
                        placeholder="your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold ml-1 opacity-70 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-background border border-border focus:border-foreground rounded-xl px-5 py-3.5 outline-none transition-all"
                        placeholder="your email id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-semibold ml-1 opacity-70 uppercase tracking-wider">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-background border border-border focus:border-foreground rounded-xl px-5 py-3.5 outline-none transition-all appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold ml-1 opacity-70 uppercase tracking-wider">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      className="w-full bg-background border border-border focus:border-foreground rounded-xl px-5 py-3.5 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`liquid-glass-btn w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-foreground/70 text-lg max-w-xs mx-auto">
                    Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSuccess(false)}
                    className="text-sm font-bold text-foreground/50 hover:text-foreground transition-colors uppercase tracking-widest pt-4"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
