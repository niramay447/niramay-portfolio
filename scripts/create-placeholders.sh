#!/bin/bash

# Create directory structure
mkdir -p public/images

# Copy placeholder SVG to the four main category images
cp public/images/placeholder.svg public/images/street.jpg
cp public/images/placeholder.svg public/images/portrait.jpg
cp public/images/placeholder.svg public/images/landscape.jpg
cp public/images/placeholder.svg public/images/blackandwhite.jpg

# Create a message for the user
echo "Placeholder images created. Replace these with your actual photos when available."
echo "To run the development server, use: npm run dev" 