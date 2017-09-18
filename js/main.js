
//フレーム追加はここにすること
var imglist = new Array(
"frame01.png",
"frame02.png",
"frame03.png" );
var selectnum = Math.floor(Math.random() * imglist.length);
frame.src = "img/" + imglist[selectnum];

var skylist = new Array(
"sky01_01.jpg",
"sky02_01.jpg",
"sky03_01.jpg",
"sky04_01.jpg",
"sky05_01.jpg",
"sky06_01.jpg" );
var selectnum2 = Math.floor(Math.random() * skylist.length);
sky.src = "img/" + skylist[selectnum2];


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
