// Initialize AOS (scroll animations)
AOS.init({
  duration: 700,
  once: true,
  offset: 80
});

// Demo booking handler
function demoBooking() {
  alert('Booking is disabled in this demo. This is a front-end preview only.');
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}
hamburger.addEventListener('click', toggleMenu);

// Responsive menu sync
function syncMenu() {
  if (window.innerWidth < 860) {
    hamburger.style.display = 'flex';
    navLinks.style.display = 'none';
  } else {
    hamburger.style.display = 'none';
    navLinks.style.display = 'flex';
    mobileMenu.style.display = 'none';
  }
}
window.addEventListener('resize', syncMenu);
window.addEventListener('load', syncMenu);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hover effect: highlight cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
