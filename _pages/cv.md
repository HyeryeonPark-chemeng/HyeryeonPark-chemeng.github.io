---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 3
toc:
  sidebar: left
_styles: |
  .cv .cv-contact { text-align: center; }
  .cv .cv-contact p { margin-bottom: 0; }
  .cv .cv-entry-heading { display: flex; justify-content: space-between; gap: 1rem; }
  .cv .cv-entry-heading .cv-location { flex-shrink: 0; }
  .cv .cv-entries { display: grid; gap: 1.5rem; }
  .cv .cv-entry { display: grid; grid-template-columns: minmax(0, 11rem) minmax(0, 1fr); column-gap: 1.5rem; align-items: start; }
  .cv .cv-entry-details { display: flex; flex-direction: column; gap: 0.2rem; }
  .cv .cv-entry-title { margin: 0; font-size: 1rem; line-height: 1.3; }
  .cv .cv-date { display: block; color: var(--global-text-color); font-size: 1rem; font-weight: 400; line-height: 1.3; }
  .cv .cv-subtitle { margin: 0; font-size: 0.95rem; line-height: 1.3; }
  .cv .cv-subtitle strong, .cv .cv-subtitle strong em { font-weight: 700; }
  .cv .cv-bullets { padding-left: 1.25rem; }
  .cv .cv-bullets li + li { margin-top: 0.6rem; }
  .cv .cv-entry-details .items { margin: 0; padding-left: 1.25rem; }
  .cv .cv-entry-details .items li { margin: 0; line-height: 1.3; }
  @media (max-width: 575px) {
    .cv .cv-entry { grid-template-columns: minmax(0, 3fr) minmax(0, 9fr); column-gap: 0.75rem; }
    .cv .cv-entry-heading { flex-wrap: wrap; gap: 0.25rem; }
  }
---

{% assign cv = site.data.cv.cv %}

<div class="cv">
  <div class="card mt-3 p-3 cv-contact">
    <a class="float-right" href="{{ '/assets/pdf/HyeRyeon%20Park_2026%20ver.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Download CV PDF" style="align-self: flex-end">
      <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
    </a>
    <h3 class="card-title font-weight-medium" data-toc-skip><strong>{{ cv.name }}</strong></h3>
    <p><a href="mailto:{{ cv.email }}">{{ cv.email }}</a> | {{ cv.phone }}</p>
    <p>{{ cv.location }}</p>
  </div>

{% for section in cv.sections %}

  <section class="card mt-3 p-3" aria-labelledby="{{ section[0] | slugify }}">
    <h3 class="card-title font-weight-medium" id="{{ section[0] | slugify }}"><strong>{{ section[0] }}</strong></h3>
    {% if section[1][0].bullet %}
    <ul class="card-text font-weight-light cv-bullets">
      {% for entry in section[1] %}
      <li>{{ entry.bullet }}</li>
      {% endfor %}
    </ul>
    {% else %}
    <div class="card-text font-weight-light cv-entries">
      {% for entry in section[1] %}
        <div class="cv-entry">
          <div class="cv-entry-date">
            <span class="cv-date">{{ entry.date_range }}</span>
          </div>
          <div class="cv-entry-details">
            <div class="cv-entry-heading">
              <h6 class="cv-entry-title font-weight-bold"><strong>{{ entry.title }}</strong></h6>
              {% if entry.location and entry.location_on_subtitle != true %}
              <span class="cv-location"><strong>{{ entry.location }}</strong></span>
              {% endif %}
            </div>
            {% if entry.subtitle %}
            <div class="cv-entry-heading">
              <h6 class="cv-subtitle">{% if entry.subtitle_italic %}<strong><em>{{ entry.subtitle }}</em></strong>{% else %}{{ entry.subtitle }}{% endif %}</h6>
              {% if entry.location_on_subtitle %}
              <span class="cv-location"><strong>{{ entry.location }}</strong></span>
              {% endif %}
            </div>
            {% endif %}
            <ul class="items">
              {% for highlight in entry.highlights %}
              <li><span class="item">{{ highlight }}</span></li>
              {% endfor %}
            </ul>
          </div>
        </div>
      {% endfor %}
    </div>
    {% endif %}
  </section>
  {% endfor %}
</div>
