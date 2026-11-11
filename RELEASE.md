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

The repairs were committed as `2414372` and subsequently pushed to `main` at the user's deployment request. Both the custom `Player site` workflow and GitHub's generated Pages deployment succeeded, and the updated runtime files were observed live. However, the live publication still served source-form robots/404 paths and exposed `tests/release.test.mjs`, `scripts/build.mjs`, and `RELEASE.md`. `/gm/walkthrough.html` returned 404 in that check; this is not an audit of every historical GM URL. The exact Pages publishing source could not be established with authenticated settings access. The player-only artifact/source mismatch remains unresolved: confirm Actions is the source, confirm that its uploaded artifact is actually served, and verify project-base robots, nested 404 recovery and all excluded paths. Successful workflows and local passing builds do not establish correct live exclusions.

## November 6 investigation-desk redesign (local, uncommitted)

A presentation redesign, not a new puzzle chain. The main page now has blue archive furniture, a central illuminated file/instrument surface, six chapter groups on the left and contextual evidence/notes tools on the right. On phones, a native chapter selector and folded file browser leave room for the actual puzzle. Filed documents remain reviewable, and an explicit Continue button leaves the completed file's original interlude visible until the player moves on. Catalog, staff log, finale and recovery pages share the desk's visual system.

The runtime remains dependency-free semantic DOM. New `js/game-ui.js` subscribes to an immutable metadata-only `ZephyrUI` bridge; it owns neither saves nor validation and never renders originals for chapter previews. The engine remains the authority for file/evidence access. Persistent tool controls retain modal focus-return targets across import/reset, chapter browsing survives unrelated metadata updates, and foreground return refreshes any elapsed release before replacing its timer. Desktop-to-phone resizing folds the file browser without a reload. Sound uses the existing preference and synthetic action cues, not an ambient soundtrack. Continuous dust/grain/photo movement was removed; texture is static, with reduced-motion support.

The requested Skillfish installation was attempted with version 1.0.39; `payolajoker/ai-agent-setting` returned repository-not-found. No replacement skill or web-engine dependency was silently installed.

### Verification

- 29 Node tests pass, including the new metadata/access/subscription checks and elapsed-release regression. JavaScript syntax checks and `git diff --check` pass. Fresh root/project player artifacts pass exact-tree and byte verification; the new UI script is included, while development tests/scripts/docs/GM remain excluded from those artifacts.
- Immutable baseline checks preserve the manual, annex, full 20-step data, all 17 interludes/acrostic, answer/hash block and production release/pickup configuration. No physical QR bypass was added.
- Browser checks used a temporary **built player artifact**, never a repository-root server, with synthetic saves only. Checked zh/EN framing and fresh intro language switching, 320/375/768/1280/1440 widths, chapter browsing and resize behavior, contextual tools, rejected input and exact instrument focus, dial/tracks local scroll reach, filed interludes/Continue, catalog statuses, log/finale/CORE and genuine nested project 404 recovery.
- Browser storage checks covered two-tab replacement/reset adoption, Notes export and import-draft retention, Escape/Tab containment and focus return after reset. Denied-storage checks retained in-memory notes and a synthetic QR receipt across language changes, kept the receipt URL and included it in the session export.
- A 200% CSS-zoom simulation exposed wrapping defects in status stamps, Continue and the answer controls; the controls were corrected and the document path rechecked at 320/768/1280. Reduced-motion drawer duration is zero. This is not real-device zoom, screen-reader certification, or a fresh blind solve of external-research puzzles. Final instrument screenshots were inspected after their reveal completed; screenshots taken too early showed only the underlying paper and were not accepted as visual verification.

No redesign commit, push, deployment or Pages-setting change has been made. The earlier live artifact/source mismatch remains unresolved and must be addressed separately before claiming a player-only public deployment.

## November 6 signal-station replacement (local, uncommitted)

The investigation desk above was rejected as too similar to the original site. It has been replaced, not layered over: no permanent chapter rail, tools rail or long article combining every part of the task. The main play loop is Start/Resume → one original or instrument → contextual finding/verification → filed receipt with the unchanged interlude → explicit Continue. The handover letter is accessible from arrival/menu rather than compulsory onboarding. Menu contains file review, staff notes and separate save/settings; Notes is its own focused view.

- Waveform, dial, tracks and parity use petrol instrument surfaces; originals, provenance and source judgments use document/lightbox surfaces. Instruments open directly. Original mode keeps the existing instructions, tracks' second-layer cipher and judgment source block. Every original record and the default combined material render is fingerprinted against its pre-station baseline.
- Authorized originals can be pinned beside the task, or two originals compared with separate scrollers. Phones switch task/evidence and comparison slots at full width. Pins are revalidated after save adoption. Image originals have proportional zoom/reset and local scrolling.
- Stable task, evidence and action regions repaint only when their own HTML changes. A tapped contact does not reconstruct pinned evidence or an open notebook. Local evidence scroll, partial findings, exact control focus and save-import drafts survive relevant updates. Language switching on the station uses the existing cancellable no-reload path, including denied storage.
- Rendering no longer selects files, resets rejection counts or launches QR work; explicit activation owns those effects. Guarded widget commands validate the owning file. Completed interactive review uses a disposable clone, never the canonical investigation save. Mode/pin state remains page-session presentation state, outside version-1 progress. The old full-screen stamp and per-action entrance effects are removed.
- The additional requested command `npx skillfish add segersniels/dotfiles web-animation-design` was attempted using Skillfish 1.0.39. The repository was reachable and listed 25 skills, but that skill name was absent. No substitute was installed; the already loaded animation guidance remained applicable.

### Verification actually performed

34 Node tests pass, including unchanged prior invariants, observational rendering, mode/epoch stability, combined-source coverage, isolated completed review, stale widget rejection and inaccessible-pin removal. Syntax and whitespace checks pass. Fresh root/project build tests and the temporary project-base artifact pass exact player-only tree/byte verification. No data/config/puzzle-evidence files changed.

Browser checks used the built temporary player artifact and synthetic saves only:

- Start/Resume and optional exact handover; all 20 files' original/review rendering; dial/tracks/original/comparison/arrival/receipt screenshots inspected.
- Partial dial transcript + finding → pin/compare evidence → mode/language changes; one live answer form, accessible nonmodal task and retained partial input. Wave/dial/parity/provenance keyboard focus retained.
- Parity verification from Original mode → unchanged interlude receipt → disposable instrument review without save mutation → Continue to the next file.
- Rejected typed input preserved value, focus and selection range. Save-import draft survived sound rerender; modal Escape returned focus to Menu. Notes were adopted from another tab while prior notes appeared in recovery drafts, and newly unauthorized pins disappeared.
- A long pinned annex retained its actual 160px scroll offset through language change and unrelated provenance interaction. Image zoom reached 1.5× and reset without page overflow.
- 320/375/768/1280/1440 widths had no horizontal page overflow in the checked paths. Normal-height phones and desktop retained an in-flow dock within the viewport; short landscape uses natural page scrolling. A 200% CSS-zoom simulation showed no horizontal page overflow. This is not real-device zoom or screen-reader certification.
- Denied-storage Start/language switching preserved in-memory Chinese notes, retained the synthetic seal URL and provided a save export. Reduced-motion drawer duration was zero. Catalog/log/finale/CORE at 320px EN had no overflow or broken images.

This is a local interaction redesign, not a fresh blind solve of the external-research chain. No commit, push, deployment or hosting-source correction was made; the live artifact/source mismatch remains unresolved.

## November 6 receiver visual and motion pass (local, uncommitted)

Historical iteration: the archive-workbench pass below replaces this appearance.

The plain signal station was also rejected. The interaction loop stays, but its presentation is now physical archival equipment: an inline two-reel receiver on arrival, condensed display lettering, silver transport strip, enamel housing, raised illuminated dial/switch keys, glass sample wells and a serrated paper receipt. Decorative equipment is aria-hidden, has no fictional readings or encoded text, and adds no puzzle information.

- The first arrival paint has one 1000ms receiver engagement/light sweep, not an idle loop. Language and ordinary widget repaint do not restart it. Pointer Start/Continue engages only the small transport strip for 250ms. Pointer buttons have 160ms press displacement; keyboard mode/input and all clue glyphs stay stationary.
- A 250ms filing-mark motion is armed only after a new canonical completion succeeds. Repeated/rejected completion and completed review do not arm it. No progression waits for an effect. WAAPI feedback cancels prior element animations before retargeting; reduced motion keeps opacity only, capped at 160ms. CSS reduced motion removes scanner/spindle movement and retains a gentle first-paint glass fade.
- No dependencies, downloaded fonts or changes to data/config/evidence/validation hashes. Protected original and material fingerprints still pass.

### Checks performed for this pass

37/37 Node tests pass (three new cases cover cancellable/reduced-motion/save-neutral motion, original physical-pickup framing and committed-only filing feedback). Engine/controller syntax, whitespace and root/project player-only build checks pass.

Browser checks on the built local artifact used synthetic saves: arrival desktop/phone, dial desktop/phone, tracks, pinned original and receipt screenshots were captured and inspected; the arrival sequence was paused at 450ms to inspect spool pivot and scanner position. A pale comparison heading was found visually and corrected, then its actual charcoal-on-paper colors were checked. Pointer Start and successful parity verification showed actual 250ms WAAPI frames; reduced motion had no transform frames, and keyboard Start/verification produced no physical movement. Partial finding/contact state survived pin/mode/language changes; keyboard bit focus remained exact; completed replay did not change canonical save.

Normal-height 320/375/1280/1440 views kept the dock within the viewport for dial/tracks/reels/registry/provenance. No horizontal page overflow in these checks or 768x740 and 667x375; the latter/intermediate short view uses the existing natural-scroll fallback, so some docks require scrolling. All 20 originals plus all seven completed instrument modes rendered at 320px without horizontal overflow. Console had no errors in this run. A body-level CSS zoom of 2 exposed a vertically clipped dock. The shell now resolves its height against the unzoomed root and allows overflow; the workspace keeps a usable minimum height rather than collapsing when controls grow. Rechecked dial at 1440x900 with CSS zoom 2: dock bottom 900px, including a pinned original. At 320x740 with CSS zoom 2, the artifact keeps a nonzero scroller and the verification button can be scrolled fully into view. Ordinary 320/375/1440 views retain their viewport dock, and 667x375 remains naturally scrollable. Pin/mode/language changes preserved a partial finding without modifying the save; persistent pin labels and region names now also refresh with language. These simulations are not browser-zoom certification. No real-device or screen-reader certification is claimed.

This pass remains local: no commit, push, deployment or publishing-source change.

## November 6 archive-workbench iteration (local, uncommitted)

The receiver-led version was rejected as well. It made radio hardware the subject rather than the archive's missing identities, unreliable copies and records crossing 1946, 1986 and 2026. This iteration retains the station's interaction loop but replaces its decorative equipment with a waiting file on an inherited archive desk. The Chinese title leads; cabinet green, dark oak, folder stock and an oxblood filing mark tie arrival, original reading and instrumentation together.

- Start/Resume is one native file-shaped button showing the actual selected file's archive number and original title. Its parenthetical qualifier is grouped without changing the title's characters. The handover remains accessible; the external-tool and physical-QR requirements remain explicit.
- Removed the giant reel SVG and repeated transport strip. Readable originals remain paper; operating surfaces are matte apparatus with stationary labels and targets. The filed receipt is one sheet on the desk, not a card inside another paper card. No invented dossier readings, narrative clues, decorative codes or new interludes were added.
- One first-paint sequence illuminates the lamp and settles only the inert folder backing for 1000ms. Language changes do not replay it. Pointer Start/Continue uses a 250ms opacity-only file-header acknowledgment; keyboard activation is immediate. Successful canonical completion retains the 250ms filing-mark feedback; receipt review does not replay it. Reduced motion keeps a 160ms opacity-only lamp fade, leaves the backing static and strips WAAPI transforms.
- Phone introduction spacing and title grouping were refined after inspecting screenshots. The desk-colored scroller now has its own inset lamp-colored keyboard focus ring; paper controls retain their ink-colored ring.

### Checks performed for this iteration

37/37 Node tests pass, including unchanged protected data/material/validator fingerprints, legacy save safeguards, isolated review and committed-only motion tests. Engine/controller syntax and whitespace checks pass. Root/project artifact checks pass in the test suite, and the project-base player-only preview was rebuilt and verified separately.

The actual built app was driven with synthetic local saves. Refined desktop/phone arrival, original reading, pinned comparison, dial, tracks, waveform and receipt screenshots were captured and inspected. A partial finding, tapped contact and pinned workbook survived mode/language changes without changing the canonical save. All 20 originals and all seven completed instrument modes rendered at 320px with nonempty content and no horizontal page overflow; the review sweep left the save unchanged. These are render/interaction checks, not a blind solution of the external-research chain.

Keyboard Start produced no header animation. Keyboard parity operation retained the exact bit focus and successful keyboard verification produced no filing motion. Pointer verification produced one 250ms filing-mark animation; switching to Original and back to Receipt did not add another. Browser reduced-motion emulation showed a 160ms opacity-only lamp animation and no folder-backing animation. Language repaint removed the first-arrival class and did not replay the sequence.

Measured critical text contrast ratios range from 5.30:1 (archive metadata) to 12.29:1 (paper text); action text is 7.54:1 or 8.59:1, and cabinet mode text is 7.69:1. A keyboard-visible scroller ring was rechecked after its repair at 8.92:1 against the desk. This is a targeted measurement, not a whole-site accessibility certification.

Layout checks at 1440x900, 375x812 and 320x740 retained reachable in-flow docks without horizontal page overflow. Desktop body-level CSS zoom 2 kept the dock within 900px. Tiny zoomed and 667x375 landscape layouts use ordinary scrolling; at 320x740 with CSS zoom 2, Continue was scrolled fully into view. Console reported no errors or warnings in the final check. No real-device, actual browser-zoom or screen-reader certification is claimed.

The archive iteration remains local and undeployed. No commit, push or publishing-source change was made; the previously documented live artifact/source mismatch remains unresolved.

## November 6 evidence-cabinet continuation (local, uncommitted)

Continued beyond arrival styling into the reading/comparison workflow. The evidence drawer is now a searchable cabinet rather than a long series of Pin/Compare button pairs. Existing attachments for the selected file appear first, followed by the other currently authorized materials; grouping uses only the existing step-to-evidence links, not inferred relevance or new clues.

Each entry has one native Open original button, its original title and provenance metadata. Opening reads the complete unchanged source before placing it beside the task or adding it to comparison. Search matches titles, dates and material types only—not record bodies or solution data. Query, cabinet scroll and last-viewed file are disposable presentation state, never part of the version-1 save. Returning from an original restores the cabinet position and keyboard focus. Empty results have a plain explanation; hidden entries are excluded from keyboard navigation.

Short originals no longer stretch their paper backing to the height of the work area. Readable content stays stationary; this continuation adds no animation or dependencies.

38/38 tests pass, with a new cabinet regression checking canonical attachment grouping, authorized metadata-only matching, intact source text and save neutrality. The first new assertion failed because the VM and host arrays have different prototypes; converting both to host arrays corrected the test. All protected fingerprints and save regressions continue to pass. Engine syntax, whitespace and player-only build checks pass.

Browser checks used the built artifact and synthetic saves: desktop and 320px cabinet/reading/comparison screenshots were inspected; search, empty results, Open original, Pin and two-source comparison worked. Return restored a cabinet scroll position of 1923px and the exact last-file focus. Keyboard Open/Pin returned focus to Evidence without changing the save; Tab with no matches wrapped to the drawer close button, not a hidden entry. Query and pins survived language changes; notes still autosaved. Adoption of an earlier save removed later evidence rows and pinned originals, leaving only the three initially authorized materials. No horizontal page overflow was observed at 320px. This is not a whole-site accessibility or real-device certification.

Still local: no commit, push, deployment or publishing-source change.

## November 11 connected campaign (local, uncommitted)

The earlier workbench improved reading but did not address the short, disconnected campaign. This rebuild places the existing twenty technical puzzles inside six authored chapters, with eighteen investigation scenes, twelve recovered staff exhibits, twenty short connective aftermaths and a complete five-paragraph epilogue in each language. The new primary Chinese prose contains 18,139 Han characters across exhibits, scenes, aftermaths, derived documents and epilogue; metadata is excluded from that count. This measures editorial scope, not guaranteed playtime or emotional effect.

- Each investigation follows an earlier finding or an unfinished staff action. Recovered correspondence develops the colleagues' disagreement and revisions; the archive remains closed, with no fabricated incoming messages or external sending.
- Fifteen ordinary scenes record a concrete annotation with one or two cited, currently authorized sources. Three procedural decisions change the correction/review history, attribution/addendum and final report/referral. All eight combinations retain the same established facts and original source access. The closing export contains an actual completed record, not only a prospective scope draft.
- Story IDs and citations are additive fields in the existing version-1 save. There is no second progression counter or storage key. Old saves preserve technical progress without inventing prior choices; fresh and reset saves require the opening. Missing or malformed story data fails closed while retaining bounded recovery records and export.
- Original puzzle order, six release groups, original materials, instrument mechanics, normalization, answer hashes, physical QR and all seventeen original interludes remain unchanged. Supplemental prose is separate from the original receipt collection and does not add hints, easier validators, solution quizzes, timers or compulsory reading delays.
- Applied the complete official `blader/humanizer` v4.0.0 instructions to all new Chinese and English prose: chapter text, all exhibits/scenes/aftermaths, all fifteen derived-document variants and the full epilogue. No plugin installation or GitHub code execution was needed. Protected originals and puzzle text were not edited. No detector-score or detector-evasion claim is made.
- Closing-page source reading is now disposable scene-owned presentation state. Language repaint retains the source, tentative citation and keyboard focus; paragraph anchoring keeps the corresponding reading block in view when translations change page height. Earlier-save adoption and reset clear the preview. Reading and language switching do not change the canonical save.

### Verification and limits

63/63 Node tests pass, including exact protected fingerprints, chapter/scene coverage, all decision combinations, release and legacy boundaries, malformed-module recovery, stale saves and asynchronous QR checks, separate original receipts, final source-preview isolation and paragraph anchoring. Engine, controller and story syntax checks, tracked diff whitespace and new-file whitespace checks pass. Root/project artifact tests and the separately rebuilt project-base player artifact pass exact-tree and byte verification. The final story source and preview copy share SHA-256 `0d0f4b4de394872dbd43f64a05385d48f8bf338151e993be13d14ba040f711c5`.

The built browser app was driven through source-backed opening work, an instrument boundary, a procedural consequence, original capstone submission, final handover and actual dossier download using synthetic saves/digest fixtures. Final-built exports were rechecked for both report/referral scope and both revision/attribution formats; legacy completion explicitly records unchosen procedures instead of inventing signatures. All eight combinations are additionally covered in the VM suite. These checks do not establish a blind solve of the external research, audio or physical pickup chain.

Opening, final-handover and final-built epilogue phone screenshots were inspected. A clean browser context completed the source-backed opening, reloaded without changing its saved record and resumed with exactly one live original answer form. Layout checks at 320, 375, 768 and 1440px, short landscape and body-level CSS zoom 2 found no horizontal page overflow; long/tiny layouts use ordinary scrolling and the action remains reachable. The final source preview was browser-checked at desktop and 375px in both languages with save-neutral citation/focus retention. At document ends the browser may clamp scrolling to the shorter translated page. No real-device, actual browser-zoom or screen-reader certification is claimed. The checked browser context reported no console errors or warnings.

Local preview: `http://127.0.0.1:8937/recursive-web-2/index.html`, served only from the verified player artifact, not the repository root. This campaign and the earlier workbench changes remain uncommitted and undeployed. No push or publishing-source change was made; the previously documented live artifact/source mismatch is still unresolved. Remove `.playwright-mcp/` and stray screenshots before any separately authorized commit.
