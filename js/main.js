
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
	{ name: "IMG_origoe6.jpeg", weight: 2 },
	{ name: "IMG_origoe7.jpeg", weight: 2 },
	{ name: "IMG_origoe8.jpeg", weight: 2 },
	{ name: "IMG_origoe9.jpeg", weight: 2 },
	{ name: "IMG_origoe10.jpg", weight: 2 },
	{ name: "IMG_origoe11.jpeg", weight: 2 },
	{ name: "IMG_origoe12.jpeg", weight: 2 },
	{ name: "IMG_origoe13.jpeg", weight: 2 },
	{ name: "IMG_origoe14.jpeg", weight: 2 },
	{ name: "IMG_origoe15.jpeg", weight: 2 },
	{ name: "IMG_origoe16.jpeg", weight: 2 },
	{ name: "IMG_origoe17.jpeg", weight: 2 },
	{ name: "IMG_origoe18.jpeg", weight: 2 },
	{ name: "IMG_origoe19.jpeg", weight: 2 },
	{ name: "IMG_origoe20.jpeg", weight: 2 },
	{ name: "IMG_origoe21.jpeg", weight: 2 },
	{ name: "IMG_origoe22.jpeg", weight: 2 },
	{ name: "IMG_origoe23.jpeg", weight: 2 },
	{ name: "IMG_origoe24.jpeg", weight: 2 },
	{ name: "IMG_origoe25.jpeg", weight: 2 },
	{ name: "IMG_origoe26.jpeg", weight: 2 },
	{ name: "IMG_origoe27.jpeg", weight: 2 },
	{ name: "IMG_origoe28.jpeg", weight: 2 },
	{ name: "IMG_origoe29.jpeg", weight: 2 },
	{ name: "IMG_origoe30.jpeg", weight: 2 },
	{ name: "IMG_origoe31.jpeg", weight: 2 },
	{ name: "IMG_origoe32.jpeg", weight: 2 },
	{ name: "IMG_origoe33.jpeg", weight: 2 },
	{ name: "IMG_origoe34.jpeg", weight: 2 },
	{ name: "IMG_origoe35.jpeg", weight: 2 },
	{ name: "IMG_origoe36.jpeg", weight: 2 },
	{ name: "IMG_origoe37.jpeg", weight: 2 },
	{ name: "IMG_origoe38.jpeg", weight: 2 },
	{ name: "IMG_origoe39.jpeg", weight: 2 },
	{ name: "IMG_origoe40.jpeg", weight: 2 },
	{ name: "IMG_origoe41.jpeg", weight: 2 },
	{ name: "IMG_origoe42.jpeg", weight: 2 },
	{ name: "IMG_origoe43.jpeg", weight: 2 },
	{ name: "IMG_origoe44.jpeg", weight: 2 },
	{ name: "IMG_origoe45.jpeg", weight: 2 },
	{ name: "IMG_origoe46.jpeg", weight: 2 },
	{ name: "IMG_origoe47.jpeg", weight: 2 },
	{ name: "IMG_origoe48.jpeg", weight: 2 },
	{ name: "IMG_origoe49.jpeg", weight: 2 },
	{ name: "IMG_origoe50.jpeg", weight: 2 },
	{ name: "IMG_origoe51.jpeg", weight: 2 },
	{ name: "IMG_origoe52.jpeg", weight: 2 },
	{ name: "IMG_origoe53.jpeg", weight: 2 },
	{ name: "IMG_origoe54.jpeg", weight: 2 },
	{ name: "IMG_origoe55.jpeg", weight: 2 },
	{ name: "IMG_origoe56.jpeg", weight: 2 },
	{ name: "IMG_origoe57.jpeg", weight: 2 },
	{ name: "IMG_origoe58.jpeg", weight: 2 },
	{ name: "IMG_origoe59.jpeg", weight: 2 },
	{ name: "IMG_origoe60.jpeg", weight: 2 },
	{ name: "IMG_origoe61.jpeg", weight: 2 },
	{ name: "IMG_origoe62.jpeg", weight: 2 },
	{ name: "IMG_origoe63.jpeg", weight: 2 },
	{ name: "IMG_origoe64.jpeg", weight: 2 },
	{ name: "IMG_origoe65.jpeg", weight: 2 },
	{ name: "IMG_origoe66.jpeg", weight: 2 },
	{ name: "IMG_origoe67.jpeg", weight: 2 },
	{ name: "IMG_origoe68.jpeg", weight: 2 },
	{ name: "IMG_origoe69.jpeg", weight: 2 },
	{ name: "IMG_origoe70.jpeg", weight: 2 },
	{ name: "IMG_origoe71.jpeg", weight: 2 },
	{ name: "IMG_origoe72.jpeg", weight: 2 },
	{ name: "IMG_origoe73.jpeg", weight: 2 },
	{ name: "IMG_origoe74.jpeg", weight: 2 },
	{ name: "IMG_origoe75.jpeg", weight: 2 },
	{ name: "IMG_origoe76.jpeg", weight: 2 },
	{ name: "IMG_origoe77.jpeg", weight: 2 },
	{ name: "IMG_origoe78.jpeg", weight: 2 },
	{ name: "IMG_origoe79.jpeg", weight: 2 },
	{ name: "IMG_origoe80.jpeg", weight: 2 },
	{ name: "IMG_origoe81.jpeg", weight: 2 },
	{ name: "IMG_origoe82.jpeg", weight: 2 },
	{ name: "IMG_origoe83.jpeg", weight: 2 },
	{ name: "IMG_origoe84.jpeg", weight: 2 },
	{ name: "IMG_origoe85.jpeg", weight: 2 },
	{ name: "IMG_origoe86.jpeg", weight: 2 },
	{ name: "IMG_origoe87.jpeg", weight: 2 },
	{ name: "IMG_origoe88.jpeg", weight: 2 },
	{ name: "IMG_origoe89.jpeg", weight: 2 },
	{ name: "IMG_origoe90.jpeg", weight: 2 },
	{ name: "IMG_origoe91.jpeg", weight: 2 },
	{ name: "IMG_origoe92.jpeg", weight: 2 },
	{ name: "IMG_origoe93.jpeg", weight: 2 },
	{ name: "IMG_origoe94.jpeg", weight: 2 },
	{ name: "IMG_origoe95.jpeg", weight: 2 },
	{ name: "IMG_origoe96.jpeg", weight: 2 },
	{ name: "IMG_origoe97.jpeg", weight: 2 },
	{ name: "IMG_origoe98.jpeg", weight: 2 },
	{ name: "IMG_origoe99.jpeg", weight: 2 },
	{ name: "IMG_origoe100.jpeg", weight: 2 },
	{ name: "IMG_origoe101.jpeg", weight: 2 },
	{ name: "IMG_origoe102.jpeg", weight: 2 },
	{ name: "IMG_origoe103.jpeg", weight: 2 },
	{ name: "IMG_origoe104.jpeg", weight: 2 },
	{ name: "IMG_origoe105.jpeg", weight: 2 },
	{ name: "IMG_origoe106.jpeg", weight: 2 },
	{ name: "IMG_origoe107.jpeg", weight: 2 },
	{ name: "IMG_origoe108.jpeg", weight: 2 },
	{ name: "IMG_origoe109.jpeg", weight: 2 },
	{ name: "IMG_origoe110.jpeg", weight: 2 },
	{ name: "IMG_origoe111.jpeg", weight: 2 },
	{ name: "IMG_origoe112.jpeg", weight: 2 },
	{ name: "IMG_origoe113.jpeg", weight: 2 },
	{ name: "IMG_origoe114.jpeg", weight: 2 },
	{ name: "IMG_origoe115.jpeg", weight: 2 },
	{ name: "IMG_origoe116.jpeg", weight: 2 },
	{ name: "IMG_origoe117.jpeg", weight: 2 },
	{ name: "IMG_origoe118.jpeg", weight: 2 },
	{ name: "IMG_origoe119.jpeg", weight: 2 },
	{ name: "IMG_origoe120.jpeg", weight: 2 },
	{ name: "IMG_origoe121.jpeg", weight: 2 },
	{ name: "IMG_origoe122.jpeg", weight: 2 },
];

function getSkyImg() {
	var names = [];
	for (var i = 0; i < skyList.length; ++i) {
		for (var j = 0; j < skyList[i].weight; ++j) {
			names.push(skyList[i].name);
		}
	}
	var chosen = Math.floor(Math.random() * names.length);
	return "img/" + names[chosen];
};

sky.src = getSkyImg();

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

	// class fadeinを指定することでフェードインさせる。
  // 引数はmsec
	$('.fadein').fadeIn(1500, function(){
		$('.fadein2').fadeIn(1500);
	});
  // id='sky'に対して自動で画像を変更する。
	// setIntervalの引数で時間指定(引数はmsec)
	setInterval(function() {
		// fadeOutはあってもなくてもよい
		img = getSkyImg();
		$('#sky').fadeOut(1000, function(){
			$('#sky').attr('src', img );
			$('#sky').fadeIn(1000);
			});
		},20000);
	 LineIt.loadButton();

});
