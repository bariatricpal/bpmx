var Calculator = (function () {

  var $bmiForm = $('#bmi-calculator'),
      $bmiResult = $('#bmi-result');

  var calculateBMI = function calculateBMI(height, weight) {
    var BMI = (weight / (height * height)) * 703;
    return Math.round(BMI);
  };

  var enableCalculator = function enableCalculator() {
    $bmiForm.submit(function(event){
      event.preventDefault();

      var weight = $('#bmi-weight').val(),
          height = $('#bmi-height').val(),
          BMI = calculateBMI(height, weight);

      $bmiResult.text('Your BMI is: ' + BMI);
    });
  };

  var init = function init() {
    enableCalculator();
  };

  return {
    init: init
  };

})();

Calculator.init();
