'use strict';

const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('show');
	hamburger.classList.toggle('hamburger--close')
});