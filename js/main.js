jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});

		$('a[href^=#]').click(function() {
	      // スクロールの速度
	      var speed = 600; // ミリ秒
	      // アンカーの値取得
	      var href= $(this).attr("href");
	      // 移動先を取得
	      var target = $(href == "#" || href == "" ? 'html' : href);
	      // 移動先を数値で取得
	      var position = target.offset().top;
	      // スムーススクロール
	      $('body,html').animate({scrollTop:position}, speed, 'swing');
	      return false;
	   });

});
