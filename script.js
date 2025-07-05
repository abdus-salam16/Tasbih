let beadCount = 0;
let cycleCount = 0;
let goalCount = 0;

function incrementCount() {
  beadCount++;

  if (beadCount > 100) {
    beadCount = 1;
    cycleCount++;

    if (cycleCount % 10 === 0) {
      goalCount++;
    }
  }

  updateDisplay();
}

function resetCounter() {
  beadCount = 0;
  cycleCount = 0;
  goalCount = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("beadCount").textContent = beadCount;
  document.getElementById("cycleCount").textContent = cycleCount;
  document.getElementById("goalCount").textContent = goalCount;
}
