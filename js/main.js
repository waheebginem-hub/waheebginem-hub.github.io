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
// Image Slider (Auto + Controls)
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
  
  // Create dots using let + for
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("button");
    dot.className = "slider-dot";
    dot.type = "button";
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
  
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      stopAutoPlay();
      goToSlide(index);
      startAutoPlay();
    });
  });
  
  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);
  
  showSlide(0);
  startAutoPlay();
});

// ==========================
// SOCIAL NEWS PROGRAM
// ==========================

// Array to store all links
let linksList = [];

// Main function to start the social news program
function startSocialNews() {
  let running = true;
  
  while (running) {
    const choice = showMenu();
    
    switch (choice) {
      case "1":
        showLinks();
        break;
      case "2":
        addLink();
        break;
      case "3":
        removeLink();
        break;
      case "4":
        running = false;
        alert("Thank you for using Social News Program! Goodbye.");
        break;
      default:
        alert("Invalid choice. Please select 1, 2, 3, or 4.");
    }
  }
}

// Show the main menu and get user choice
function showMenu() {
  const menu = `
=== SOCIAL NEWS PROGRAM ===

Choose an action:
1. Show the list of links
2. Add a new link
3. Remove an existing link
4. Quit the program

Enter your choice (1-4):`;
  
  return prompt(menu);
}

// Show all links in the list
function showLinks() {
  if (linksList.length === 0) {
    alert("No links available. The list is empty!");
    return;
  }
  
  let message = "=== LINK LIST ===\n\n";
  
  for (let i = 0; i < linksList.length; i++) {
    const link = linksList[i];
    message += `${i + 1}. ${link.title}\n`;
    message += `   URL: ${link.url}\n`;
    message += `   Author: ${link.author}\n\n`;
  }
  
  alert(message);
}

// Add a new link to the list
function addLink() {
  const title = prompt("Enter the link title:");
  if (!title) {
    alert("Title cannot be empty. Link not added.");
    return;
  }
  
  let url = prompt("Enter the link URL:");
  if (!url) {
    alert("URL cannot be empty. Link not added.");
    return;
  }
  
  // Add http:// if URL doesn't start with http:// or https://
  url = formatUrl(url);
  
  const author = prompt("Enter the author name:");
  if (!author) {
    alert("Author cannot be empty. Link not added.");
    return;
  }
  
  // Create the link object
  const newLink = {
    title: title,
    url: url,
    author: author
  };
  
  linksList.push(newLink);
  alert(`Link "${title}" has been added successfully!`);
}

// Format URL to include http:// if needed
function formatUrl(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "http://" + url;
  }
  return url;
}

// Remove a link from the list
function removeLink() {
  if (linksList.length === 0) {
    alert("No links available to remove!");
    return;
  }
  
  let validIndex = false;
  let index;
  
  while (!validIndex) {
    const input = prompt(`Enter the link number to remove (1-${linksList.length}):`);
    
    if (input === null) {
      return; // User cancelled
    }
    
    index = parseInt(input);
    
    if (isNaN(index) || index < 1 || index > linksList.length) {
      alert(`Invalid index. Please enter a number between 1 and ${linksList.length}.`);
    } else {
      validIndex = true;
    }
  }
  
  const removedLink = linksList.splice(index - 1, 1)[0];
  alert(`Link "${removedLink.title}" has been removed successfully!`);
}
