// ==========================
// Custom Cursor Dot (Special Effect)
// ==========================
document.addEventListener("mousemove", (e) => {
  const dot = document.getElementById("cursor-dot");
  if (dot) {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }
});

// ==========================
// Logo Hover Swap Effect
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("site-logo");
  if (logo) {
    const base = "assets/logo.jpg";
    const hover = "assets/assets/logo-placehol.der.jpg"; // Optional hover image
    logo.addEventListener("mouseenter", () => (logo.src = hover));
    logo.addEventListener("mouseleave", () => (logo.src = base));
  }
});

// ==========================
// Miles Per Gallon Calculator
// ==========================
function calculateMPG() {
  // Get elements safely after DOM has loaded
  const milesInput = document.getElementById("miles");
  const gallonsInput = document.getElementById("gallons");
  const resultBox = document.getElementById("result");

  if (!milesInput || !gallonsInput || !resultBox) {
    console.error("MPG calculator elements not found in DOM.");
    return;
  }

  const miles = parseFloat(milesInput.value);
  const gallons = parseFloat(gallonsInput.value);

  // Validate inputs
  if (isNaN(miles) || isNaN(gallons) || gallons <= 0) {
    resultBox.textContent = "Please enter valid positive numbers for both fields.";
    resultBox.style.color = "red";
    return;
  }

  // Compute MPG (fixed pseudocode: use division, not addition)
  const mpg = miles / gallons;

  // Show result
  resultBox.textContent = `Your vehicle gets ${mpg.toFixed(2)} miles per gallon.`;
  resultBox.style.color = "green";
}
