'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center relative inline-block mx-auto artistic-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
          <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-[var(--primary)]"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-md border-2 border-[var(--primary-dark)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Photographer's profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-[var(--primary-light)]">The Story Behind the Lens</h3>
            <p className="text-lg text-gray-200">
              Long before I owned a camera, I found myself framing the world in my mind—pausing moments in time, noticing light, shadow, and color in everyday scenes. That instinct eventually led me to pick up a camera two years ago, and since then, street photography has become my main creative outlet. Though I work as a data scientist and student by day, photography is a growing part of my creative life and something I pursue with focus and intention.
            </p>
            <p className="text-lg text-gray-200">
            My work gravitates toward vibrant color, dynamic composition, and the quiet poetry of candid moments. Whether it’s a fleeting expression, an unexpected symmetry, or a splash of light across a city wall, I aim to capture what feels both spontaneous and intentional. I’ve also explored portraiture, and I’m always excited to collaborate with individuals or brands who resonate with my visual style.
            </p>
            <a 
              href="https://niramayk.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.div 
                className="border-b-2 border-[var(--primary)] pb-1 text-[var(--primary-light)] font-medium cursor-pointer"
                whileHover={{ x: 5, color: '#ffffff' }}
              >
                Read more about my journey
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 