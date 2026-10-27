const stages = document.querySelectorAll(".focus-stage");
const launchButton = document.getElementById("btn-launch");
const header = document.getElementById("app-header");
const progress = document.getElementById("reset-progress");
const timer = document.getElementById("timer-display");
const resetSteps = ["reflect", "release", "recharge"];
const reflectStage = document.getElementById("stage-reflect");
const reflectChoice = document.getElementById("reflect-choice");
const overworkedSource = document.getElementById("overworked-source");
const disrespectedSource = document.getElementById("disrespected-source");
const aloneSource = document.getElementById("alone-source");
const releasePractice = document.getElementById("release-practice");
const feelingSummary = document.getElementById("feeling-summary");

let secondsRemaining = 10;
let timerInterval;
let inactivityDuration = 10;
let environmentalVariable = "";
let activeFeeling = "";

function showStep(name) {
  stages.forEach((stage) => {
    stage.hidden = stage.dataset.step !== name;
    if (!stage.hidden) stage.focus();
  });

  header.hidden = name === "land";
  launchButton.hidden = name !== "land";
  progress.value = resetSteps.indexOf(name) + 1;
}

function updateTimer() {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = String(secondsRemaining % 60).padStart(2, "0");
  timer.textContent = `${minutes}:${seconds}`;
}

function startInactivityTimer(duration = inactivityDuration) {
  clearInterval(timerInterval);
  inactivityDuration = duration;
  secondsRemaining = inactivityDuration;
  updateTimer();

  timerInterval = setInterval(() => {
    secondsRemaining -= 1;
    updateTimer();

    if (secondsRemaining === 0) {
      clearInterval(timerInterval);
      const activeStep = document.querySelector(".focus-stage:not([hidden])")?.dataset.step;
      if (activeStep === "release") {
        showStep("recharge");
        startInactivityTimer(20);
      } else {
        showStep("land");
      }
    }
  }, 1000);
}

function showReleasePractice(feeling = "", source = "") {
  startInactivityTimer(70);
  showStep("release");
  feelingSummary.textContent = source
    ? `You feel ${feeling.toLowerCase()}. The source is ${source.toLowerCase()}.`
    : feeling
      ? `You feel ${feeling.toLowerCase()}.`
      : "";
}

function showReflectChoice() {
  reflectChoice.hidden = false;
  overworkedSource.hidden = true;
  disrespectedSource.hidden = true;
  aloneSource.hidden = true;
  reflectStage.setAttribute("aria-labelledby", "feeling-title");
  reflectChoice.querySelector("[data-feeling]").focus();
}

function showFeelingSource(sourceView, titleId) {
  reflectChoice.hidden = true;
  overworkedSource.hidden = sourceView !== overworkedSource;
  disrespectedSource.hidden = sourceView !== disrespectedSource;
  aloneSource.hidden = sourceView !== aloneSource;
  reflectStage.setAttribute("aria-labelledby", titleId);
  sourceView.querySelector('input[type="radio"]').focus();
}

launchButton.addEventListener("click", () => {
  environmentalVariable = "";
  activeFeeling = "";
  document.querySelectorAll("[data-environmental-variable]").forEach((input) => {
    input.checked = false;
  });
  showStep("reflect");
  showReflectChoice();
  startInactivityTimer();
});

document.querySelector(".app-canvas").addEventListener("click", (event) => {
  const button = event.target.closest("[data-feeling]");
  if (!button) return;

  startInactivityTimer();

  if (button.hasAttribute("data-feeling")) {
    activeFeeling = button.dataset.feeling;
    if (button.dataset.feeling === "Overworked") {
      showFeelingSource(overworkedSource, "source-title");
    } else if (button.dataset.feeling === "Disrespected") {
      showFeelingSource(disrespectedSource, "upset-title");
    } else if (button.dataset.feeling === "Alone") {
      showFeelingSource(aloneSource, "need-title");
    } else {
      showReleasePractice(button.dataset.feeling);
    }
    return;
  }

});

reflectStage.addEventListener("change", (event) => {
  const selectedOption = event.target.closest("[data-environmental-variable]");
  if (!selectedOption) return;

  environmentalVariable = selectedOption.value;
  showReleasePractice(activeFeeling, environmentalVariable);
});
