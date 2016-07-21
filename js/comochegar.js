$(document).on("gkComponentsReady", function () {
  var $ele = $("#gk-721ZP29"),
    FEED_URL = $ele.attr("service"),
    $listview = $("#gk-721ZP29").find('[data-role="listview"]');
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

}); /* code gen by gk-form  */
$(document).on("gkComponentsReady", function () {
  $("#gk-721hlCE-btn").click(function () {
    var $form = $("#gk-721hlCE");
    if ($form.gk("valid")) {
      console.log($form.gk("info"));
    }
  });
});