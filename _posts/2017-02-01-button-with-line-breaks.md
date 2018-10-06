---
layout: post
title: "Button with line breaks"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "line breaks"
categories:
  - "Snippets"
type: html  
---


### কেরিজ রির্টান `&#x00A` দ্বারা লাইনে ব্রেক করা যায়।

<!--more-->



```html
<!--without carriage return-->
<input type="button" value="Really Tall& Button">
<!--using carriage return-->
<input type="button" value="Really&#x00A;Tall&#x00A;Button">
```
