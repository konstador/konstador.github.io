
	$(document).ready(function() {
		$('.trainers_list').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 3,
			slidesPerRow: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			dots: false,
			arrows: false,
			infinite: false,
			responsive: [{
				breakpoint: 600,
				settings: {
					rows: 1,
					slidesToShow: 1,
				}
			}]
		});

		$('.trainers_about').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 3,
			slidesPerRow: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			dots: false,
			arrows: false,
			infinite: false,
			responsive: [{
				breakpoint: 600,
				settings: {
					rows: 1,
					slidesToShow: 1,
					
				}
			}]
		});
		$('.slider-page').slick({
			rows: 3,
			slidesPerRow: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.trainers_list, .trainers_about',
			arrows: true,
			infinite: false,
			nextArrow: $('.trainers_next'),
			prevArrow: $('.trainers_prev'),
			responsive: [
				{
					breakpoint: 600,
					settings: {
						rows:1,
					}
				}]

		});
		$('.review_slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			dots: false,
			arrows: true,
			infinite: false,
			nextArrow: $('.review_next'),
			prevArrow: $('.review_prev'),
			responsive: [
				{
					breakpoint: 600,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}]
		});
	});
	$(window).resize(function () {
	location.reload(true); });
