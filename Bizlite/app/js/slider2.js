
    $(document).ready(function(){
      $('.slider2').slick({
        slidesToShow: 4,
		  slidesToScroll: 4,
		  autoplay: false,
		  autoplaySpeed: 3000,
		  dots:false,
		  arrows:true,
		  nextArrow: $('.next-btn'),
		  prevArrow: $('.prev-btn'),
		  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        //centerMode: true,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '90px',
      }
    },

    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        //centerMode: true,
     } 
    }
    ]
      });
    });
