$(document).ready(function(){
    $(".slide-one").owlCarousel({
        margin:20, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию //
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            500:{
                items:1
            },
            700:{
                items:3
            }
        }
    });
	$(".slide-two").owlCarousel({
        margin:20, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию //
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            500:{
                items:1
            },
            700:{
                items:3
            }
        }
    });
    $(".slider3").owlCarousel({
        margin:20, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию //
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            500:{
                items:1
            },
            700:{
                items:3
            }
        }
    });
    $(".slider4").owlCarousel({
        margin:20, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию //
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            500:{
                items:1
            },
            700:{
                items:1
            }
        }
    });
    // Go to the next item
	$('.right').click(function() {
	    $('.slide-one').trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.left').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    $('.slide-one').trigger('prev.owl.carousel', [300]);
	})
	// Go to the next item
	$('.right2').click(function() {
	    $('.slide-two').trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.left2').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    $('.slide-two').trigger('prev.owl.carousel', [300]);
	})
	// Go to the next item
	$('.right3').click(function() {
	    $('.slider3').trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.left3').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    $('.slider3').trigger('prev.owl.carousel', [300]);
	})
	// Go to the next item
	$('.right4').click(function() {
	    $('.slider4').trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.left4').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    $('.slider4').trigger('prev.owl.carousel', [300]);
	})
});














