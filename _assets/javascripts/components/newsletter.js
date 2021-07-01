var Newsletters = (function () {

  var $newsletterForm = $('#newsletter'),
      $newsletterResponse = $('.js-newsletter-response'),

      newsletterURL = 'https://BariatricHospitalMX.us17.list-manage.com/subscribe/post-json?u=991eedcd1d57b852d7b63dabe&amp;id=b8bd9e85bd&c=?',
      newsletterResponseMessage = 'Something went wrong. Please try again later';

  var enableFormSubmit = function enableFormSubmit() {
    $newsletterForm.submit(function(event){
      event.preventDefault();

      var data = {
        EMAIL: $newsletterForm.find('input[type="email"]').val()
      };

      $.ajax({
        url: newsletterURL,
        type: 'POST',
        dataType: 'jsonp',
        data: data
      }).done(function(data) {
        $newsletterResponse.html(data.msg);
        if (data.result !== 'error') {
          $newsletterForm.hide();
          $newsletterResponse.removeClass('u-textRed');
        } else {
          $newsletterResponse.addClass('u-textRed');
        }
      }).fail(function() {
        $newsletterResponse.html(newsletterResponseMessage);
      });
    });
  };

  var init = function init() {
    enableFormSubmit();
  };

  return {
    init: init
  };

})();

Newsletters.init();
