const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBarry: function () {
		return navigator.userAgent.match(/BlackBarry/i);
	},
	Ios: function () {
		return navigator.userAgent.match(/IPhone|IPad|IPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBarry() ||
			isMobile.Ios() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active_arrow');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

//-------------------Меню бургер 1
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuText = document.querySelector('.header__text');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active_icon');
		menuBody.classList.toggle('_active_menu');
		menuText.classList.toggle('_active_text')
	})
}

//-------------------Меню бургер 2
const prodMenu = document.querySelector('.products__icon');
const prodBody = document.querySelector('.products__body');
const menuText2 = document.querySelector('.header__text2')
if (prodMenu) {
	prodMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		prodMenu.classList.toggle('_active_prods');
		prodBody.classList.toggle('_active_body');
		menuText2.classList.toggle('_active_text')
	})
}

//-------------------Активный Ховер
const iconsHover = document.querySelectorAll('.item__back');
const btnsHover = document.querySelectorAll('.item__btn');
if (iconsHover) {
	iconsHover.forEach(iconHover => {
		iconHover.addEventListener("mouseenter", function (e) {
			const pairValue = iconHover.getAttribute('data-pair');
			iconHover.classList.add('_active_back');
			const corrSecondElement = document.querySelector(`.item__btn[data-pair="${pairValue}"]`);
			if (corrSecondElement) {
				corrSecondElement.classList.add('_active_btn');
			}
		});
		iconHover.addEventListener("mouseleave", function (e) {
			const pairValue = iconHover.getAttribute('data-pair');
			iconHover.classList.remove('_active_back');
			const corrSecondElement = document.querySelector(`.item__btn[data-pair="${pairValue}"]`);
			if (corrSecondElement) {
				corrSecondElement.classList.remove('_active_btn');
			}
		});
	});
}
if (btnsHover) {
	btnsHover.forEach(btnHover => {
		btnHover.addEventListener("mouseenter", function (e) {
			const pairValue = btnHover.getAttribute('data-pair');
			btnHover.classList.add('_active_btn');
			const corrFirstElement = document.querySelector(`.item__back[data-pair="${pairValue}"]`);
			corrFirstElement.classList.add('_active_back');
		})
	})
}

//-------------------Активная навигация
const midleCircles = document.querySelectorAll('.midle__circle');
const externalCircles = document.querySelectorAll('.external__circle');

if (midleCircles) {
	midleCircles.forEach(midleCircle => {
		midleCircle.addEventListener("mouseenter", function (e) {
			const pairValue = midleCircle.getAttribute('data-pair');
			const dataPair = document.querySelector(`.external__circle[data-pair="${pairValue}"]`);
			dataPair.classList.add('_hover_circle');
		})
	})
	midleCircles.forEach(midleCircle => {
		midleCircle.addEventListener("mouseleave", function (e) {
			const pairValue = midleCircle.getAttribute('data-pair');
			const dataPair = document.querySelector(`.external__circle[data-pair="${pairValue}"]`);
			dataPair.classList.remove('_hover_circle');
		})
	})
}

if (midleCircles) {
	midleCircles.forEach((midleCircle, externalCircle) => {
		midleCircle.addEventListener("click", (event) => circleClick(event, externalCircle));
	});
	function circleClick(event, externalCircle) {
		midleCircles.forEach(midleCircle => midleCircle.classList.remove('_click_circle'));
		externalCircles.forEach(externalCircle => externalCircle.classList.remove('_click_circle'));
		event.target.classList.add('_click_circle');
		externalCircles[externalCircle].classList.add('_click_circle');
	}
}

//-------------------Активный поисковик
const searchIacon = document.querySelector('.search__text');
const searchBody = document.querySelector('.search__body');

if (searchIacon) {
	searchIacon.addEventListener("click", function (e) {
		searchBody.classList.toggle('_active_body');
		searchIacon.classList.toggle('_active_text');
	})
}
//-------------------Активныe соцсети
const mediaHover = document.querySelectorAll('.media-block');
const mediaActive = document.querySelectorAll('.media-none');

if (mediaHover) {
	mediaHover.forEach(mediaHovers => {
		mediaHovers.addEventListener("mouseenter", function (e) {
			mediaHovers.classList.add('_active');
			const dataPair = mediaHovers.getAttribute('data-pair');
			const dataMediaPair = document.querySelector(`.media-none[data-pair="${dataPair}"]`);
			dataMediaPair.classList.add('_active');
		})
	})
	mediaActive.forEach(mediaActives => {
		mediaActives.addEventListener("mouseleave", function (e) {
			mediaActives.classList.remove('_active');
			const dataPair = mediaActives.getAttribute('data-pair');
			const dataMediaPair = document.querySelector(`.media-block[data-pair="${dataPair}"]`);
			dataMediaPair.classList.remove('_active');
		})
	})
}
//-------------------Активный слайдер
document.addEventListener('DOMContentLoaded', () => {
	const slides = document.querySelectorAll('.watch__page');
	const leftArrow = document.querySelector('.footer__arrow-l');
	const rightArrow = document.querySelector('.footer__arrow-r');
	let currentIndex = 0;

	function updateSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('_page_wisible', i === index);
		});
		midleCircles.forEach((midleCircle, i) => {
			midleCircle.classList.toggle('_click_circle', i === index);
		})
		externalCircles.forEach((externalCircle, i) => {
			externalCircle.classList.toggle('_click_circle', i === index);
		})
		currentIndex = index;
	};
	leftArrow.addEventListener('click', () => {
		let newIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
		updateSlide(newIndex);
	});
	rightArrow.addEventListener('click', () => {
		let newIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
		updateSlide(newIndex)
	});
	midleCircles.forEach((midleCircle, index) => {
		midleCircle.addEventListener('click', () => {
			updateSlide(index);
		});
	});
	updateSlide(currentIndex);
});
//-------------------Активный слайдер часов
document.addEventListener('DOMContentLoaded', () => {
	const arrowLeft = document.querySelector('.women__arrowl');
	const arrowRight = document.querySelector('.women__arrowr');
	const slides = document.querySelectorAll('.women__imgwatch');
	const currentSlideElement = document.getElementById('current-slide');
	const totalSlidesElement = document.getElementById('total-slides');
	const totalSlides = slides.length;
	let currentIndex = 0;

	totalSlidesElement.textContent = totalSlides.toString().padStart(2, '0');

	function updateSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('_watch_wisible', i === index);
		});
		currentIndex = index;
		updateSlideCounter(currentIndex + 1);
	};

	function updateSlideCounter(current) {
		currentSlideElement.textContent = current.toString().padStart(2, '0');
	};

	arrowLeft.addEventListener('click', () => {
		let newIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
		updateSlide(newIndex);
	});
	arrowRight.addEventListener('click', () => {
		let newIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
		updateSlide(newIndex);
	});

	updateSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
	const arrowLeft = document.querySelector('.men__arrowl');
	const arrowRight = document.querySelector('.men__arrowr');
	const slides = document.querySelectorAll('.men__imgwatch');
	const currentSlideElement = document.getElementById('current-slide2');
	const totalSlidesElement = document.getElementById('total-slides2');
	const totalSlides = slides.length;
	let currentIndex = 0;

	totalSlidesElement.textContent = totalSlides.toString().padStart(2, '0');

	function updateSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('_watch_wisible', i === index);
		});
		currentIndex = index;
		updateSlideCounter(currentIndex + 1);
	};

	function updateSlideCounter(current) {
		currentSlideElement.textContent = current.toString().padStart(2, '0');
	};

	arrowLeft.addEventListener('click', () => {
		let newIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
		updateSlide(newIndex);
	});
	arrowRight.addEventListener('click', () => {
		let newIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
		updateSlide(newIndex);
	});

	updateSlide(currentIndex);
});
//-------------------Активный цикл img
const slides = document.querySelectorAll('.never__img');
if (slides) {
	let currentSlide = 0;
	const totalSlides = slides.length;

	function showNextSlide() {
		slides[currentSlide].classList.remove('_active_img');
		currentSlide = (currentSlide + 1) % totalSlides;
		slides[currentSlide].classList.add('_active_img');
	}

	setInterval(showNextSlide, 4000);
}
