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
  .cv .cv-date { display: block; color: var(--global-text-color); font-size: 0.85rem; font-weight: 400; line-height: 1.5; }
  .cv .cv-subtitle { font-size: 0.95rem; }
  .cv .cv-subtitle strong, .cv .cv-subtitle strong em { font-weight: 700; }
  .cv .cv-bullets { padding-left: 1.25rem; }
  .cv .cv-bullets li + li { margin-top: 0.6rem; }
  .cv .cv-entry-details .items { margin-top: 0.5rem; }
  @media (max-width: 575px) {
    .cv .cv-entry-heading { flex-wrap: wrap; gap: 0.25rem; }
    .cv .date-column { text-align: left !important; margin-bottom: 0.75rem; }
  }
---

{% assign cv = site.data.cv.cv %}

<div class="cv">
  <div class="card mt-3 p-3 cv-contact">
    <a class="float-right" href="{{ '/assets/pdf/hyeryeon-park-cv.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Download CV PDF" style="align-self: flex-end">
      <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
    </a>
    <h3 class="card-title font-weight-medium" data-toc-skip><strong>{{ cv.name }}</strong></h3>
    <p><a href="mailto:{{ cv.email }}">{{ cv.email }}</a> | {{ cv.phone }}</p>
    <p>{{ cv.location }}</p>
    <p>Personal website:</p>
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
    <ul class="card-text font-weight-light list-group list-group-flush">
      {% for entry in section[1] %}
      <li class="list-group-item">
        <div class="row">
          <div class="col-xs-3 col-sm-3 col-md-3 date-column">
            <span class="cv-date">{{ entry.date_range }}</span>
          </div>
          <div class="col-xs-9 col-sm-9 col-md-9 mt-2 mt-md-0 cv-entry-details">
            <div class="cv-entry-heading ml-1 ml-md-4">
              <h6 class="title font-weight-bold"><strong>{{ entry.title }}</strong></h6>
              {% if entry.location and entry.location_on_subtitle != true %}
              <span class="cv-location"><strong>{{ entry.location }}</strong></span>
              {% endif %}
            </div>
            {% if entry.subtitle %}
            <div class="cv-entry-heading ml-1 ml-md-4">
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
      </li>
      {% endfor %}
    </ul>
    {% endif %}
  </section>
  {% endfor %}
</div>
