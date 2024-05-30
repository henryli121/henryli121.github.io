---
layout: page
title: "博客"
permalink: /blog/
---

<h1>最近的博客</h1>

<ul>
{% for post in site.categories.blog %}
  <li>
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <br>
    <br>
  </li>
{% endfor %}
</ul>