---
layout: post
title: "Add Body Class Just For IE"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "body class"
  - "ie"
categories:
  - "Snippets"
type: html  
---

### নিচের কোড ইন্টারনেট ইক্সোপোলারের যেকোন ভারসনের ক্ষেত্রে বডিতে `ie` ক্লাশ যুক্ত করবে।

<!--more-->


```html
<!--[if IE ]>
   <body class="ie">
<![endif]-->
<!--[if !IE]>-->
   <body>
<!--<![endif]-->
```

### নিচের কোড সিনিপিট টুকু ইন্টারনেট ইক্সোপোলারের সেপিসিপিক ভারসনের ক্ষেত্রে বডিতে সেপিসিপিক ক্লাশ যুক্ত করবে।

```html
<!DOCTYPE html>
<!--[if IEMobile 7 ]> <html dir="ltr" lang="en-US" class="no-js iem7"> <![endif]-->
<!--[if lt IE 7 ]> <html dir="ltr" lang="en-US" class="no-js ie6 oldie"> <![endif]-->
<!--[if IE 7 ]>    <html dir="ltr" lang="en-US" class="no-js ie7 oldie"> <![endif]-->
<!--[if IE 8 ]>    <html dir="ltr" lang="en-US" class="no-js ie8 oldie"> <![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html dir="ltr" lang="en-US" class="no-js"><!--<![endif]-->
```

### এখন আপনি চাইলে এই সকল ক্লাস ব্যবহার করে সি এস এস এর মাধ্যমে আলাদা স্টাইল দিতে পারেন ।

```css
.ie6 .header{
	background: #333;
}
```
