---
layout: page
title: Research
permalink: /research/
description: Selected research projects highlighting my work in particle organization, interfacial mechanics, and processing–structure–property relationships in polymeric materials.
nav: true
nav_order: 2
_styles: |
  .post:has(.research-projects) > .post-header .post-title { font-weight: 700; }
  .post:has(.research-projects) > .post-header .post-description { max-width: 78ch; line-height: 1.75; margin-top: 0.75rem; }
  .research-projects { --research-muted: color-mix(in srgb, var(--global-text-color) 68%, var(--global-bg-color)); --research-border: color-mix(in srgb, var(--global-text-color) 13%, var(--global-bg-color)); --research-surface: color-mix(in srgb, var(--global-text-color) 1.5%, var(--global-bg-color)); margin-top: 2.75rem; }
  .research-projects .research-interest-projects { scroll-margin-top: 6rem; }
  .research-projects .research-project-group + .research-project-group { margin-top: 3.5rem; }
  .research-projects .research-project-group > h2 { font-size: 1.5rem; font-weight: 600; line-height: 1.35; margin: 0 0 1.25rem; }
  .research-projects .research-project-card { scroll-margin-top: 6rem; display: grid; grid-template-columns: 32% minmax(0, 1fr); overflow: hidden; border: 1px solid var(--research-border); border-radius: 4px; background: var(--global-bg-color); margin-bottom: 1.5rem; }
  .research-projects .research-project-visual { display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 0; margin: 1.5rem 0 1.5rem 1.5rem; padding: 1rem; background: var(--research-surface); border-radius: 2px; }
  .research-projects #surface-segregation-of-nanoparticles .research-project-visual, .research-projects #fuel-cell-adhesive-durability .research-project-visual, .research-projects #dual-network-acrylic-adhesives .research-project-visual { padding: 0; background: transparent; }
  @media (min-width: 768px) {
    .research-projects #surface-segregation-of-nanoparticles .research-project-visual, .research-projects #fuel-cell-adhesive-durability .research-project-visual, .research-projects #dual-network-acrylic-adhesives .research-project-visual { margin: 1.25rem 0 1.25rem 1.25rem; }
  }
  .research-projects .research-project-visual img { display: block; width: 100%; height: auto; object-fit: contain; }
  .research-projects .research-project-visual figcaption { font-size: 0.8rem; line-height: 1.6; margin-top: 0.75rem; color: var(--research-muted); }
  .research-projects .research-figure-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; min-height: 150px; padding: 1rem; text-align: center; }
  .research-projects .research-figure-placeholder::before { content: ''; width: 2rem; height: 1px; background: var(--research-border); margin-bottom: 0.5rem; }
  .research-projects .research-figure-placeholder span { font-size: 0.8rem; color: var(--research-muted); }
  .research-projects .research-figure-placeholder small { font-size: 0.7rem; color: var(--research-muted); }
  .research-projects .research-project-content { display: flex; flex-direction: column; min-width: 0; padding: 1.75rem 1.75rem 1.5rem; }
  .research-projects .research-project-content h3 { font-size: 1.45rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.015em; margin: 0 0 0.75rem; }
  .research-projects .research-project-meta { font-size: 0.8rem; line-height: 1.65; margin: 0 0 1rem; color: var(--research-muted); }
  .research-projects .research-project-summary { font-size: 0.98rem; line-height: 1.8; margin: 0 0 1rem; }
  .research-projects .research-project-methods { font-size: 0.8rem; line-height: 1.7; margin: 0 0 1.25rem; color: var(--research-muted); }
  .research-projects .research-project-methods span { font-weight: 500; }
  .research-projects .research-project-actions { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0.65rem 1.25rem; margin-top: auto; padding-top: 0.5rem; }
  .research-projects .research-project-output-note { flex-basis: 100%; font-size: 0.8rem; line-height: 1.6; color: var(--research-muted); }
  .research-projects .research-project-links { display: flex; flex-wrap: wrap; gap: 0.5rem 1rem; list-style: none; margin: 0; padding: 0; font-size: 0.85rem; }
  .research-projects .research-project-links a, .research-projects .research-related-papers a { color: var(--global-text-color); text-decoration: underline; text-decoration-color: var(--research-border); text-underline-offset: 0.25em; }
  .research-projects .research-project-links a:hover, .research-projects .research-related-papers a:hover { color: var(--global-theme-color); text-decoration-color: currentColor; }
  .research-projects a:focus-visible, .research-projects button:focus-visible, .research-projects .research-related-papers :focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 4px; }
  .research-projects .research-project-group--additional > h2 { font-size: 1.35rem; }
  .research-projects .research-project-group--additional .research-project-content { padding: 1.4rem 1.5rem; }
  .research-projects .research-project-group--additional .research-project-content h3 { font-size: 1.2rem; line-height: 1.4; }
  .research-projects .research-project-group--additional .research-project-visual { padding: 0; margin: 1.25rem 0 1.25rem 1.25rem; background: transparent; }
  .research-projects .research-project-group--additional .research-project-summary { font-size: 0.95rem; line-height: 1.75; }
  .research-projects .research-project-group--additional .research-project-methods { margin-bottom: 0; }
  .research-projects .research-details-toggle { padding: 0; border: 0; background: transparent; color: var(--research-muted); font-family: inherit; font-size: 0.85rem; line-height: 1.65; cursor: pointer; text-decoration: underline; text-decoration-color: var(--research-border); text-underline-offset: 0.25em; }
  .research-projects .research-details-toggle:hover, .research-projects .research-details-toggle[aria-expanded='true'] { color: var(--global-theme-color); text-decoration-color: currentColor; }
  .research-projects .research-project-details { grid-column: 1 / -1; overflow: hidden; border-top: 1px solid var(--research-border); background: var(--research-surface); }
  .research-projects .research-project-details[hidden] { display: none; }
  .research-projects .research-details-inner { padding: 1.75rem; }
  .research-projects .research-details-inner > p { max-width: 78ch; font-size: 0.95rem; line-height: 1.8; margin: 0 0 1rem; }
  .research-projects .research-detail-figures { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; margin: 1.5rem 0; }
  .research-projects #surface-segregation-of-nanoparticles .research-detail-figures { grid-template-columns: minmax(0, 1fr) minmax(0, 1.8173076923fr); align-items: start; }
  .research-projects #fuel-cell-adhesive-durability .research-detail-figures { grid-template-columns: minmax(0, 1.6397849462fr) minmax(0, 1.6490384615fr); align-items: start; }
  .research-projects #fuel-cell-adhesive-durability .research-detail-viewport { position: relative; overflow: hidden; }
  .research-projects #fuel-cell-adhesive-durability .research-detail-viewport img { position: absolute; max-width: none; height: auto; }
  .research-projects #fuel-cell-adhesive-durability .research-detail-figures figure:first-child .research-detail-viewport { aspect-ratio: 610 / 372; }
  .research-projects #fuel-cell-adhesive-durability .research-detail-figures figure:first-child .research-detail-viewport img { width: 111.4754098361%; left: -3.9344262295%; top: -13.4408602151%; }
  .research-projects #fuel-cell-adhesive-durability .research-detail-figures figure:nth-child(2) .research-detail-viewport { aspect-ratio: 686 / 416; }
  .research-projects #fuel-cell-adhesive-durability .research-detail-figures figure:nth-child(2) .research-detail-viewport img { width: 110.2040816327%; left: -5.1020408163%; top: 0; }
  .research-projects #dual-network-acrylic-adhesives .research-detail-figures { grid-template-columns: minmax(0, 1.4977973568fr) minmax(0, 1.4109347443fr); align-items: start; }
  .research-projects .research-detail-figures figure { min-width: 0; margin: 0; }
  .research-projects .research-detail-figures img { width: 100%; height: auto; object-fit: contain; }
  .research-projects .research-detail-figures figcaption { font-size: 0.8rem; line-height: 1.6; margin-top: 0.5rem; color: var(--research-muted); }
  .research-projects #surface-segregation-of-nanoparticles .research-detail-figures figcaption, .research-projects #fuel-cell-adhesive-durability .research-detail-figures figcaption, .research-projects #dual-network-acrylic-adhesives .research-detail-figures figcaption { font-style: italic; text-align: center; margin-top: 0.65rem; }
  .research-projects .research-detail-figure-placeholder { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 0.5rem; min-height: 120px; padding: 1rem; border-bottom: 1px solid var(--research-border); text-align: center; }
  .research-projects .research-detail-figure-placeholder span, .research-projects .research-detail-figure-placeholder small { font-size: 0.8rem; color: var(--research-muted); }
  .research-projects .research-detail-outputs { list-style: none; padding: 0; margin: 0; font-size: 0.85rem; }
  .research-projects .research-detail-outputs li { scroll-margin-top: 6rem; }
  .research-projects .research-related-papers { margin-top: 1.5rem; }
  .research-projects .research-related-papers h4 { font-size: 1.05rem; font-weight: 600; line-height: 1.4; margin: 0 0 0.75rem; scroll-margin-top: 6rem; }
  .research-projects .research-related-papers ul { padding-left: 1.2rem; margin: 0; font-size: 0.9rem; line-height: 1.75; }
  .research-projects .research-related-papers li + li { margin-top: 0.75rem; }
  .research-projects .research-related-papers strong { font-weight: 700; }
  @media (max-width: 767px) {
    .research-projects { margin-top: 2rem; }
    .research-projects .research-project-card { grid-template-columns: minmax(0, 1fr); }
    .research-projects .research-project-visual { margin: 1.25rem 1.25rem 0; padding: 1rem; }
    .research-projects .research-figure-placeholder { min-height: 95px; padding: 0.5rem; }
    .research-projects .research-project-content, .research-projects .research-project-group--additional .research-project-content { padding: 1.25rem; }
    .research-projects .research-project-content h3 { font-size: 1.3rem; line-height: 1.35; }
    .research-projects .research-project-group--additional .research-project-content h3 { font-size: 1.15rem; }
    .research-projects .research-project-group--additional .research-project-visual { margin: 1.25rem 1.25rem 0; }
    .research-projects .research-details-inner { padding: 1.25rem; }
    .research-projects .research-detail-figures { grid-template-columns: minmax(0, 1fr); }
    .research-projects #surface-segregation-of-nanoparticles .research-detail-figures { grid-template-columns: minmax(0, 1fr); container-type: inline-size; }
    .research-projects #dual-network-acrylic-adhesives .research-detail-figures { grid-template-columns: minmax(0, 1fr); container-type: inline-size; }
    .research-projects #dual-network-acrylic-adhesives .research-detail-figures img { display: block; width: auto; max-width: 100%; height: calc(100cqw * 454 / 680); margin-inline: auto; }
    .research-projects #fuel-cell-adhesive-durability .research-detail-figures { grid-template-columns: minmax(0, 1fr); container-type: inline-size; }
    .research-projects #fuel-cell-adhesive-durability .research-detail-viewport { height: calc(100cqw * 416 / 686); margin-inline: auto; }
    .research-projects #fuel-cell-adhesive-durability .research-detail-figures figure:first-child .research-detail-viewport { width: 99.4388387899%; }
    .research-projects #fuel-cell-adhesive-durability .research-detail-figures figure:nth-child(2) .research-detail-viewport { width: 100%; }
    .research-projects #surface-segregation-of-nanoparticles .research-detail-figures img { display: block; width: auto; max-width: 100%; height: calc(100cqw * 416 / 756); margin-inline: auto; }
  }
---

<div class="research-projects">
  {% assign groups = 'featured,additional' | split: ',' %}
  {% for group in groups %}
  <section class="research-project-group research-project-group--{{ group }}" aria-labelledby="{{ group }}-research-heading">
    <h2 id="{{ group }}-research-heading">{% if group == 'featured' %}Featured Research{% else %}Additional Research Projects{% endif %}</h2>
    {% assign projects = site.data.research.projects | where: 'group', group %}
    {% assign interest_groups = projects | map: 'interest_anchor' | uniq %}
    {% for interest_group in interest_groups %}
    <div class="research-interest-projects" id="{{ interest_group }}">
    {% assign interest_projects = projects | where: 'interest_anchor', interest_group %}
    {% for project in interest_projects %}
    <article class="research-project-card" id="{{ project.id }}" aria-labelledby="{{ project.id }}-title">
      <figure class="research-project-visual">
        {% if project.image != '' %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.image_alt | escape }}" loading="lazy"{% if project.image_zoom %} data-zoomable{% endif %}>
        {% if project.image_caption %}<figcaption>{{ project.image_caption }}</figcaption>{% endif %}
        {% else %}
        <div class="research-figure-placeholder" role="img" aria-label="Scientific figure placeholder for {{ project.title | escape }}">
          <span>Representative figure</span>
          <small>Image placeholder</small>
        </div>
        {% endif %}
      </figure>
      <div class="research-project-content">
        <h3 id="{{ project.id }}-title">{{ project.title }}</h3>
        <p class="research-project-meta">{{ project.period | default: 'Period / project metadata to be added' }}{% if project.funding %} · {{ project.funding }}{% endif %}</p>
        <p class="research-project-summary">
          {% if project.description != '' %}
          {{ project.description }}
          {% elsif group == 'featured' %}
          A concise research overview will be added here. This paragraph will describe the project’s scientific context, approach, and significance.
          {% else %}
          A brief overview of this research project will be added here.
          {% endif %}
        </p>
        {% if project.methods %}
        <p class="research-project-methods"><span>Methods / Focus:</span> {{ project.methods }}</p>
        {% endif %}
        {% if project.links.size > 0 or group == 'featured' %}
        <div class="research-project-actions">
          {% if project.output_note %}<span class="research-project-output-note">{{ project.output_note }}</span>{% endif %}
          {% if project.links.size > 0 %}
          <ul class="research-project-links" aria-label="Project outputs">
            {% for link in project.links %}
            <li><a href="{% if link.url != '' %}{{ link.url | relative_url }}{% else %}#{{ project.id }}-{{ link.label | slugify }}-url{% endif %}"{% if link.url == '' %} data-output-details="{{ project.id }}-details"{% endif %}>{{ link.label }}</a></li>
            {% endfor %}
          </ul>
          {% endif %}
          {% if project.papers.size > 0 and group == 'featured' %}
          <ul class="research-project-links" aria-label="Related publications">
            <li><a href="#{{ project.id }}-related-papers" data-output-details="{{ project.id }}-details" data-output-focus="{{ project.id }}-related-papers">Papers</a></li>
          </ul>
          {% endif %}
          {% if group == 'featured' %}
          <button class="research-details-toggle" type="button" aria-expanded="false" aria-controls="{{ project.id }}-details">More details ↓</button>
          {% endif %}
        </div>
        {% endif %}
      </div>
      {% if group == 'featured' %}
      <div class="research-project-details" id="{{ project.id }}-details" hidden>
        <div class="research-details-inner">
          <p>{{ project.detail_background | default: 'A short paragraph describing the research background and question will be added here.' }}</p>
          <p>{{ project.detail_approach | default: 'A short paragraph describing the approach and contribution will be added here.' }}</p>
          <p>{{ project.detail_significance | default: 'A concise summary of the key findings and significance will be added here.' }}</p>
          <div class="research-detail-figures">
            {% if project.detail_figures.size > 0 %}
            {% for figure in project.detail_figures limit: 2 %}
            <figure>{% if figure.crop %}<div class="research-detail-viewport">{% endif %}<img src="{{ figure.image | relative_url }}" alt="{{ figure.alt | escape }}" loading="lazy"{% if figure.zoom %} data-zoomable{% endif %}>{% if figure.crop %}</div>{% endif %}{% if figure.caption %}<figcaption>{{ figure.caption }}</figcaption>{% endif %}</figure>
            {% endfor %}
            {% else %}
            {% for number in (1..2) %}
            <figure class="research-detail-figure-placeholder"><span>Additional scientific figure {{ number }}</span><small>Image placeholder</small></figure>
            {% endfor %}
            {% endif %}
          </div>
          {% if project.papers.size > 0 %}
          <section class="research-related-papers" aria-labelledby="{{ project.id }}-related-papers">
            <h4 id="{{ project.id }}-related-papers" tabindex="-1">Related Papers</h4>
            <ul>
              {% for paper in project.papers %}
              <li>{% if paper.url and paper.url != '' %}<a href="{{ paper.url | escape }}" target="_blank" rel="noopener noreferrer">{{ paper.citation }}</a>{% else %}{{ paper.citation }}{% endif %}</li>
              {% endfor %}
            </ul>
          </section>
          {% endif %}
          {% if project.links.size > 0 %}
          <ul class="research-detail-outputs" aria-label="Project output links">
            {% for link in project.links %}
            <li id="{{ project.id }}-{{ link.label | slugify }}-url">{% if link.url != '' %}<a href="{{ link.url | relative_url }}">{{ link.label }}</a>{% else %}{{ link.label }} URL to be added.{% endif %}</li>
            {% endfor %}
          </ul>
          {% endif %}
        </div>
      </div>
      {% endif %}
    </article>
    {% endfor %}
    </div>
    {% endfor %}
  </section>
  {% endfor %}
</div>

<script src="{{ '/assets/js/research-details.js' | relative_url | bust_file_cache }}" defer></script>
