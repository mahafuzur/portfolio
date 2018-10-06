---
layout: post
title: "About base url"
image: "featured_image1.jpg"
author: "Mahafuzur Rahaman"
tags:
  - "html"
  - "base url"
categories:
  - "Snippets"
type: html
---

### নিচের কোড সিনিপিট হেড সেকশানে যোগ করতে হবে । এখানে `resource/` এর বদলে আপনার সাইটের  `resource url` হবে।

<!--more-->


```html
<head>
	<base href="resource/" target="_blank">
</head>
```

### এখন নিজের মনমত সাইটের যে কোন যায়গায সরাসরি সাইটের বেস `url` ছারাই লিংক এড্রেস দেয়া যাবে,

```html
<body>
	<div class="container">
		<img src="html.png" width="25" height="25" alt="html-tag">
		<a href="http://www.w3schools.com">W3Schools</a>
	</div>
</body>
```
