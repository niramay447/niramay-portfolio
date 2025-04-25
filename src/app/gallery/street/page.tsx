'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { getImagesByCategory } from '../../data/images';

export default function StreetPhotography() {
  // Get street photography images
  const streetImages = getImagesByCategory('street');

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-32 pb-20 container-padding max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block artistic-text">
            Street Photography
            <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-[var(--primary)]"></span>
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Capturing the raw, unfiltered moments of urban life. These photographs 
            document the beauty, complexity, and spontaneity of public spaces and the people who inhabit them.
          </p>
        </motion.div>
        
        <Gallery images={streetImages} />
      </section>
      
      <Footer />
    </main>
  );
} 