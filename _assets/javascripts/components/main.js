$(function(){
  'use strict';

  var activeClass = 'is-active',
      hideClass = 'u-hidden',
      modalClass = 'has-overlay';

  var $html = $('html'),
      $body = $('body'),
      $window = $(window),
      $navBar = $('.js-nav-bar'),
      $navBarButton = $('.navBar-button'),
      $hero = $('.hero, .section-hero'),
      $mainHero = $('.hero'),
      $scrollTo = $('.js-scroll-to a'),
      $closePlayer = $('.modal-close'),
      $videoPlayer = $('#player'),
      $video = $('.modal-video'),
      $modal = $('.modal');

  var initScrollTo = function initScrollTo() {
    $scrollTo.click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var offset = 90;
      var elementId = $this.attr('href');
      var position = $(elementId).offset().top - offset;
      $scrollTo.removeClass(activeClass);
      $this.addClass(activeClass);
      $('html, body').stop().animate({
        'scrollTop': position
      }, 500, function() {
        window.location.hash = elementId;
      });
    });
  };

  var initHero = function initHero() {
    $hero.each(function() {
      var $this = $(this);
      var image = $this.attr('data-cover');
      if (image) {
        $this.css('background-image', 'url("/uploads/' + image + '.png")');
      }
    });
  };

  var enableDesktopNav = function enableDesktopNav() {
    var pathname = document.location.pathname;
    $navBar.find('a[href="'+pathname+'"]').addClass(activeClass);
  };

  var enableMobileNav = function enableMobileNav() {
    $navBarButton.click(function(event) {
      event.preventDefault();
      $body.toggleClass('has-side-menu');
    });
  };

  var enableAchordeon = function enableAchordeon() {
    $('.js-achordeon').click(function(event) {
      event.preventDefault();
      $(this).parents('li').next().toggleClass(hideClass);
    });
  };

  var enableVideoPlayer = function enableVideoPlayer() {
    $body.on('click', '.video-link, .ctrl--play', function(event) {
      event.preventDefault();
      var videoId = $(this).attr('href').split('#')[1];
      var videoUrl = 'https://www.youtube.com/embed/'+ videoId +'?rel=0&showinfo=0&autoplay=1';
      $video.attr('src', videoUrl);
      openModal();
    });

    $closePlayer.click(function(event){
      event.preventDefault();
      $video.attr('src', '');
      closeModal();
    });
  };

  var openModal = function openModal() {
    $html.addClass(modalClass);
    $modal.show();
  };

  var closeModal = function closeModal() {
    $html.removeClass(modalClass);
    $modal.hide();
  };

  var init = function init() {
    initScrollTo();
    initHero();
    enableDesktopNav();
    enableMobileNav();
    enableAchordeon();
    enableVideoPlayer();
  };

  init();

});
