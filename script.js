// Countdown Timer
function updateCountdown() {
  // Set target date to 19 October 2025 00:00:00 SGT (UTC+8)
  const targetDate = new Date('2025-10-19T00:00:00+08:00');
  const now = new Date();

  // Calculate time difference in milliseconds
  const diff = targetDate - now;

  if (diff <= 0) {
    // Countdown has ended
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
    return;
  }

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the DOM
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update countdown immediately
updateCountdown();

// Update countdown every second (1000 milliseconds)
setInterval(updateCountdown, 1000);

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Age Group Filter for Camp Details
document.addEventListener('DOMContentLoaded', () => {
  const agePills = document.querySelectorAll('.age-pill');
  const dateCards = document.querySelectorAll('.date-card');

  // Initialize with P1-P3 selected by default
  const defaultGroup = 'p1-p3';
  dateCards.forEach(card => {
    const cardGroup = card.getAttribute('data-group');
    if (cardGroup !== defaultGroup) {
      card.classList.add('dimmed');
    }
  });

  agePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const selectedGroup = pill.getAttribute('data-group');

      // Update active pill
      agePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Filter date cards
      dateCards.forEach(card => {
        const cardGroup = card.getAttribute('data-group');
        if (cardGroup === selectedGroup) {
          card.classList.remove('dimmed');
        } else {
          card.classList.add('dimmed');
        }
      });
    });
  });

  // Testimonials Infinite Scroll
  const testimonialTracks = document.querySelectorAll('.testimonials-track');

  testimonialTracks.forEach(track => {
    // Clone the content to create seamless loop
    const items = track.innerHTML;
    track.innerHTML = items + items;
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked item if it wasn't already active
      if (!isActive) {
        faqItem.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
