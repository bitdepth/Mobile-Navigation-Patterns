;(function($){

	$('#show-menu').slideMenu({
		nav: '[role=navigation]',
		content: '[role=main]',
		navWidth: '200px'
	});

	// $('#show-menu').click(function(e){
	// 	var $target = $(this),
	// 		$nav = $('[role=navigation]'),
	// 		$content = $('[role=main]');

	// 	if($target.hasClass('open')){
	// 		$target.removeClass('open');
	// 		$nav.css({'margin-left':'-20%'});
	// 		$content.css({'margin-left':'0'});
	// 	} else {
	// 		$target.addClass('open');
	// 		$nav.css({'margin-left':'0'});
	// 		$content.css({'margin-left':'20%'});			
	// 	}

	// 	e.preventDefault();

	// });

})(jQuery);