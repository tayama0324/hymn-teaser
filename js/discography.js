jQuery(document).ready(function($){
  $.ajax({
    url: "/discography/all_songs_info.json",
    type: "GET",
    dataType: "json",
  })
  .done ( function (data) {
   // success
   //取得jsonデータ
   var data_stringify = JSON.stringify(data);
   var data_json = JSON.parse(data_stringify);
   $.each(data_json,function(idx,data){
    // 年の取得
    var yearDiv = $("#allSongsContents").children(".year").children("h1:contains('"+ data.year +"')").parent();
//    console.info(yearDiv.length);
    if (yearDiv.length == 0) {
      yearDiv = $("<div>").appendTo("#allSongsContents");
      yearDiv.attr("class","year");
      $("<h1>").appendTo(yearDiv).text(data.year);
      yearDiv.append("<br>");
    }
    // 月日の取得
    var dateDiv = yearDiv.children(".date").children("h2:contains('"+ data.date +"')").parent();
    if (dateDiv.length == 0) {
      dateDiv = $('<div>').appendTo(yearDiv);
      dateDiv.attr("class","date");
      $("<h2>").appendTo(dateDiv).text(data.date);
    }

    // イベント名の取得
    var eventName = data.event.replace("\n","<br>");
    var eventDiv = dateDiv.children(".event").children("h3:contains('" + data.event + "')").parent();
    if (eventDiv.length == 0) {
      eventDiv = $('<div>').appendTo(dateDiv);
      eventDiv.attr("class","event");
      $("<h3>").appendTo(eventDiv).append(eventName);
      eventDiv.append("<br>");
    }
    var songDiv = $("<div>").appendTo(eventDiv);
    songDiv.attr("class", "song");
    // 曲名
    var songPara = $("<p>").appendTo(songDiv);
    $("<span>").appendTo(songPara).attr("class","songTitle").text(data.song);
    // 作品名
    if (data.title) {
      $("<p>").appendTo(songDiv).text(data.title);
    }
    // 作詞者
    if (data.liricist) {
      var liricist = data.liricist.replace("\n"," / ");
      $("<p>").appendTo(songDiv).text("作詞 : " + liricist);
    }
    // 作曲
    if (data.composer) {
      var composer = data.composer.replace("\n"," / ");
      $("<p>").appendTo(songDiv).text("作曲 : " + composer);
    }
    // アーティスト
    if (data.artist) {
      $("<p>").appendTo(songDiv).text("アーティスト : " + data.artist);
    }
    // 合唱編曲
    if (data.arranger) {
      $("<p>").appendTo(songDiv).text("合唱編曲 : " + data.arranger);
    }
    // ゲスト
    if (data.guest) {
      $("<p>").appendTo(songDiv).text("ゲスト : " + data.guest);
    }
    // URL
    if (data.url) {
      console.log(data.url.split("\n"));
        $.each(data.url.split("\n"),
         function(idx,value){
          var embedUrl = value.replace("https://youtu.be/", "https://www.youtube.com/embed/");
          var template = '<div class="youtube"><iframe loading="lazy" width="560" height="315" src="' + embedUrl +'" title="'+ data.event +" "+ data.song + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
          songDiv.append(template);
        });
    }
    $("<br>").appendTo(songDiv);
  });
 })
  .fail(function (data) {
    // error
    $("#main").appendTo("<p>hoge</p><br>");
    console.log("error");
  });
});

var findYear = function() {

}

var findDate = function() {

}
