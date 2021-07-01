var Sliders = (function () {

  var $window = $(window),
      $document = $(document),
      $sliders = $('.js-slides'),
      activeClass  = 'is-active',
      visibleClass = 'is-visible',
      visibleItem  = '.is-visible';

  var initEach = function initEach(data) {

    var $slider   = data.slider,
        $slides   = $slider.children(),
        $controls = $slider.parents('div.js-slider').find('.js-controls'),
        $prevNav  = $controls.find('a[href="prevSlide"]'),
        $nextNav  = $controls.find('a[href="nextSlide"]'),
        $indexNav = $controls.find('a[href="currentSlide"]'),
        limit = $slides.length,
        interval = null;

    var getNewIndex = function getNewIndex(data) {
      var index = data.index;
      if(index >= limit) {
        index = 0;
      }
      if(index < 0) {
        index = limit - 1;
      }
      return index;
    };

    var setCurrentSlide = function setCurrentSlide(data) {
      $slides.eq(data.index).siblings().removeClass(visibleClass);
      $slides.eq(data.index).addClass(visibleClass);
      $indexNav.eq(data.index).siblings().removeClass(activeClass);
      $indexNav.eq(data.index).addClass(activeClass);
    };

    var prev = function prev() {
      var index = $slider.find(visibleItem).index();
      var newIndex = getNewIndex({ index: index-1 });
      setCurrentSlide({ index: newIndex });
    };

    var next = function next() {
      var index = $slider.find(visibleItem).index();
      var newIndex = getNewIndex({ index: index+1 });
      setCurrentSlide({ index: newIndex });
    };

    var startAutoplay = function startAutoplay(data) {
      return setInterval((function() {
        next();
      }), 8000);
    };

    var stopAutoplay = function stopAutoplay() {
      clearInterval(interval);
    };

    var initNav = function initNav() {
      $controls.find('a').click(function(e){
        e.preventDefault();
        stopAutoplay();
      });

      $prevNav.click(function(){
        prev();
      });

      $nextNav.click(function(){
        next();
      });

      $indexNav.click(function(){
        var index = $(this).index();
        setCurrentSlide({ index: index });
      });

      $document.keydown(function(e) {
        if (e.keyCode == 37) {
          stopAutoplay();
          prev();
        } else if (e.keyCode == 39) {
          stopAutoplay();
          next();
        }
      });
    };

    var init = function init() {
      setCurrentSlide({index: 0});
      interval = startAutoplay();
      initNav();
    };

    return init();
  };

  var initAll = function initAll() {
    $sliders.each(function(){
      initEach({ slider: $(this) });
    });
  };

  return {
    init: initAll
  };

})();

Sliders.init();
