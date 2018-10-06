---
layout: post
title: "Meta Tag to Prevent Search Engine Bots"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "indexing"
  - "meta tag"
categories:
  - "Snippets"
type: html  
---

### To prevent all search bots from indexing a page:

<!--more-->


```html
<meta name="robots" content="noindex">
```

### To prevent just Google:

```html
<meta name="googlebot" content="noindex">
```

### If you have control over it, you probably want to add nofollow to links that point to that page as well:

```html
<a href="privatepage.html" rel="nofollow">Link to private page</a>
```

Theoretically that's not needed for Google, which claims to drop all pages with noindex from their directory. But there are more search engines out there and it doesn't hurt.

Also, you might want to add a robots.txt to prevent the bots from indexing your directories, it might look like this:

```html
User-agent: *
Disallow: /
```

which would prevent all bots from indexing; of course you can also only block certain bots by their user agent; google it :-)

[Reference](html://www.css-tricks.com)
