var Forms = (function () {

  var $contactForm = $('#contact'),
      $contactFields = $('#contact .form-field'),
      $contactBtn = $('#contact-reset'),
      $contactResponse = $('#contact-response'),
      $contactMessage = $('#contact-response .js-message'),

      contactUrl = 'https://script.google.com/macros/s/AKfycbyEKgswH4Fs6Ew2o297nNv2ZllmL1upO7Izh4N1F2FtEBPHyPg/exec',
      contactMessages = {
        success: 'Thank you for getting in touch with Bariatric Hospital MX. We will contact you soon with more information.',
        error: 'Something went wrong, please try again in a few minutes.'
      },

      hideClass = 'u-hidden',
      loadClass = 'is-loading';

  var enableFormSubmit = function enableFormSubmit() {
    $contactForm.submit(function(event) {
      event.preventDefault();

      var data = $contactForm.serialize();
      $contactForm.addClass(loadClass);

      $.ajax({
        url: contactUrl,
        type: 'POST',
        data: data,
      }).done(function(){
        $contactMessage.html(contactMessages.success);
      }).fail(function(){
        $contactMessage.html(contactMessages.error);
      }).always(function(){
        $contactForm.removeClass(loadClass);
        $contactResponse.removeClass(hideClass);
        $contactFields.hide();
      });
    });
  };

  var enableFormReset = function enableFormReset() {
    $contactBtn.click(function(event) {
      event.preventDefault();
      $contactFields.show();
      $contactResponse.addClass(hideClass);
    });
  };

  var init = function init() {
    enableFormSubmit();
    enableFormReset();
  };

  return {
    init: init
  };

})();

Forms.init();
