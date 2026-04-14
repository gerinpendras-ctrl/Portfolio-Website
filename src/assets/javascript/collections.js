/**
 * collections.js
 *
 * Single source of truth for all artwork collection data.
 *
 *   import { collections, getCollection } from '@/data/collections';
 */

export const collections = [
  {
    // ── Identifiers ───────────────────────────────────────────────
    id: 'typographic',

    // ── Card display ──────────────────────────────────────────────
    title:     'Typographic Studies',
    count:     '24 pieces',
    status:    'Ongoing',
    thumbGradient: 'linear-gradient(160deg, #0f2926, #1a4025, #2a5c35)',

    // ── Detail page ───────────────────────────────────────────────
    description:
      'A personal investigation into letterform, negative space, and the architecture of type. These studies span experimental layouts, custom lettering explorations, and typographic posters made purely for the love of letters.',

    // Each piece in the masonry grid.
    // Replace `gradient` with `image: '/images/collections/...'` when ready.
    pieces: [
      { id: 'tp-01', caption: 'Study No. 01', gradient: 'linear-gradient(135deg,#1a4025,#1a3d3a)', aspectRatio: '1/1' },
      { id: 'tp-02', caption: 'Study No. 02', gradient: 'linear-gradient(135deg,#3d2010,#e8891a)', aspectRatio: '3/4' },
      { id: 'tp-03', caption: 'Study No. 03', gradient: 'linear-gradient(135deg,#0d2b14,#2d6642)', aspectRatio: '16/9' },
      { id: 'tp-04', caption: 'Study No. 04', gradient: 'linear-gradient(135deg,#0f2926,#1a4025)', aspectRatio: '4/3' },
      { id: 'tp-05', caption: 'Study No. 05', gradient: 'linear-gradient(135deg,#2a1a00,#f5a623)', aspectRatio: '2/3' },
      { id: 'tp-06', caption: 'Study No. 06', gradient: 'linear-gradient(135deg,#2d6642,#1a3d3a)', aspectRatio: '1/1' },
      { id: 'tp-07', caption: 'Study No. 07', gradient: 'linear-gradient(135deg,#d4611a,#2b1a0d)', aspectRatio: '4/3' },
      { id: 'tp-08', caption: 'Study No. 08', gradient: 'linear-gradient(135deg,#0d2b14,#0f2926)', aspectRatio: '3/4' },
      { id: 'tp-09', caption: 'Study No. 09', gradient: 'linear-gradient(135deg,#1a4025,#2a5c35)', aspectRatio: '16/9' },
    ],
  },

  {
    id: 'chromatic',

    title:     'Chromatic Gestures',
    count:     '18 pieces',
    status:    '2024',
    thumbGradient: 'linear-gradient(160deg, #3d1a0d, #e8891a, #6b3d10)',

    description:
      'Abstract color studies exploring the emotional weight of pigment and the tension between control and spontaneity. Developed alongside client work as a space for pure visual research.',

    pieces: [
      { id: 'cg-01', caption: 'Gesture No. 01', gradient: 'linear-gradient(135deg,#3d1a0d,#e8891a)', aspectRatio: '1/1' },
      { id: 'cg-02', caption: 'Gesture No. 02', gradient: 'linear-gradient(135deg,#2b1a0d,#f5a623)', aspectRatio: '4/3' },
      { id: 'cg-03', caption: 'Gesture No. 03', gradient: 'linear-gradient(135deg,#1a4025,#d4611a)', aspectRatio: '3/4' },
      { id: 'cg-04', caption: 'Gesture No. 04', gradient: 'linear-gradient(135deg,#0f2926,#e8891a)', aspectRatio: '16/9' },
      { id: 'cg-05', caption: 'Gesture No. 05', gradient: 'linear-gradient(135deg,#6b3d10,#1a4025)', aspectRatio: '2/3' },
      { id: 'cg-06', caption: 'Gesture No. 06', gradient: 'linear-gradient(135deg,#d4611a,#0d2b14)', aspectRatio: '1/1' },
      { id: 'cg-07', caption: 'Gesture No. 07', gradient: 'linear-gradient(135deg,#f5a623,#1a3d3a)', aspectRatio: '4/3' },
      { id: 'cg-08', caption: 'Gesture No. 08', gradient: 'linear-gradient(135deg,#2b1a0d,#2d6642)', aspectRatio: '3/4' },
    ],
  },

  {
    id: 'form',

    title:     'Form & Negative Space',
    count:     '31 pieces',
    status:    '2023–2024',
    thumbGradient: 'linear-gradient(160deg, #0d2b14, #1a3d3a, #2d6642)',

    description:
      'A systematic exploration of geometric form, figure-ground relationships, and the expressive potential of what is not shown. Each piece begins with a single constraint and evolves through iteration.',

    pieces: [
      { id: 'fn-01', caption: 'Form No. 01', gradient: 'linear-gradient(135deg,#0d2b14,#2d6642)', aspectRatio: '1/1' },
      { id: 'fn-02', caption: 'Form No. 02', gradient: 'linear-gradient(135deg,#1a3d3a,#1a4025)', aspectRatio: '3/4' },
      { id: 'fn-03', caption: 'Form No. 03', gradient: 'linear-gradient(135deg,#0f2926,#3d8055)', aspectRatio: '16/9' },
      { id: 'fn-04', caption: 'Form No. 04', gradient: 'linear-gradient(135deg,#2d6642,#0d1f1d)', aspectRatio: '4/3' },
      { id: 'fn-05', caption: 'Form No. 05', gradient: 'linear-gradient(135deg,#1a4025,#1a1a2e)', aspectRatio: '2/3' },
      { id: 'fn-06', caption: 'Form No. 06', gradient: 'linear-gradient(135deg,#0f2926,#2d6642)', aspectRatio: '1/1' },
      { id: 'fn-07', caption: 'Form No. 07', gradient: 'linear-gradient(135deg,#1a3d3a,#3d8055)', aspectRatio: '4/3' },
      { id: 'fn-08', caption: 'Form No. 08', gradient: 'linear-gradient(135deg,#0d2b14,#1a3d3a)', aspectRatio: '3/4' },
      { id: 'fn-09', caption: 'Form No. 09', gradient: 'linear-gradient(135deg,#2a5c35,#0f2926)', aspectRatio: '16/9' },
    ],
  },
];

/**
 * getCollection(id)
 * Returns a single collection by its string id, or undefined if not found.
 *
 * Usage in a detail page:
 *   const { id } = useParams();
 *   const collection = getCollection(id);
 *   if (!collection) return <NotFound />;
 */
export function getCollection(id) {
  return collections.find((c) => c.id === id);
}
