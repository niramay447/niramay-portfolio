# Deployment & CMS Setup Guide

## Setting Up a CMS for Your Photography Portfolio

For a photography portfolio, you'll need a CMS that handles images well. Here are the steps to set up a CMS:

### Option 1: Sanity.io (Recommended)

1. **Install Sanity CLI:**
   ```bash
   npm install -g @sanity/cli
   ```

2. **Create a Sanity project:**
   ```bash
   cd photography-portfolio
   npm install @sanity/client @sanity/image-url
   sanity init --template photography
   ```

3. **Create schemas for photography categories:**
   Set up schemas for your Street, Portrait, Landscape, and Black & White collections with fields for:
   - Title
   - Image
   - Description
   - Date
   - Tags/Categories

4. **Integrate Sanity into your Next.js app:**
   ```bash
   # Create a lib/sanity.js file with your client config
   npm install next-sanity
   ```

5. **Create API routes to fetch images:**
   - Create an API route for each photography category
   - Implement pagination for image galleries

6. **Update your gallery pages:**
   - Fetch data from your Sanity CMS
   - Replace placeholder images with actual data

### Option 2: Contentful

1. **Create a Contentful account:**
   - Sign up at [contentful.com](https://www.contentful.com/)
   - Create a new space for your portfolio

2. **Create content models:**
   - Create a Photography model with fields for title, description, image, category, etc.

3. **Install Contentful SDK:**
   ```bash
   npm install contentful
   ```

4. **Connect your app to Contentful:**
   - Create a services/contentful.js file with your API keys
   - Implement methods to fetch images by category

## Deploying to GitHub Pages

Next.js can be deployed to GitHub Pages with some configuration. Here's how:

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/photography-portfolio.git
   git push -u origin main
   ```

2. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json scripts:**
   ```json
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "export": "next export",
     "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
   }
   ```

4. **Create a Next.js config for static export:**
   Update your next.config.mjs file:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     basePath: '/photography-portfolio',
     assetPrefix: '/photography-portfolio/',
     images: {
       unoptimized: true,
       dangerouslyAllowSVG: true,
       contentDispositionType: 'attachment',
       contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
     },
   };
   
   export default nextConfig;
   ```

5. **Create a GitHub Actions workflow:**
   Create a file at `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build and Export
           run: npm run build && npm run export
         - name: Add .nojekyll file
           run: touch out/.nojekyll
         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             branch: gh-pages
             folder: out
   ```

6. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Go to Settings > Pages
   - Select gh-pages branch as the source
   - Save the settings

7. **Deploy your site:**
   ```bash
   npm run deploy
   ```

## Updating Your Portfolio Images

After setting up your CMS:

1. Log into your CMS dashboard (Sanity Studio or Contentful)
2. Upload your images to each category
3. Publish your content
4. Your Next.js app will fetch the latest images when built or during client-side rendering

Remember to secure your CMS API keys by using environment variables in production. 