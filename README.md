# 🚀 Kartik Goel - Portfolio Website

A modern, high-performance portfolio website built with **Next.js 14**, showcasing expertise in full-stack development, AI/ML, and competitive programming.

## ✨ Features

- 🎨 **Modern Design** - Beautiful UI with smooth animations and transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🌙 **Dark/Light Mode** - Seamless theme switching with system preference detection
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and mobile optimizations
- 🎯 **Interactive Elements** - Smooth scroll, hover effects, and micro-interactions
- 📧 **Contact Form** - Functional contact form with EmailJS integration
- 📊 **Project Showcase** - Filterable portfolio with live demos and source code
- 🛠️ **Skills Display** - Categorized technical skills with hover effects
- 🎮 **Loading Animation** - Terminal-style loading screen with progress indicator

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon set

### Backend & Services
- **EmailJS** - Contact form handling
- **Vercel** - Deployment platform (recommended)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/goyalkartik773/Portfolio2.0.git
cd Portfolio2.0

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development
```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Open http://localhost:3000
```

### Build & Deploy
```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build

# Start production server
npm start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
Portfolio2.0/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── skills.tsx        # Skills section
│   ├── projects.tsx      # Projects section
│   ├── contact.tsx       # Contact section
│   ├── navbar.tsx        # Navigation
│   └── footer.tsx        # Footer
├── public/               # Static assets
│   ├── images/           # Project images
│   ├── cv.pdf           # Resume download
│   └── favicon/         # Favicons
├── styles/              # Additional styles
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── README.md           # This file
```

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file for environment variables:
```env
# EmailJS Configuration (Optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization
To personalize this portfolio:

1. **Personal Info** - Update `components/hero.tsx` and `components/about.tsx`
2. **Projects** - Modify `components/projects.tsx`
3. **Skills** - Update `components/skills.tsx`
4. **Social Links** - Edit `components/footer.tsx` and `components/hero.tsx`
5. **Contact** - Configure EmailJS in `components/contact.tsx`
6. **Resume** - Replace `public/cv.pdf` with your resume

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
# Build static export
npm run build

# Deploy to Netlify, GitHub Pages, etc.
# Upload the 'out' folder
```

## 📱 Mobile Optimization

This portfolio is optimized for mobile devices:
- ✅ Touch-friendly interface
- ✅ Optimized animations
- ✅ Lazy loading for better performance
- ✅ Responsive design for all screen sizes
- ✅ Reduced JavaScript bundle size

## 🎨 Features Breakdown

### Hero Section
- Animated typewriter effect
- Social media links
- Call-to-action buttons
- Professional introduction

### Skills Section
- 7 categorized skill groups
- Hover effects with gradients
- Icon-based skill representation
- Mobile-optimized grid layout

### Projects Section
- Filterable by category (AI/ML, GenAI, Web)
- Live demo links
- Source code links
- Responsive card layout
- Image optimization

### Contact Section
- Functional contact form
- Email integration
- Social links
- Professional contact info

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- ⭐ Star the repository
- 🍴 Fork for your own use
- 🐛 Report issues
- 💡 Suggest improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Live Demo

Check out the live portfolio: [Portfolio Link](https://your-portfolio-url.vercel.app)

## 📞 Contact

- **Email**: goyalkartik773@gmail.com
- **LinkedIn**: [kartik-goel](https://linkedin.com/in/kartik-goel-a95b2630b/)
- **GitHub**: [goyalkartik773](https://github.com/goyalkartik773)
- **Portfolio**: [Live Demo](https://your-portfolio-url.vercel.app)

---

Made with ❤️ by [Kartik Goel](https://github.com/goyalkartik773)
