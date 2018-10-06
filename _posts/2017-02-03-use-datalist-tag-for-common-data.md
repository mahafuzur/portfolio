---
layout: post
title: "Use datalist tag for common data"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "datalist tag"
categories:
  - "Snippets"
type: html  
---

### কমন ডাটার ক্ষেত্রে ট্যাগ ব্যবহার করা যায়।


<!--more-->


```html
<div class="container">
	<input list="browsers">

	<datalist id="browsers">
		<option value="Internet Explorer">
		<option value="Firefox">
		<option value="Chrome">
		<option value="Opera">
		<option value="Safari">
	</datalist>
</div>
```
