# October 20 release

Production starts 2026-10-20 19:00 Asia/Singapore. Days 2–6 open at the same time on October 21–25. Run `node --test tests/*.test.mjs` and `node scripts/build.mjs`.

Set GitHub Pages **Source = GitHub Actions** and deploy the `Player site` workflow. Only `dist/` is uploaded. Never deploy the repository root or copy an offline GM kit into it. GM files and QR artwork are maintained offline, outside this public repository. Reprint the replacement QR before launch: the previously published pickup seal is revoked. The dependent stage-16 Autokey ciphertext has been regenerated; its plaintext and answer hash are unchanged. Confirm permission and placement at the existing pickup location.

## Exposure audit and limits

The previous deployed `/gm/walkthrough.html` returned HTTP 200 with solutions on October 17. All GM files, including setup notes and printable QR, are removed from the current tree. Removal does not erase Git history, cached pages, copies, or the previously disclosed answer chain. The story answers and acrostic remain unchanged to preserve puzzle dependencies. They cannot honestly be considered undisclosed secrets now.

This is a static, public-source ARG. Release checks enforce normal player progression, not access control. Client clocks, local saves, downloaded JavaScript, answer hashes, and future chapter data are player-controlled or readable. Hashes do not protect low-entropy answers. Strong embargoes or resistance to deliberate source inspection require a trusted server with server-time release checks, server-held validation and gated evidence; GitHub Pages alone cannot supply that protection.

Preserved intentional clues: robots/404/index/console fragments for volume 042, CORE-17, book texts, signal samples, decoy provenance and institution/building evidence, interlude acrostic, external source references. The signal/track arrays and judgment truths remain client-readable because they drive the existing puzzles. These are not claimed to be secret.

After merging and deploying, verify `/gm/`, `/gm/index.html`, `/gm/walkthrough.html`, `/gm/SETUP.md`, `/gm/print.html`, and `/gm/qr.svg` return 404 (not a soft-404 containing old content). Check the live config, cold player entry, and scheduled chapter transitions. A branch/PR does not change the live site.

## October 21 difficulty pass (20 steps)

Steps 6–8 were judged too easy and are hardened in place; three hard steps join the main chain (17 → 20). All 17 original answers, hashes, and the 17-character interlude acrostic are unchanged — new steps carry no interlude, so the capstone derivation stays exactly 17 characters.

Hardened (discovery paths only): reel comparison now runs 12 fragments per side with three near-decoys that differ from a true pair by a single sample, so visual pairing fails by design and the digest comparison carries the step; the dial's paper note is now an impedance table, and the contacts read in ascending-impedance order; the dual-track board carries jumbled beat stamps 1–14, and the lit cells only spell the key in stamp order (the second-layer cipher and its key are untouched).

New steps (typed, hash-verified like the rest; answer hashes and puzzle material are public, and source inspection may reveal solutions):

- `noisewords` (WX-1986-034, day 3, after parity) — audio steganography. The unindexed `/evidence/` WAVs (registered in robots.txt) carry the material; REEL-B spells the answer in its spectrogram. The generator script lives offline in the GM kit only.
- `newsclip` (WX-1986-044, day 4, after dropcoords) — historical OSINT. A torn newspaper clipping (`assets/press-1986.svg`) reports a 1986 Singapore civic opening without naming or dating it.
- `triangulate` (ZF-2026-073, day 5, after provenance) — map OSINT. Three bearings and distances from real Singapore landmarks intersect at a named public point.

Fact-verification log (public sources, at least two each; no disasters or death events used):

- Raffles City, Singapore: officially opened 3 October 1986, ceremony officiated by First Deputy Prime Minister Goh Chok Tong; designed by I. M. Pei; built on the site of Raffles Institution, the island's oldest school, which relocated to Grange Road in 1972. The clipping's identification chain uses exactly these facts; the name and date are deliberately absent.
- Raffles College historical campus: 469 Bukit Timah Road (base point one). King Edward VII College of Medicine building: 16 College Road (base point two). Kallang Airport control tower, opened 1937, conserved (base point three). The three lines intersect at the target recorded in the step's answer hash.
- REEL-A/REEL-B: regenerated offline; the two files are equal length, byte-different, and the tone mosaic decodes against the intended bitmap (1425/1428 cells correct; the three stray cells are single-dot artifacts below the legibility threshold).

Live-player compatibility: the three new steps insert at indexes 10/13/17, all beyond the current player frontier (day 2), so no existing save is invalidated. `catalog.html` now lists 20 volumes; the console sign-off line and interlude-adjacent copy were updated to match.


## November 4 bilingual interface pass (zh + EN toggle)

The site is now bilingual with a language toggle pinned to the top-right of every page. Scope rule: **the interface and narrative framing are bilingual; originals are not translated** (in-fiction: the reading system offers two languages, the records do not). This keeps every puzzle mechanic intact — the 1946 workbook and B-cabinet annex book ciphers index into their original text, and the 17 interludes' first-hanzi acrostic stays discoverable exactly as before.

- New `js/i18n.js` (no dependencies): toggle wiring, `<title>`/meta swap, `<html lang>` update. A three-line inline script in each page's `<head>` sets `<html data-lang>` before first paint.
- Static pages (index/catalog/log/404/finale chrome, the full project log, catalog intro) use paired `.i18n-zh`/`.i18n-en` spans hidden by CSS; engine-rendered strings use an inline `zt(zh, en)` helper with Chinese canonical.
- Preference persists in `localStorage['zephyr-lang']` (separate from `zephyr-zero-arg-v1`, so progress is untouched by switching). Default remains Chinese; switching reloads the page.
- Not translated by design: step titles and catalog row titles (they describe the original documents), all material terminal blocks, records, interludes, the manual and annex, verdict claims, and the finale report body. The intro handover letter renders in English as an explicitly marked translated copy.
- `data.js` gains only a `daysEn` map for the progress bar. No answer, hash, schedule, or state changes anywhere.

## November 6 player-path and artifact repairs

### Puzzle evidence and publication paths

- Recursion's record now repeats the existing prior-key source clue before solving; the sealed audit record repeats the existing seal-to-key extraction method before solving. Neither addition provides an answer or decrypted text.
- The dial record carries a separate, clearly dated erratum: use ascending measured impedance. Its original post-solve interlude is preserved verbatim, including the superseded numbered-order statement; the erratum explains the discrepancy instead of silently rewriting it.
- `evidence/1946-workbook.txt` is now exactly `aWorkbook.body`: the canonical manual, its zero-based/reversed-binding instructions, and punctuation rule. Build checks reject source drift and generate the downloadable workbook from that same canonical body.
- `robots.txt` explicitly registers the two existing `1986-reel-a.wav` and `1986-reel-b.wav` files. Source rules stay root-relative; generated rules use the configured publication base. Existing encoded/comment clue fragments are retained.
- The build defaults to `--base=/`. The Pages workflow explicitly builds and verifies `--base=/recursive-web-2/`. Other hosting paths require a deliberate base change; the generated 404 never guesses URL depth. Its `<base>` precedes relative resource links and its home link is `index.html`; CORE-17 returns via `../index.html`.
- Only the existing explicit player manifest is copied. Post-build verification checks the exact artifact tree and bytes, including generated files, and rejects `tests`, `scripts`, `RELEASE.md`, or `gm` anywhere in that tree. Do not upload the repository root. Robots exclusion is a puzzle discovery mechanism, not access control.

### Coordinated engine/UI repair scope

The approved scope also includes guarded snapshot writes and storage/foreground adoption; reset/import replacement and async invalidation; an in-memory warning and export path when storage is denied; live note exports and recoverable drafts; modal and widget/input focus retention; the intro's delegated language toggle and URL fallback; and prerequisite guards. The responsive scope is a 300px minimum, a local dial scroller, and aligned tracks. These items require their own engine/browser checks; this artifact note does not certify them as passed.

Save guarding can reject sequential stale writes; it is not an atomic lock against truly simultaneous tab writes. Blocked-storage progress remains in memory until the player exports it, and cannot be claimed durable merely because a storage attempt was made. All client-clock, editable-save, publicly readable source/hash and historical exposure limitations above still apply. The canonical manual, annex, all 17 original interludes, answers/hashes, 20-step order, and production release configuration are not changed by these repairs.

### Local verification and live follow-up

The coordinated local pass passed 23 Node tests, including stale-tab protection, reset adoption, reset-confirmation conflict, async validation after replacement, refreshed exports, legacy normalization, blocked-storage QR retention, and root/project artifact exclusions. Fresh player-only builds passed verification. Comparison against revision `2a68107` confirmed byte-identical answer/hash blocks and unchanged manual, annex, all 17 interludes, full 20-step data, and release/pickup configuration.

Browser checks against temporary built artifacts passed: zh/EN intro switching; rejected input and exact wave/bit/dial/provenance focus retention; drawer Escape/focus containment and closed inertness; note export and import-draft retention; two-tab import/reset adoption with recoverable notes; storage-denied warning, in-memory export, language URL fallback and retained QR URL; blocked-storage language switching without reloading or losing in-memory notes/receipt and direct session-save download from the warning; nested root/project 404 assets/home plus no-JavaScript recovery. Dial/tracks at 320, 375, 400, 768 and desktop widths had no horizontal page overflow and their local scrollers reached all content. A 200% CSS zoom simulation and reduced-motion check passed; this is not a real-device/browser-zoom or screen-reader certification, nor a blind solve of all external-research puzzles.

Commands for the intended Pages artifact are `node --test tests/*.test.mjs`, `node scripts/build.mjs --base=/recursive-web-2/`, and `node scripts/build.mjs --base=/recursive-web-2/ --verify`. For isolated checks, add `--out-dir=/absolute/new-empty-directory` to both build and verification commands. The default build's deletion of pre-existing `dist/` was denied locally and was not bypassed; temporary outputs were used instead.

No live publication, GitHub Pages setting, or deployed GM URL was changed in this repair. A read-only Pages-source inspection could not run because `gh` is not installed in this session. Live root publication remains unresolved until an authorized, separate check establishes the actual Pages source and publication path. Confirm Actions is the source, confirm the uploaded player-only artifact is the one served, and then verify missing nested paths and removed GM URLs return genuine 404 responses with working game resources/home links. Repository changes or a local passing build do not prove the live root is safe.
