// Бургер

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	})
}


// прокрутака по клике

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			
			if(iconMenu.classList.contains("_active")) {
				document.body.classList.remove("_lock");
				iconMenu.classList.remove("_active");
				menuBody.classList.remove("_active");
			}
			
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}



$(document).ready(function() {
	$('.slider').slick({
		dots: true,
		arrows: true,
		adaptiveHeight: false, // автоматически миняется нахождение кнопок преключания слайдера
		slidesToShow: 1,
		slideToScroll: 1,
		speed: 1000,
		infinite: true, // бесконечная прокрутка
		initialSlide: 0, // с какого слайда начинаем
		autoplay: false, //автоматически переключаються слайдеры
		autoplaySpeed: 1500,
		pauseOnFocus: true, //остановка слайдера при навидении мышки
		pauseOnHover: true,
		pauseOnDotHover: true,
		draggable: false, // отключить прокрутку слайдера мышкою на ПК
		swipe: true, // пролистование слайдера пальчем на телефоне
		touthTherhold: 5,
		touchMove: true,
		waitForAnimate: true, //на сколько быстро можна перелистовать слайды
		centerMode: false, //делает один елемент слайдера по центру и додает класс slick-center
		variableWidth: false, // убирает автоматическую ширину
		rows: 1, //ряди 
		slidesPerRow: 1, 
		vertical: false, 
		verticalSwiping: false,
		responsive: [
			{
				breakpoint: 686,
				settings: {
					arrows: false
				}
			}
		]
	});
});



