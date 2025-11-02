// Wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Find the button and the menu
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  // Only run if both elements were found
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      // Toggle the .show class on the menu
      navMenu.classList.toggle('show');

      // (THIS IS THE NEW LINE) Toggle a class on the body
      document.body.classList.toggle('nav-open');

      // Update the aria-expanded attribute for accessibility
      const isExpanded = navMenu.classList.contains('show');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  } else {
    // If this runs, something is wrong with the HTML selectors
    console.log("Error: Could not find nav toggle button or nav menu.");
  }
});