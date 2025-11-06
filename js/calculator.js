// ==========================
// Mortgage Calculator Script
// ==========================

function mortCalc(form) {
  // Retrieve user input
  const amount = parseFloat(form.Amount.value);
  const rate = parseFloat(form.Rate.value);
  const years = parseFloat(form.Years.value);

  const output = form.Payment;

  // Validate
  if (isNaN(amount) || isNaN(rate) || isNaN(years) || amount <= 0 || rate <= 0 || years <= 0) {
    output.value = "Enter valid numbers.";
    output.style.color = "red";
    return;
  }

  // Compute monthly interest rate and total payments
  const monthlyRate = rate / 100 / 12;
  const totalPayments = years * 12;

  // Mortgage formula
  const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));

  // Show result
  if (isFinite(payment)) {
    output.value = `$${payment.toFixed(2)} per month`;
    output.style.color = "green";
  } else {
    output.value = "Calculation error.";
    output.style.color = "red";
  }
}

// Optional: clear result when typing
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#mortgage-calculator input");
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const out = document.getElementById("Payment");
      if (out) out.value = "";
    });
  });
});
