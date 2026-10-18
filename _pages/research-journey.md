---
layout: page
permalink: /research-journey/
title: Research Journey
description: Why I chose a life in research.
nav: true
nav_order: 4
_styles: |
  .post:has(.research-journey) > .post-header { margin-bottom: 1.75rem; }
  .post:has(.research-journey) > .post-header .post-title { font-weight: 700; }
  .post:has(.research-journey) > .post-header .post-description { margin-top: 0.75rem; font-size: 1.05rem; line-height: 1.8; color: color-mix(in srgb, var(--global-text-color) 78%, var(--global-bg-color)); }
  .research-journey { --journey-muted: color-mix(in srgb, var(--global-text-color) 72%, var(--global-bg-color)); color: var(--global-text-color); }
  .research-journey .journey-intro, .research-journey .journey-copy { max-width: 72ch; }
  .research-journey .journey-intro { padding-bottom: 2.5rem; }
  .research-journey p { font-size: 1rem; line-height: 1.8; margin: 0 0 1.15rem; }
  .research-journey .journey-intro p:last-child, .research-journey .journey-copy > p:last-child { margin-bottom: 0; }
  .research-journey .journey-section { border-top: 1px solid var(--global-divider-color); padding-block: 2.75rem; scroll-margin-top: 6rem; }
  .research-journey .journey-section-number { display: block; font-size: 0.75rem; font-weight: 500; line-height: 1.5; letter-spacing: 0.12em; color: var(--journey-muted); margin-bottom: 0.6rem; }
  .research-journey h2 { font-size: 1.6rem; font-weight: 600; line-height: 1.35; margin: 0 0 1.25rem; }
  .research-journey .journey-figure { width: 100%; max-width: 26rem; margin: 1.75rem auto 0; }
  .research-journey .journey-figure img { display: block; width: 100%; height: auto; object-fit: contain; border-radius: 3px; }
  .research-journey .journey-photo-placeholder { display: flex; justify-content: center; align-items: center; aspect-ratio: 4 / 3; padding: 1rem; border: 1px solid var(--global-divider-color); border-radius: 3px; background: color-mix(in srgb, var(--global-text-color) 2%, var(--global-bg-color)); color: var(--journey-muted); font-size: 0.8rem; text-align: center; }
  .research-journey .journey-figure figcaption { color: var(--journey-muted); font-size: 0.8rem; line-height: 1.65; margin-top: 0.65rem; }
  .research-journey .journey-copy > .journey-quote { font-size: 1.1rem; font-weight: 500; line-height: 1.8; border-left: 2px solid var(--global-theme-color); padding: 0.1rem 0 0.1rem 1rem; margin-block: 1.5rem; }
  .research-journey .journey-links { display: flex; flex-wrap: wrap; gap: 0.75rem 1.75rem; margin-top: 1.5rem; }
  .research-journey .journey-links a { color: var(--global-text-color); font-size: 0.95rem; line-height: 1.6; text-decoration: underline; text-decoration-color: var(--global-divider-color); text-underline-offset: 0.25em; }
  .research-journey .journey-links a:hover { color: var(--global-theme-color); text-decoration-color: currentColor; }
  .research-journey a:focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 4px; }
  @media (min-width: 992px) {
    .research-journey .journey-section--split { display: grid; grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr); column-gap: 3rem; align-items: start; }
    .research-journey .journey-section--split .journey-figure { max-width: none; margin: 0; }
    .research-journey .journey-section--image-left { grid-template-columns: minmax(0, 1fr) minmax(0, 1.8fr); }
    .research-journey .journey-section--image-left .journey-copy { grid-column: 2; grid-row: 1; }
    .research-journey .journey-section--image-left .journey-figure { grid-column: 1; grid-row: 1; }
  }
  @media (max-width: 767px) {
    .research-journey .journey-intro { padding-bottom: 2rem; }
    .research-journey .journey-section { padding-block: 2rem; }
    .research-journey h2 { font-size: 1.4rem; }
    .research-journey .journey-links { gap: 0.75rem 1.25rem; }
  }
---

<div class="research-journey">
  <!-- Temporary prose throughout: replace paragraph text as the personal narrative is developed. -->
  <div class="journey-intro">
    <p>This page will trace the experiences and questions that shaped my decision to pursue research. The chapters below will connect those moments with the way I approach scientific work today.</p>
  </div>

  <section class="journey-section journey-section--split" aria-labelledby="seeing-research-heading">
    <div class="journey-copy">
      <span class="journey-section-number">01</span>
      <h2 id="seeing-research-heading">Seeing a Life in Research</h2>
      <p>This chapter will describe an early encounter with research. A personal recollection will set the scene and explain why that experience remained meaningful.</p>
      <p>The account will reflect on the people, questions, or everyday practices that made a life in research feel tangible.</p>
    </div>
    <figure class="journey-figure">
      <!-- Replace with a contextual photograph and specific alt text; retain the natural image aspect ratio. -->
      <div class="journey-photo-placeholder" role="img" aria-label="Photo placeholder: early academic or personal context"><span>Photo placeholder</span></div>
      <figcaption>Early academic / personal context — photograph to be added.</figcaption>
    </figure>
  </section>

  <section class="journey-section" aria-labelledby="known-answers-heading">
    <div class="journey-copy">
      <span class="journey-section-number">02</span>
      <h2 id="known-answers-heading">Beyond Known Answers</h2>
      <p>This chapter will explore the difference between learning an established answer and formulating a question that does not yet have one. A specific experience will give that distinction a personal context.</p>
      <p>The reflection will connect that experience with an evolving understanding of how scientific knowledge is developed.</p>
    </div>
  </section>

  <section class="journey-section journey-section--split journey-section--image-left" aria-labelledby="discovering-polymers-heading">
    <div class="journey-copy">
      <span class="journey-section-number">03</span>
      <h2 id="discovering-polymers-heading">Discovering Polymers</h2>
      <p>This chapter will introduce the experiences that brought polymer materials into focus. A course, laboratory encounter, or research question will provide the starting point for this part of the story.</p>
      <p>The narrative will explain what made this field compelling and how those interests began to take shape.</p>
    </div>
    <figure class="journey-figure">
      <!-- Future alt text should identify the actual undergraduate research setting and relevant activity. -->
      <div class="journey-photo-placeholder" role="img" aria-label="Photo placeholder: undergraduate research or laboratory context"><span>Photo placeholder</span></div>
      <figcaption>Undergraduate research / laboratory — photograph to be added.</figcaption>
    </figure>
  </section>

  <section class="journey-section" aria-labelledby="research-became-mine-heading">
    <div class="journey-copy">
      <span class="journey-section-number">04</span>
      <h2 id="research-became-mine-heading">When Research Became Mine</h2>
      <p>This chapter will focus on a moment of growing ownership of a research question. The account will describe the decisions, responsibilities, or observations that gave that moment its significance.</p>
      <p>The reflection will connect the experience with a more independent approach to scientific work.</p>
      <p class="journey-quote">A brief personal reflection on taking ownership of a research question will appear here.</p>
    </div>
  </section>

  <section class="journey-section journey-section--split" aria-labelledby="enjoying-uncertainty-heading">
    <div class="journey-copy">
      <span class="journey-section-number">05</span>
      <h2 id="enjoying-uncertainty-heading">Learning to Enjoy Uncertainty</h2>
      <p>This chapter will reflect on working with ambiguous observations and questions that take time to resolve. A concrete example will show how uncertainty became part of the research process.</p>
      <p>The narrative will consider how that experience shaped patience, judgment, and the willingness to revise an interpretation.</p>
    </div>
    <figure class="journey-figure">
      <!-- Future alt text should describe the actual master's research setting without inferring unseen details. -->
      <div class="journey-photo-placeholder" role="img" aria-label="Photo placeholder: master's research or laboratory context"><span>Photo placeholder</span></div>
      <figcaption>Master’s research / laboratory — photograph to be added.</figcaption>
    </figure>
  </section>

  <section class="journey-section" aria-labelledby="looking-forward-heading">
    <div class="journey-copy">
      <h2 id="looking-forward-heading">Looking Forward</h2>
      <p>A concluding reflection will bring these experiences together and connect them with the next stage of research. This space will express the questions, working habits, and aspirations that I hope to carry forward.</p>
      <div class="journey-links">
        <a href="{{ '/research/' | relative_url }}">Explore my research →</a>
        <a href="{{ '/cv/' | relative_url }}">View my CV →</a>
      </div>
    </div>
  </section>
</div>
