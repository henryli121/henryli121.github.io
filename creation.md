---
layout: page
title: "创作"
permalink: /create/
---

<h1>最近的创作</h1>

<ul>
{% for post in site.categories.create %}
  <li>
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <br>
    <br>
  </li>
{% endfor %}
</ul>