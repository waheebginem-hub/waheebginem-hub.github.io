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

  if (isNaN(miles) || isNaN(gallons) || gallons <= 0) {
    result.textContent = "Please enter valid positive numbers for both fields.";
    result.style.color = "red";
    return;
  }

  const milesPerGallon = miles / gallons;

  result.textContent = `Your vehicle gets ${milesPerGallon.toFixed(2)} miles per gallon.`;
  result.style.color = "green";
}



// ==========================
// IMAGE SLIDER (Auto + Controls)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("image-slider");
  if (!slider) return;

  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slider-slide");
  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");
  const dotsContainer = document.getElementById("slider-dots");

  let currentIndex = 0;
  const slideCount = slides.length;
  let autoTimer = null;

  // Create dots using let + for loop (required by assignment)
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("button");
    dot.className = "slider-dot";
    dot.setAttribute("type", "button");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll(".slider-dot");

  function updateDots(index) {
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function showSlide(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
    updateDots(index);
  }

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = slideCount - 1;
    } else if (index >= slideCount) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    showSlide(currentIndex);
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(() => {
      nextSlide();
    }, 4000);
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Button events
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    });
  }

  // Dot click events
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      stopAutoPlay();
      goToSlide(index);
      startAutoPlay();
    });
  });

  // Pause on hover
  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);

  // Initialize
  showSlide(0);
  startAutoPlay();
});
