
        $(function() {
          $.scrollify({
            section : ".scroll",
          });
        });
        $.scrollify({
	    section : "scroll",
	    //sectionName : "section-name",
	    interstitialSection : "",
	    easing: "easeOutExpo",
	    scrollSpeed: 1200,
	    offset : 0,
	    scrollbars: true,
	    standardScrollElements: "",
	    setHeights: false,
	    overflowScroll: true,
	    updateHash: false,
	    touchScroll:true,
	    before:function() {},
	    after:function() {},
	    afterResize:function() {},
	    afterRender:function() {},

	  });
     
        $("#page-1").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-2").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-3").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-4").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-5").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-6").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-7").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-8").on("click",function() {
        	$.scrollify.next();
    	});
    	$("#page-9").on("click",function() {
        	$.scrollify.move("#main-page");
    	});
    	$("#menu-item1").on("click",function() {
        	$.scrollify.move("#main-page");
    	});
    	$("#menu-item2").on("click",function() {
        	$.scrollify.move("#classes");
    	});
    	$("#menu-item3").on("click",function() {
        	$.scrollify.move("#treiners");
    	});
    	$("#menu-item4").on("click",function() {
        	$.scrollify.move("#abonements");
    	});
    	$("#menu-item5").on("click",function() {
        	$.scrollify.move("#schedule");
    	});
    	$("#menu-item6").on("click",function() {
        	$.scrollify.move("#review");
    	});
    	$("#menu-item7").on("click",function() {
        	$.scrollify.move("#contact");
    	});
