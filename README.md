# mayLab Photography Portfolio

A modern, artistic photography portfolio website built with Next.js and Tailwind CSS.

## Features

- Sleek, modern design with an artistic black and maroon theme
- Responsive layout that works on all devices
- Animated UI elements with Framer Motion
- Clean, intuitive navigation
- Four photography categories: Street, Portrait, Landscape, and Black & White
- Contact form with Instagram integration
- About section for personal information

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd photography-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Adding Your Own Photos

1. Replace the placeholder images in the `public/images/` directory with your own photographs.
2. Update the image metadata in `src/app/data/images.ts`.

## Customization

- Color scheme: Update CSS variables in `src/app/globals.css`
- Typography: Change font settings in `src/app/layout.tsx`
- Content: Edit text in respective components

## Deployment

This project can be easily deployed to Vercel:

```bash
npm run build
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is open source and available under the [MIT License](LICENSE).
