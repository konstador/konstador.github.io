
    $(document).ready(function(){
    	$(window).resize(function() {
    	if ( $(window).width() <821 ){
	    $('.discription_class').slick({
	        slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: false,
			  autoplaySpeed: 3000,
			  dots:false,
			  arrows:true,
			  nextArrow: $('.next-btn'),
			  prevArrow: $('.prev-btn'),
			  
	      });
	      $('.discription_treiner').slick({
	        slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: false,
			  autoplaySpeed: 3000,
			  dots:false,
			  arrows:true,
			  nextArrow: $('.treiners_next-btn'),
			  prevArrow: $('.treiners_prev-btn'),
			  
	      });
	      $('.discription_review').slick({
	        slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: false,
			  autoplaySpeed: 3000,
			  dots:false,
			  arrows:true,
			  nextArrow: $('.review_next-btn'),
			  prevArrow: $('.review_prev-btn'),
			  
	      });
	   };
	 });
    });
  