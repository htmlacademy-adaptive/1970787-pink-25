let navMainWrapper = document.querySelector('.main-nav__wrapper');
let navMainToggle = document.querySelector('.main-nav__toggle');
let navMainBurger = document.querySelector('.main-nav__toggle-burger');
let navMainMenu = document.querySelector('.main-nav__menu');
let navMain = document.querySelector('.main-nav');

navMainWrapper.classList.add ('main-nav__wrapper--close');
navMainToggle.classList.add ('main-nav__toggle--JS-menu');
navMainMenu.classList.add ('main-nav__menu--close');
navMain.classList.add('main-nav--JS-menu')

navMainToggle.addEventListener('click', function() {
  if (navMainBurger.classList.contains('main-nav__toggle-burger--close')) {
    navMainBurger.classList.remove('main-nav__toggle-burger--close');
    navMainMenu.classList.add ('main-nav__menu--close');
    navMainWrapper.classList.add ('main-nav__wrapper--close');
  } else {
    navMainBurger.classList.add('main-nav__toggle-burger--close');
    navMainMenu.classList.remove ('main-nav__menu--close');
    navMainWrapper.classList.remove ('main-nav__wrapper--close');
  }
});
