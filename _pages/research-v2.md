---
layout: page
title: Research
permalink: /research-v2/
nav: false
description: Selected research projects highlighting my work in particle organization, interfacial mechanics, and processing–structure–property relationships in polymeric materials.
_styles: |
  .post:has(.research-v2) > .post-header { padding-bottom: 2rem; margin-bottom: 3rem; border-bottom: 1px solid var(--global-divider-color); }
  .post:has(.research-v2) > .post-header .post-title { font-weight: 700; }
  .post:has(.research-v2) > .post-header .post-description { max-width: 74ch; line-height: 1.8; margin-top: 1rem; }
  .research-v2 { --rv2-muted: color-mix(in srgb, var(--global-text-color) 68%, var(--global-bg-color)); }
  .research-v2 .rv2-project { scroll-margin-top: 7rem; margin-bottom: 5.5rem; }
  .research-v2 .rv2-feature { display: grid; grid-template-columns: minmax(0, 40%) minmax(0, 1fr); gap: 2.75rem; align-items: center; }
  .research-v2 .rv2-project--lead .rv2-feature { grid-template-columns: minmax(0, 43%) minmax(0, 1fr); }
  .research-v2 .rv2-visual { margin: 0; min-width: 0; }
  .research-v2 .rv2-visual img { display: block; width: 100%; height: auto; object-fit: contain; }
  .research-v2 .rv2-placeholder { min-height: 14rem; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.9rem; color: var(--rv2-muted); font-size: 0.8rem; text-align: center; }
  .research-v2 .rv2-placeholder::before { content: ''; display: block; width: 3rem; height: 1px; background: var(--global-divider-color); }
  .research-v2 .rv2-project--lead .rv2-placeholder { min-height: 17rem; }
  .research-v2 .rv2-summary { min-width: 0; }
  .research-v2 .rv2-summary h2 { font-size: 1.7rem; font-weight: 700; line-height: 1.3; margin: 0 0 0.9rem; }
  .research-v2 .rv2-project--lead .rv2-summary h2 { font-size: 2rem; line-height: 1.25; }
  .research-v2 .rv2-meta { font-size: 0.82rem; line-height: 1.6; color: var(--rv2-muted); margin: 0 0 1.25rem; }
  .research-v2 .rv2-description { font-size: 1rem; line-height: 1.85; margin: 0; }
  .research-v2 .rv2-outputs { font-size: 0.85rem; line-height: 1.7; margin: 1.2rem 0 0; color: var(--rv2-muted); }
  .research-v2 .rv2-outputs > span { display: block; }
  .research-v2 a { color: var(--global-text-color); text-decoration: underline; text-decoration-color: var(--global-divider-color); text-underline-offset: 0.2em; }
  .research-v2 a:hover { color: var(--global-theme-color); text-decoration-color: currentColor; }
  .research-v2 a:focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 4px; }
  .research-v2 .rv2-narrative { max-width: 76ch; margin: 2rem auto 0; font-size: 0.95rem; line-height: 1.85; }
  .research-v2 .rv2-narrative p { margin: 0 0 1rem; }
  .research-v2 .rv2-detail-figures { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; margin: 1.5rem 0; }
  .research-v2 .rv2-detail-figures figure { margin: 0; min-width: 0; }
  .research-v2 .rv2-detail-figures img { width: 100%; height: auto; object-fit: contain; }
  .research-v2 .rv2-detail-figures figcaption { font-size: 0.8rem; line-height: 1.6; margin-top: 0.5rem; color: var(--rv2-muted); }
  .research-v2 .rv2-papers { max-width: 76ch; margin: 1.75rem auto 0; scroll-margin-top: 7rem; }
  .research-v2 .rv2-papers h3 { font-size: 1rem; font-weight: 600; margin: 0 0 0.75rem; }
  .research-v2 .rv2-papers ul { padding-left: 1.2rem; margin: 0; font-size: 0.9rem; line-height: 1.8; }
  .research-v2 .rv2-papers li + li { margin-top: 0.75rem; }
  .research-v2 .rv2-papers strong { font-weight: 700; }
  .research-v2 .rv2-other { border-top: 1px solid var(--global-divider-color); padding-top: 2.5rem; }
  .research-v2 .rv2-other > h2 { font-size: 1.5rem; font-weight: 600; margin: 0 0 2.5rem; }
  .research-v2 .rv2-other .rv2-project { margin-bottom: 3.25rem; }
  .research-v2 .rv2-other .rv2-feature { grid-template-columns: minmax(0, 32%) minmax(0, 1fr); gap: 2.25rem; }
  .research-v2 .rv2-other h3 { font-size: 1.3rem; font-weight: 700; line-height: 1.4; margin: 0 0 0.65rem; }
  .research-v2 .rv2-other .rv2-description { font-size: 0.95rem; line-height: 1.8; }
  @media (min-width: 768px) {
    .research-v2 .rv2-project--reverse .rv2-feature { grid-template-columns: minmax(0, 1fr) minmax(0, 40%); }
    .research-v2 .rv2-project--reverse .rv2-visual { order: 2; }
    .research-v2 .rv2-project--reverse .rv2-summary { order: 1; }
  }
  @media (max-width: 767px) {
    .post:has(.research-v2) > .post-header { padding-bottom: 1.5rem; margin-bottom: 2rem; }
    .research-v2 .rv2-project { margin-bottom: 3.5rem; }
    .research-v2 .rv2-feature, .research-v2 .rv2-project--lead .rv2-feature, .research-v2 .rv2-other .rv2-feature { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; }
    .research-v2 .rv2-placeholder, .research-v2 .rv2-project--lead .rv2-placeholder { min-height: 7rem; }
    .research-v2 .rv2-summary h2 { font-size: 1.5rem; }
    .research-v2 .rv2-project--lead .rv2-summary h2 { font-size: 1.7rem; }
    .research-v2 .rv2-narrative { margin-top: 1.5rem; }
    .research-v2 .rv2-detail-figures { grid-template-columns: minmax(0, 1fr); }
    .research-v2 .rv2-other > h2 { margin-bottom: 2rem; }
  }
---

<div class="research-v2">
  {% assign featured = site.data.research.projects | where: 'group', 'featured' %}
  {% for project in featured %}
  {% assign parity = forloop.index | modulo: 2 %}
  <article class="rv2-project{% if forloop.first %} rv2-project--lead{% elsif parity == 0 %} rv2-project--reverse{% endif %}" id="{{ project.id }}" aria-labelledby="{{ project.id }}-title">
    <div class="rv2-feature">
      <figure class="rv2-visual">
        {% if project.image != '' %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.image_alt | escape }}" loading="lazy"{% if project.image_zoom %} data-zoomable{% endif %}>
        {% else %}
        <div class="rv2-placeholder" role="img" aria-label="Scientific figure forthcoming for {{ project.title | escape }}"><span>Scientific figure forthcoming</span></div>
        {% endif %}
      </figure>
      <div class="rv2-summary">
        <h2 id="{{ project.id }}-title">{{ project.title }}</h2>
        <p class="rv2-meta">{{ project.period }}{% if project.funding %} · {{ project.funding }}{% endif %}</p>
        <p class="rv2-description">{{ project.description }}</p>
        {% if project.output_note or project.papers.size > 0 or project.links.size > 0 %}
        <p class="rv2-outputs">
          {% if project.output_note %}<span>{{ project.output_note }}</span>{% endif %}
          {% if project.papers.size > 0 %}<a href="#{{ project.id }}-papers">Related papers</a>{% endif %}
          {% for link in project.links %}
          {% if link.url and link.url != '' %}<a href="{{ link.url | relative_url }}">{{ link.label }}</a>{% endif %}
          {% endfor %}
        </p>
        {% endif %}
      </div>
    </div>
    <div class="rv2-narrative">
      {% if project.detail_background != '' %}<p>{{ project.detail_background }}</p>{% endif %}
      {% if project.detail_approach != '' %}<p>{{ project.detail_approach }}</p>{% endif %}
      {% if project.detail_significance != '' %}<p>{{ project.detail_significance }}</p>{% endif %}
      {% if project.detail_figures.size > 0 %}
      <div class="rv2-detail-figures">
        {% for figure in project.detail_figures %}
        <figure><img src="{{ figure.image | relative_url }}" alt="{{ figure.alt | escape }}" loading="lazy" data-zoomable>{% if figure.caption %}<figcaption>{{ figure.caption }}</figcaption>{% endif %}</figure>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    {% if project.papers.size > 0 %}
    <section class="rv2-papers" id="{{ project.id }}-papers" aria-labelledby="{{ project.id }}-papers-heading">
      <h3 id="{{ project.id }}-papers-heading">Related papers</h3>
      <ul>
        {% for paper in project.papers %}
        <li>{% if paper.url and paper.url != '' %}<a href="{{ paper.url | escape }}" target="_blank" rel="noopener noreferrer">{{ paper.citation }}</a>{% else %}{{ paper.citation }}{% endif %}</li>
        {% endfor %}
      </ul>
    </section>
    {% endif %}
  </article>
  {% endfor %}

  <section class="rv2-other" aria-labelledby="other-research-heading">
    <h2 id="other-research-heading">Other Research Projects</h2>
    {% assign additional = site.data.research.projects | where: 'group', 'additional' %}
    {% for project in additional %}
    <article class="rv2-project" id="{{ project.id }}" aria-labelledby="{{ project.id }}-title">
      <div class="rv2-feature">
        <figure class="rv2-visual">
          {% if project.image != '' %}
          <img src="{{ project.image | relative_url }}" alt="{{ project.image_alt | escape }}" loading="lazy"{% if project.image_zoom %} data-zoomable{% endif %}>
          {% else %}
          <div class="rv2-placeholder" role="img" aria-label="Scientific figure forthcoming for {{ project.title | escape }}"><span>Scientific figure forthcoming</span></div>
          {% endif %}
        </figure>
        <div class="rv2-summary">
          <h3 id="{{ project.id }}-title">{{ project.title }}</h3>
          <p class="rv2-meta">{{ project.period }}{% if project.funding %} · {{ project.funding }}{% endif %}</p>
          <p class="rv2-description">{{ project.description }}</p>
          {% if project.links.size > 0 or project.output_note %}
          <p class="rv2-outputs">
            {% if project.output_note %}<span>{{ project.output_note }}</span>{% endif %}
            {% for link in project.links %}
            {% if link.url and link.url != '' %}<a href="{{ link.url | relative_url }}">{{ link.label }}</a>{% endif %}
            {% endfor %}
          </p>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </section>
</div>
