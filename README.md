# 🌟 Sweekriti Biswas — Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-EA4335?style=for-the-badge&logo=gmail&logoColor=white)

**A personal portfolio website showcasing projects, skills, and a working contact form.**

[Live Demo](#) · [Projects](#-featured-projects) · [Contact](#-contact)

</div>

---

## 📖 Overview

This is a fully responsive, single-page portfolio built with **React + Vite** and styled with **Tailwind CSS**. It features smooth animations via **Framer Motion**, a filterable skills section, project showcases, a functional contact form powered by **EmailJS**, and a dark/light theme toggle — all wrapped in a cosmic-themed UI with an animated star background.

---

## ✨ Features

- 🌌 **Animated Star Background** — Dynamic particle canvas for a cosmic aesthetic
- 🎨 **Dark / Light Theme Toggle** — Persistent theme switching
- 🧑‍💼 **Hero Section** — Profile image with glowing border and animated text entrance
- 👩‍💻 **About Section** — Bio, highlights, and a downloadable CV link
- 🛠️ **Skills Section** — Filterable skill cards with animated progress bars across 5 categories
- 🗂️ **Projects Section** — Featured project cards with tags, descriptions, and GitHub/PDF links
- 📬 **Contact Form** — Working email form via EmailJS with toast notifications
- 📱 **Fully Responsive** — Mobile-first layout with a hamburger navigation menu

---

## 🗂️ Project Structure

```
src/
├── assets/
│   └── profile.jpg                  # Profile photo
├── components/
│   ├── Navbar.jsx                   # Fixed nav with scroll effect & mobile menu
│   ├── HeroSection.jsx              # Intro with profile image and CTA
│   ├── AboutSection.jsx             # Bio, highlights, CV download
│   ├── SkillsSection.jsx            # Filterable skills with progress bars
│   ├── ProjectSection.jsx           # Featured project cards
│   ├── ContactSection.jsx           # EmailJS contact form
│   ├── Footer.jsx                   # Footer
│   ├── StarBackground.jsx           # Animated canvas background
│   ├── ThemeToggle.jsx              # Dark/light mode switcher
│   └── ui/
│       ├── toast.jsx                # Toast notification component
│       └── toaster.jsx              # Toast renderer
├── hooks/
│   └── use-toast.js                 # Toast state hook
├── lib/
│   └── utils.js                     # Utility functions (cn)
├── pages/
│   ├── Home.jsx                     # Main page assembling all sections
│   └── NotFound.jsx                 # 404 page
├── App.jsx                          # Router setup
├── main.jsx                         # React entry point
└── index.css                        # Global styles & Tailwind directives
```

---

## 🛠️ Tech Stack

| Category    | Technology                              |
|-------------|------------------------------------------|
| Framework   | React 18, Vite                           |
| Styling     | Tailwind CSS, custom CSS variables       |
| Animations  | Framer Motion                            |
| Icons       | Lucide React                             |
| Email       | EmailJS (`@emailjs/browser`)             |
| Routing     | React Router DOM                         |
| UI Helpers  | `clsx`, `tailwind-merge` (via `cn`)      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sweeverse/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at **`http://localhost:5173`**.

> 🌐 **Live deployment:** [portfolio-mocha-sigma-kfrnoph4he.vercel.app](https://portfolio-mocha-sigma-kfrnoph4he.vercel.app)

### Build for Production

```bash
npm run build
```

---

## 📬 EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend. To configure it for your own use:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up an **Email Service** and **Email Template**
3. Replace the credentials in `ContactSection.jsx`:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",    // EmailJS Service ID
  "YOUR_TEMPLATE_ID",   // EmailJS Template ID
  e.target,
  "YOUR_PUBLIC_KEY"     // EmailJS Public Key
)
```

> ⚠️ For production, store these values in a `.env` file and access them via `import.meta.env.VITE_*` to avoid exposing them in your source code.

---

## 🎨 Customisation

To make this portfolio your own:

- **Profile image** — Replace `src/assets/profile.jpg`
- **Hero text & bio** — Edit `HeroSection.jsx` and `AboutSection.jsx`
- **Skills** — Update the `skills` array in `SkillsSection.jsx`
- **Projects** — Update the `projects` array in `ProjectSection.jsx`
- **CV** — Place your PDF in the `public/` folder and update the link in `AboutSection.jsx`
- **Social links** — Update hrefs in `ContactSection.jsx`
- **Theme colors** — Modify CSS variables in `index.css`

---

## 🚀 Deployment

This portfolio is deployed on **[Vercel](https://vercel.com/)** and is available at:

👉 [portfolio-mocha-sigma-kfrnoph4he.vercel.app](https://portfolio-mocha-sigma-kfrnoph4he.vercel.app)

To deploy your own fork:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/) and import your repository
3. Vercel auto-detects Vite — no configuration needed
4. Click **Deploy** and your site is live in seconds

---

<div align="center">
Designed & built by <a href="https://github.com/sweeverse">Sweekriti Biswas</a> &nbsp;·&nbsp; Kolkata, India
</div>
