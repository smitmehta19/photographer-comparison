# Decision log — photographer comparison dashboard

## 2026-09-09 · Single self-contained HTML file, no framework
- **Decision:** one `index.html` with inline CSS/JS, no build step.
- **Problem:** needed to open from disk with no server, and later be hosted.
- **Why:** works offline, survives being emailed, nothing to rebuild in 2027.
- **Rejected:** React/Vite (build step, node_modules to keep alive).
- **Reversible:** yes, but a rewrite.
- **Status:** done.

## 2026-09-09 · Every extracted value carries a status tag
- **Decision:** each field is `[value, status, original-wording]` where status is quoted / calculated / unclear / not-mentioned. Absent keys render "Not mentioned".
- **Problem:** rule was never to invent or estimate; a plain table hides which numbers are real.
- **Why:** makes silence in a quotation visible instead of blank.
- **Impact:** every calculated figure (GST, per-event, per-crew-slot) is labelled and traceable.
- **Status:** done.

## 2026-09-09 · Six photographers, tier switch for the two who sent options
- **Decision:** Fotograf (Signature/Classic) and Moment Treasurers (Q1/Q2) each get an in-card toggle rather than separate rows.
- **Rejected:** eight comparison columns (busier); picking one tier each (hides an option).
- **Reversible:** yes, data model already holds both packages.
- **Status:** done.

## 2026-09-09 · Public GitHub Pages hosting
- **Decision:** public repo `smitmehta19/photographer-comparison`, Pages from `main` / root.
- **Problem:** wanted a URL reachable from phone and laptop.
- **Why:** Pages needs a public repo on the free plan.
- **Cost:** zero.
- **Assumption:** vendor pricing being publicly readable is acceptable. Personal names removed; referral names still visible — open question.
- **What failed:** the cloud workspace could not push. Its token is scoped to session-authorised repos and a git proxy refuses to inject credentials for anything else. Repo created through the browser UI; push run from the local machine.
- **Reversible:** yes — deleting the repo removes the site.
- **Status:** live.

## 2026-09-09 · Firebase Firestore for shared notes
- **Decision:** replace localStorage-only persistence with Firestore, plus Google sign-in restricted to an allow-list.
- **Problem:** localStorage is per-browser, so notes could not follow him between phone and laptop or be seen by anyone else.
- **Why Firebase:** free tier does not sleep, realtime listeners built in, no card required.
- **Rejected:** Supabase — free projects pause after ~1 week of inactivity, and this runs in bursts until Jan 2027. Claude artifact with shared storage — zero setup but lives off his GitHub and viewers need a Claude account.
- **Shape:** one doc `boards/main` for status/ratings/notes/ticks (deep merge, granular writes), subcollection `boards/main/comments` for append-only threads.
- **Conflict handling:** last-writer-wins per field. Comments are append-only so they never clobber.
- **Ratings:** per person, keyed by uid, averaged for display — two people rating the same photographer was the obvious clash.
- **Security:** Firestore rules hold the allow-list; the list in `firebase-config.js` only shapes the UI. Firebase web config is public by design, so it is committed.
- **Offline:** the page renders and saves to localStorage when Firebase is missing, blocked or signed out. Verified with the CDN unreachable.
- **Cost:** zero at this volume.
- **Open questions:** whether referral names should stay on a public page; whether the old README commit (which carried personal names) should be scrubbed from history.
- **Low confidence:** none material; the sync layer has not yet run against a real Firebase project.
- **Versions pinned:** firebase-js-sdk 10.14.1 (compat build) from gstatic.
- **Status:** code done, waiting on the Firebase project.
