---
title: Get in touch
position: 11
layout: default
phone: "(844) 957-3325"
emails:
  bariatrics: TeamMX@BariatricPal.com
  plastics: Plastics@BariatricPal.com
addresses:
  mx: |-
    **Tijuana, MX**:<br/>
    BariatricPal Hospital MX<br/>
    Mexicali 9 Buena Vista<br/>
    Sepanal, Tijuana, B.C., Mexico
  ny: |-
    **Northeast Office, NY**:<br/>
    BariatricPal MX LLC.<br/>
    203A Sheridan Blvd.<br/>
    Inwood, NY 11096
---

<div class='wrap'>
  <div class='section u-py6 u-bt1'>
    <div class='section-row'>
      <div class='section-chunk u-size1of2 u-px4 u-sm-size10of12 u-xs-sizeFull u-xs-p2'>
        <h1 class='u-mt0'>
          <strong>Get in Touch</strong>
        </h1>
        <p class='t3'>
          Schedule a consultation. You'll have an opportunity to ask questions and get first-hand answers from the Director of Patient Relations, our Certified Nutritionist, and even your surgeon.
        </p>
        <p class='note note--primary'>
          Our friendly support staff is waiting to help guide you through the simple, step-by-step process to get your surgery scheduled.
        </p>
      </div>
      <div class='section-chunk u-size1of2 u-px4 u-py2 u-sm-sizeFull u-xs-p2'>
        <div class='box u-p2 u-mt4 u-mb1'>
          <div class='box-icon'>
            <span class='icon icon--phone u-left'></span>
          </div>
          <div class='box-content'>
            <h1 class='u-m0 u-sm-pt1'>
              {{page.phone}}
            </h1>
          </div>
        </div>
        <div class='box u-p2 u-mb1'>
          <div class='box-icon'>
            <span class='icon icon--envelope u-left'></span>
          </div>
          <div class='box-content'>
            <p class='u-m0'>Bariatrics Email Address:</p>
            <a href="mailto:{{page.emails.bariatrics}}" target="_blank">
              {{page.emails.bariatrics}}
            </a>
          </div>
        </div>
        <div class='box u-p2 u-mb1'>
          <div class='box-icon'>
            <span class='icon icon--envelope u-left'></span>
          </div>
          <div class='box-content'>
            <p class='u-m0'>Plastics Email Address:</p>
            <a href="mailto:{{page.emails.plastics}}" target="_blank">
              {{page.emails.plastics}}
            </a>
          </div>
        </div>
        <div class='box u-p2'>
          <div class='box-icon'>
            <span class='icon icon--chat'></span>
          </div>
          <div class='box-content'>
            <p class='u-m0'>
              Live Chat: Write us a Message,<br/>
              using the live chat window below.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class='section'>
  <div class='section-hero' data-cover='get-in-touch'>
    <div class='section-heroWrap'>
      <div class='section-heroBox section-heroBox--primary u-right'>
        <h3 class='u-mt0'>
          Contact us
        </h3>
        <form id='contact' class='form form--dark'>
          <div class='form-field'>
            <input class='form-input' type='text' name='FirstName' placeholder='First Name' required>
          </div>
          <div class='form-field'>
            <input class='form-input' type='text' name='LastName' placeholder='Last Name' required>
          </div>
          <div class='form-field'>
            <input class='form-input' type='email' name='Email' placeholder='Email' required>
          </div>
          <div class='form-field'>
            <textarea class='form-input' name='Message' placeholder='Message' rows='5' required></textarea>
          </div>
          <div class='form-field'>
            <button class='form-button' type="submit">Send Message</button>
          </div>
          <div id='contact-response' class='u-hidden'>
            <p class='u-mt0 js-message'></p>
            <button id='contact-reset' class='form-button'>
              Back to Form
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div class='wrap'>
  <div class='section u-py6 u-bt1'>
    <div class='section-row'>
      <div class='section-chunk u-size1of2 u-px4 u-sm-sizeFull u-sm-px2'>
        <div class='box u-p2'>
          <div class='box-icon'>
            <span class='icon icon--envelope'></span>
          </div>
          <div class='box-content'>
            {{page.addresses.mx | markdownify}}
          </div>
        </div>
      </div>
      <div class='section-chunk u-size1of2 u-px4 u-sm-sizeFull u-sm-px2 u-sm-mt1'>
        <div class='box u-p2'>
          <div class='box-icon'>
            <span class='icon icon--envelope'></span>
          </div>
          <div class='box-content'>
            {{page.addresses.ny | markdownify}}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
