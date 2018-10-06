---
layout: post
title: "Empty Table Markup"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "table tag"
categories:
  - "Snippets"
type: html  
---

### নিচের মার্কআপটি একটি খালি টেবিলের মার্কআপ, দ্রুত ব্যবহারের জন্যে।

<!--more-->


```html
<table>
	<thead>
		<tr>
			<th>A</th>
			<th>B</th>
			<th>C</th>
		</tr>
	</thead>
		<!-- optional -->
	<tfoot>
		<tr>
			<td>4</td>
			<td>d</td>
			<td>iv</td>
		</tr>
		<tr>
			<td>5</td>
			<td>e</td>
			<td>v</td>
		</tr>
		<tr>
			<td>6</td>
			<td>f</td>
			<td>vi</td>
		</tr>		
	</tfoot>

	<tbody>
		<tr>
			<td>1</td>
			<td>a</td>
			<td>i</td>
		</tr>
		<tr>
			<td>2</td>
			<td>b</td>
			<td>ii</td>
		</tr>
		<tr>
			<td>3</td>
			<td>c</td>
			<td>iii</td>
		</tr>
	</tbody>
</table>
```


## নিচের মার্কআপটি একটি টেবিলের মার্কআপ `colspan/rowspan` সহ ।

```html
<table>
	<thead>
		<tr>
			<th>Date</th>
			<th>Income</th>
			<th>Expenditure</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<th>Total</th>
			<td>1241</td>
			<td>1241</td>
		</tr>
	</tfoot>
	<tbody>
		<tr>
			<th>1st January</th>
			<td>250</td>
			<td>36</td>
		</tr>
		<tr>
			<th>2nd January</th>
			<td colspan="2">285</td>
		</tr>
		<tr>
			<th>6pm - 7pm</th>
			<td rowspan="2">Movie</td>
			<td>Comedy</td>
		</tr>
	<!-- additional rows as above -->
		<tr>
			<th>31st January</th>
			<td>129</td>
		</tr>
	</tbody>
</table>
```
