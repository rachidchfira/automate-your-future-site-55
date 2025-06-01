# NexusAI - Intelligent Automation Solutions

A modern React application built with TypeScript, Vite, and Tailwind CSS, featuring AI automation solutions for businesses.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **UI Components**: Radix UI with shadcn/ui components
- **Routing**: React Router DOM with client-side navigation
- **Form Handling**: Tally forms integration for contact and quote requests
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance Optimized**: Code splitting, lazy loading, and asset optimization

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1, TypeScript, Vite 6.3.5
- **Styling**: Tailwind CSS, Radix UI, shadcn/ui
- **Routing**: React Router DOM 6.26.2
- **Forms**: Tally integration for contact and quote requests
- **Build Tool**: Vite with SWC
- **Deployment**: Optimized for Vercel and shared hosting

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rachidchfira/nexussai.git
   cd nexussai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**
   ```bash
   cp .env.example .env
   ```
   Add any environment variables your application needs.

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Build & Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

This project supports multiple deployment options and is optimized for modern hosting platforms.

### 🚀 Vercel (Recommended)

**Fastest and easiest deployment:**

1. **GitHub Integration:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy automatically in 2 minutes!

2. **CLI Deployment:**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

### 🏠 Shared Hosting (Namecheap)

**Traditional hosting deployment:**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to hosting:**
   Upload all contents from the `dist/` folder to your hosting's `public_html/` directory.

### 📚 Deployment Guides

Choose your preferred deployment method:
- [`VERCEL_DEPLOYMENT.md`](./VERCEL_DEPLOYMENT.md) - **Recommended**: Vercel deployment (2 minutes setup!)
- [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md) - Namecheap shared hosting instructions
- [`DEPLOYMENT_SUMMARY.md`](./DEPLOYMENT_SUMMARY.md) - Quick overview and checklist

## 📁 Project Structure

```
nexussai/
├── public/                 # Static assets
│   ├── .htaccess          # Apache configuration
│   ├── favicon.ico        # Website icon
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Feature components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and configurations
│   ├── pages/            # Page components
│   └── assets/           # Images and static files
├── dist/                 # Production build (generated)
├── docs/                 # Documentation
│   ├── DEPLOYMENT_GUIDE.md
│   └── DEPLOYMENT_SUMMARY.md
└── deploy.sh            # Deployment script
```

## 🔧 Configuration

### Environment Variables

```env
# Add any environment variables your application needs
# Example:
# VITE_API_URL=https://api.example.com
```

### Vite Configuration

The project includes optimized Vite configuration for:
- Shared hosting compatibility (relative paths)
- Code splitting and performance optimization
- Modern JavaScript bundling with SWC

## 🎨 UI Components

Built with modern UI components:
- **Radix UI**: Accessible, unstyled components
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, reusable components
- **Lucide React**: Modern icon library
- **Framer Motion**: Smooth animations

## 🔒 Security Features

- XSS protection headers
- Content type sniffing prevention
- Secure file permissions
- Environment variable protection
- HTTPS-ready configuration

## 📱 Pages & Features

- **Homepage**: Hero section, services, testimonials, pricing
- **Privacy Policy**: Complete privacy policy page
- **Terms of Service**: Comprehensive terms page
- **404 Page**: Custom not found page
- **Responsive Navigation**: Mobile-friendly navigation
- **Contact Forms**: Quote request functionality

## 🚀 Performance

- **Code Splitting**: Automatic vendor and UI chunks
- **Asset Optimization**: Minified CSS and JavaScript
- **Caching**: Long-term caching for static assets
- **Compression**: Gzip compression enabled
- **SEO**: Meta tags and structured HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the deployment guides in the `docs/` folder
- **Issues**: Report bugs and request features via GitHub Issues
- **Deployment**: Follow the step-by-step guides for hosting setup

## 🌟 Live Demo

Visit the live website: [Your Domain Here](https://your-domain.com)

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
