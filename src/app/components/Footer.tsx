'use client';

import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-8 border-t border-[var(--primary-dark)]">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} mayLab Photography. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white w-10 h-10 rounded-full transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 