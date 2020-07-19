$(document).ready(function(){
	 		$('.variables_contents li').click(function(){
	 		   var get_id = this.id;
	 		   var get_current = $('.' + 'get_id');
	 		   $('.discription_class div').not('get_current').hide(200);
	 		   $('get_current').show(200);

	 		});
	 	});