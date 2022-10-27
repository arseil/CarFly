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

$('img.img-svg').each(function() {
	var $img = $(this);
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');
	$.get(imgURL, function(data) {
		var $svg = $(data).find('svg');
		if (typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass + ' replaced-svg');
		}
		$svg = $svg.removeAttr('xmlns:a');
		if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
		}
		$img.replaceWith($svg);
	}, 'xml');
});