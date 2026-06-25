# BeRabbit Landing Page

This is a modern, responsive, and highly-performant landing page for BeRabbit, built following the "Spatial SaaS" aesthetic.

## Tech Stack
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Features
- **Glassmorphism Design:** Frosty glass containers with subtle glows and deep shadows.
- **Fluid Layout:** Automatically scales across desktop, tablet, and mobile views.
- **Micro-Animations:** Snappy and satisfying hover effects and scroll reveals.
- **Accessible & SEO Optimized:** Proper semantic HTML structure and built-in metadata.
- **Dual Typography:** Uses 'Plus Jakarta Sans' for striking headlines and 'Inter' for highly readable body copy.

## Getting Started

First, install the dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel Deployment (Recommended)
This project is configured to deploy seamlessly to Vercel. 

1. Install the Vercel CLI (if not already installed):
```bash
npm i -g vercel
```
2. Link your project and deploy:
```bash
vercel
```
3. For a production deployment, use:
```bash
vercel --prod
```

### GitHub Deployment
To push the completed project to your GitHub repository:

1. Create a new repository named `BeRabbit_Landing_Page` on GitHub.
2. Initialize git and push:
```bash
git init
git add .
git commit -m "feat: initial release of BeRabbit Landing Page"
git branch -M main
git remote add origin https://github.com/YOUR_COMPANY_OR_USERNAME/BeRabbit_Landing_Page.git
git push -u origin main
```
*(Ensure you replace the remote URL with your actual repository URL).*
