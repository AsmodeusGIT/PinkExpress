const burgerToggle = () => {
  const burger = document.querySelector('.burger-container');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.querySelector(
    '.home-main-section, .explore-main-section, .join-main-section'
  );

  burger.addEventListener('click', () => {
    mobileNav.classList.add('mobile-nav-visible');
  });

  body.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav-visible');
  });
};

burgerToggle();

$(document).ready(function() {
  $('body').removeClass('preload');
});
