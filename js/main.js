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
			$('.cd-main-nav').children('ul').toggleClass('is-visible');
      return false;
   });

	 $('.modalimg').on('click', function() {
		 $('#modal img').attr('src', this.src );
		 var origin_width = this.naturalWidth;
		 var origin_height = this.naturalHeight;
		 var w = $(window).width()
		 var h = $(window).height();
		 var h_ratio = 0.75;
		 var img_h = Math.round(h*h_ratio);
		 var img_w = Math.round(origin_width * img_h / origin_height);
		 if (w * h_ratio < img_w )
		 {
			 img_w = Math.round(w *h_ratio);
			 $('#modal').css({
				 'left' : Math.round(((w-img_w)/2)) + "px",
				 'top' : Math.round(((h-img_h)/2)) + "px",
				 'width' : '',
				 'height' : img_h + "px"
			 });
			 $('#modal img').css({
				 'width' : img_w + "px",
				 'height' : ''
			 });
		 }
		 else
		 {
			 $('#modal').css({
				 'left' : Math.round(((w-img_w)/2)) + "px",
				 'top' : Math.round(((h-img_h)/2)) + "px",
				 'width' : img_w + "px",
				 'height' : ''
			 });
			 $('#modal img').css({
				 'width' : '',
				 'height' : img_h + "px"
			 });
		 }
		 $('#overlay, #modal').fadeIn();
		 return false;
	 });

	 $('#overlay').on('click', function() {
		 $('#overlay, #modal').fadeOut();
		 return false;
	 });

	 /* img setting */
	 $('.util-text-align-center img[data-width]').each(function(){
		  this.width=this.dataset.width;
			if(this.naturalWidth > this.naturalHeight){
				$(this).addClass('wideimg');
			}
		});
});
