// ==========================
// Custom Cursor Dot (Special Effect)
// ==========================
const dot = document.getElementById('cursor-dot');
document.addEventListener('mousemove', (e) => {
  if (!dot) return;
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// ==========================
// Logo Hover Swap Effect
// ==========================
const logo = document.getElementById('site-logo');
if (logo) {
  const base = 'assets/logo.jpg';
  const hover = 'assets/assets/logo-placehol.der.jpg';
  logo.addEventListener('mouseenter', () => {
    logo.src = hover;
  });
  logo.addEventListener('mouseleave', () => {
    logo.src = base;
  });
}

// ==========================
// Miles Per Gallon Calculator
// ==========================
function calculateMPG() {
  const miles = parseFloat(document.getElementById("miles").value);
  const gallons = parseFloat(document.getElementById("gallons").value);
  const result = document.getElementById("result");

  // Validate user input
  if (isNaN(miles) || isNaN(gallons) || gallons <= 0) {
    result.textContent = "Please enter valid positive numbers for both fields.";
    result.style.color = "red";
    return;
  }

  // Correct formula (the pseudocode had + instead of /)
  const milesPerGallon = miles / gallons;

  // Display result, rounded to two decimal places
  result.textContent = `Your vehicle gets ${milesPerGallon.toFixed(2)} miles per gallon.`;
  result.style.color = "green";
}
