# Updating the DeafSphere Website

This site is a set of plain HTML files generated from small scripts, not a
live database — so "updating the site" means: change the content in the
right script, regenerate the HTML files, then re-upload them to wherever
the site is hosted (GitHub Pages, Netlify, etc.). Nothing updates itself
automatically.

## The one thing that caused the last problem

The schedule dates lived in `gen-schedule.js` only, so when the schedule
changed, the homepage kept showing old information because nothing told it
to change too.

That's fixed now. Term dates, the quarterly "what's running" table, and
the homepage's "What's On" card all now pull from a single file:

    site-data.js

Change a date once in `site-data.js`, regenerate, and it updates
everywhere it's used. You shouldn't need to touch `gen-schedule.js` or
`gen-index.js` directly for routine date changes.

## How to make a routine update (dates, prices, small text changes)

1. Open the relevant file:
   - Term dates, quarterly highlights, "What's On" card → `site-data.js`
   - Home page → `gen-index.js`
   - Programmes overview → `gen-programmes.js`
   - Level 1–4 pages → `gen-levels.js` (all four levels are in one file)
   - Standalone page → `gen-standalone.js`
   - Community & Talks page → `gen-community.js`
   - Schedule page → `gen-schedule.js`
   - FAQ page → `gen-faq.js`
   - Site-wide bits (logo, nav, footer, email address) → `build.js`

2. Edit the text inside the quotes. Everything is plain English inside
   JavaScript template strings — you don't need to know JavaScript to edit
   a sentence or a number, just don't delete the backticks (`` ` ``),
   quotation marks, or `${...}` placeholders.

3. Regenerate all pages by running this once from the site folder:

   ```
   node gen-index.js && node gen-programmes.js && node gen-levels.js && node gen-standalone.js && node gen-schedule.js && node gen-faq.js && node gen-community.js
   ```

   This overwrites the `.html` files with the updated content.

4. Re-upload/push the updated `.html` files (and `site-data.js` if you
   like keeping it in the repo) to your host.

## The easiest option

If editing files and running commands isn't something you want to do
yourself, the simplest path is to send me (or whoever's helping you) the
update in plain language — "Term 1 now starts 11 Jan 2027" — and have it
regenerated and re-delivered as a fresh set of files, the same way this
round of updates was done.

## When something should go on the homepage

As a rule of thumb: if it's the kind of thing a first-time visitor would
want to know within 5 seconds of landing on the site — a new intake date,
a price change, a new level opening — it belongs in the "What's On" card
on the homepage, not just buried on the Schedule or Programmes page.
`site-data.js`'s `NEXT_UP` object is exactly for that — update its
`headline` and `detail` whenever there's something new to point at.
