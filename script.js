// Example: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example: Add a simple alert when the "Order Now" button is clicked
  document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Thank you for ordering!');
  });