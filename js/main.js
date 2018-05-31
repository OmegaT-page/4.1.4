$(document).ready(function(){
	
	//preloader
    $(window).load(function () {
        $('.preloader').fadeOut();
        $('.preloader-area').delay(350).fadeOut('slow');
	});
		
	
	//One Page Nav
	$('#nav').onePageNav();

	//Portfolio Popup
	$('.single-portfolio').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery:{enabled:true},
		removalDelay: 300,
		// other options
	});
	
	//WOW Animations
	 var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
			  // the callback is fired every time an animation is started
			  // the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();
	
	
	//Testimonial Carousel
	$('.testimonial-main').slick({
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 3,
	  dots: true,
	  prevArrow: false,
	  nextArrow: false,
	  autoplay: true,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '60',
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 320,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		  }
		},
		
		]
	});		
	
	//Clients Carousel
	$('.clients-main').slick({
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 5,
	  dots: false,
	  arrows: false,
	  autoplay: false,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		  }
		},
		
		
		
		]
	});	
	$('.navbar-default').css({"zIndex":"99"});
	
	 $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollup .fa').fadeIn();
            } else {
                $('.scrollup .fa').fadeOut();
            }
        });
        $('.scrollup').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

		
	// Google Maps API
	$("#map").googleMap();
    $("#map").addWay({
    	start: "15 avenue des champs Elysées 75008 Paris", // Postal address for the start marker (obligatory)
		end:  [48.895651, 2.290569], // Postal Address or GPS coordinates for the end marker (obligatory)
		route : 'way', // Block's ID for the route display (optional)
		langage : 'english' // language of the route detail (optional)
	});
	
	
	
	
	
	
} );


