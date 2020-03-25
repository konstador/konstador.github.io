$(document).ready(function(){
     	$('.slider3').slick({
          slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
		  autoplaySpeed: 2000,
		  dots:false,
		  arrows:false,
		  infinite:false,
		  });
     	$('.slider3_page').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider3',
		  dots: false,
		  //centerMode: true,
		  focusOnSelect: true,
		  infinite:false,
		  prevArrow: '.prev-btn',
		  nextArrow: '.next-btn',
		});
		$('.slider3_first').click(function(){
    		$('.slider3').slick('slickGoTo',0),
    		$('.page-first').click()
		});
		$('.slider3_last').click(function(){
    		$('.slider3').slick('slickGoTo',4),
    		$('.page-last').click()
    		
		});
    });

