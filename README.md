# Abhishek Gupta — Portfolio

A modern, premium, fully responsive personal portfolio website built with React + Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark futuristic theme** — Black/deep navy + neon blue/purple/green accents
- **Animated particle background** — Canvas-based connected particle system
- **Custom neon cursor** — Smooth lagging cursor ring effect (desktop)
- **Typing animation** — Typed.js for role cycling in Hero section
- **Scroll-reveal animations** — Framer Motion + react-intersection-observer
- **Glassmorphism cards** — Frosted glass effect throughout
- **Animated skill bars** — Progress bars with shimmer effect
- **Timeline layout** — Education section with alternating timeline
- **Contact form** — Functional form with loading state
- **Scroll to top** — Animated button appears on scroll
- **Loading screen** — Animated progress loader on first visit
- **Mobile responsive** — Works on all screen sizes
- **Sticky navbar** — Active section highlighting

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          — Sticky nav with mobile menu
│   ├── Hero.jsx            — Hero with typing animation
│   ├── About.jsx           — About + stats cards
│   ├── Skills.jsx          — Skill cards with progress bars
│   ├── Projects.jsx        — Project showcase cards
│   ├── Education.jsx       — Timeline layout
│   ├── Contact.jsx         — Contact form + social links
│   ├── Footer.jsx          — Minimal footer
│   ├── Loader.jsx          — Loading screen
│   ├── CustomCursor.jsx    — Neon cursor effect
│   ├── ParticleBackground.jsx — Canvas particles
│   └── ScrollToTop.jsx     — Scroll to top button
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Run Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

```bash
# Clone / extract project
cd abhishek-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## ☁️ Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repo
4. Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy** ✅

## 🎨 Customization

### Update your info:
- **Hero.jsx** — Change name, social links
- **About.jsx** — Update bio, stats
- **Skills.jsx** — Add/remove skills and proficiency levels
- **Projects.jsx** — Add your real project links and descriptions
- **Education.jsx** — Update institution, GPA, courses
- **Contact.jsx** — Update email address

### Add your photo:
Replace the profile placeholder in `About.jsx`:
```jsx
// Replace the placeholder div with:
<img src="/your-photo.jpg" alt="Abhishek Gupta" className="w-full h-full object-cover" />
```
Place your photo in the `public/` folder.

### Update resume link:
In `Hero.jsx`, update the Download CV button href to your hosted resume URL.

## 🛠 Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| Typed.js | Typing animation |
| React Icons | Icon library |
| react-intersection-observer | Scroll triggers |

## 📝 License

MIT — Free to use and customize.
