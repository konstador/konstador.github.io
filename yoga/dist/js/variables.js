$(document).ready(function () {
  $('.abonements_months').click(function () {
    $(".abonements_time").removeClass("abonements_time--active");
    $("#" + $(this).attr("about")).addClass("abonements_time--active");
  });

  $('.abonements_months').click(function () {
    $(".abonements_months").removeClass("abonements_months--active");
    $(this).addClass("abonements_months--active");
  });
  $('.trainers_item1').click(function () {
    $(".trainers_discription--mobile1").removeClass("trainers_discription--active");
    $("#" + $(this).attr("about")).addClass("trainers_discription--active");
    $(".trainers_about .slick-slide div").css("height", "100%");
    $(".trainers_about .slick-slide div").not($(".trainers_about .slick-slide div").has(".trainers_discription--active")).css("height", "0");
    $(".trainers_discription--active").css("height", "100%");
  });
  $('.trainers_item2').click(function () {
    $(".trainers_discription--mobile2").removeClass("trainers_discription--active");
    $("#" + $(this).attr("about")).addClass("trainers_discription--active");
    $(".trainers_about .slick-slide div").css("height", "100%");
    $(".trainers_about .slick-slide div").not($(".trainers_about .slick-slide div").has(".trainers_discription--active")).css("height", "0");
    $(".trainers_discription--active").css("height", "100%");
  });
  $('.trainers_item3').click(function () {
    $(".trainers_discription--mobile3").removeClass("trainers_discription--active");
    $("#" + $(this).attr("about")).addClass("trainers_discription--active");
    $(".trainers_about .slick-slide div").css("height", "100%");
    $(".trainers_about .slick-slide div").not($(".trainers_about .slick-slide div").has(".trainers_discription--active")).css("height", "0");
    $(".trainers_discription--active").css("height", "100%");
  });
});
      