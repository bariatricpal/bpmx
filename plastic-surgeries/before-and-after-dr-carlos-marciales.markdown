---
title: Plastic Surgery Before & After Pictures
published: false
position: 11
seo:
  title: Plastic Surgery Before & After Pictures in Mexico
  description: Real Before & After Plastic Surgery Pictures of BariatricPal Hospital
    Patients
photos:
- image: "/uploads/ps-cm-before-1.png"
- image: "/uploads/ps-cm-after-1.png"
- image: "/uploads/ps-cm-before-2.png"
- image: "/uploads/ps-cm-after-2.png"
- image: "/uploads/ps-cm-before-3.png"
- image: "/uploads/ps-cm-after-3.png"
- image: "/uploads/ps-cm-before-4.png"
- image: "/uploads/ps-cm-after-4.png"
- image: "/uploads/ps-cm-before-5.png"
- image: "/uploads/ps-cm-after-5.png"
layout: default
---

<div class='wrap'>
  <div class='section u-py6'>
    <div class='section-row'>
      <div class='section-chunk u-size5of13 u-px4 u-pr2 u-mAuto u-sm-size10of12 u-sm-alignCenter u-sm-clear'>
        <h1 class='u-mt1'>
          <strong>
            Before &amp; After Pictures
          </strong>
        </h1>
        <h1 class='u-textPrimary'>
          Real Before &amp; After Plastic Surgery Pictures of Our Patients
        </h1>
      </div>
      <div class='section-chunk u-size8of13 u-px4 u-sm-sizeFull u-sm-mt3'>
        <h3 class='u-textSecondary u-mt1'>
          Dr. Carlos Marciales
        </h3>
        <ul class="imageList">
          {% for photo in page.photos %}
            <li class="imageList-item">
              <img src='{{photo.image}}' alt="Before Surgery" class='u-sizeFull'/>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>
