'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="group relative">
                <motion.span 
                  className="text-2xl md:text-3xl font-bold text-white font-helvetica"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 1 }}
                >
                  mayLab
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="ml-auto">
          <Link href="/contact">
            <motion.span 
              className="inline-block py-2 px-4 border border-[var(--primary)] bg-transparent text-white font-helvetica hover:bg-[var(--primary)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.span>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header; 