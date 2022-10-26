$(document).ready(function() {
	$('#pagepiling').pagepiling({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
		menu: '#myMenu'
	});

	$('.buy__wrapper').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
	  });
});

$(document).ready(function() {
	document.querySelectorAll('.accordeon__heading').forEach(function(item) {
		item.addEventListener('click', function() {
			if (!item.classList.contains('ins')) {
				document.querySelectorAll('.accordeon__heading').forEach(function(newItem) {
					if (newItem.classList.contains('ins')) {
						$(newItem).toggleClass('ins').next().slideToggle();
					}
				});
				$(item).toggleClass('ins').next().slideToggle();
			} else {
				$(item).toggleClass('ins').next().slideToggle();
			}
		});
	});
});