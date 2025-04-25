'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoTileProps {
  title: string;
  imageSrc: string;
  path: string;
}

const PhotoTile = ({ title, imageSrc, path }: PhotoTileProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={path}>
      <motion.div 
        className="tile-container aspect-square w-full relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-500 ease-in-out"
          priority
        />
        
        <motion.div 
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center flex-col p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white text-center relative artistic-text"
            animate={{ 
              y: isHovered ? 0 : 5,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.4 }}
          >
            {title}
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[2px] bg-[var(--primary)]"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '80%' : '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.h2>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default PhotoTile; 