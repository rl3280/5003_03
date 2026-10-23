ERRATIC ENFANTS TEACHER APP
Code and implementation explanation for Robert
Prepared by Codex at Erin's request on October 20, 2026

# MAIN FINDING
Robert is correct. Codex did not implement the fixed 4:5 application canvas required by AGENTS.md. This was an implementation and verification omission by Codex. Erin's requests for additional features did not cancel the original rules. This handoff documents the current code; it does not claim the issues have been fixed.

Reviewed prototype: https://erratic-enfants-reset.eku2101.chatgpt.site/
Approved version: 7
Source commit: e2ae9bf1731d7630e07374ffd15e3b999cdb2e04
The older erratic-elementary-breakroom site is a different prototype. The code here is the approved Reset version, stored in a separate Sites project rather than the shared rl3280/5003_03 GitHub repository.

# WHAT WAS NOT IMPLEMENTED
1. Fixed 4:5 canvas. The application container has no aspect-ratio:4/5 declaration. Ratios applied to video and meme images do not control the whole application.
2. Dimension caps and viewport fitting. The canvas has neither the requested 1080px/1350px limits nor Robert's viewport-height-aware width formula. Its parent instead uses an 820px width cap, and the canvas grows with its content.
3. Consistent fluid sizing. A few headings use clamp(), but many fonts, paddings and controls use fixed pixels. Steps have default minimum heights of 460px on desktop and 440px on mobile, with special overrides. The content was not fitted to a common canvas height.
4. No scrolling during the reset. The canvas uses overflow:clip without a constrained height. The document can still grow and scroll. The timer controls are sticky rather than contained within a fixed screen.
5. Compact optional media. Movies and memes appear in both the final timed Return phase and the completed view. Interacting pauses the timer, but these features were not kept strictly outside the timed intervention.
6. Finished phone-app delivery. The approved files implement a browser-based prototype. They do not include an installable-app manifest, service worker or native phone-app project. An installed or app-store mobile build was not delivered.

# WHY CODEX MISSED THE REQUIREMENTS
Codex built a separate project that currently has no local AGENTS.md. The design rules were not carried through into the canvas CSS or converted into explicit acceptance checks. The implementation used a page that grows with its contents, and subsequent features were added to that layout. The absence of a local AGENTS.md did not remove the obligation to follow Erin's instruction to use Robert's guidelines.

The requirements were already present before the reset prototype was built. The shared repository added the fixed-dimension guidance on October 15, 2026, in America/New_York time. The earliest saved reset CSS (4fc97b4), the pre-media version (df53083), and approved Version 7 (e2ae9bf) all lack the 4:5 canvas rule. The latest media update did not remove a previously working fixed canvas.

The previous 18 automated checks covered timing, content, storage and media logic. Browser checks covered playback, image loading, interactions and desktop/mobile usability. They did not measure a 0.8 canvas width-to-height ratio, verify the dimension caps, or require all timed controls to fit without vertical scrolling. Passing those checks did not establish compliance with AGENTS.md.

# WHAT IS ALREADY IMPLEMENTED
The prototype has semantic main and section elements, a logical Check-In -> Reset -> Return flow, progress indicators, a two-minute default and five-minute option, breathing and grounding, classroom strategies, Confidence Studio, and a browser-local notebook. Three licensed movie clips and six original visual memes are present, with filters, feeling-based recommendations, reactions and optional reflections. These working features can be retained while the layout is corrected.
