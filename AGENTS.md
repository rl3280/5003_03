# Erratic Enfants: Design and Implementation Guidelines

## Product Vision

Erratic Enfants is a brief, in-the-moment wellbeing reset for first-year public-school teachers. It should help a teacher pause during a demanding day, acknowledge what they are experiencing, practice a simple grounding activity, and return to the classroom with a little more steadiness.

The experience is compassionate and practical, not clinical. Humor belongs in the closing Recharge stage as gentle levity. It should make room for a smile without minimizing the stress that came before it.

## Core Experience: Land, Reflect, Release, Recharge

The experience has four sequential stages. **Land** is the entry stage; **Reflect, Release, and Recharge** are the three stages of the reset itself.

1. **Land (`data-step="land"`)**  
   This is the first screen a teacher sees when they open the app. Offer a calm, uncluttered welcome and one clear action: **LAUNCH**. Do not show the reset progress indicator or countdown timer here. Those controls belong to the reset, which has not started yet. Activating LAUNCH begins Reflect.

2. **Reflect (`data-step="reflect"`)**  
   Invite the teacher to notice or name what is weighing on them without judgment. Use concise, validating language. Do not imply that the teacher is at fault or that a brief exercise will solve structural workplace problems.

3. **Release (`data-step="release"`)**  
   Guide a brief, optional grounding or breathing practice. A visual rhythm may support the activity, but instructions should remain understandable without animation. Keep the practice focused and easy to follow.

4. **Recharge (`data-step="recharge"`)**  
   Offer a supportive thought or intention for returning to the classroom, paired with gentle, teacher-aware humor when appropriate. Humor follows acknowledgment and practice; it must not mock the teacher, students, families, or the difficulty of teaching.

The reset should take about two minutes, not including the time a teacher spends on the Land screen. Start the timer and reset progress only after LAUNCH begins the reset. Communicate the reset’s time commitment clearly once it has started. Do not present a short breathing cycle as if it were the entire reset.

## Interaction and Structure

- Keep the experience in one view with no multi-page navigation, feeds, or unrelated controls.
- Use one `<main class="app-canvas">` containing the experience. Represent each stage as a semantic section, preferably `<section class="focus-stage" data-step="...">`.
- Show one stage at a time. Keep the transition from Land to Reflect clear and low-effort.
- Do not require a stress questionnaire before the teacher can begin the reset. Personalization is optional; if used, keep it lightweight within Reflect so it does not delay or obstruct support.
- Keep the timer and progress indicator out of Land. Initialize or reveal them when LAUNCH starts the reset, and keep their state consistent across Reflect, Release, and Recharge.
- Use semantic HTML, descriptive labels, keyboard-accessible controls, and visible `:focus-visible` states.
- Respect reduced-motion preferences. The experience must remain usable when animations are disabled.

## Layout and Visual Direction

- Use a fixed 4:5 app canvas that scales to the available viewport without causing page scrolling. Keep the canvas usable on small screens; do not clip essential text or controls to preserve the aspect ratio.
- Keep the layout stable as stages change. Place the reset progress indicator and timer near the top of the canvas during the reset, not on Land.
- Use the project’s low-luminance, desaturated palette through CSS custom properties. Preserve existing palette variables unless a deliberate design revision is requested.
- Favor readable type, generous spacing, short copy, and calm visual pacing. Avoid harsh alerts, busy decoration, and unnecessary motion.
- Keep breathing visuals separate from text and mark purely decorative visuals as hidden from assistive technology.

## Content and Tone

- Acknowledge stress plainly and without judgment.
- Keep prompts short, supportive, and adult-to-adult; do not sound patronizing or overly cheerful.
- Make every practice optional and avoid promising medical or therapeutic outcomes.
- In Recharge, use humor as a small release after the teacher has been heard. Choose warmth and recognition over sarcasm, cynicism, or jokes that make light of harm.
- End Recharge with a concise, encouraging transition back to the classroom.

## Implementation Alignment

Keep stage names, `data-step` values, visible copy, timer behavior, and progress behavior consistent across markup, styles, and scripts. Land is the initial app stage, with LAUNCH as its action; the timer and reset progress begin only when the teacher launches. The reset then follows Reflect, Release, and Recharge in order. Do not add competing landing, triage, or closing flows.
