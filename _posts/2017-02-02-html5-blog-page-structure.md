---
layout: post
title: "html5-blog-page-structure"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "blog"
categories:
  - "Snippets"
type: html  
---

### এইচটি এম এল ৫ এর ব্লগ এর মার্কআপ ।


<!--more-->


```html
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="handheldfriendly" content="true">
	<meta name="mobileoptimized" content="240">
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Your Website title</title>
</head>

<body>

	<header>
		<nav>
			<ul>
				<li>Your menu</li>
			</ul>
		</nav>
	</header>

	<section>

		<article>
			<header>
				<h2>Article title</h2>
				<p>Posted on <time datetime="2017-02-04">February 4, 2017</time> by <a href="#">Author</a> - <a href="#comments">6 comments</a></p>
			</header>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</article>

		<article>
			<header>
				<h2>Article title</h2>
				<p>Posted on <time datetime="2017-02-04">February 4, 2017</time> by <a href="#">Author</a> - <a href="#comments">6 comments</a></p>
			</header>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</article>

	</section>

	<aside>
		<h2>About section</h2>
		<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</aside>

	<footer>
		<p>Copyright 2017 Your name</p>
	</footer>

</body>

</html>
```
