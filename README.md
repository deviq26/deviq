# DevIQ — ابنِ. برمج. ابتكر. | Build. Code. Innovate.

[![Deploy DevIQ to GitHub Pages](https://github.com/deviq26/deviq/actions/workflows/deploy.yml/badge.svg)](https://github.com/deviq26/deviq/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-0d9488?style=flat&logo=github)](https://deviq26.github.io/deviq/)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20CSS%20v4%20%7C%20Vite-6366f1)](https://deviq.dev)

DevIQ is a modern software development brand specializing in custom software, AI solutions, web applications, mobile apps, and desktop systems.

---

## 🌟 Key Features

* **Bilingual Arabic & English (RTL & LTR Native)**: Complete bidirectional mirroring, native typography (Cairo, IBM Plex Sans Arabic, Plus Jakarta Sans), and state persistence in `localStorage`.
* **Eye-Friendly Soft Pastel Palette**: Warm organic linen background (`#f7f6f2`), deep high-contrast text (`text-slate-950`), and soft ambient gradient mesh animations.
* **Interactive Dev Robot Mascot (`AnimatedDevFigure`)**: Custom vector mascot with blinking digital eyes, waving interaction, and floating tech badges.
* **Full Responsive Design**: Optimized for mobile phones, tablets, laptops, and ultra-wide screens with zero horizontal overflow.
* **Dedicated Pages**:
  * **Home**: Hero with interactive mascot/terminal switcher, services preview, workflow steps, why choose us, demo projects showcase, and CTA.
  * **Services**: Comprehensive breakdown of Web Development, Mobile Apps, Desktop Systems, and Artificial Intelligence.
  * **Portfolio**: Filterable showcase with detailed modal views for each project.
  * **About Us**: Mission, values, and engineering standards.
  * **FAQ**: Interactive accordion addressing common client questions.
  * **Contact & Inquiry**: Multi-step inquiry form generating direct WhatsApp and Email drafts with zero fake backend claims.
  * **Admin Advisory Notice**: Documenting secure architecture requirements for future backend expansion.

---

## 🚀 Getting Started

### Prerequisites
* Node.js 20+
* npm 10+

### Installation
```bash
# Clone the repository
git clone https://github.com/deviq26/deviq.git
cd deviq

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 🌐 GitHub Pages Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages upon pushing to the `main` branch.

### Enabling GitHub Pages on GitHub:
1. Go to your repository on GitHub: `https://github.com/deviq26/deviq`.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your changes to `main`, and the site will be deployed at:
   ```
   https://deviq26.github.io/deviq/
   ```

---

## 📁 Project Structure

```
deviq/
├── .github/workflows/deploy.yml # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── 404.html                 # SPA redirect resolver for GitHub Pages
│   └── favicon.svg              # DevIQ vector brand icon
├── src/
│   ├── components/
│   │   ├── common/              # Logo, Mascot, Badges, Modals, Buttons
│   │   ├── home/                # Hero, Services, Workflow, CTA
│   │   ├── layout/              # Navbar, Footer, Layout wrapper
│   │   ├── portfolio/           # Project cards, filtering, detail modal
│   │   └── contact/             # Direct inquiry form and channels
│   ├── config/
│   │   └── contact.ts           # Centralized WhatsApp, Email, & social configs
│   ├── context/
│   │   └── LanguageContext.tsx  # RTL/LTR bilingual state management
│   ├── data/                    # Reusable services, portfolio, and FAQ datasets
│   ├── pages/                   # Route page views
│   ├── App.tsx                  # Root router with BASE_URL support
│   ├── index.css                # Tailwind CSS v4 design tokens and keyframes
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts               # Configured with /deviq/ base for GitHub Pages
```

---

## 📄 License & Brand
&copy; 2026 DevIQ. All rights reserved.
