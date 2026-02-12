
# 🚀 Shiva Bodduna - Portfolio Website

A stunning, modern portfolio website featuring glassmorphism design, smooth animations, and an exceptional user experience.

## ✨ Features

- **Modern Design**: Glassmorphism effects with animated gradient orbs
- **Responsive Layout**: Perfectly adapts to all screen sizes
- **Smooth Animations**: Page transitions, hover effects, and scroll animations
- **Interactive Elements**: Animated skill bars, floating particles, and dynamic backgrounds
- **Clean Code**: Well-organized HTML, CSS, and JavaScript
- **Performance Optimized**: Fast loading with minimal dependencies

## 🎨 Design Highlights

- **Glassmorphic Cards**: Frosted glass effect with blur and transparency
- **Gradient Accents**: Beautiful color combinations throughout
- **Custom Fonts**: Google Fonts (Outfit & JetBrains Mono)
- **Animated Backgrounds**: Floating particles and pulsing gradient orbs
- **Micro-interactions**: Smooth hover states and click effects
- **Professional Typography**: Clear hierarchy and readability

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── assets/
│   └── avatar.svg      # Profile picture (replace with your photo)
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Open Locally

1. Download all files
2. Replace `assets/avatar.svg` with your own profile picture (avatar.jpg)
3. Open `index.html` in your browser
4. Customize the content as needed

### Option 2: Deploy Online

Deploy to any static hosting service:

- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Import from GitHub
- **Cloudflare Pages**: Connect your repository

## 🎨 Customization Guide

### Colors

Edit the CSS variables in `style.css` (lines 3-20):

```css
:root {
  --primary: #6366f1;        /* Main brand color */
  --secondary: #ec4899;      /* Accent color */
  --accent: #f59e0b;         /* Highlight color */
  --success: #10b981;        /* Success/live indicators */
  
  --bg-primary: #0a0a0f;     /* Main background */
  --bg-secondary: #13131a;   /* Secondary background */
}
```

### Profile Photo

Replace `assets/avatar.svg` with your own image:
1. Save your photo as `assets/avatar.jpg` or `avatar.png`
2. Update line 45 in `index.html`:
```html
<img src="assets/avatar.jpg" alt="Your Name" class="avatar" />
```

### Content

Edit `index.html` to update:
- Name and title (lines 44-50)
- Contact information (lines 54-84)
- Social media links (lines 88-96)
- About section (lines 128-176)
- Experience details (lines 189-217)
- Projects (lines 230-305)
- Skills (lines 318-455)
- Education (lines 468-495)

### Projects

To add/modify projects, edit the `.project-card` sections (starting line 230):

```html
<div class="project-card">
  <div class="project-header">
    <div class="project-icon">
      <i class="fas fa-your-icon"></i>
    </div>
    <div class="project-status">Live</div>
  </div>
  
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-description">
    Your project description here...
  </p>
  
  <div class="project-tech">
    <span class="tech-badge">React</span>
    <span class="tech-badge">Node.js</span>
  </div>
  
  <div class="project-links">
    <a href="https://your-project-url.com" target="_blank" class="project-link">
      <span>View Live</span>
      <i class="fas fa-external-link-alt"></i>
    </a>
  </div>
</div>
```

### Adding New Sections

1. Add a new tab button in the navigation (line 113):
```html
<button class="nav-tab" onclick="switchTab('newSection', this)">
  <i class="fas fa-icon"></i>
  <span>New Section</span>
</button>
```

2. Add the section content (around line 500):
```html
<section id="newSection" class="content-section">
  <div class="section-header">
    <h2 class="section-title">New Section</h2>
    <div class="title-decoration"></div>
  </div>
  
  <div class="your-content">
    <!-- Your content here -->
  </div>
</section>
```

## 🎯 Font Awesome Icons

This portfolio uses Font Awesome 6 for icons. Find icons at:
https://fontawesome.com/icons

Common icons used:
- `fa-envelope` - Email
- `fa-phone` - Phone
- `fa-map-marker-alt` - Location
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn
- `fa-code` - Code/Projects
- `fa-graduation-cap` - Education
- `fa-briefcase` - Work/Experience

## 🔧 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 968px - 1199px
- Mobile: 640px - 967px
- Small Mobile: < 640px

## 🎭 Animation Features

- Floating particles background
- Pulsing gradient orbs
- Smooth tab transitions
- Animated skill progress bars
- Hover effects on all interactive elements
- Scroll-triggered animations
- Parallax effects on mouse movement

## 💡 Tips

1. **Images**: Use high-quality photos (minimum 400x400px for avatar)
2. **Colors**: Stick to 2-3 main colors for consistency
3. **Content**: Keep descriptions concise and impactful
4. **Links**: Test all external links before deployment
5. **Performance**: Optimize images before upload (use WebP format)

## 🐛 Troubleshooting

**Issue**: Avatar not showing
- Solution: Check file path and ensure image is in assets folder

**Issue**: Animations not working
- Solution: Ensure JavaScript is enabled and script.js is loaded

**Issue**: Layout breaks on mobile
- Solution: Test in browser dev tools mobile view

**Issue**: Fonts not loading
- Solution: Check internet connection (fonts load from Google CDN)

## 📄 License

Free to use for personal portfolios. Please credit if you use the design.

## 🤝 Support

For questions or issues:
- Email: shivabodduna5@gmail.com
- GitHub: [@ShivaBoddunaa](https://github.com/ShivaBoddunaa)

## 🎉 Credits

- Design & Development: Shiva Bodduna
- Fonts: Google Fonts (Outfit, JetBrains Mono)
- Icons: Font Awesome

---

**Made with ❤️ by Shiva Bodduna**

