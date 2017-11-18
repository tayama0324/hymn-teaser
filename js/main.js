
//フレーム追加はここにすること
var imglist = new Array(
	"frame01.png",
	"frame02.png",
	"frame03.png",
	"frame04.png",
	"frame05.png",
	"frame06.png",
	"frame07.png"
);
var selectnum = Math.floor(Math.random() * imglist.length);
frame.src = "img/" + imglist[selectnum];

var skyList = [
	{ name: "sky01_01.jpg", weight: 1 },
	{ name: "sky02_01.jpg", weight: 1 },
	{ name: "sky03_01.jpg", weight: 1 },
	{ name: "sky04_01.jpg", weight: 1 },
	{ name: "sky05_01.jpg", weight: 1 },
	{ name: "sky06_01.jpg", weight: 1 },
	{ name: "IMG_origoe1.jpeg", weight: 2 },
	{ name: "IMG_origoe2.jpeg", weight: 2 },
	{ name: "IMG_origoe3.jpeg", weight: 2 },
	{ name: "IMG_origoe4.jpeg", weight: 2 },
	{ name: "IMG_origoe5.jpeg", weight: 2 },
];

sky.src = function() {
	var names = [];
	for (var i = 0; i < skyList.length; ++i) {
		for (var j = 0; j < skyList[i].weight; ++j) {
			names.push(skyList[i].name);
		}
	}
	var chosen = Math.floor(Math.random() * names.length);
	return "img/" + names[chosen];
}();

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

	 LineIt.loadButton();

});
