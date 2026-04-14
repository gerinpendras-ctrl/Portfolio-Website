/**
 * projects.js
 *
 * Single source of truth for all project data.
 * Import this wherever you need project information:
 *
 *   import { projects, getProject } from '@/data/projects';
 *
 * Each project object is intentionally flat so components can
 * destructure exactly what they need without nested lookups.
 */

export const projects = [
  {
    // ── Identifiers ──────────────────────────────────────────────
    id:    'terranova',
    index: '01',
    featured: true,

    // ── Card display ─────────────────────────────────────────────
    title:       'Terranova Spirits',
    subtitle:    'Brand Identity',
    description: 'A full visual identity system for a premium artisanal gin distillery — from logotype and packaging to brand guidelines and environmental signage.',
    tags:        ['Branding', 'Packaging', 'Typography'],

    // ── Detail page ───────────────────────────────────────────────
    year:     '2024',
    client:   'Terranova Distillery',
    role:     'Brand Designer & Art Director',
    category: 'Brand Identity · Packaging',

    // Thumbnail gradient used in card + detail hero image
    // Replace with a real image path when assets are ready:
    //   thumbImage: '/images/projects/terranova-hero.jpg'
    thumbGradient: 'linear-gradient(135deg, #0f2926, #1a4025, #2a5c35)',
    thumbLabel:    'TERRA',

    // Gallery images — add real paths when assets are ready
    gallery: [
      { gradient: 'linear-gradient(135deg,#0f2926,#1a4025)',   caption: 'Primary logotype — light' },
      { gradient: 'linear-gradient(135deg,#2b1a0d,#e8891a)',   caption: 'Label system — SKU 01' },
      { gradient: 'linear-gradient(135deg,#1a4025,#1a3d3a)',   caption: 'Label system — SKU 02' },
      { gradient: 'linear-gradient(135deg,#1a1a2e,#2d6642)',   caption: 'Brand guidelines spread' },
      { gradient: 'linear-gradient(135deg,#0d2b14,#3d8055)',   caption: 'Environmental signage' },
    ],

    // Rich body copy — use an array of { type, content } blocks so
    // the component can render headings and paragraphs without
    // dangerouslySetInnerHTML.
    body: [
      {
        type: 'paragraph',
        content:
          "Terranova came to me with a simple brief: make premium gin look like it belongs on the world's finest bars. What emerged was a complete identity system rooted in the landscape of the distillery's home — the volcanic highlands of Northern Luzon.",
      },
      { type: 'heading', content: 'The Challenge' },
      {
        type: 'paragraph',
        content:
          'The artisanal spirits market is saturated with vintage-inspired labels and hand-lettered type. The challenge was to feel handcrafted and premium without leaning on the expected visual clichés of the category.',
      },
      { type: 'heading', content: 'The Approach' },
      {
        type: 'paragraph',
        content:
          'I developed a custom logotype based on the geological cross-section of volcanic rock strata — layered, ancient, and precise. The color palette draws from mineral-rich soil: deep greens, burnished gold, and terracotta. The result is a brand that feels both rooted and elevated.',
      },
      { type: 'heading', content: 'Deliverables' },
      {
        type: 'paragraph',
        content:
          'Brand strategy and positioning, logotype design, full label system (3 SKUs), brand guidelines, environmental signage, and launch campaign assets.',
      },
    ],
  },

  {
    id:    'solstice',
    index: '02',
    featured: false,

    title:       'Solstice Editorial',
    subtitle:    'Design',
    description: 'A quarterly arts magazine — art direction, grid systems, and type hierarchy for a 120-page bi-annual print run.',
    tags:        ['Editorial', 'Print'],

    year:     '2023',
    client:   'Solstice Magazine',
    role:     'Art Director',
    category: 'Editorial · Print',

    thumbGradient: 'linear-gradient(135deg, #2b1a0d, #6b3d10, #e8891a)',
    thumbLabel:    'SOL',

    gallery: [
      { gradient: 'linear-gradient(135deg,#2b1a0d,#6b3d10)',   caption: 'Issue 07 — cover' },
      { gradient: 'linear-gradient(135deg,#3d1a00,#e8891a)',   caption: 'Interior spread — feature' },
      { gradient: 'linear-gradient(135deg,#1a4025,#1a3d3a)',   caption: 'Typography system' },
      { gradient: 'linear-gradient(135deg,#0f2926,#2d6642)',   caption: 'Contents page' },
      { gradient: 'linear-gradient(135deg,#1a1a2e,#3d8055)',   caption: 'Photo essay layout' },
    ],

    body: [
      {
        type: 'paragraph',
        content:
          'Solstice is a biannual arts and culture magazine based in Singapore. I served as Art Director for Issues 07 through 11, shaping the visual language of each 120-page edition.',
      },
      { type: 'heading', content: 'The Challenge' },
      {
        type: 'paragraph',
        content:
          'Each issue explores a different elemental theme — earth, water, fire, air, and time. The design system needed to flex dramatically between issues while maintaining a recognizable editorial voice.',
      },
      { type: 'heading', content: 'The Approach' },
      {
        type: 'paragraph',
        content:
          'I built a modular grid system that could hold both maximalist image-led spreads and quiet text-heavy pages. Typography became the primary expressive tool: each issue featured a unique display typeface that interpreted the theme through letterform.',
      },
      { type: 'heading', content: 'Impact' },
      {
        type: 'paragraph',
        content:
          'Under this art direction the magazine was longlisted for the IDN Design Awards and circulation grew by 40% over two years.',
      },
    ],
  },

  {
    id:    'verdant',
    index: '03',
    featured: false,

    title:       'Verdant Co.',
    subtitle:    'Complete Rebrand',
    description: 'Complete brand overhaul for a sustainable lifestyle company — strategy, identity, and digital design systems.',
    tags:        ['Rebrand', 'Digital'],

    year:     '2024',
    client:   'Verdant Co.',
    role:     'Lead Designer',
    category: 'Rebrand · Digital',

    thumbGradient: 'linear-gradient(135deg, #1a4025, #1a3d3a, #0d1f1d)',
    thumbLabel:    'VRD',

    gallery: [
      { gradient: 'linear-gradient(135deg,#1a4025,#1a3d3a)',   caption: 'New logotype' },
      { gradient: 'linear-gradient(135deg,#0f2926,#2d6642)',   caption: 'Brand palette' },
      { gradient: 'linear-gradient(135deg,#2b1a0d,#e8891a)',   caption: 'Packaging redesign' },
      { gradient: 'linear-gradient(135deg,#1a1a2e,#3d8055)',   caption: 'Digital guidelines' },
      { gradient: 'linear-gradient(135deg,#0d2b14,#1a4025)',   caption: 'Brand book spread' },
    ],

    body: [
      {
        type: 'paragraph',
        content:
          "Verdant Co. had outgrown their original identity — a well-meaning but unfocused visual system that failed to communicate the sophistication of their product line. They needed a rebrand that could carry them into a premium market tier.",
      },
      { type: 'heading', content: 'Strategy First' },
      {
        type: 'paragraph',
        content:
          'Before designing a single mark, I led a three-week brand strategy sprint with the founding team. We clarified their positioning, defined their brand character, and established the principles that would guide every visual decision.',
      },
      { type: 'heading', content: 'The New Identity' },
      {
        type: 'paragraph',
        content:
          'The new Verdant is refined, confident, and warm. A geometric wordmark paired with a living-mark system that adapts across touchpoints. The palette is rooted in the natural world but translated into something contemporary and premium.',
      },
      { type: 'heading', content: 'Deliverables' },
      {
        type: 'paragraph',
        content:
          'Brand strategy, identity system, digital design language, packaging redesign, and a comprehensive brand guidelines document spanning 80 pages.',
      },
    ],
  },

  {
    id:    'nocturn',
    index: '04',
    featured: false,

    title:       'Nocturn Music Festival',
    subtitle:    '',
    description: "Campaign identity, poster series, merchandise, and stage design for Southeast Asia's largest electronic music festival.",
    tags:        ['Campaign', 'Poster', 'Merch'],

    year:     '2023',
    client:   'Nocturn Festival',
    role:     'Creative Lead',
    category: 'Campaign · Environmental',

    thumbGradient: 'linear-gradient(135deg, #1a1a2e, #0d2b14, #2d6642)',
    thumbLabel:    'NCT',

    gallery: [
      { gradient: 'linear-gradient(135deg,#1a1a2e,#2d6642)',   caption: 'Primary identity mark' },
      { gradient: 'linear-gradient(135deg,#0d2b14,#3d8055)',   caption: 'Artist poster — Series A' },
      { gradient: 'linear-gradient(135deg,#2b1a0d,#e8891a)',   caption: 'Merchandise range' },
      { gradient: 'linear-gradient(135deg,#0f2926,#1a4025)',   caption: 'Stage backdrop' },
      { gradient: 'linear-gradient(135deg,#1a3d3a,#2d6642)',   caption: 'Wristband & wayfinding' },
    ],

    body: [
      {
        type: 'paragraph',
        content:
          'Nocturn is Southeast Asia\'s largest electronic music festival, drawing 80,000 attendees across three nights in Manila. The brief was to create a visual identity as immersive as the experience itself.',
      },
      { type: 'heading', content: 'Concept' },
      {
        type: 'paragraph',
        content:
          'The identity was built around the concept of bioluminescence — the phenomenon of living things producing their own light in darkness. This became the thematic engine for everything from the logotype treatment to stage design.',
      },
      { type: 'heading', content: 'The System' },
      {
        type: 'paragraph',
        content:
          'A modular identity system built around a core mark that could be layered, fragmented, and reassembled across all touchpoints. Artist poster templates, wayfinding, wristband design, stage backdrops, and a 40-piece merchandise range.',
      },
      { type: 'heading', content: 'Result' },
      {
        type: 'paragraph',
        content:
          "The campaign generated over 12 million impressions on launch day. Several poster designs were featured by It's Nice That and Print Magazine.",
      },
    ],
  },
];

/**
 * getProject(id)
 * Returns a single project by its string id, or undefined if not found.
 *
 * Usage in a detail page:
 *   const { id } = useParams();
 *   const project = getProject(id);
 *   if (!project) return <NotFound />;
 */
export function getProject(id) {
  return projects.find((p) => p.id === id);
}
