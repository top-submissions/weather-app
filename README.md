# Weather App ☀️🌧️

[![GitHub License](https://img.shields.io/github/license/top-submissions/weather-app)](https://github.com/top-submissions/weather-app/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/top-submissions/weather-app)](https://github.com/top-submissions/weather-app/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/top-submissions/weather-app)](https://github.com/top-submissions/weather-app/pulls)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/top-submissions/weather-app)](https://github.com/top-submissions/weather-app/commits)
[![GitHub Stars](https://img.shields.io/github/stars/top-submissions/weather-app)](https://github.com/top-submissions/weather-app/stargazers)
[![Node Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![Webpack Version](https://img.shields.io/badge/webpack-5-blue)](https://webpack.js.org/)

> A dynamic weather forecast application that displays real-time weather data with temperature conversion and beautiful sky-inspired theming.

## 📖 Table of Contents

- [Weather App ☀️🌧️](#weather-app-️️)
  - [📖 Table of Contents](#-table-of-contents)
  - [🎯 About](#-about)
  - [✨ Features](#-features)
  - [📋 Prerequisites](#-prerequisites)
  - [🔧 Installation](#-installation)
    - [1. Clone the repository](#1-clone-the-repository)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Get your Visual Crossing API Key](#3-get-your-visual-crossing-api-key)
  - [💻 Usage](#-usage)
    - [Development Mode](#development-mode)
    - [Production Build](#production-build)
    - [Additional Commands](#additional-commands)
  - [⚙️ Configuration](#️-configuration)
  - [📜 Scripts](#-scripts)
  - [🚀 Deployment](#-deployment)
    - [GitHub Pages](#github-pages)
  - [🛠️ Built With](#️-built-with)
  - [🎓 Learning Outcomes](#-learning-outcomes)
  - [📄 License](#-license)
  - [🙏 Acknowledgments](#-acknowledgments)

## 🎯 About

This Weather App is a project from [The Odin Project](https://www.theodinproject.com/)'s JavaScript course. It demonstrates proficiency in working with external APIs, handling asynchronous JavaScript operations, and creating dynamic user interfaces.

The application fetches real-time weather data from the Visual Crossing Weather API and presents it in an intuitive, visually appealing format. Users can search for any location worldwide and view current conditions along with a forecast. The interface dynamically adapts its appearance based on weather conditions, creating an immersive experience.

Built with vanilla JavaScript, this project showcases modern web development practices including ES6 modules, async/await patterns, and responsive design—all without relying on frameworks or libraries beyond Webpack for bundling.

## ✨ Features

- **🔍 Location Search** - Search weather for any city or location worldwide
- **🌡️ Temperature Toggle** - Seamlessly switch between Fahrenheit and Celsius
- **🎨 Dynamic Theming** - Background and colors change based on weather conditions (sunny, cloudy, rainy, night)
- **📊 Detailed Weather Data** - Current temperature, feels like, humidity, wind speed, UV index, and more
- **📅 7-Day Forecast** - View weather predictions for the week ahead
- **⏰ Loading Indicator** - Smooth spinner animation while fetching data
- **❌ Error Handling** - User-friendly error messages for invalid locations or API issues
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **☁️ Weather Icons** - Beautiful weather condition icons from Weather Icons library

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** `>= 14.0.0` - [Download here](https://nodejs.org/)
- **npm** `>= 6.0.0` or **yarn** `>= 1.22.0`
- **Git** - For version control
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- **Visual Crossing API Key** - Free tier available at [Visual Crossing Weather](https://www.visualcrossing.com/weather-api)

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/top-submissions/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your Visual Crossing API Key

1. Visit [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
2. Sign up for a free account
3. Copy your API key from the dashboard
4. Open `src/modules/weatherAPI.js` and replace `'YOUR_API_KEY'` with your actual API key

```javascript
const API_KEY = 'your_actual_api_key_here';
```

## 💻 Usage

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Production Build

Build the project for production:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

### Additional Commands

```bash
# Watch mode - rebuild on file changes
npm run watch

# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

## ⚙️ Configuration

The project uses three webpack configurations:

- **`webpack.common.js`** - Shared configuration for all environments
- **`webpack.dev.js`** - Development-specific settings (source maps, dev server)
- **`webpack.prod.js`** - Production optimizations (minification, code splitting)

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run watch` | Watch for file changes and rebuild |
| `npm run lint` | Check code for linting errors |
| `npm run lint:fix` | Automatically fix linting issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is formatted correctly |
| `npm run deploy` | Deploy to GitHub Pages |

## 🚀 Deployment

### GitHub Pages

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

Your app will be live at: `https://top-submissions.github.io/weather-app`

## 🛠️ Built With

- [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Modern JavaScript
- [Webpack 5](https://webpack.js.org/) - Module bundler
- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) - Weather data provider
- [Weather Icons](https://erikflowers.github.io/weather-icons/) - Weather condition icons
- [date-fns](https://date-fns.org/) - Date formatting utility
- [ESLint](https://eslint.org/) - JavaScript linter
- [Prettier](https://prettier.io/) - Code formatter

## 🎓 Learning Outcomes

What I learned from this project:

- Promise based functions (i.e. `fetch`, etc.) return a promise, thus you must use the `await` keyword when storing their return value to a variable or expression
- `fetch` function uses `mode: 'cors'` in its options parameter as default (for now I can only interpret it as allowing a client, which is from a different origin, to access a server's information)
- Using `async` and `await` keywords to wait for data retrieval from web browser and data transfer to task queue
- `await` keyword works similarly to `.then()` and `.catch()` functions, where it unboxes the promise turning it into its raw value
- Parsing JSON into JS objects via `.json()`
- Extracting icons from raw fetch query object (i.e. `currentConditions.icon`)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) - For the excellent curriculum and project idea
- [Visual Crossing](https://www.visualcrossing.com/) - For providing the weather API
- [Weather Icons by Erik Flowers](https://erikflowers.github.io/weather-icons/) - For the beautiful weather icons
- [Webpack Documentation](https://webpack.js.org/) - For comprehensive bundler guides

---

<div align="center">

**Part of [The Odin Project](https://www.theodinproject.com/) JavaScript Course**

</div>
