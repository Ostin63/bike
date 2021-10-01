/* eslint-disable strict */
var body = document.querySelector('.body');
var header = body.querySelector('.header');
var menuToggle = body.querySelector('.header__menu-button');
var headerMenu = header.querySelector('.header__menu');
var menuLinks = header.querySelectorAll('.header__menu-link');
var footerMap = document.querySelector('.footer__map-img');
var footerIframe = document.querySelector('.footer__iframe');

headerMenu.classList.add('header__menu--none');

if (footerMap) {
  footerIframe.classList.remove('footer__iframe--none');
  footerMap.classList.add('visually-hidden');
}

function onToggleMenu() {
  menuToggle.classList.toggle('header__menu-button--active');
  headerMenu.classList.toggle('header__menu--none');
}

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', onToggleMenu);
}

menuToggle.addEventListener('click', onToggleMenu);
