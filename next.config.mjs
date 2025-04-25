/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // GitHub Pages configuration - uncommented for deployment
  basePath: '/niramay-portfolio',
  assetPrefix: '/niramay-portfolio/',
};

export default nextConfig; 