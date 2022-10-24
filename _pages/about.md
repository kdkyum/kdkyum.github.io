---
layout: about
title: Dong-Kyum Kim
permalink: /
subtitle: Postdoc @ <a href="https://ds.ibs.re.kr">IBS Data Science Group</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  address: >
    <p>B231, IBS Theory Building</p>
    <p>Expo-ro 55, Yuseong-gu</p>
    <p>Daejeon, Korea, 34126</p>

news: flase  # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
years: [2022, 2021, 2020]
---

I am a physicist passionate about AI and did my PhD in physics at KAIST, Korea. Under professor Hawoong Jeong's supervision, I worked on applications of ML in complex systems and statistical physics. My current research focus is understanding highly complex nonequilibrium systems, such as biological systems, active matter, and others in nature, through stochastic thermodynamics with ML-based approaches.

<!-- 
Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them. -->

<div class="clearfix">
  {{ content }}
</div>

<div class="publications">
<h2>selected publications</h2>
{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>