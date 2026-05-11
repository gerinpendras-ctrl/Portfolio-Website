# Gerin Pendras — Portfolio Website

A senior-level portfolio website built with **React + Vite + Tailwind CSS**.

## ✨ Features

- Fully responsive (mobile → desktop)
- Multi-page SPA (Home, Projects, About, Contact)
- Category filter on Projects page
- Lightbox gallery on Project Detail pages
- Animated scroll reveals & floating decorations
- All content in **one editable data file**
- Ready to deploy on GitHub Pages

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📝 Editing Content

**All content lives in one file:**

```
src/data/portfolioData.js
```

### What you can edit there:

| Section | What to change |
|---------|---------------|
| `personal` | Name, bio, email, phone, LinkedIn, GitHub, avatar URL |
| `skills` | Software list, icon letters, colors, proficiency % |
| `categories` | Filter categories shown on the Projects page |
| `projects` | Title, description, images, categories, scope of work, links |

### Updating Project Images

Each project has a `coverImage` and an `images` array. Replace the placeholder URLs with real image URLs:

```js
coverImage: "https://your-image-host.com/my-project-cover.jpg",
images: [
  "https://your-image-host.com/screenshot-1.jpg",
  "https://your-image-host.com/screenshot-2.jpg",
],
```

**Recommended image hosts:**
- [Cloudinary](https://cloudinary.com) (free tier available)
- [Imgur](https://imgur.com)
- GitHub repository (raw URL) — put images in `/public/images/` and reference as `/images/filename.jpg`
- Google Drive (use a direct link generator)

### Adding a New Project

Copy and paste a project block in `portfolioData.js` and fill in your details:

```js
{
  id:          "my-new-project",      // URL slug — must be unique, no spaces
  title:       "My New Project",
  client:      "Client Name",
  year:        "2025",
  categories:  ["Branding"],          // must match categories array
  tags:        ["Logo", "Identity"],
  featured:    false,                 // true = shown on Home page
  coverImage:  "https://...",
  images:      ["https://...", "https://..."],
  summary:     "Short description for the card.",
  description: "Full description for the detail page.",
  scopeOfWork: ["Logo Design", "Color Palette"],
  liveUrl:      "",
  caseStudyUrl: "",
},
```

### Adding a New Category

In `portfolioData.js`, add the category string to the `categories` array:

```js
export const categories = [
  "Branding",
  "Logo Design",
  "My New Category",   // ← add here
  ...
];
```

Then use it in any project's `categories` array.

---

## 🌐 Deploying to GitHub Pages

### One-time setup

1. Push this repository to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. That's it! Every push to `main` automatically deploys.

Your site will be live at:
```
https://<your-username>.github.io/<repo-name>/
```

### Manual deploy (alternative)

```bash
npm run build
# Upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages)
```

---

## 🎨 Branding / Theming

Colors and fonts are defined in `tailwind.config.js`:

```js
colors: {
  'teal':       '#2ee8c6',  // primary accent
  'gold':       '#f5c840',  // secondary accent
  'bg-base':    '#071a1a',  // main background
  // ...
}
fontFamily: {
  display: ['"Fredoka One"', 'cursive'],   // headings
  body:    ['"Nunito"', 'sans-serif'],      // body text
}
```

---

## 📦 Tech Stack

- [React 18](https://react.dev)
- [Vite 5](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- [React Router 6](https://reactrouter.com)
- [Lucide React](https://lucide.dev) (icons)
