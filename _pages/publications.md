---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 1
_styles: |
  .post-header .post-title { font-weight: 700; }
  .post-description:empty { display: none; }
  .publications ul.bibliography { list-style-type: disc; padding-left: 1.25rem; }
  .publications ul.bibliography > li { display: list-item; list-style-type: disc; margin-bottom: 1rem; }
  .publications .bibliography strong { font-weight: 700; }
  .publications .publication-legend { font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.5rem; color: color-mix(in srgb, var(--global-text-color) 65%, var(--global-bg-color)); }
---

{% assign publications = site.data.cv.cv.sections.PUBLICATIONS %}
{% assign years = publications | map: 'year' | compact | uniq | sort | reverse %}

<div class="publications">
  <p class="publication-legend">† Equal contribution. <span aria-hidden="true">&nbsp;</span> * Corresponding author.</p>
{% for year in years %}

  <h2 class="year">{{ year }}</h2>
  <ul class="bibliography">
    {% assign year_publications = publications | where: 'year', year %}
    {% for publication in year_publications %}
    <li>
      {{ publication.bullet | replace: '<strong>HR. Park</strong>', '<strong><u>HR. Park</u></strong>' | replace: 'Manuscript in preparation.', '<strong>In preparation</strong>.' | replace: 'Under Revision.', '<strong>Under Revision</strong>.' | replace: 'ACS Applied Polymer Materials,', '<em>ACS Applied Polymer Materials</em>,' }}
      {% if publication.impact_factor %}
      [I.F.= {{ publication.impact_factor }}, JCR Top {{ publication.jcr_top }}%]
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
  <h2 class="year">Patent Applications</h2>
  <ul class="bibliography patent-applications">
    {% for application in site.data.cv.cv.sections['PATENT APPLICATIONS'] %}
    <li>{{ application.bullet | replace: '<strong>HR. Park</strong>', '<strong><u>HR. Park</u></strong>' }}</li>
    {% endfor %}
  </ul>
</div>
