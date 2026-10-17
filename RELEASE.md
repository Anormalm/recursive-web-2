# October 20 release

Production starts 2026-10-20 19:00 Asia/Singapore. Days 2–6 open at the same time on October 21–25. Run `node --test tests/*.test.mjs` and `node scripts/build.mjs`.

Set GitHub Pages **Source = GitHub Actions** and deploy the `Player site` workflow. Only `dist/` is uploaded. Never deploy the repository root or copy an offline GM kit into it. GM files and QR artwork are maintained offline, outside this public repository. Reprint the replacement QR before launch: the previously published pickup seal is revoked. The dependent stage-16 Autokey ciphertext has been regenerated; its plaintext and answer hash are unchanged. Confirm permission and placement at the existing pickup location.

## Exposure audit and limits

The previous deployed `/gm/walkthrough.html` returned HTTP 200 with solutions on October 17. All GM files, including setup notes and printable QR, are removed from the current tree. Removal does not erase Git history, cached pages, copies, or the previously disclosed answer chain. The story answers and acrostic remain unchanged to preserve puzzle dependencies. They cannot honestly be considered undisclosed secrets now.

This is a static, public-source ARG. Release checks enforce normal player progression, not access control. Client clocks, local saves, downloaded JavaScript, answer hashes, and future chapter data are player-controlled or readable. Hashes do not protect low-entropy answers. Strong embargoes or resistance to deliberate source inspection require a trusted server with server-time release checks, server-held validation and gated evidence; GitHub Pages alone cannot supply that protection.

Preserved intentional clues: robots/404/index/console fragments for volume 042, CORE-17, book texts, signal samples, decoy provenance and institution/building evidence, interlude acrostic, external source references. The signal/track arrays and judgment truths remain client-readable because they drive the existing puzzles. These are not claimed to be secret.

After merging and deploying, verify `/gm/`, `/gm/index.html`, `/gm/walkthrough.html`, `/gm/SETUP.md`, `/gm/print.html`, and `/gm/qr.svg` return 404 (not a soft-404 containing old content). Check the live config, cold player entry, and scheduled chapter transitions. A branch/PR does not change the live site.
