// Custom cursor dot that follows the mouse (simple special effect)
const dot = document.getElementById('cursor-dot');
document.addEventListener('mousemove', (e) => {
  if (!dot) return;
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Simple rollover: swap logo on hover
const logo = document.getElementById('site-logo');
if (logo) {
  // Path to the default logo image and hover image.  The hover image lives in
  // assets/assets/logo-placehol.der.jpg (as stored in your repo), so set the
  // hover variable accordingly.  When you hover over #site-logo, it will swap
  // to this image, and revert back on mouse leave.
  const base = 'assets/logo.jpg';
  const hover = 'assets/assets/logo-placehol.der.jpg';
  logo.addEventListener('mouseenter', () => {
    logo.src = hover;
  });
  logo.addEventListener('mouseleave', () => {
    logo.src = base;
  });
}