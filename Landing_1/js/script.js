function ibg(){
	$.each($('.ibg'), function(index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();



// $('.lang-switcher').click(function(){
// 	$('.sub-menu').toggleClass('active');
// 	$('.swith-icon').toggleClass('active')

// })

$(document).ready(function(){
	$('.banner-slider').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	swipe: true,
	draggale: true,
	appendArrows: $(".banner-nav"),
	appendDots: $(".banner-nav"),
  });
  $(".partner__slider").slick({
		arrows: true,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		appendArrows: $(".slider-nav"),
		appendDots: $(".slider-nav"),
		responsive: [
			{
			  breakpoint: 1117,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
				breakpoint: 577,
				settings: {
				  slidesToShow: 1
				}
			  }
		  ]
	});
	$(".review__slider").slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		appendArrows: $(".review-nav"),
		appendDots: $(".review-nav"),
		responsive: [
			{
				breakpoint: 577,
				settings: {
					autoplay: true,
					autoplaySpeed: 4000
				}
			  }
		]
	});
});

$(".burger-menu").click(function(event){
	$(".burger-menu, .navbar").toggleClass("active");
	$("body").toggleClass("lock");
});


