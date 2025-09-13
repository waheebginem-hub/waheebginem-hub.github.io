
// Custom cursor dot that follows the mouse (simple special effect)
const dot = document.getElementById('cursor-dot');
document.addEventListener('mousemove', (e) => {
  if (!dot) return;
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Simple rollover: swap logo on hover
const logo = document.getElementById('site-logo');
if (logo){
  const base = 'assets/logo.jpg';
  const hover = 'assets/logo-hover.jpg';
  logo.addEventListener('mouseenter', ()=>{ logo.src = hover; });
  logo.addEventListener('mouseleave', ()=>{ logo.src = base; });
}
