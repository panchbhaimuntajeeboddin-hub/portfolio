# Arfat Panchbhai — Premium Developer Portfolio

A dynamic personal portfolio website engineered with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Features

- **Design System**: Dark theme with deep navy, electric blue, and subtle purple gradients, glassmorphism, glowing borders, and modern typography (*Outfit* + *Plus Jakarta Sans* + *Fira Code*).
- **Hero Section**:
  - Name, role (*B.Tech Computer Engineering*), headline, and dynamic typing text.
  - Interactive background particle canvas with mouse-responsive nodes.
  - Circular profile photo frame with glowing border and floating stack badges.
  - Quick action buttons (Projects, Resume PDF download, Contact Me).
- **Infinite Scrolling Photo Gallery ("My Journey Beyond Code")**:
  - Continuous right-to-left marquee auto-scroll with zero visible jump or blank gaps.
  - Pause on hover and manual pause/play toggle.
  - Left & Right manual nudge arrows.
  - Category filters (*All, College Events, Hackathons, Achievements, Memories*).
  - Accessible Lightbox modal with keyboard navigation (`Esc`, `←`, `→`).
  - Respects `prefers-reduced-motion`.
- **About Me**:
  - Animated statistics counters.
  - Education card (*B.Tech Computer Engineering*).
  - Core technical interests & primary development goals.
- **Projects Showcase**:
  - Category filtering (*Machine Learning, Computer Vision, Full Stack, AI*).
  - Featured projects: Credit Card Fraud Detection ML, AI Government Scheme Recommender, RoadGuard AI Defect Detection, and Full-Stack Web Suite.
  - Interactive project detail modals with architecture breakdowns and direct repository/demo buttons.
- **Skills Matrix**:
  - Categorized into Programming, Frontend, Backend, Database, AI/ML, and Developer Tools.
  - Zero fabricated percentages; categorized with clean competency tags.
- **Experience & Milestones Timeline**:
  - Vertical timeline with glowing nodes, category filters, and editable markers.
- **Contact Section**:
  - Client-side validation for Name, Email, Subject, and Message.
  - Confetti celebration feedback on submission.
  - One-click email copy button and clear instructions for connecting Formspree/EmailJS.
- **Sticky Navbar & Theme Support**:
  - Active section scroll tracking (scroll spy).
  - Dark / Light mode toggle with `localStorage` persistence.
  - Mobile slide-out drawer menu.

---

## 📸 Personalizing Your Photos & Content

### 1. Profile Picture
- Place your photo at: `public/images/profile.jpg`.
- If you don't add one, it automatically uses the elegant monogram avatar fallback (`public/images/profile.svg`).

### 2. Photo Gallery ("My Journey Beyond Code")
- Drop your real event/hackathon photos into: `public/images/gallery/`
- Open `src/data/gallery.js` and update the `src`, `title`, `date`, `category`, and `caption` for each item.

### 3. Projects, Skills & Resume
- **Projects**: Edit `src/data/projects.js` to change titles, descriptions, live demo links, and GitHub repositories.
- **Skills**: Edit `src/data/skills.js` to add or modify languages and tools.
- **Experience**: Edit `src/data/experience.js` to insert your exact college name, graduation year, and certifications.
- **Resume**: Replace `public/resume.pdf` with your actual resume PDF.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start the development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building for Production

```bash
npm run build
```
The compiled, optimized production files are emitted to `dist/`.

To test the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel (1-Click)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Import your `portfolio` repository.
5. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your portfolio will be live on a fast global CDN with HTTPS!
