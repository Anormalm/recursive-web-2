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

New steps (typed, hash-verified like the rest; answers never appear in public files):

- `noisewords` (WX-1986-034, day 3, after parity) — audio steganography. The unindexed `/evidence/` WAVs (registered in robots.txt) carry the material; REEL-B spells the answer in its spectrogram. The generator script lives offline in the GM kit only.
- `newsclip` (WX-1986-044, day 4, after dropcoords) — historical OSINT. A torn newspaper clipping (`assets/press-1986.svg`) reports a 1986 Singapore civic opening without naming or dating it.
- `triangulate` (ZF-2026-073, day 5, after provenance) — map OSINT. Three bearings and distances from real Singapore landmarks intersect at a named public point.

Fact-verification log (public sources, at least two each; no disasters or death events used):

- Raffles City, Singapore: officially opened 3 October 1986, ceremony officiated by First Deputy Prime Minister Goh Chok Tong; designed by I. M. Pei; built on the site of Raffles Institution, the island's oldest school, which relocated to Grange Road in 1972. The clipping's identification chain uses exactly these facts; the name and date are deliberately absent.
- Raffles College historical campus: 469 Bukit Timah Road (base point one). King Edward VII College of Medicine building: 16 College Road (base point two). Kallang Airport control tower, opened 1937, conserved (base point three). The three lines intersect at the target recorded in the step's answer hash.
- REEL-A/REEL-B: regenerated offline; the two files are equal length, byte-different, and the tone mosaic decodes against the intended bitmap (1425/1428 cells correct; the three stray cells are single-dot artifacts below the legibility threshold).

Live-player compatibility: the three new steps insert at indexes 10/13/17, all beyond the current player frontier (day 2), so no existing save is invalidated. `catalog.html` now lists 20 volumes; the console sign-off line and interlude-adjacent copy were updated to match.

