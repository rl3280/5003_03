# UI/UX Guidelines for First-Year Teacher Wellbeing App

The literature in your library offers rich, evidence-based insights into teacher stress, cognitive load, and brief mindfulness practices. You can translate these research findings into concrete HTML structure and CSS styling patterns to support a 2-minute wellness experience.

---

### 1. Structural HTML Design: Minimizing Cognitive Demands
Research highlights that teachers face overwhelming daily attentional and executive functioning demands, leaving them with severe time constraints and limited planning time. The HTML layout must reduce cognitive load immediately upon opening the app.

* **Single-View Architecture (`<main>` Container):**
  * Avoid complex navigation bars, dropdown menus, or multi-tab layouts. Provide a single full-screen `<main>` container that loads directly into the 2-minute experience.
  * Use semantic HTML tags (`<header>`, `<section>`, `<footer>`) logically so screen readers and assistive tools process the page seamlessly.
* **Sequential Step Sections (`<section class="step">`):**
  * Break the 2-minute intervention into a clear 3-part micro-flow:
    1. **Reflect/Acknowledge:** A simple prompt encouraging non-judgmental awareness of present stress.
    2. **Release/Practice:** A focused micro-activity (e.g., progressive muscle relaxation or sensory grounding).
    3. **Recharge/Intention:** A brief closing summary to transition back into the classroom.
* **Micro-Progress Indicators (`<progress>` or `role="progressbar"`):**
  * Include a non-intrusive progress bar at the top of the viewport. Knowing the activity strictly takes 2 minutes relieves the fear of losing precious prep or instructional time.

---

### 2. Visual CSS Design: Regulating Emotional & Physiological States
Mindfulness interventions target the appraisal process and help "deactivate" immediate stress responses. Visual presentation directly impacts autonomic nervous system arousal.

* **Color Palette & Lighting:**
  * **Calming Hues:** Utilize soft, muted colors (such as slate blues, soft sage greens, or warm earthy neutrals) using CSS variables (`--bg-color`, `--accent-color`). Avoid stark, high-contrast pure white (`#FFF`) backgrounds or harsh red/alert tones that mimic classroom urgency or notifications.
  * **Dark Mode / Low Luminance:** Apply low-luminance CSS styles to prevent screen glare, creating a visually restful environment for an exhausted teacher sitting at their desk.
* **Typography & White Space:**
  * **Generous Spacing:** Apply generous CSS padding, margins, and line height (`line-height: 1.6`) around text blocks.
  * **Typography:** Use clean, sans-serif or soft rounded serif fonts with minimal copy per screen to reduce visual noise and prevent cognitive fatigue.
* **Subtle, Rhythm-Based CSS Animations:**
  * **Pacing Visuals:** Implement keyframe animations (such as a slowly expanding and contracting circle) to guide rhythmic breathing (e.g., 4-second inhale, 6-second exhale).
  * **Smooth Transitions:** Set all screen or state changes to use smooth CSS transitions (`transition: all 0.5s ease-in-out`). Avoid sudden layout shifts, abrupt pop-ups, or jarring animations that trigger automatic stress responses.

---

### 3. Content Presentation & UI Elements: Fostering Adaptive Coping
The articles emphasize that brief mindfulness helps teachers adopt a non-judgmental, accepting stance while addressing key themes like attentive awareness and relaxation.

* **Distraction-Free UI (No Feeds or Social Elements):**
  * While social media can contain self-care content, it often carries high cognitive noise and comparison traps. Hide unnecessary links, notifications, social share icons, or external feeds using CSS layout controls (`display: none` for non-essential controls during the 2-minute session).
* **Bite-Sized Interaction Controls:**
  * Use large, touch-friendly button elements (`<button>`) with clear, supportive microcopy (e.g., "Begin 2-Minute Reset" or "Release").
  * Provide simple visual focus states (`:focus-visible`) for accessibility without aggressive outline borders.
* **Empowering Summary Display:**
  * Conclude the session with a minimal summary card highlighting a key self-care or self-compassion theme. Using CSS card layouts (`border-radius`, subtle drop shadows), present a single actionable takeaway or positive reflection to help the teacher return to their classroom with improved emotional regulation.
