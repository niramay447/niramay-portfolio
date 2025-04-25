/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // GitHub Pages configuration
  basePath: '/niramay-portfolio',
  assetPrefix: '/niramay-portfolio/',
  trailingSlash: true,
};

export default nextConfig; 