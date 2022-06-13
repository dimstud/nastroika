const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('show');
	hamburger.classList.toggle('hamburger--close')
});

$(document).ready(function(){
	$('.fade').slick({
		dots: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev gallery__arrow-prev"><svg style="width:54px;height:54px" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg></button>',
		nextArrow: '<button type="button" class="slick-prev gallery__arrow-next"><svg style="width:54px;height:54px" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg></button>',
		responsive: [
			{
				breakpoint: 968,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
	});
});