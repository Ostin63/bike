'use strict';
var body = document.querySelector('.body');
var header = body.querySelector('.header');
var menuToggle = body.querySelector('.header__menu-button');
var headerMenu = header.querySelector('.header__menu');
var menuLinks = header.querySelectorAll('.header__menu-item a');
var footerMap = document.querySelector('.footer__map-img');
var footerIframe = document.querySelector('.footer__iframe');
var headerForm = body.querySelector('.header__form');
var headerFormTel = headerForm.querySelector('.header__form input[type=tel]');

headerMenu.classList.add('header__menu--none');

if (footerMap) {
  footerIframe.classList.remove('footer__iframe--none');
  footerMap.classList.add('visually-hidden');
}

function onToggleMenu() {
  menuToggle.classList.toggle('header__menu-button--active');
  headerMenu.classList.toggle('header__menu--none');
}

function validateForm(evt) {
  evt.preventDefault();

  var tel = headerFormTel.value;

  if (!/^\+7\[0-9]+$/.test(tel)) {
    headerFormTel.setCustomValidity('Вводить нужно только цифры');
    headerFormTel.classList.add('error');
  } else {
    headerFormTel.setCustomValidity('');
    headerFormTel.classList.remove('error');
  }
  headerFormTel.reportValidity();
}

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', onToggleMenu);
}

menuToggle.addEventListener('click', onToggleMenu);
headerFormTel.addEventListener('input', validateForm);
