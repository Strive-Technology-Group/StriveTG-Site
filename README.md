# Strive Technology Group Website

> Professional marketing website for Strive Technology Group - Empowering small and mid-sized businesses with smart technology solutions.

## 🚀 About

Strive Technology Group specializes in providing enterprise-grade technology solutions tailored for small and mid-sized businesses. Our website showcases our comprehensive service offerings and makes it easy for potential clients to get in touch.

## 📋 Services Offered

- **Website Development & Hosting** - Modern, scalable websites with subscription-based hosting
- **Website Upkeep & Support** - Ongoing maintenance, monitoring, and dedicated support
- **Search & Visibility Suite** - SEO optimization and AI search visibility (LLM Surge Service)
- **Insight Analytics Pipelines** - Custom dashboards and business intelligence
- **AI Automation** - Chatbots, workflow automation, and predictive insights

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

### Development
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Linting**: ESLint with custom configurations
- **Type Checking**: TypeScript strict mode

### Architecture
- **Rendering**: Static Site Generation (SSG) + Server-Side Rendering (SSR)
- **Performance**: Optimized with Next.js Image, Font optimization, and Code splitting
- **SEO**: Structured data, meta tags, and semantic HTML
- **Accessibility**: WCAG 2.1 compliant with proper ARIA attributes

## 📁 Project Structure

```
strivetg/
├── apps/
│   └── web/                 # Main Next.js application
│       ├── app/
│       │   ├── components/  # Reusable React components
│       │   ├── about/       # About page
│       │   ├── services/    # Services page
│       │   ├── contact/     # Contact page
│       │   ├── consultation/ # Consultation booking
│       │   ├── faq/         # FAQ page
│       │   ├── pricing/     # Pricing information
│       │   ├── portfolio/   # Portfolio showcase
│       │   ├── blog/        # Blog/resources
│       │   ├── privacy/     # Privacy policy
│       │   ├── terms/       # Terms of service
│       │   └── globals.css  # Global styles
│       └── public/          # Static assets
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── eslint-config/       # ESLint configurations
│   └── typescript-config/   # TypeScript configurations
└── turbo.json              # Turborepo configuration
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd strivetg

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Development Commands

```bash
# Development
pnpm dev                    # Start development server with Turbopack
pnpm dev --filter=web       # Start only the web app

# Building
pnpm build                  # Build all packages
pnpm build --filter=web     # Build only the web app

# Linting & Type Checking
pnpm lint                   # Run ESLint
pnpm check-types           # Run TypeScript type checking

# Production
pnpm start                  # Start production server
```

## 📱 Features

### Design & UX
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Professional Aesthetics**: Clean, modern design inspired by leading tech companies
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Accessibility**: WCAG 2.1 AA compliant with proper focus management

### Performance
- **Core Web Vitals Optimized**: Excellent Lighthouse scores
- **Image Optimization**: Next.js Image component with WebP support
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic route-based code splitting

### SEO & Analytics
- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Open Graph**: Social media sharing optimization

## 📞 Contact & Lead Generation

The website uses a streamlined email-based contact system:

- **Primary Contact**: contact@strivetg.com
- **Consultation Booking**: Calendly integration for 30-minute consultations
- **Pre-filled Email Templates**: Professional email templates for different inquiries
- **Response Time**: 24-hour response commitment during business days

## 🔧 Customization

### Brand Colors
```css
:root {
  --primary: #0A2540;      /* Navy Blue */
  --secondary: #F5F5F7;    /* Light Gray */
  --accent-blue: #2563EB;  /* Blue */
  --accent-teal: #14B8A6;  /* Teal */
  --accent-purple: #7C3AED; /* Purple */
}
```

### Typography
- **Primary Font**: Inter (UI text, body content)
- **Display Font**: Poppins (headings, emphasis)
- **Font Weights**: 400, 500, 600, 700, 800

## 🚀 Deployment

The website is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** (with Node.js support)

### Build Output
- Static pages where possible
- Server-side rendering for dynamic content
- Optimized assets with automatic compression

## 📈 Performance Metrics

Target metrics:
- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

This is a private business website. For internal development:

1. Create a feature branch
2. Make your changes
3. Run linting and type checking
4. Test on multiple devices
5. Submit for review

## 📄 License

Private and proprietary. All rights reserved by Strive Technology Group.

## 📞 Support

For technical questions about this website:
- **Email**: contact@strivetg.com
- **Consultation**: [Book a free 30-minute call](https://calendly.com/contact-strivetg/30min)

---

**Strive Technology Group** - Transform Your Business with Smart Technology