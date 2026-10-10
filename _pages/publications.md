---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 1
_styles: |
  .post-description:empty { display: none; }
  .publications ul.bibliography { list-style-type: disc; padding-left: 1.25rem; }
  .publications ul.bibliography > li { display: list-item; list-style-type: disc; }
  .publications .bibliography strong { font-weight: 700; }
---

{% assign publications = site.data.cv.cv.sections.PUBLICATIONS %}
{% assign years = publications | map: 'year' | compact | uniq | sort | reverse %}

<div class="publications">
{% for year in years %}

  <h2 class="year">{{ year }}</h2>
  <ul class="bibliography">
    {% assign year_publications = publications | where: 'year', year %}
    {% for publication in year_publications %}
    <li>
      {{ publication.bullet | replace: '<strong>HR. Park</strong>', '<strong><u>HR. Park</u></strong>' | replace: 'Manuscript in preparation.', '<strong>In preparation</strong>.' | replace: 'Under Review.', '<strong>Under Review</strong>.' | replace: 'ACS Applied Polymer Materials,', '<em>ACS Applied Polymer Materials</em>,' }}
      {% if publication.impact_factor %}
      [I.F.= {{ publication.impact_factor }}, JCR Top {{ publication.jcr_top }}%]
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>
