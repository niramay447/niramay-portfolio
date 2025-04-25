/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Uncomment these lines when deploying to GitHub Pages:
  // basePath: '/photography-portfolio',
  // assetPrefix: '/photography-portfolio/',
};

export default nextConfig; 