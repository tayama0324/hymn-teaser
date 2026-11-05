
jQuery(document).ready(function($) {

  var currentYear = 2026;
  var $selector = $("#performanceYear");

  // JSON取得前にも今年を表示
  $selector.empty().append(
    $("<option>").val(currentYear).text(currentYear + "年")
  );

  // 初期選択
  $selector.val(String(currentYear));

  $.ajax({
    url: "/discography/all_songs_info.json",
    type: "GET",
    dataType: "json",
  })
  .done(function(data) {

    // 演奏年の選択肢（開始年を指定）
    var startYear = 2017;
    var years = [];

    for (var year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    // 選択肢を生成
    $selector.empty();

    $.each(years, function(idx, year) {
      $("<option>")
        .val(String(year))
        .text(year + "年")
        .appendTo($selector);
    });

    // 今年を選択
    $selector.val(String(currentYear));

    // 編曲者表示
    function renderArranger(songDiv, item, instrument, property) {
      if (item[property]) {
        $("<p>")
          .appendTo(songDiv)
          .text(instrument + "編曲 : " + item[property]);
      }
    }

    // 年変更時
    $selector.off("change").on("change", function() {
      renderSongs($(this).val());
    });

    // 初期表示
    renderSongs(String(currentYear));

    // ---------------------------------
    // 選択された年の演奏曲を描画
    // ---------------------------------
    function renderSongs(year) {

      var $contents = $("#allSongsContents");
      $contents.empty();

      // 選択年のデータだけ取得
      var filteredData = data.filter(function(item) {
        return String(item.year) === String(year);
      });

      $.each(filteredData, function(idx, item) {

        // 年の取得
        var yearDiv = $contents.children(".year").filter(function() {
          return $(this).children("h1").text() === String(item.year);
        });

        if (yearDiv.length === 0) {
          yearDiv = $("<div>").appendTo($contents);
          yearDiv.attr("class", "year");
          $("<h1>").appendTo(yearDiv).text(item.year);
          yearDiv.append("<br>");
        }

        // 月日の取得
        var dateDiv = yearDiv.children(".date").filter(function() {
          return $(this).children("h2").text() === item.date;
        });

        if (dateDiv.length === 0) {
          dateDiv = $("<div>").appendTo(yearDiv);
          dateDiv.attr("class", "date");
          $("<h2>").appendTo(dateDiv).text(item.date);
        }

        // イベント名の取得
        var eventDiv = dateDiv.children(".event").filter(function() {
          return $(this).children("h3").text().replace(/\n/g, "") === item.event.replace(/\n/g, "");
        });

        if (eventDiv.length === 0) {
          eventDiv = $("<div>").appendTo(dateDiv);
          eventDiv.attr("class", "event");

          $("<h3>")
            .appendTo(eventDiv)
            .text(item.event);

          eventDiv.append("<br>");
        }

        // 曲
        var songDiv = $("<div>").appendTo(eventDiv);
        songDiv.attr("class", "song");

        // 曲名
        var songPara = $("<p>").appendTo(songDiv);
        $("<span>")
          .appendTo(songPara)
          .attr("class", "songTitle")
          .text(item.song);

        // 作品名
        if (item.title) {
          $("<p>").appendTo(songDiv).text(item.title);
        }

        // 作詞者
        if (item.liricist) {
          $("<p>").appendTo(songDiv)
            .text("作詞 : " + item.liricist.replace(/\n/g, " / "));
        }

        // 作曲
        if (item.composer) {
          $("<p>").appendTo(songDiv)
            .text("作曲 : " + item.composer.replace(/\n/g, " / "));
        }

        // アーティスト
        if (item.artist) {
          $("<p>").appendTo(songDiv).text("アーティスト : " + item.artist);
        }

        // 合唱編曲
        if (item.arranger) {
          $("<p>").appendTo(songDiv).text("合唱編曲 : " + item.arranger);
        }

        // ピアノ編曲
        renderArranger(songDiv, item, "ピアノ", "arranger_piano");

        // ヴァイオリン編曲
        renderArranger(songDiv, item, "ヴァイオリン", "arranger_violin");

        // ゲスト
        if (item.guest) {
          $("<p>").appendTo(songDiv).text("ゲスト : " + item.guest);
        }

        // YouTube
        if (item.url) {
          $.each(item.url.split("\n"), function(idx, value) {

            var embedUrl = value.replace(
              "https://youtu.be/",
              "https://www.youtube.com/embed/"
            );

            var template =
              '<div class="youtube">' +
              '<iframe loading="lazy" width="560" height="315" ' +
              'src="' + embedUrl + '" ' +
              'title="' + item.event + " " + item.song + '" ' +
              'frameborder="0" ' +
              'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
              'allowfullscreen></iframe>' +
              '</div>';

            songDiv.append(template);
          });
        }

        $("<br>").appendTo(songDiv);

      });

      // 該当する演奏がない場合
      if (filteredData.length === 0) {
        $("<p>")
          .text("この年の演奏記録はありません。")
          .appendTo($contents);
      }
    }

  })
  .fail(function(xhr, status, error) {
    console.error("演奏記録取得失敗:", status, error);
    console.error(xhr.responseText);
    $("#allSongsContents").text("演奏記録を取得できませんでした。");
  });
});
