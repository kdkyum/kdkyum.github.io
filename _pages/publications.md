---
layout: page
permalink: /publications/
title: publications
description: Publications grouped by research topic or year.
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020]
topics:
  - slug: neuroscience
    label: AI + Neuroscience
  - slug: physics
    label: AI + Physics
  - slug: interpretability
    label: AI Interpretability
publication_views: true
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->
<div class="publications publication-views" data-publication-views>
  <div class="publication-view-controls">
    <span id="publication-view-label" class="publication-view-label">View by</span>
    <div class="publication-view-buttons" role="group" aria-labelledby="publication-view-label">
      <button
        type="button"
        class="publication-view-button active"
        data-publication-view-button="topic"
        aria-controls="publications-by-topic"
        aria-pressed="true"
      >Topic</button>
      <button
        type="button"
        class="publication-view-button"
        data-publication-view-button="year"
        aria-controls="publications-by-year"
        aria-pressed="false"
      >Year</button>
    </div>
  </div>

  <section
    id="publications-by-topic"
    class="publication-panel"
    data-publication-view-panel="topic"
    aria-label="Publications by topic"
  >
  {%- for topic in page.topics %}
    <h2 class="topic">{{ topic.label }}</h2>
    {% bibliography -f papers -q @*[topic={{topic.slug}}]* %}
  {% endfor %}
  </section>

  <section
    id="publications-by-year"
    class="publication-panel"
    data-publication-view-panel="year"
    aria-label="Publications by year"
    hidden
  >
  {%- for y in page.years %}
    <h2 class="year">{{ y }}</h2>
    {% bibliography -f papers -q @*[year={{y}}]* --template bib_year %}
  {% endfor %}
  </section>
</div>
