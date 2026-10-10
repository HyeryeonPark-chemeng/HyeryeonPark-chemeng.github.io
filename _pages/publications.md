---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 1
_styles: |
  .post-description:empty { display: none; }
---

{% assign publications = site.data.cv.cv.sections.PUBLICATIONS %}
{% assign pending = publications | where_exp: 'publication', 'publication.year == nil' %}
{% assign years = publications | map: 'year' | compact | uniq | sort | reverse %}

<div class="publications">
  {% if pending.size > 0 %}
  <h2 class="year">In Preparation &amp; Under Review</h2>
  <ol class="bibliography">
    {% for publication in pending %}
    <li>{{ publication.bullet }}</li>
    {% endfor %}
  </ol>
  {% endif %}

{% for year in years %}

  <h2 class="year">{{ year }}</h2>
  <ol class="bibliography">
    {% assign year_publications = publications | where: 'year', year %}
    {% for publication in year_publications %}
    <li>{{ publication.bullet }}</li>
    {% endfor %}
  </ol>
  {% endfor %}
</div>
