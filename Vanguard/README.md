# ⚡ VANGUARD | Creative Agency Landing Page

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62B)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-FF5A5F?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

An ultra-premium, interactive landing page for **Vanguard**, a world-class digital collective. This site is designed with a sleek, dark aesthetic combining glassmorphic elements, modern typography, immersive video backdrops, and custom CSS-driven micro-interactions.

---

## ✨ Features

- 🎥 **Cinematic Video Background** – Captivating, high-definition video background paired with a dark gradient vignette for readable content and rich aesthetics.
- 🎛️ **Sliding Pill Navigation** – A futuristic, cylindrical frosted-glass pill indicator that dynamically slides and tracks navigation items on hover.
- 🕒 **Live Timezone Tracker** – Active world-clock components displaying exact real-time hours for **New York (NYC)**, **London (LON)**, and **Tokyo (TOK)**.
- 👑 **Premium Branding & Typography** – Utilizes high-impact **PODIUM Sharp** and **Inter** typography to deliver a bold, editorial aesthetic.
- 📱 **Staggered Mobile Menu** – A fully custom, fullscreen mobile menu overlay with staggered transition delays for navigation links and buttons.
- ⚡ **Built for Speed** – Compiles instantly using **Vite**, **TypeScript**, and **Tailwind CSS** for optimized bundles and zero lag.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
vanguard-landing-page/
├── public/                  # Static assets
│   ├── favicon.svg          # Custom favicon
│   └── icons.svg            # SVG Icon assets
├── src/
│   ├── assets/              # Locally stored images and vectors
│   ├── App.tsx              # Main application component & interactive state
│   ├── index.css            # Tailwind directives and custom animation classes
│   └── main.tsx             # Application entry point
├── tailwind.config.js       # Tailwind customizations
├── vite.config.ts           # Vite configuration & build plugins
└── package.json             # Scripts & project dependencies
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nikhilkr014/vanguard-landing-page.git
   cd vanguard-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

4. **Build the production bundle:**
   ```bash
   npm run build
   ```

---

## 🎨 Interactive Showcases

### The Sliding Glass Pill
```tsx
// Experience state-driven glassmorphic pills that float smoothly behind nav items
const handleMouseEnterNav = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
  const el = e.currentTarget;
  setPillStyle({
    left: el.offsetLeft,
    width: el.offsetWidth,
    height: el.offsetHeight,
    top: el.offsetTop,
    opacity: 1,
  });
  setHoveredIndex(index);
};
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Developed with 🖤 by <a href="https://github.com/Nikhilkr014">Nikhilkr014</a>
</p>
