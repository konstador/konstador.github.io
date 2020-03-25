    $('.gallery_link').click(function () {
        $(".gallery_link").removeClass("gallery_link--active");
        $(this).addClass("gallery_link--active");
        $(".gallery_item").removeClass("gallery_item--active");
        $("#" + $(this).attr("data-id")).addClass("gallery_item--active");
    }); 