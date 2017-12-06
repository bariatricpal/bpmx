---
title: Plastic Surgeries
position: 5
seo:
  title: Plastic and Reconstructive Surgeries in Mexico
  description: Plastic, Aesthetic and Reconstructive Surgeries in Mexico. Makes you
    look as good as you feel after losing weight.
layout: default
---

<div class='hero' data-cover='dr-galvez-plastic-surgery'>
  <div class='hero-wrap'>
    <div class='hero-caption u-alignBottom'>
      <div class='hero-box hero-box--transparent u-size4of9 u-xs-sizeFull'>
        <h1 class='u-mt0'>
          Plastic, Aesthetic<br/>
          and Reconstructive<br/>
          Surgeries
        </h1>
        <p class='u-mb0'>
          Makes you look as good as you feel after losing weight. With rapid weight loss, skin doesn't bounce back to its pre-weight gain shape and becomes saggy.
        </p>
      </div>
    </div>
  </div>
</div>

<div class='wrap'>
  <div class='section u-py4'>
    <table class='section-table'>
      {% assign posts = site.plastic-surgeries | sort: "position"  %}
      {% for post in posts %}
        <tr>
          <td class='box u-size8of15 u-p4 u-xs-block u-xs-sizeFull'>
            <p class='t3 u-mt0'>
              <strong>{{post.title}}</strong>
            </p>
            <p class='u-size14of16'>
              {{post.surgery_excerpt.content}}
            </p>
            <a href="{{post.url}}">
              Read more
            </a>
          </td>
          {% assign cover = post.image | replace: '/uploads/' , '' | replace: '.png', '' %}
          <td class='section-hero u-size7of15 u-alignBottom u-py2 u-xs-block u-xs-sizeFull' data-cover='{{cover}}'>
            <div class='box box--green u-size5of10'>
              <p class='u-mt0'>
                {% assign size = post.title | size %}
                {{post.title}}
                {% if size < 20 %}<br/>{% endif %}
                starting at only
              </p>
              <p class='t1 u-mb0'>
                {{post.surgery_excerpt.price}}
              </p>
            </div>
          </td>
        </tr>
      {% endfor %}
    </table>
  </div>
  <div class='section u-py6'>
    <div class='section-row u-alignCenter'>
      <h3 class='u-mt0'>
        When You Choose
        <strong class='u-block'>BariatricPal Hospital MX</strong>
      </h3>
      <p class='u-size8of16 u-mAuto u-px2 u-xxs-sizeFull'>
        BariatricPal Hospital MX opened on September 1, 2017, to specialize in
        bariatric and reconstructive surgeries so you can look and feel your best.
      </p>
    </div>
    <table class='section-table u-mt4'>
      <tr>
        <td class='box u-alignTop u-p0 u-mAuto u-xs-block u-xs-size12of16 u-xxs-sizeFull'>
          <img src='/uploads/hospital-4.png' alt='BariatricPal Hospital MX'>
          <p class='u-px4 u-py2 u-m0'>
            BariatricPal Hospital MX performs about 30 to 40 plastic surgeries each month
          </p>
        </td>
        <td class='box u-alignTop u-p0 u-mAuto u-mt1 u-xs-block u-xs-size12of16 u-xxs-sizeFull'>
          <img src='/uploads/hospital-5.png' alt='BariatricPal MX pre-op and post-op lab'>
          <p class='u-px4 u-py2 u-m0'>
            All pre- and post-op lab work and tests are performed onsite
          </p>
        </td>
        <td class='box u-alignTop u-p0 u-mAuto u-mt1 u-xs-block u-xs-size12of16 u-xxs-sizeFull'>
          <img src='/uploads/hospital-6.png' alt='BariatricPal MX staff'>
          <p class='u-px4 u-py2 u-m0'>
            Administrative and support staff dedicated to you and your well-being 24/7
          </p>
        </td>
      </tr>
    </table>
  </div>
</div>

<div class='section-hero' data-cover='patient-care'>
  <div class='section-heroWrap'>
    <h3 class='u-mt0 u-px2'>
      <strong class='u-block'>BariatricPal Hospital MX's</strong>
      <span class='u-block'>patient care team goes above and</span>
      beyond anyone else.
    </h3>
    <table class='section-table'>
      <tr>
        <td class='box box--white u-alignTop u-xs-sizeFull u-xs-left'>
          <p class='u-m0 t3 u-right u-size1of16 u-alignRight u-xs-left u-xs-alignLeft'>
            <strong class='u-textPrimary'>1</strong>
          </p>
          <p class='u-m0 u-left u-size13of16 u-xs-pl1'>
            ​You and your <strong>companion are
            catered</strong> to in a plush
            environment like family.
          </p>
        </td>
        <td class='box box--white u-mt2 u-alignTop u-xs-sizeFull u-xs-left'>
          <p class='u-m0 t3 u-right u-size1of16 u-alignRight u-xs-left u-xs-alignLeft'>
            <strong class='u-textPrimary'>2</strong>
          </p>
          <p class='u-m0 u-left u-size13of16 u-xs-pl1'>
            ​​Your every <strong>comfort and
            convenience</strong> is taken care of
            during your stay in Mexico.
          </p>
        </td>
        <td class='box box--white u-mt2 u-alignTop u-xs-sizeFull u-xs-left'>
          <p class='u-m0 t3 u-right u-size1of16 u-alignRight u-xs-left u-xs-alignLeft'>
            <strong class='u-textPrimary'>3</strong>
          </p>
          <p class='u-m0 u-left u-size15of16 u-xs-pl1'>
            ​​You have a dedicated surgeon,
            anesthesiologist, cardiologist,
            dietitian, nurses, patient support
            administrator, and personal
            valet — <strong>all at your fingertips</strong>.
          </p>
        </td>
      </tr>
      <tr>
        <td class='box box--white u-alignTop u-xs-sizeFull u-xs-left'>
          <p class='u-m0 t3 u-right u-size1of16 u-alignRight u-xs-left u-xs-alignLeft'>
            <strong class='u-textPrimary'>4</strong>
          </p>
          <p class='u-m0 u-left u-size13of16 u-xs-pl1'>
            ​Hands-on, feet on the ground
            <strong>American team members</strong> to
            smooth your path.
          </p>
        </td>
        <td class='box box--white u-mt2 u-alignTop u-xs-sizeFull u-xs-left'>
          <p class='u-m0 t3 u-right u-size1of16 u-alignRight u-xs-left u-xs-alignLeft'>
            <strong class='u-textPrimary'>5</strong>
          </p>
          <p class='u-m0 u-left u-size13of16 u-xs-pl1'>
            ​​​Only company with a dedicated
            bariatric <strong>hospital designed
            specifically</strong> for weight loss
            patients.
          </p>
        </td>
        <td class='box box--white u-mt2 u-alignTop u-xs-sizeFull u-xs-left'>
          <p class='u-m0 t3 u-right u-size1of16 u-alignRight u-xs-left u-xs-alignLeft'>
            <strong class='u-textPrimary'>6</strong>
          </p>
          <p class='u-m0 u-left u-size15of16 u-xs-pl1'>
            ​​7 team members, from
            cardiologists to anesthesiologists
            and nurses who <strong>have had bariatric
            or reconstructive surgery</strong>
            themselves.
          </p>
        </td>
      </tr>
    </table>
  </div>
</div>

<div class='wrap'>
  <div class='section u-py6'>
    <div class='section-row'>
      <div class='section-chunk u-size1of3 u-px2 u-xs-sizeFull u-xs-alignCenter u-xs-mb3'>
        <p class='t3 u-mt0'>
          Change the way you think
          about <strong>medical tourism
          in Mexico</strong>.
        </p>
        <a class='btn' href='/contact'>
          Let’s get started!
        </a>
      </div>
      <div class='section-chunk u-size2of3 u-px2 u-xs-sizeFull'>
        <ul class='imageList'>
          <li class='imageList-item'>
            <img src='/uploads/before.png' alt='Before Surgery' />
            <img src='/uploads/after.png' alt='After Surgery' />
          </li>
          <li class='imageList-item'>
            <img src='/uploads/before-1.png' alt='Before Surgery' />
            <img src='/uploads/after-1.png' alt='After Surgery' />
          </li>
          <li class='imageList-item'>
            <img src='/uploads/before-3.png' alt='Before Surgery' />
            <img src='/uploads/after-3.png' alt='After Surgery' />
          </li>
          <li class='imageList-item'>
            <img src='/uploads/before-4.png' alt='Before Surgery' />
            <img src='/uploads/after-4.png' alt='After Surgery' />
          </li>
          <li class='imageList-item'>
            <img src='/uploads/before-5.png' alt='Before Surgery' />
            <img src='/uploads/after-5.png' alt='After Surgery' />
          </li>
          <li class='imageList-item'>
            <img src='/uploads/before-6.png' alt='Before Surgery' />
            <img src='/uploads/after-6.png' alt='After Surgery' />
          </li>
          <li class='imageList-item'>
            <img src='/uploads/before-7.png' alt='Before Surgery' />
            <img src='/uploads/after-7.png' alt='After Surgery' />
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
