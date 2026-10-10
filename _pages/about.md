---
layout: about
title: About
permalink: /
subtitle: Master's Student in Chemical Engineering, Soongsil University

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Department of Chemical Engineering</p>
    <p>Soongsil University</p>
    <p>Seoul, Republic of Korea</p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3

# Enable after the Research page and matching project anchors are created.
research_project_links:
  enabled: false
  assembly: /research/#directed-particle-assembly
  reliability: /research/#interfacial-mechanics-reliability
  processing: /research/#processing-structure-property
---

<style>
.about-introduction { max-width: 68ch; line-height: 1.85; }
.about-introduction strong { font-weight: 600; }
.about-introduction p { margin: 0 0 1.25rem; }
.about-research { clear: both; padding-top: 1.5rem; width: 100%; }
.about-research > h2 { font-size: 1.75rem; font-weight: 600; line-height: 1.3; margin: 0 0 0.5rem; }
.about-research > .research-introduction { font-size: 0.98rem; line-height: 1.6; color: color-mix(in srgb, var(--global-text-color) 65%, var(--global-bg-color)); margin: 0 0 1.75rem; }
.about-research-area { display: flex; flex-direction: column; box-sizing: border-box; width: 100%; border: 1px solid var(--global-divider-color); border-left: 2px solid var(--global-theme-color); border-radius: 3px; background: color-mix(in srgb, var(--global-text-color) 1.5%, var(--global-bg-color)); padding: 1.35rem 2rem; margin-bottom: 1.5rem; }
.about-research-area h3 { font-size: 1.35rem; font-weight: 700; line-height: 1.45; margin: 0 0 1rem; }
.about-research-area > p { font-size: 1rem; line-height: 1.8; margin: 0 0 1rem; max-width: 78ch; }
.about-research-area > .related-projects { font-size: 0.95rem; line-height: 1.5; margin-top: auto; margin-bottom: 0; padding-top: 0.25rem; }
.about-research-area .related-projects a { color: var(--global-text-color); text-decoration: underline; text-decoration-color: color-mix(in srgb, var(--global-text-color) 40%, var(--global-bg-color)); text-underline-offset: 0.2em; }
.about-research-area .related-projects a:hover { color: var(--global-theme-color); text-decoration-color: currentColor; text-decoration-thickness: 2px; }
.about-research-area .related-projects a em { color: inherit; }
.about-research-area .related-projects a:focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 4px; }
.profile .more-info { font-size: 0.85rem; }
.post > .post-header .post-title, .post > .post-header .post-title span { font-weight: 700; }
.post > .post-header { padding-bottom: 0.75rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--global-divider-color); }
@media (min-width: 576px) {
  .post > article > .profile { width: 26.25%; }
  .about-introduction { margin-right: calc(26.25% + 3rem); }
}
@media (max-width: 575px) {
  .about-research { padding-top: 1rem; }
  .about-research-area { padding: 1rem 1.25rem; }
  .about-research-area h3 { font-size: 1.2rem; }
}
</style>

<div class="about-introduction" markdown="1">

I am a master’s student in Chemical Engineering at Soongsil University. My research centers on <strong>polymeric soft materials, nanocomposites, and functional thin films</strong>.

My work examines how <strong>interfacial phenomena and processing conditions govern structure formation</strong> in polymeric materials. Changes in surface chemistry, flow, and applied fields can alter particle distribution and orientation, while particle–polymer interactions and interfacial mechanics shape the resulting material response. A central theme of my research is understanding how these microscopic and mesoscale processes translate into <strong>macroscopic mechanical, optical, and functional properties</strong>.

</div>

<div class="about-research">
  <h2>Research Interests</h2>
  <p class="research-introduction">My research interests span three closely connected areas.</p>

  <section class="about-research-area" aria-labelledby="assembly-heading">
    <h3 id="assembly-heading">Directed particle assembly and patterning in polymer thin films</h3>
    <p>I investigate how spontaneous surface segregation, shear-induced alignment, and field-directed assembly can be used to control particle position and orientation and create anisotropic, gradient, and spatially organized structures.</p>
    <p class="related-projects">
      {% if page.research_project_links.enabled %}
      <a href="{{ page.research_project_links.assembly | relative_url }}"><em>Related research projects →</em></a>
      {% else %}
      <a class="future-project-link" href="{{ '/projects/' | relative_url }}" data-future-href="{{ page.research_project_links.assembly | relative_url }}"><em>Related research projects →</em></a>
      {% endif %}
    </p>
  </section>

  <section class="about-research-area" aria-labelledby="reliability-heading">
    <h3 id="reliability-heading">Interfacial mechanics and reliability of functional soft materials</h3>
    <p>I examine how particle–polymer interactions and interfacial adhesion govern deformation, recovery, durability, and long-term reliability, particularly in materials subjected to repeated or large deformation.</p>
    <p class="related-projects">
      {% if page.research_project_links.enabled %}
      <a href="{{ page.research_project_links.reliability | relative_url }}"><em>Related research projects →</em></a>
      {% else %}
      <a class="future-project-link" href="{{ '/projects/' | relative_url }}" data-future-href="{{ page.research_project_links.reliability | relative_url }}"><em>Related research projects →</em></a>
      {% endif %}
    </p>
  </section>

  <section class="about-research-area" aria-labelledby="processing-heading">
    <h3 id="processing-heading">Processing–structure–property relationships in polymer films and coatings</h3>
    <p>I seek to connect rheological behavior, coating and printing processes, and micro-/nanoscale morphology with macroscopic mechanical and optical performance, with the broader goal of establishing predictive principles for materials design.</p>
    <p class="related-projects">
      {% if page.research_project_links.enabled %}
      <a href="{{ page.research_project_links.processing | relative_url }}"><em>Related research projects →</em></a>
      {% else %}
      <a class="future-project-link" href="{{ '/projects/' | relative_url }}" data-future-href="{{ page.research_project_links.processing | relative_url }}"><em>Related research projects →</em></a>
      {% endif %}
    </p>
  </section>
</div>
