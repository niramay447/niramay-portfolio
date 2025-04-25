export interface ImageData {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: 'street' | 'portrait' | 'landscape' | 'blackandwhite';
}

// Placeholder data - replace with actual images later
export const placeholderImages: ImageData[] = [
  // Street Photography
  {
    id: 1,
    src: '/images/street.jpg',
    alt: 'Street photography in urban city',
    width: 1200,
    height: 800,
    category: 'street',
  },
  
  // Portrait Photography
  {
    id: 2,
    src: '/images/portrait.jpg',
    alt: 'Portrait of a person',
    width: 1200,
    height: 800,
    category: 'portrait',
  },
  
  // Landscape Photography
  {
    id: 3,
    src: '/images/landscape.jpg',
    alt: 'Beautiful landscape view',
    width: 1200,
    height: 800,
    category: 'landscape',
  },
  
  // Black & White Photography
  {
    id: 4,
    src: '/images/blackandwhite.jpg',
    alt: 'Black and white artistic photograph',
    width: 1200,
    height: 800,
    category: 'blackandwhite',
  },
];

// Helper function to get images by category
export const getImagesByCategory = (category: string): ImageData[] => {
  const categoryImages = placeholderImages.filter(img => img.category === category);
  
  // For each category, duplicate the single image to create a gallery of 9 images
  return Array.from({ length: 9 }, (_, i) => ({
    ...categoryImages[0],
    id: categoryImages[0].id * 100 + i,
    alt: `${categoryImages[0].alt} ${i + 1}`,
  }));
}; 