# Portfolio - Loïc Kaltenbach

A modern, responsive portfolio website built with React and Vite, showcasing my work as a Full Stack Developer.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **GitHub Integration**: Automatically fetches and displays my latest projects from GitHub API
- **Modern Tech Stack**: Built with React, Vite, and modern CSS
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **SEO Optimized**: Complete SEO implementation with structured data, meta tags, and performance optimization
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **PWA Ready**: Progressive Web App features with manifest and service worker support

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Animations**: Framer Motion
- **Styling**: Modern CSS with responsive design
- **Deployment**: GitHub Pages with GitHub Actions
- **API Integration**: GitHub REST API for project showcase

## 📱 Sections

### 🏠 Home
Clean hero section with professional introduction and call-to-action

### 💼 Projects
Dynamic showcase of my GitHub repositories with:
- Project descriptions
- Technology tags
- Star counts
- Live demo and code links

### 📞 Contact
Simple contact section with:
- Professional email contact
- Location and specialization info
- **Anti-spam protected contact form**
- Security challenges and rate limiting
- Honeypot and content validation
- Mailto functionality with fallback

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Loickaltenbach/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### Manual Deployment to GitHub Pages

```bash
npm run deploy
```

### Automatic Deployment

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Header.css
│   │   ├── Hero.jsx          # Hero section
│   │   ├── Hero.css
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx       # Contact section with anti-spam
│   │   ├── Contact.css
│   │   ├── Footer.jsx        # Footer
│   │   └── Footer.css
│   ├── utils/
│   │   ├── seo.js           # SEO utilities
│   │   ├── antiSpam.js      # Anti-spam protection
│   │   └── contactSecurity.js # Enhanced security features
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions workflow
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── SEO_CHECKLIST.md
└── ANTI_SPAM_DOCUMENTATION.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Your name and title
- `src/components/Contact.jsx` - Your email address
- `src/components/Footer.jsx` - Your social links
- `src/components/Projects.jsx` - Your GitHub username in the API call

### Styling
All components have their own CSS files for easy customization:
- Modify colors, fonts, and layouts in the respective `.css` files
- Global styles are in `src/index.css` and `src/App.css`

### GitHub API
The project fetches repositories from GitHub. To use your own repositories:
1. Update the GitHub username in `src/components/Projects.jsx`
2. Optionally, add a GitHub token for higher API rate limits

### SEO Optimization
The portfolio includes comprehensive SEO features:
- Complete meta tags (title, description, keywords, Open Graph, Twitter Cards)
- JSON-LD structured data for better search engine understanding
- Sitemap.xml and robots.txt files
- Performance optimizations for Core Web Vitals
- Accessibility compliance with ARIA labels and semantic HTML
- PWA manifest for mobile app-like experience

For detailed SEO information, see `SEO_CHECKLIST.md`

## 📧 Contact

Loïc Kaltenbach - [Your Email]
Project Link: [https://github.com/Loickaltenbach/portfolio](https://github.com/Loickaltenbach/portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
