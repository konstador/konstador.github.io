
   $(document).ready(function () {
   	$(window).resize(function () {
   		if ($(window).width() < 821) {
   			$('.discription_class').slick({
   				slidesToShow: 1,
   				slidesToScroll: 1,
   				autoplay: false,
   				autoplaySpeed: 3000,
   				dots: false,
   				arrows: true,
   				nextArrow: $('.next-btn'),
   				prevArrow: $('.prev-btn'),
   			});
   			$('.discription_treiner').slick({
   				slidesToShow: 1,
   				slidesToScroll: 1,
   				autoplay: false,
   				autoplaySpeed: 3000,
   				dots: false,
   				arrows: true,
   				nextArrow: $('.treiners_next-btn'),
   				prevArrow: $('.treiners_prev-btn'),

   			});
   			$('.discription_review').slick({
   				slidesToShow: 1,
   				slidesToScroll: 1,
   				autoplay: false,
   				autoplaySpeed: 3000,
   				dots: false,
   				arrows: true,
   				nextArrow: $('.review_next-btn'),
   				prevArrow: $('.review_prev-btn'),

   			});
   		} else {
   			$('.discription_class').slick('unslick');
   			$('.discription_treiner').slick('unslick');
   			$('.discription_review').slick('unslick');
   		}
   	});
   });
   $(document).ready(function () {
					$('.discription_class').slick({
						mobileFirst:true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: false,
						autoplaySpeed: 3000,
						dots: false,
						arrows: true,
						nextArrow: $('.next-btn'),
						prevArrow: $('.prev-btn'),
						responsive: [
						{
						breakpoint: 821,
						settings: "unslick",
						}]
					});
					$('.discription_treiner').slick({
						mobileFirst:true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: false,
						autoplaySpeed: 3000,
						dots: false,
						arrows: true,
						nextArrow: $('.treiners_next-btn'),
						prevArrow: $('.treiners_prev-btn'),
						responsive: [
						{
						breakpoint: 821,
						settings: "unslick",
						}]

					});
					$('.discription_review').slick({
						mobileFirst:true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: false,
						autoplaySpeed: 3000,
						dots: false,
						arrows: true,
						nextArrow: $('.review_next-btn'),
						prevArrow: $('.review_prev-btn'),
						responsive: [
						{
						breakpoint: 821,
						settings: "unslick",
						}]

					});
				
		});