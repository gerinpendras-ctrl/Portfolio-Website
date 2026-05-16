// ============================================================
//  portfolioData.js  ·  ALL EDITABLE CONTENT IS HERE
//  Edit this file to update projects, skills, bio, and links.
// ============================================================

// ─── Personal Info ───────────────────────────────────────────
export const personal = {
  name:       "Gerin Pendras",
  tagline:    "Graphic Designer · UI/UX Designer · Frontend Developer · AI Automation Specialist",
  bio:        "Hi there! My name is Gerin Pendras. I'm a Graphic Designer / UI UX Designer / Frontend Developer / AI Automation Specialist from the Philippines. Nice to meet you! This portfolio showcases my latest graphic design works. I hope these examples demonstrate my skills and qualifications, and I look forward to the opportunity to collaborate with you.",
  location:   "Philippines",
  // Replace this with a real URL to your photo
  avatar:     "/img/Headshot.jpg",
  email:      "gerin.pendras@gmail.com",
  phone:      "(+63) 970 662 4333",
  linkedin:   "https://linkedin.com/in/gerin-pendras",   // update with real URL
  github:     "https://github.com/gerinpendras-ctrl",          // update with real URL
  behance:    "",                                          // add if you have one
};

// ─── Navigation Links ────────────────────────────────────────
export const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

// ─── Skills / Software ───────────────────────────────────────
// proficiency: 0–100
export const skills = [
  { name: "Photoshop",    icon: "/img/skills/photoshop.png",  color: "#31a8ff", proficiency: 90 },
  { name: "Illustrator",  icon: "/img/skills/illustrator.png",  color: "#ff9a00", proficiency: 85 },
  { name: "After Effects",icon: "/img/skills/after effects.png",  color: "#9999ff", proficiency: 75 },
  { name: "Premiere Pro", icon: "/img/skills/premiere pro.png",  color: "#e77dff", proficiency: 80 },
  { name: "Figma",        icon: "/img/skills/figma.png", color: "#f24e1e", proficiency: 88 },
  { name: "Notion",       icon: "/img/skills/notion.png",  color: "#ffffff",  proficiency: 85 },
  { name: "Canva",        icon: "/img/skills/canva.png",  color: "#00c4cc", proficiency: 95 },
  { name: "CapCut",       icon: "/img/skills/capcut.png",  color: "#1d1d1d",  proficiency: 80 },
  { name: "Blender",      icon: "/img/skills/blender.png",  color: "#e87d0d", proficiency: 65 },
  { name: "ChatGPT",      icon: "/img/skills/chatgpt.png",  color: "#10a37f", proficiency: 90 },
];

// ─── Project Categories ──────────────────────────────────────
// These appear as filter tabs on the /projects page.
// "All" is added automatically.
export const categories = [
  "Branding",
  "Logo Design",
  "UI/UX Design",
  "Web Design",
  "Packaging",
  "Social Media",
  "3D Design",
  "Frontend Development",
  "Automation"
];

// ─── Projects ────────────────────────────────────────────────
//
//  Each project has:
//    id          → unique slug (used in URL: /projects/:id)
//    title       → project name
//    client      → client / company name
//    year        → string year
//    categories  → array of strings from the categories list above
//    tags        → short keyword pills shown on the card
//    featured    → true = shown on Home page featured section
//    coverImage  → URL to the cover/thumbnail image
//    images      → array of URLs for the project gallery
//    summary     → short description (shown on card)
//    description → full description (shown on detail page)
//    scopeOfWork → array of strings listing deliverables
//    liveUrl     → optional: link to live project
//    caseStudyUrl→ optional: link to case study / Behance
//
// TIP: Use any image host (Cloudinary, Imgur, GitHub raw, etc.)
//      or a relative path inside /public (e.g. "/images/repay-cover.jpg")

export const projects = [
  // ── 1. RePay.ph ───────────────────────────────────────────
  {
    id:          "repay-ph",
    title:       "RePay.ph",
    client:      "RePay.ph",
    year:        "2024",
    categories:  ["Branding", "UI/UX Design"],
    tags:        ["Fintech", "Mobile App", "Brand Identity"],
    featured:    true,
    coverImage:  "/img/repay-cover.jpg",
    images: [
      "/img/repay/repay-9.jpg",
      "/img/repay/repay-1.png",
      "/img/repay/repay-2.png",
      "/img/repay/repay-3.png",
      "/img/repay/repay-4.png",
      "/img/repay/repay-5.jpg",
      "/img/repay/repay-6.jpg",
      "/img/repay/repay-7.jpg",
      "/img/repay/repay-8.jpg",
    ],
    summary:     "Brand identity enhancement and UI/UX design for a Philippine fintech platform.",
    description: `RePay is a financial technology company dedicated to innovating the fintech landscape in the Philippines. I worked with them to improve on their existing brand identity — delivering a cohesive visual system, UI/UX for both the web app and mobile app, plus full stationery collaterals. \n\n **The Problem** \nRePay faced the following issues, whose effects rippled across all of its touchpoints:\n 1.No clear brand guidelines \nCluttered color palettes and visual motifs. The result? Collaterals and creatives seemed like they came from different brands \nOutdated visuals, which have been known to lessen brand impact and undermine user trust and satisfaction`,
    scopeOfWork: [
      "Visual Design Guidelines",
      "Visual Enhancement",
      "Stationery and Collaterals",
      "UI/UX Design (Web & Mobile)",
      "Mockups",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },

  // ── 2. Arya's Catering ────────────────────────────────────
  {
    id:          "aryas-catering",
    title:       "Arya's Catering",
    client:      "Arya's Catering",
    year:        "2023",
    categories:  ["Branding", "Social Media"],
    tags:        ["Catering", "Brand Identity", "Social Media"],
    featured:    true,
    coverImage:  "/img/aryas-cover.png",
    images: [
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Brand+Identity+Guidelines",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Logo+%26+Color+Palette",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Social+Media+Designs",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=AVP+Creation",
    ],
    summary:     "Full brand identity and social media strategy for a well-known Parañaque catering company.",
    description: "Arya's Catering is a mid-sized catering company that is well-known in the city of Parañaque. I worked together with them to create a brand identity that will allow them to be more recognizable across social media platforms.",
    scopeOfWork: [
      "Brand Identity Guidelines (Logo, Color Palette, Visual Guidelines)",
      "Marketing Strategy",
      "Social Media Management",
      "AVP Creation",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },

  // ── 3. Altered Paradigm ───────────────────────────────────
  {
    id:          "altered-paradigm",
    title:       "Altered Paradigm",
    client:      "Altered Paradigm",
    year:        "2024",
    categories:  ["Branding", "UI/UX Design", "3D Design"],
    tags:        ["DeFi", "Blockchain", "Brand Identity", "Landing Page", "3D"],
    featured:    true,
    coverImage:  "/img/altered-paradigm.jpg",
    images: [
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Brand+Identity",
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=DeFi+Landing+Page",
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=3D+Visual+Elements",
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Stationery+%26+Collaterals",
    ],
    summary:     "Ground-up brand identity and DeFi landing page for a blockchain finance platform.",
    description: "Altered Paradigm is a Decentralized Finance Platform that offered a revolutionary approach to the relatively new industry of blockchain applications. We worked with them to develop their brand identity from the ground up.",
    scopeOfWork: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Visual Design Guidelines",
      "Visual Enhancement",
      "Stationery and Collaterals",
      "Mockups",
      "3D Work for Visual Elements",
      "UI/UX Design (Landing Page)",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },

  // ── 4. Liksi Lifestyle ────────────────────────────────────
  {
    id:          "liksi-lifestyle",
    title:       "Liksi Lifestyle",
    client:      "Liksi Lifestyle",
    year:        "2024",
    categories:  ["Web Design", "UI/UX Design"],
    tags:        ["E-commerce", "Shopify", "Running Apparel"],
    featured:    true,
    coverImage:  "/img/liksi-cover.png",
    images: [
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Home+Page",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Catalog+Page",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Product+Page",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Cart+%26+Checkout",
    ],
    summary:     "Shopify website for a running-focused lifestyle and apparel brand.",
    description: "Liksi Lifestyle is a lifestyle brand focused on the running community, offering apparel designed for runners. I worked closely with the team to build their Shopify website, ensuring the design reflected the brand's identity and community-driven values.",
    scopeOfWork: [
      "Home Page",
      "Catalog Page",
      "Product Page",
      "Cart Page",
      "Checkout Page",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },

  // ── 5. Arya's Coffee ──────────────────────────────────────
  {
    id:          "aryas-coffee",
    title:       "Arya's Coffee",
    client:      "Arya's Coffee",
    year:        "2024",
    categories:  ["Branding", "Packaging"],
    tags:        ["Coffee Chain", "Brand Identity", "Packaging", "Poster Design"],
    featured:    false,
    coverImage:  "/img/aryascoffee-cover.png",
    images: [
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Color+Palette+%26+Guidelines",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Package+Design",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Poster+Designs",
      "https://placehold.co/1200x750/0d2e2e/f5c840?text=Stationery+%26+Collaterals",
    ],
    summary:     "Brand identity, packaging, and poster design for an up-and-coming Filipino coffee chain.",
    description: "Coming from the same owner of Arya's Catering, Arya's Coffee is an up-and-coming coffee chain that serves premium coffee embodying the heart and soul of the Filipinos. We worked with them to build a new brand identity from scratch.",
    scopeOfWork: [
      "Color Palette",
      "Visual Design Guidelines",
      "Stationery and Collaterals",
      "Typography",
      "Mockups",
      "Package Design",
      "Poster Designs",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },

  // ── 6. Hitek Excel ────────────────────────────────────────
  {
    id:          "hitek-excel",
    title:       "Hitek Excel Joint Venture",
    client:      "Hitek Excel",
    year:        "2023",
    categories:  ["Branding", "Logo Design"],
    tags:        ["Investment", "Industrial", "Brand Identity"],
    featured:    false,
    coverImage:  "/img/hitek-cover.png",
    images: [
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Logo+Design",
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Color+Palette",
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Visual+Design+Guidelines",
    ],
    summary:     "Clean, consistent brand identity for a private industrial investment company.",
    description: "Hitek Excel is a private investment company primarily focusing on the industrial sector. We worked with them to develop a very simple brand identity that will help them be more consistent.",
    scopeOfWork: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Visual Design Guidelines",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },

  // ── 7. Logofolio ──────────────────────────────────────────
  {
    id:          "logofolio",
    title:       "Logofolio",
    client:      "Various Clients",
    year:        "2022–2024",
    categories:  ["Logo Design"],
    tags:        ["Logos", "Brand Marks", "Identity"],
    featured:    true,
    coverImage:  "https://placehold.co/800x500/0d2e2e/2ee8c6?text=Logofolio",
    images: [
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Logofolio+Grid",
      "https://placehold.co/600x400/071a1a/2ee8c6?text=Biotech",
      "https://placehold.co/600x400/f0a500/071a1a?text=Yin-Yang+Energy",
      "https://placehold.co/600x400/1a1a1a/ff4500?text=Lava",
      "https://placehold.co/600x400/c0392b/ffffff?text=Rattlesnake+Fashion",
      "https://placehold.co/600x400/6c3483/ffffff?text=Psychedelic",
      "https://placehold.co/600x400/1a2a4a/c8d6e5?text=Gears",
      "https://placehold.co/600x400/f9d0b8/4a2c2a?text=Wundt",
      "https://placehold.co/600x400/1a1a1a/ffffff?text=MTE",
      "https://placehold.co/600x400/2980b9/ffffff?text=Fajardo+Architecture",
      "https://placehold.co/600x400/1a1a1a/c0392b?text=Wayfire",
    ],
    summary:     "A curated collection of logo designs spanning various industries and styles.",
    description: "A diverse logofolio showcasing brand marks created for clients across fintech, lifestyle, fashion, food & beverage, architecture, and more. Each logo distills a brand's essence into a single, memorable mark.",
    scopeOfWork: [
      "Logofolio includes: Biotech, Yin-Yang Energy Solutions, Lava, Rattlesnake Fashion, RePay.ph, Altered Paradigm, Arya's Coffee, Hitek Excel, Psychedelic, Gears, Wundt, MTE, Fajardo Architecture, Wayfire",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },

  // ── 8. Real Estate Marketplace ────────────────────────────
  {
    id:          "real-estate-marketplace",
    title:       "RealHomes",
    client:      "Confidential Client",
    year:        "2024",
    categories:  ["UI/UX Design", "Web Design"],
    tags:        ["Real Estate", "Web App", "Digital Transactions"],
    featured:    false,
    coverImage:  "/img/realhomes.png",
    images: [
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Landing+Page",
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Property+Listing",
      "https://placehold.co/1200x750/0d2e2e/2ee8c6?text=Transaction+Flow",
    ],
    summary:     "SaaS all-in-one real estate marketplace enabling fully digital property transactions.",
    description: "An all-in-one real estate marketplace capable of fully digital real estate transactions — from browsing listings to signing and payment — designed for a seamless end-to-end user experience.",
    scopeOfWork: [
      "UI/UX Design",
      "Web App Design",
      "User Flow & Wireframes",
      "High-Fidelity Mockups",
    ],
    liveUrl:      "",
    caseStudyUrl: "",
  },
];
