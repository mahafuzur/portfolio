---
layout: post
title: "Html 5 video tag"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "video tag"
categories:
  - "Snippets"
type: html  
---

<!--more-->


### নিচের কোডটুকু সাইটে ভিডিও যোগ করতে ব্যবহার হয়।

```html
<video width="320" height="240" controls poster="placeholder.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```
