---
layout: post
title: "Mailto Links"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "mailto tag"
categories:
  - "Snippets"
type: html  
---


### ডিফল্ট মেইল পেগ্রামে নতুন মেইল ওপেন হবে এবং `To` ফিল্ড পূরন করা থাকবে।


<!--more-->


```html
<a href="mailto:someone@yoursite.com">Email Us</a>  
```

### ডিফল্ট মেইল পেগ্রামে নতুন মেইল ওপেন হবে এবং `To, Subject` ফিল্ড পূরন করা থাকবে।

```html
<a href="mailto:someone@yoursite.com?subject=Mail%20from%20Our%20Site">Email Us</a>
```

### ডিফল্ট মেইল পেগ্রামে নতুন মেইল ওপেন হবে এবং `To, Subject,cc, Bcc` ফিল্ড পূরন করা থাকবে।

```html
<a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com,another@thatsite.com,me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News">Email Us</a>
```

### ডিফল্ট মেইল পেগ্রামে নতুন মেইল ওপেন হবে এবং `To, Subject,cc, Bcc, body` ফিল্ড পূরন করা থাকবে।

```html
<a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com,another@thatsite.com,me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>
```

[Reference](href=http://hivelogic.com/enkoder)
