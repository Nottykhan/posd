document.addEventListener('DOMContentLoaded', () => {
  // GSAP for Hero Section Animation
  gsap.from("#hero .container", {
    duration: 1.5,
    opacity: 0,
    y: -50,
  });

  // Toggle Publication Details
  const detailsButtons = document.querySelectorAll('.details-btn');
  detailsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const details = e.target.nextElementSibling;
      details.classList.toggle('show');
    });
  });
});
