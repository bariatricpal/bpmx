var Youtube = (function () {

  var $feedEven = $('#wls-feed-even'),
      $feedOdd = $('#wls-feed-odd'),
      $testimonials = $('.js-testimonials');

  var makeListItem = function makeListItem(id, title, image) {
    var template;
    template = "<div class='video u-mb3'>";
    template += "<div class='video-cover'>";
    template += "<img src="+image+" alt="+title+"/>";
    template += "</div>";
    template += "<div class='video-text'>";
    template += "<p class='u-textSecondary u-m0 u-left'>"+title+"</p>";
    template += "<a class='video-link u-right' href=#"+id+">";
    template += "<span class='icon icon--play'></span>Play";
    template += "</a>";
    template += "</div>";
    template += "</div>";
    return template;
  };

  var makeGridItem = function makeGridItem(id, title, image) {
    var template;
    template = "<div class='section-chunk u-size1of4 u-px2 u-sm-size1of3 u-sm-mt3 u-xs-sizeFull js-testimonials'>";
    template += "<div class='video u-xs-size10of12 u-mAuto'>";
    template += "<div class='video-cover'>";
    template += "<img src="+image+" alt="+title+"/>";
    template += "</div>";
    template += "<div class='video-text'>";
    template += "<p class='u-textSecondary u-m0 u-left'>"+title+"</p>";
    template += "<a class='video-link u-right' href=#"+id+">";
    template += "<span class='icon icon--play'></span>Play";
    template += "</a>";
    template += "</div>";
    template += "</div>";
    template += "</div>";
    return template;
  };

  var makeRequest = function makeRequest() {
    var apiKey = 'AIzaSyB6C4dKXZYXZjyppD53hA3_KG3GEA4G6JY';
    var playlistId = 'PL7rnWU4FvBZ2XRSmHk9qiTkAUGhAEJ8_x';
    var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId='+playlistId+'&key='+apiKey;

    $.ajax({
      url: url,
      type: 'GET',
    }).done(function(response) {
      $.each(response.items, function(key, val) {
        var videoId = val.snippet.resourceId.videoId;
        var videoCover = val.snippet.thumbnails.medium.url;
        var videoTitle = val.snippet.title;
        var listItemVideo = makeListItem(videoId, videoTitle, videoCover);
        var gridItemVideo = makeGridItem(videoId, videoTitle, videoCover);
        if (key % 2 == 0) {
          $feedEven.append(listItemVideo);
        } else {
          $feedOdd.append(listItemVideo);
        }
        if (key < 3) {
          $testimonials.append(gridItemVideo);
        }
      });
    });
  };

  var init = function init() {
    makeRequest();
  };

  return {
    init: init
  };

})();

Youtube.init();
