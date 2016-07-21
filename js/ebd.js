$(document).on("pageinit", "#home", function () {
  var $ele = $("#gk-720jIMN"),
    url = $ele.attr("service");
  if (url) {
    $.getJSON(url).complete(function (data) {
      $("#gk-720jIMN").gk("model", $.parseJSON(data.responseText));
    });
  }
}); /* code gen by face-detection */
$(document).on("gkComponentsReady", function () {
  // Unmark the following content to detect image url from gk api.
  //$("#gk-720bImT").gk("detect", "url").done(function(data) {
  //console.log(data);
  //});
});
$(document).on("gkComponentsReady", function () {
  var $ele = $("#gk-720hsnM"),
    FEED_URL = $ele.attr("service"),
    $listview = $("#gk-720hsnM").find('[data-role="listview"]');
  rowNum = $ele.attr('rowNum');

  if (FEED_URL) {
    $.ajax({
      beforeSend: function () {
        $listview.css('visibility', 'hidden');
      },
      url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + rowNum + '&callback=?&q=' + encodeURIComponent(FEED_URL),
      dataType: 'json',
      success: function (data) {
        if (data.responseData.feed && data.responseData.feed.entries) {
          var models = data.responseData.feed.entries;
          $listview.gk('model', models);
          $listview.css('visibility', 'visible');
        }
      }
    });
  }

  $listview.gk('onRow', function (vo) {
    alert(JSON.stringify(vo));
  });

});
$(document).on("gkComponentsReady", function (w) {
  var $ele = $("#gk-720bA0F");
  if ($ele.length > 0) {
    var img = [{
      "data-src": "http://www.dropmysite.com/images/social/icon-google.png?1386321977"
    }, {
      "data-src": "http://www.dropmysite.com/images/social/icon-facebook.png?1386321977"
    }, {
      "data-src": "http://www.dropmyemail.com/assets/icon-twitter-963acb3e091cfea4ef6394d6c3b9e388.png"
    }];
    $ele.gk("model", img);
    $ele.gk("onclick", function (e) {
      alert(e.target);
    });
  }
});
$(document).on("gkComponentsReady", function (w) {
  var $ele = $("#gk-72033fF");
  if ($ele.length > 0) {
    var img = [{
      "data-src": "http://www.dropmysite.com/images/social/icon-google.png?1386321977"
    }, {
      "data-src": "http://www.dropmysite.com/images/social/icon-facebook.png?1386321977"
    }, {
      "data-src": "http://www.dropmyemail.com/assets/icon-twitter-963acb3e091cfea4ef6394d6c3b9e388.png"
    }];
    $ele.gk("model", img);
    $ele.gk("onclick", function (e) {
      alert(e.target);
    });
  }
});
$(document).one("pageshow", "#menu", function () {
  var $ele = $("#gk-720t0qK"),
    url = $ele.attr("loadURL");
  if (url) {
    $ele.gk("load", url);
  }
});