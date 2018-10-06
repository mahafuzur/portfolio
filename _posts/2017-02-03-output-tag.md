---
layout: post
title: "Output tag in use"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "output tag"
categories:
  - "Snippets"
type: html  
---

### নিচে দেখানো হল কিভাবে `output` ট্যাগ ব্যবহার হয়।

<!--more-->


```html
<div class="container">
	<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
	<input type="range" id="a" value="50">100
	+<input type="number" id="b" value="50">
	=<output name="x" for="a b"></output>
	</form>
</div>
```

[Source](www.css-tricks.com)
