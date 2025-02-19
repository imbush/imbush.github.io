---
layout: gallery
title: photos
no_menu_item: true # required only for this example website because of menu construction
support: [jquery, gallery]
permalink: /macro/
nav: true
nav_order: 1
---

{% include gallery-layout.html gallery=site.data.galleries.macro %}
