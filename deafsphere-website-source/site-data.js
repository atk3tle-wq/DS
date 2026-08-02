// Single source of truth for anything that appears on more than one page —
// mainly term dates and "what's on" highlights. Update this file, then
// regenerate the site (see README-UPDATING.md); every page that pulls
// from here updates automatically.

const TERMS = [
  { term: "Term 1", start: "4 Jan 2027", end: "21 Mar 2027", assessment: "15–21 Mar", breakDates: "22 Mar – 4 Apr" },
  { term: "Term 2", start: "5 Apr 2027", end: "20 Jun 2027", assessment: "14–20 Jun", breakDates: "21 Jun – 4 Jul" },
  { term: "Term 3", start: "5 Jul 2027", end: "19 Sep 2027", assessment: "13–19 Sep", breakDates: "20 Sep – 3 Oct" },
  { term: "Term 4", start: "4 Oct 2027", end: "19 Dec 2027", assessment: "13–19 Dec", breakDates: "20 Dec – 2 Jan 2028" },
];

// Shown in the "What's Running Each Quarter" table on schedule.html,
// and summarised on the homepage's "What's On" section.
const QUARTERS = [
  { range: "Jan – Mar", terms: "Level 1 (4 sections) · Level 2 (2) · Level 3 (1)", also: "Deaf Enrichment Series (Feb) · Community Session (Mar)" },
  { range: "Apr – Jun", terms: "Level 1 (4) · Level 2 (2) · IS Course Part 1", also: "Deaf Awareness Talk (Apr) · Enrichment Series (May) · Community Session (Jun)" },
  { range: "Jul – Sep", terms: "Level 1 (4) · Level 2 (2) · Level 3 (2) · IS Course Part 2", also: "Enrichment Series (Aug) · Community Session (Sep)" },
  { range: "Oct – Dec", terms: "Level 1 (4) · Level 2 (2) · Level 3 (2) · Level 4 (once open)", also: "Deaf Awareness Talk (Oct) · Enrichment Series (Nov) · Community Session (Dec)" },
];

// A short, editable line the homepage "What's On" card uses. Update this
// whenever the next big date changes (new intake, new IS Course part, etc.)
// without needing to touch the homepage file itself.
const NEXT_UP = {
  headline: "Term 1 opens 4 Jan 2027",
  detail: "Registration opens ahead of launch — Level 1–3 classes, plus our first Deaf Enrichment Series session in February.",
};

module.exports = { TERMS, QUARTERS, NEXT_UP };
