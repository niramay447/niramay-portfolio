'use client';

import Image from 'next/image';
import Header from './components/Header';
import PhotoTile from './components/PhotoTile';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { placeholderImages } from './data/images';

export default function Home() {
  // Photography styles data for the tiles
  const photographyStyles = [
    {
      title: 'Street',
      imageSrc: placeholderImages.find(img => img.category === 'street')?.src || '/images/street.jpg',
      path: '/gallery/street',
    },
    {
      title: 'Portrait',
      imageSrc: placeholderImages.find(img => img.category === 'portrait')?.src || '/images/portrait.jpg',
      path: '/gallery/portrait',
    },
    {
      title: 'Landscape',
      imageSrc: placeholderImages.find(img => img.category === 'landscape')?.src || '/images/landscape.jpg',
      path: '/gallery/landscape',
    },
    {
      title: 'Black & White',
      imageSrc: placeholderImages.find(img => img.category === 'blackandwhite')?.src || '/images/blackandwhite.jpg',
      path: '/gallery/blackandwhite',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background placeholder - will be replaced with an actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0008] to-[#300010] z-0"></div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white font-helvetica">may</span>
            <span className="text-[var(--primary)] font-helvetica">Lab</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Capturing moments that tell unique stories
          </motion.p>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#photography-styles" 
              className="inline-block py-3 px-8 bg-[var(--primary)] text-white font-medium rounded-sm hover:bg-[var(--primary-dark)] transition-colors"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
      
      {/* Photography Styles Section */}
      <section id="photography-styles" className="py-20 md:py-32 container-padding max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center artistic-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Photography Styles
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photographyStyles.map((style, index) => (
            <motion.div 
              key={style.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PhotoTile
                title={style.title}
                imageSrc={style.imageSrc}
                path={style.path}
              />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
