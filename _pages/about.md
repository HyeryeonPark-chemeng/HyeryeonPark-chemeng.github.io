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

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am a Master's student in the Department of Chemical Engineering at Soongsil University.

<style>
  .research details {
    margin: 0.6rem 0;
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 6px;
  }
  .research summary {
    position: relative;
    padding: 0.6rem 6rem 0.6rem 0.9rem;
    cursor: pointer;
    list-style: none;
  }
  .research summary::-webkit-details-marker {
    display: none;
  }
  .research summary::before {
    content: "▸";
    display: inline-block;
    margin-right: 0.5rem;
    color: var(--global-theme-color);
    transition: transform 0.2s;
  }
  .research details[open] summary::before {
    transform: rotate(90deg);
  }
  .research summary::after {
    content: "Read more";
    position: absolute;
    top: 0.75rem;
    right: 0.9rem;
    font-size: 0.85em;
    color: var(--global-theme-color);
  }
  .research details[open] summary::after {
    content: "Show less";
  }
  .research summary .sub {
    display: block;
    padding-left: 1.1rem;
    color: var(--global-text-color-light);
  }
  .post > article > h2 {
    margin-top: 2.5rem;
  }
  .research summary:hover {
    background-color: var(--global-divider-color);
  }
  .research details > p {
    padding: 0 0.9rem 0.6rem;
    margin: 0;
  }
  @media (min-width: 576px) {
    .post > article > .profile {
      width: 26.25%;
    }
    .post > article > *:not(.profile) {
      margin-right: calc(26.25% + 3rem);
    }
    .post > article > h2:has(+ .publications),
    .post > article > .publications {
      margin-right: 0;
    }
  }
  .profile .more-info {
    font-size: 0.85rem;
  }
  .post > .post-header {
    padding-bottom: 0.75rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .post > article > p:first-of-type {
    margin-top: 0;
  }
  .publications .abbr {
    display: none;
  }
  .publications .col-sm-8 {
    flex: 0 0 100%;
    max-width: 100%;
  }
</style>

<!-- Research directions: copy one <details> block per topic.
<div class="research" markdown="1">

<details markdown="1">
<summary><b>Topic</b><span class="sub">one-line summary</span></summary>

Description.

</details>

</div>
-->
