# 🌐 Personal Portfolio Website

## 📖 Overview

This is a **personal portfolio website** I built using **React.js** and **Tailwind CSS**. It’s fully responsive, minimal, and includes a dark/light theme toggle with persistent storage using `localStorage`. The website showcases my skills, projects, and contact information in a clean and modern interface. Everything is modular and built for scalability.

---

## 🌟 Features

- ⚡ Fully responsive layout for mobile and desktop
- 🌙 Dark/light mode toggle (persists with localStorage)
- 🎨 Tailwind CSS styling with smooth transitions
- 🧩 Modular React components for easy management
- 🚀 Fast development setup using Vite
- 💬 Clean UI for About, Skills, Projects, and Contact sections

---

## ⚙️ Tech Stack

| Layer        | Technology               |
|--------------|---------------------------|
| Frontend     | React.js, JSX             |
| Styling      | Tailwind CSS              |
| Icons        | Lucide React              |
| State Mgmt   | React Hooks (`useState`, `useEffect`) |
| Build Tool   | Vite                      |
| Editor       | VS Code                   |
| Deployment   | Netlify / Vercel / GitHub Pages |

---

## 📦 Dependencies

### 🔧 Production

| Package        | Purpose                           |
|----------------|-----------------------------------|
| react          | JavaScript UI library             |
| react-dom      | React DOM rendering               |
| lucide-react   | Icon library used in UI           |

### 🛠️ Development

| Package        | Purpose                           |
|----------------|-----------------------------------|
| vite           | Fast dev server and bundler       |
| tailwindcss    | Utility-first CSS framework       |
| postcss        | CSS transformations for Tailwind  |
| autoprefixer   | Adds vendor prefixes to CSS       |

---

## 📂 Folder Structure

```bash
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── StarBackground.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── hooks/
│   │       └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.js
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md

```
## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio

```
### 2. Install Dependencies

```bash
npm install
# or
yarn install (optional)

```
### 3. Start the Development Server

```bash
npm run dev
```
Runs locally at: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Live Demo

🔗 **[View My Live Portfolio](portfolio-mocha-sigma-kfrnoph4he.vercel.app)**  

---

## 🛠️ Customization Notes

- 🖼️ **Profile Image** → `src/assets/profile.jpg`
- 📁 **Sections** → Located in `src/components/ui/`
- 🎨 **Colors & Fonts** → Controlled via Tailwind configuration
- 🔤 **Icons** → Powered by `lucide-react`, easily replaceable

---

## ✅ Final Notes

- 🔧 Clean and optimized code with functional components  
- 📐 Built for scalability and future feature additions  
- 🎯 Fully styled using Tailwind — no custom CSS needed  
- ☁️ Easy to deploy using **Netlify**, **Vercel**, or **GitHub Pages**
