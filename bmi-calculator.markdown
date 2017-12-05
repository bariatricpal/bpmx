---
title: BMI Calculator
position: 14
seo:
  title: BMI Calculator
  description: Calculate your Body Mass Index
layout: default
---

<div class='wrap'>
  <div class='section u-py6'>
    <div class='section-row'>
      <div class='section-chunk u-size6of13 u-px4 u-mAuto u-sm-sizeFull u-sm-clear'>
        <h1 class='u-mt0 u-sm-alignCenter'>
          Calculate your<br/>
          Body Mass Index
        </h1>
        <p class='u-sm-mt3 u-sm-pt1'>For adults 20 years and older:</p>
        <ul class='unorderedList'>
          <li class='unorderedList-item'>
            BMI values below <strong>18.5</strong> are considered <strong>underweight</strong>.
          </li>
          <li class='unorderedList-item'>
            BMI values of <strong>18.5 to 24.9</strong> are considered <strong>healthy</strong>.
          </li>
          <li class='unorderedList-item'>
            BMI values of <strong>25 to 29.9</strong> are considered <strong>overweight</strong>.
          </li>
          <li class='unorderedList-item'>
            BMI values of <strong>30</strong> or higher are considered <strong>obese</strong>.
          </li>
        </ul>
        <h3 class='u-textPrimary'>
          <p id='bmi-result'></p>
        </h3>
      </div>
      <div class='section-chunk u-size7of13 u-px4 u-sm-sizeFull u-sm-mt3'>
        <div class='box box--green u-mt4 u-py3 u-sm-mt1'>
          <h3 class='u-mt0'>
            BMI Calculator
          </h3>
          <form id='bmi-calculator' class='form form--dark'>
            <div class='form-field'>
              <input id='bmi-height' class='form-input' type='text' name='height' placeholder='Height in Ft' required>
            </div>
            <div class='form-field'>
              <input id='bmi-weight' class='form-input' type='text' name='weight' placeholder='Weight in lbs' required>
            </div>
            <div class='form-field'>
              <button class='form-button' type="submit">Show result</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
