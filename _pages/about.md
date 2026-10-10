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
.about-introduction { max-width: 68ch; line-height: 1.75; }
.about-introduction p { margin: 0 0 1.25rem; }
.about-research { clear: both; padding-top: 1rem; max-width: 78ch; }
.about-research > h2 { font-size: 1.25rem; font-weight: 500; line-height: 1.5; margin: 0 0 1.75rem; }
.about-research-area { border-left: 3px solid var(--global-theme-color); padding-left: 1.25rem; margin-bottom: 2rem; }
.about-research-area h3 { font-size: 1.15rem; font-weight: 700; line-height: 1.5; margin: 0 0 0.65rem; }
.about-research-area p { line-height: 1.7; margin: 0 0 0.75rem; }
.about-research-area .related-projects { font-size: 0.95rem; margin-bottom: 0; }
.about-research-area span.future-project-link { color: var(--global-text-color-light); }
.profile .more-info { font-size: 0.85rem; }
.post > .post-header { padding-bottom: 0.75rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--global-divider-color); }
@media (min-width: 576px) {
  .post > article > .profile { width: 26.25%; }
  .about-introduction { margin-right: calc(26.25% + 3rem); }
}
@media (max-width: 575px) {
  .about-research-area { padding-left: 1rem; }
  .about-research { padding-top: 0.5rem; }
}
</style>

<div class="about-introduction" markdown="1">

I am a master’s student in Chemical Engineering at Soongsil University. My research centers on polymeric soft materials, nanocomposites, and functional thin films.

My work examines how interfacial phenomena and processing conditions govern structure formation in polymeric materials. Changes in surface chemistry, flow, and applied fields can alter particle distribution and orientation, while particle–polymer interactions and interfacial mechanics shape the resulting material response. A central theme of my research is understanding how these microscopic and mesoscale processes translate into macroscopic mechanical, optical, and functional properties.

</div>

<div class="about-research">
  <h2>My research interests span three closely connected areas:</h2>

  <section class="about-research-area" aria-labelledby="assembly-heading">
    <h3 id="assembly-heading">Directed particle assembly and patterning in polymer thin films</h3>
    <p>I investigate how spontaneous surface segregation, shear-induced alignment, and field-directed assembly can be used to control particle position and orientation and create anisotropic, gradient, and spatially organized structures.</p>
    <p class="related-projects">
      {% if page.research_project_links.enabled %}
      <a href="{{ page.research_project_links.assembly | relative_url }}"><em>Related research projects →</em></a>
      {% else %}
      <span class="future-project-link" data-future-href="{{ page.research_project_links.assembly | relative_url }}"><em>Related research projects →</em></span>
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
      <span class="future-project-link" data-future-href="{{ page.research_project_links.reliability | relative_url }}"><em>Related research projects →</em></span>
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
      <span class="future-project-link" data-future-href="{{ page.research_project_links.processing | relative_url }}"><em>Related research projects →</em></span>
      {% endif %}
    </p>
  </section>
</div>
