$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        menu: '#myMenu'
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