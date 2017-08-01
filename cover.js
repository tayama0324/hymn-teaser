$(function(){
  setInterval(function() {
    var i = 0;
    var images = [
      "url(img/sunset.jpg)",
      "url(img/starry-sky.jpg)",
      "url(img/dawn.jpg)",
      "url(img/blue-sky.jpg)"
    ];
    return function() {
      $("body").css("background-image", images[i]);
      i += 1;
      i %= images.length;
    }
  }(), 5000);
});
