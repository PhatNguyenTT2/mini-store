# 🛒 Mini Store - E-commerce Web Application

A modern, responsive e-commerce web application built with React and TailwindCSS, featuring a clean design and smooth user experience.

![Mini Store Preview](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-19.1.1-61dafb.svg)
![Vite](https://img.shields.io/badge/vite-7.1.12-646cff.svg)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-4.1.13-38bdf8.svg)

## ✨ Features

- **Modern Design**: Clean and intuitive user interface
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Product Catalog**: Browse and view product details with ratings and pricing
- **Shopping Cart**: Add products to cart with quantity management
- **Promotional Banners**: Eye-catching promotional content
- **Product Categories**: Organized product browsing experience
- **Search Functionality**: Find products quickly and easily
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.12 (Rolldown)
- **Styling**: TailwindCSS 4.1.13
- **CSS Processing**: PostCSS + Autoprefixer
- **Code Quality**: ESLint with React-specific rules
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)

You can check your current versions by running:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mini-store.git
cd mini-store
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies including:
- **Runtime Dependencies**: React, React-DOM
- **Development Dependencies**: Vite, TailwindCSS, ESLint, PostCSS, and more

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server with hot module replacement (HMR).
- **Local**: `http://localhost:5173`
- **Network**: Available for testing on mobile devices

### `npm run build`
Builds the app for production to the `dist` folder.
- Optimizes the build for best performance
- Minifies the code and hashes filenames
- Ready for deployment

### `npm run lint`
Runs ESLint to check for code quality issues.
- Identifies potential problems in JavaScript and JSX files
- Enforces consistent coding standards

### `npm run preview`
Serves the production build locally for testing.
- Useful for testing the production build before deployment

## 📁 Project Structure

```
mini-store/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # Reusable React components
│   │   ├── BannerList.jsx
│   │   ├── FeaturesRow.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── PromoBanner.jsx
│   │   └── TopBar.jsx
│   ├── screens/           # Page components
│   │   └── HomeScreen.jsx
│   ├── assets/            # Images and static files
│   │   └── react.svg
│   ├── App.jsx            # Main App component
│   ├── App.css            # App-specific styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── docs/                  # Documentation
├── eslint.config.js       # ESLint configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## 🎨 Key Components

### TopBar
- Promotional banner with countdown timer
- Full-width design for maximum impact

### Header
- Brand logo and navigation
- Search functionality
- User account and cart access

### Hero Section
- Featured product showcase
- Call-to-action buttons
- Responsive product imagery

### Product Cards
- Product images, ratings, and pricing
- Discount badges and promotional tags
- Add to cart functionality

### Promotional Banners
- Category-specific promotional content
- High-quality product imagery
- Compelling marketing messages

## 🔧 Configuration

### TailwindCSS
The project uses TailwindCSS v4 for styling. Configuration can be found in `tailwind.config.js`.

### Vite
Using Rolldown-powered Vite for faster builds. Configuration in `vite.config.js`.

### ESLint
Code quality is maintained with ESLint. Rules are configured in `eslint.config.js`.

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**Happy Coding! 🚀**