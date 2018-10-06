---
layout: post
title: "Ready to use Form Markup"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "form tag"
categories:
  - "Snippets"
type: html  
---

### নিচে একটি সম্পূর্ন `form` ট্যাগের মার্কআপ দেখানো হল।

<!--more-->


```html
<form id="myForm" action="#" method="post">
	<fieldset>
		<legend>Form Markup</legend>
			<ul>
				<li>
					<strong>User Personal Info</strong>
					<ul class="user_info">
						<li><label for="username">Name:</label>
						<input type="text" name="username" id="username" placeholder="Jone Done" tabindex="1"></li>
						<li><label for="email">Email:</label>
						<input type="email" name="email" id="email" placeholder="example@domain.com" tabindex="2"></li>
						<li><label for="textarea">Textarea:</label>
						<textarea cols="40" rows="8" name="textarea" id="textarea" tabindex="3"></textarea></li>			
					</ul>
				</li>
				<li>
					<strong>User Choice</strong>
					<ul class="radio">
						<li>
							<input type="radio" name="choice-1" value="Choice-1" checked tabindex="4" id="choice-1">
							<label for="choice-1">Choice-1</label>
						</li>
 						<li>
							<input type="radio" name="choice-1" value="Choice-1" tabindex="5" id="choice-2">
							<label for="choice-2">Choice-2</label>
						</li> 			
					</ul>				
					<ul class="checkbox">
						<li>
							<input type="checkbox" name="checkbox" value="one" id="checkbox-1" checked tabindex="6"><label for="checkbox-1">Checkbox-1</label>
						</li>
						<li>
							<input type="checkbox" name="checkbox" value="two" id="checkbox-2" tabindex="7"><label for="checkbox-2">Checkbox-2</label>
						</li>
						<li>
							<input type="checkbox" name="checkbox" value="three" id="checkbox-3" tabindex="8"><label for="checkbox-3">Checkbox-3</label>
						</li>
					</ul>
					<ul class="select">
						<li>
							<label for="select-choice">Select Dropdown Choice:</label>
							<select name="select-choice" id="select-choice">
								<option value="Choice 1">Choice 1</option>
								<option value="Choice 2">Choice 2</option>
								<option value="Choice 3">Choice 3</option>
							</select>
						</li>
					</ul>
					<ul class="fileUpload">
						<li>
							<label>Send a photo to be used as your online icon
							<em>(optional)</em><br>
							<input type="file" name="photo" size="28">
							<label>
						</li>
					</ul>
					<ul class="date">
						<li><input type="date" name="name" value="2004-01-14"></li>
						<li><input type="time" name="name" value="03:13:00"></li>
						<li><input type="datetime" name="name" value="2004-01-14T03:13:00-5:00"></li>
						<li><input type="datetime-local" name="name" value="2004-01-14T03:13:00"></li>
						<li><input type="month" name="name" value="2004-01"></li>
						<li><input type="week" name="name" value="2004-W2"></li>
					</ul>
					<ul class="color">
						<li><label for="color">color : <input type="color" name="color" id="color"></li></label>
					</ul>
					<ul class="progressbar">
						<li><progress max="100" value="22" name="fave">0</progress></li>
						<li><meter min="0" max="100" name="download" value="30">50%</meter></li>
					</ul>
				</li>
			</ul>			
	</fieldset>
</form>
```

[Source](www.css-tricks.com)
