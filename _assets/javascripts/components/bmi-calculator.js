var Calculator = (function () {

  var $bmiForm = $('#bmi-calculator'),
      $bmiResult = $('#bmi-result');

  var calculateBMI = function calculateBMI(height, weight) {
    var BMI = (weight * 703) / (height * height);
    return parseFloat(BMI).toFixed(2);
  };

  var enableCalculator = function enableCalculator() {
    $bmiForm.submit(function(event){
      event.preventDefault();

      var weight = parseFloat($('#bmi-weight').val()),
          heightFt = parseFloat($('#bmi-height-feet').val()),
          heightIn = parseFloat($('#bmi-height-inches').val()),
          height = parseFloat(heightFt * 12) + parseFloat(heightIn),
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
