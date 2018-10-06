---
layout: post
title: "Basic Article Structure"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "article"
categories:
  - "Snippets"
type: html
---

### বেসিক আরটিকেল কোড সিনিপিট।

<!--more-->


```html
<article class="hentry">
  <header>
    <h1 class="entry-title">Heading of the post</h1>
    <time class="published_date" datetime="2010-08-07 11:11:03-0400" pubdate>08-07-2010</time>
    <p class="byline author">
        By <span class="fn">Author Name</span>
    </p>
  </header>

  <div class="entry-content">
      <p>...article text...</p>
      <p>...article text...</p>

      <figure class="post_image">
        <img src="post-image-url" alt="Post Iamage Title" />
        <figcaption>Caption of your image</figcaption>
      </figure>

      <p>...article text...</p>
      <p>...article text...</p>

      <aside>
        <h2>Share this Article</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Etc</li>
        </ul>
      </aside>

      <div class="entry-content-asset">
        <a href="photo-full.png">
          <img src="photo.png" alt="title" />
        </a>
      </div>

      <p>...article text...</p>
      <p>...article text...</p>

      <a class="entry-unrelated" href="http://www.example.com">Find More</a>
  </div>

  <footer>
    <p>
      A version of this article
    </p>
    <div class="copyright">
        Copyright 2017 <span class="your_class">Article Owner</span>
    </div>
  </footer>
</article>
```
