HASYIN B1 TRAINER — Version 2.0, 24 November 2026

WHAT'S NEW
- 154 cards; 70+ cards have additional manually curated accepted solutions.
- Punctuation, capital letters, whitespace and the equivalent 'gern/gerne' are ignored.
- Grammar-sensitive differences (word order, articles, verb endings) are NOT automatically ignored.
- Two attempts. You may choose 'Show solution' early.
- After seeing the solution, you can mark a different answer as correct, BUT ONLY IF YOU VERIFIED IT YOURSELF.
- Self-confirmed answers count as self-confirmed (not AI-verified). They are stored in export JSON but are not automatically whitelisted for future sessions.
- Offline-ready HTTPS-hosted PWA; improved update behavior.
- Existing local progress from v1 is preserved on the SAME origin/browser.

DEPLOYING WITH GITHUB PAGES (no cloud sync yet)
1. Create a GitHub repository for this app. CAUTION: The static files and mistake examples will be publicly viewable on a publicly accessible GitHub Pages URL; do not include private details or secrets.
2. Upload ALL contents of this ZIP to the repository root (index.html, sw.js, icon.svg, manifest.webmanifest, README.txt, .nojekyll).
3. In repository Settings > Pages > Build and deployment, set Deploy from a branch, main, /(root). Publish.
4. On the iPhone, open the HTTPS GitHub Pages URL in Safari > Share > Add to Home Screen > Open as Web App.
5. Open once online, then offline study can work from cache. Keep using the SAME installed home-screen app for local progress; backup periodically.

SYNCING BETWEEN DEVICES
GitHub Pages provides ONLY static hosting. Cloud sync is NOT enabled in v2. Implement separate authentication + database service, e.g. Firebase Authentication + Cloud Firestore, with access rules.
Google Drive can store exported progress JSON backups, but a plain Drive folder does not provide automatic per-answer synchronization.

LIMITS
A non-AI rule checker cannot detect EVERY valid paraphrase. Self-confirmed answers are not AI checked. Some cards are phrases or fragments rather than full sentences.
