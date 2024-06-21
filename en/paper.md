---
layout: english
title: Paper
permalink: /en/paper/
---

<h1>Recent Papers</h1>

<ul>
{% for post in site.categories.paper %}
  <li>
    <a href="{{ post.research_gate_link }}" target="_blank">{{ post.title }}</a> [<a href="{{ post.pdf_link }}" target="_blank">PDF</a>]
    <br>
    <p style="font-size: 0.9em;">{{ post.abstract }}</p>
  </li>
{% endfor %}
</ul>
