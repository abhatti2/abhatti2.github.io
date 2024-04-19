document.addEventListener("DOMContentLoaded", function() {
  let reviews = document.querySelectorAll('.review');
  let index = 0;

  // Function to display next review
  function showNextReview() {
    reviews[index].classList.remove('active');
    index = (index + 1) % reviews.length;
    reviews[index].classList.add('active');
  }

  // Show first review initially
  reviews[index].classList.add('active');

  // Automatic review transition every 5 seconds
  setInterval(showNextReview, 5000);

  // Transition to About Us section when Enter button is clicked
  let enterButton = document.querySelector('.cta-button');
  enterButton.addEventListener('click', function(event) {
      event.preventDefault();
      let aboutSection = document.getElementById('about-us');
      // Adjust scroll position to account for fixed header
      let headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: aboutSection.offsetTop - headerHeight,
        behavior: 'smooth'
      });
  });
});