/* eslint-disable strict */
var body = document.querySelector('.body');
var header = body.querySelector('.header');
// var menuToggle = body.querySelector('.header__menu-button');
var headerMenu = document.querySelector('.header__menu');
var footerMap = document.querySelector('.footer__map-img');
var footerIframe = document.querySelector('.footer__iframe');

header.classList.add('deactive');
headerMenu.classList.add('d-none');

if (footerMap) {
  footerIframe.classList.remove('footer__iframe--none');
  footerMap.classList.add('visually-hidden');
}
