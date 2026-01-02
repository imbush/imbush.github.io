---
layout: gallery
title: photos
no_menu_item: true # required only for this example website because of menu construction
support: [jquery, gallery]
permalink: /photography/
nav: true
nav_order: 2
---
{% include gallery-layout.html gallery=site.data.galleries.macro %}