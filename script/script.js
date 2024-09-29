"use strict"

const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');

const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	autoplay: {
				delay: 5000,
				},
	stopOnLastSlide: true,
	disableOnInteraction: false,
	speed: 1000,
	breakpoints: {
		767: {
			slidesPerView: 1,
		}
	},
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
    loop: "true",
    pagination: {
        el: '.pagination',
        clickable: "true",
      },
});