(function ($) {
	
	"use strict";
	$('.owl-product-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		margin: 30,
		  responsive:{
			  0:{
				  items:1
			  },
			  700:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	})


})(window.jQuery);