// Helper function to get the correct path for assets
export const getImagePath = (path: string): string => {
  const basePath = '/niramay-portfolio';
  // Strip any leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
};

// Helper function for internal links
export const getRoutePath = (path: string): string => {
  // For internal links, Next.js automatically handles the basePath
  // Strip any leading slash for consistency
  return path.startsWith('/') ? path : `/${path}`;
}; 