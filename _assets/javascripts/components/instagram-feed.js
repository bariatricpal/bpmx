var Instagram = (function () {

  var $feed = $('#instagram-feed');

  var makeItem = function makeItem(val) {
    var template;
    template = '<a class="footer-feedItem" href="'+val.link+'" target="_blank" style="background-image: url('+val.images.thumbnail.url+')">';
    template += '<ul class="footer-feedCounter">';
    template += '<li class="footer-feedCounterItem"><span class="icon icon--instagramLike"></span>'+val.likes.count+'</li>';
    template += '<li class="footer-feedCounterItem"><span class="icon icon--instagramComment"></span>'+val.comments.count+'</li>';
    template += '</ul>';
    template += '</a>';
    return template;
  };

  var makeRequest = function makeRequest() {
    var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5668885969.f993875.3d4c5b0a65994b0d8ffc3fe2394a3499';
    $.ajax({
      url: url,
      type: 'GET',
    }).done(function(response){
      $.each(response.data, function(key, val) {
        var item = makeItem(val);
        if (key <= 8) { $feed.append(item); }
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

Instagram.init();
