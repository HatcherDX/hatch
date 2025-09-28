# Hatcher Documentation

Official documentation site for Hatcher - The IDE for Controlled AI Development.

🌐 **Live Site**: [https://hatch.rs](https://hatch.rs)

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
.
├── .vitepress/          # VitePress configuration and theme
│   ├── config.mts      # Site configuration
│   └── theme/          # Custom theme components
├── public/             # Static assets (favicon, CNAME, etc.)
├── ar/                 # Arabic translations
├── de/                 # German translations
├── es/                 # Spanish translations
├── fa/                 # Persian translations
├── fr/                 # French translations
├── hi/                 # Hindi translations
├── id/                 # Indonesian translations
├── ja/                 # Japanese translations
├── ko/                 # Korean translations
├── pt/                 # Portuguese translations
├── ru/                 # Russian translations
├── zh-cn/              # Chinese (Simplified) translations
└── *.md                # English documentation pages
```

## 🌍 Supported Languages

- 🇬🇧 English
- 🇪🇸 Español
- 🇫🇷 Français
- 🇩🇪 Deutsch
- 🇨🇳 简体中文
- 🇯🇵 日本語
- 🇰🇷 한국어
- 🇵🇹 Português
- 🇷🇺 Русский
- 🇸🇦 العربية
- 🇮🇳 हिन्दी
- 🇮🇷 فارسی
- 🇮🇩 Bahasa Indonesia

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build the site
pnpm build

# The built site will be in .vitepress/dist/
```

## 🛠️ Development

This documentation is built with [VitePress](https://vitepress.dev/), a static site generator powered by Vue 3 and Vite.

### Key Technologies

- **VitePress**: Static site generator
- **Vue 3**: JavaScript framework
- **TypeScript**: Type-safe development
- **pnpm**: Fast, disk space efficient package manager

## 📝 Contributing

Contributions to improve the documentation are welcome! Please feel free to submit issues or pull requests.

## 📄 License

MIT License - See the main [Hatcher repository](https://github.com/HatcherDX/dx-engine) for details.

---

**Hatcher** - Command a fleet of AI drones that code while you sleep. The IDE where you are the Commander, not the debugger.