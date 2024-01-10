---
layout: about
title: about
permalink: /
subtitle: Postdoc @ <a href="https://ds.ibs.re.kr">IBS Data Science Group</a>

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  address: 

news: false  # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false  # includes social icons at the bottom of the page
years: [2024, 2023, 2022, 2021, 2020]
---

I am a postdoctoral researcher at the Institute for Basic Science (IBS). I completed my Ph.D. in Physics at KAIST, where I focused on AI applications in nonequilibrium physics. My research interests lie at the intersection of AI, complex systems, and nonequilibrium physics, with a particular focus on deep learning approaches.

I am passionate about using interdisciplinary approaches to gain a better understanding of how AI algorithms function and how we can improve their performance. To this end, I am currently exploring the use of neuroscience methods to gain insight into the behavior and performance of deep learning algorithms. I believe that this approach, known as brain-inspired AI, has the potential to lead to significant advances in the field of AI.

For more information, check out my [publications](https://kdkyum.github.io/publications/) and [CV](https://kdkyum.github.io/assets/pdf/CV_DKK.pdf). I am always open to discussing my research and potential collaboration opportunities.

<!-- I am a physicist passionate about AI and did my PhD in physics at KAIST, Korea. Under professor [Hawoong Jeong](https://stat.kaist.ac.kr/~hjeong/)'s supervision, I worked on applications of ML in complex systems and statistical physics. My current research focus is understanding highly complex nonequilibrium systems, such as biological systems, active matter, and others in nature, through stochastic thermodynamics with ML-based approaches. -->

<div class="clearfix">
</div>

<div class="publications">
<h2>publications</h2>
{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>