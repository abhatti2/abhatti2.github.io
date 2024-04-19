const menuIconLabel = document.getElementById('menu-icon-label');
const navMenu = document.getElementById('nav-menu');

menuIconLabel.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});
