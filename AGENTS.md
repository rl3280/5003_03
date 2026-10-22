# UI/UX & Inter-AI Semantic Design Guidelines for First-Year Teacher Wellbeing App

> **CRITICAL CONTRACT FOR AI ASSISTANTS (Copilot / Codex / Gemini):**
> This repository defines a strict design and structural contract to support first-year public school teachers facing high cognitive load and burnout (Jennings et al., 2017; Taylor et al., 2021). 
> All AI models generating or editing code in this project MUST read and adhere to these guidelines. Do NOT create separate sandbox implementations without inheriting these rules.

---

**Structural HTML Design Literature Grounding:**

Taylor et al. (2021) and Roeser et al. (2012) emphasize that teachers face high attentional demands and executive function fatigue. Scrolling, shifting layouts, or sticky elements create micro-friction that breaks attentional focus.

**Content Presentation & UI Elements Literature Grounding**

Birtwell et al. (2021) and Gold et al. (2010) show that short, focused mindfulness interventions require uninterrupted presence to achieve cognitive reappraisal. Media distractions during the timed exercise destroy efficacy.

### 1. Structural HTML Design: Minimizing Cognitive Demands
Teachers experience chronic executive function demands and severe time poverty (Roeser et al., 2012; McCarthy & Lambert, 2006). The interface must offer zero navigation friction.

- **Single-View Architecture (`<main class="app-canvas">`):**
  - Do NOT create multi-page navigation, scrollable pages, or sticky external footers.
  - The entire application MUST load into a single, un-scrollable `<main>` container formatted as a fixed 4:5 frame.
- **Sequential 3-R Micro-Flow (`<section class="focus-stage">`):**
  Structured sequentially (Jackman, 2022) using `data-step` attributes:
  1. `data-step="reflect"`: Present moment stress acknowledgment (Kabat-Zinn, 2003).
  2. `data-step="release"`: Guided 10-second rhythmic breathing/grounding (Birtwell et al., 2021).
  3. `data-step="recharge"`: Cognitive reappraisal and classroom return summary (Taylor et al., 2016).
- **Non-Intrusive Progress Indicator:**
  - Standard `<progress>` element locked at the top of `.app-canvas` to communicate time certainty (strictly 2 minutes).

---

### 2. Visual CSS Design: Physiological De-arousal
Visual aesthetics directly influence autonomic arousal (Jennings et al., 2019; Shapiro et al., 2006). All styling MUST use the low-luminance desaturated variables below.

```css
/* ==========================================================================
   INTER-AI MANDATORY CSS VARIABLES (DO NOT MODIFY OR OVERWRITE WITH HARDCODED PX)
   ========================================================================== */
:root {
  --bg-primary: #12181b;       /* Dark slate base */
  --bg-surface: #1e262b;       /* Surface container */
  --bg-card: #283238;          /* Interactive elements */

  --accent-sage: #8ab49c;      /* Reflect step highlight */
  --accent-teal: #6db3b1;      /* Release step highlight */
  --accent-lavender: #a3a7db;  /* Recharge step highlight */

  --text-primary: #e0e6ed;     /* Low-glare primary copy */
  --text-secondary: #94a3b8;   /* Muted body text */

  --radius-smooth: 16px;
  --transition-rhythm: 0.5s ease-in-out;
}
