---
layout: english
title: Research
permalink: /en/research/
---

<h1>Recent Research</h1>

<ul>
{% for post in site.categories.research %}
  <li>
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <br>
    <br>
  </li>
{% endfor %}
</ul>