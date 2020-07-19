
      $('.classes_variables-item').click(function(){
        $(".discription_content").removeClass("discription_content--active");
        $("#"+$(this).attr("about")).addClass("discription_content--active");
      });
      $('.trainers_variables-item').click(function(){
        $(".treiners_discription-content").removeClass("treiners_discription-content--active");
        $("#"+$(this).attr("about")).addClass("treiners_discription-content--active");
      });
      $('.review_variables-item').click(function(){
        $(".review_discription-content").removeClass("review_discription-content--active");
        $("#"+$(this).attr("about")).addClass("review_discription-content--active");
      });