# Modern Portfolio Website

A sleek, modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features dark theme, glassmorphism effects, smooth animations, and GitHub Pages compatibility.

## Features

- 🌙 **Dark Theme**: Beautiful dark design with glassmorphism effects
- ✨ **Smooth Animations**: Powered by Framer Motion for engaging interactions
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- 🚀 **Performance Optimized**: Fast loading with optimized images and code
- 🎨 **Modern UI**: Clean, professional design with gradient accents
- 📊 **Interactive Elements**: Animated progress bars, hover effects, and transitions
- 🔗 **GitHub Pages Ready**: Static export configuration for easy deployment

## Sections

1. **Hero Section**: Dynamic headline with call-to-action buttons
2. **About**: Professional introduction with stats and achievements
3. **Projects**: Filterable project showcase with live demos
4. **Experience**: Interactive timeline of work history
5. **Skills**: Animated skill bars and certifications
6. **Current Work**: Live updates on ongoing projects
7. **Contact**: Contact form with social links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Deployment**: GitHub Pages compatible (static export)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `components/hero.tsx` - Name, role, and introduction
- `components/about.tsx` - About section content and stats
- `components/projects.tsx` - Your projects and portfolio items
- `components/experience.tsx` - Work experience and timeline
- `components/skills.tsx` - Skills and certifications
- `components/contact.tsx` - Contact information and social links

### Styling

- Colors and gradients can be customized in `tailwind.config.ts`
- Animation settings in individual component files
- Global styles in `app/globals.css`

### Images

Replace placeholder images in the `public` folder:
- Profile photo for about section
- Project screenshots
- Any additional assets

## Deployment to GitHub Pages

1. Update `next.config.js` with your repository name:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/your-repo-name', // Add this line
  images: {
    unoptimized: true
  }
}
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `out` folder to GitHub Pages or use GitHub Actions:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## Performance Optimization

- Images are optimized and use WebP format when possible
- Code splitting with Next.js dynamic imports
- Lazy loading for images and components
- Minimal bundle size with tree shaking

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern portfolio websites
- Framer Motion for animation capabilities
- Tailwind CSS for utility-first styling
- Next.js team for the amazing framework
