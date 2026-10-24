# Erratic Enfants: Design and Implementation Guidelines

## Product Vision

Erratic Enfants is a brief, in-the-moment wellbeing reset for first-year public-school teachers. It should help a teacher pause during a demanding day, acknowledge what they are experiencing, practice a simple grounding activity, and return to the classroom with a little more steadiness.

The experience is compassionate and practical, not clinical. Humor belongs in the closing Recharge step as gentle levity. It should make room for a smile without minimizing the stress that came before it.

## Core Experience: Reflect, Release, Recharge

The reset is a single, sequential three-step experience:

1. **Reflect (`data-step="reflect"`)**  
   Invite the teacher to notice or name what is weighing on them without judgment. Use concise, validating language. Do not imply that the teacher is at fault or that a brief exercise will solve structural workplace problems.

2. **Release (`data-step="release"`)**  
   Guide a brief, optional grounding or breathing practice. A visual rhythm may support the activity, but instructions should remain understandable without animation. Keep the practice focused and easy to follow.

3. **Recharge (`data-step="recharge"`)**  
   Offer a supportive thought or intention for returning to the classroom, paired with gentle, teacher-aware humor when appropriate. Humor must follow the acknowledgment and practice; it must not mock the teacher, students, families, or the difficulty of teaching.

The full experience should take about two minutes. Communicate that time commitment clearly and use a discreet progress indicator. Do not present a short breathing cycle as if it were the entire two-minute reset.

## Interaction and Structure

- Keep the experience in one view with no multi-page navigation, feeds, or unrelated controls.
- Use one `<main class="app-canvas">` containing the experience. Keep the three steps as semantic sections, preferably `<section class="focus-stage" data-step="...">`.
- Show one step at a time and provide a clear, low-effort way to continue. A teacher should not have to complete a stress questionnaire before receiving support.
- Personalization is optional. If used, keep it lightweight and within the Reflect step; it must not delay or obstruct the core reset.
- Use semantic HTML, descriptive labels, keyboard-accessible controls, and visible `:focus-visible` states.
- Respect reduced-motion preferences. The experience must remain usable when animations are disabled.

## Layout and Visual Direction

- Use a fixed 4:5 app canvas that scales to the available viewport without causing page scrolling. Keep the canvas itself usable on small screens; do not clip essential text or controls to preserve the aspect ratio.
- Keep the layout stable as steps change. Use a restrained progress indicator near the top of the canvas and keep navigation controls easy to locate.
- Use the project’s low-luminance, desaturated palette through CSS custom properties. Preserve the existing palette variables unless a deliberate design revision is requested.
- Favor readable type, generous spacing, short copy, and calm visual pacing. Avoid harsh alerts, busy decoration, and unnecessary motion.
- Keep breathing visuals separate from text and mark purely decorative visuals as hidden from assistive technology.

## Content and Tone

- Acknowledge stress plainly and without judgment.
- Keep prompts short, supportive, and adult-to-adult; do not sound patronizing or overly cheerful.
- Make every practice optional and avoid promising medical or therapeutic outcomes.
- In Recharge, use humor as a small release after the teacher has been heard. Choose warmth and recognition over sarcasm, cynicism, or jokes that make light of harm.
- End with a concise, encouraging transition back to the classroom.

## Implementation Alignment

When changing the HTML or CSS, make the implementation reflect the three-step flow above. Keep step names, `data-step` values, progress behavior, and visible copy consistent across the markup, styles, and script. Avoid adding separate triage, landing, or closing flows that compete with Reflect, Release, and Recharge.
