---
layout: post
title: "All Elements of From Tag"
image: "featured_image1.jpg"
author: "Monir"
tags:
  - "html"
  - "from tag"
categories:
  - "Snippets"
type: html  
---

### ফরম ট্যগের সকল ইলিমেন্ট একসাথে।

<!--more-->


```html
<!--form action -->
		<form action="mailinglist.php" method="post" enctype="multipart/form-data">
			<fieldset>
				<legend>Join our email list</legend>
				<p>Get news about the band such as tour dates and special MP3
				releases sent to your own in-box.</p>				
<!--user name and email-->
				<ol>
					<li><label for="firstlast">Name:</label>
					<input type="text" name="username" id="firstlast"></li>
					<li><label for="email">Email:</label>
					<input type="text" name="email" id="email"></li>
					<li><label>City <input type="text"name="city" id="form-city" value="Your Hometown" maxlength="50"></label></li>
				</ol>			
<!--text area-->
				<p><label>Official contest entry <br>
				<em>Tell us why you love the band. Five winners will get backstage passes!</em><br>
				<textarea name="contest_entry" rows="5" cols="50">The band is totally awesome!</textarea></label></p>
				<p>Official contest entry:<br>
				<em>Tell us why you love the band. Five winners will get backstage passes!</em><br>
				<textarea name="contest_entry" placeholder="50 words or less"></textarea></p>			
<!--select option-->
				<p>What is your favorite 80s band?
				<select name="EightiesFave">
					<option>The Cure</option>
					<option>Cocteau Twins</option>
					<option>Tears for Fears</option>
					<option>Thompson Twins</option>
					<option value="EBTG">Everything But the Girl</option>
					<option>Depeche Mode</option>
					<option>The Smiths</option>
					<option>New Order</option>
				</select>
				</p>
				<p>What 80s bands did you listen to?
				<select name="EightiesBands" size="6" multiple>
					<option>The Cure</option>
					<option>Cocteau Twins</option>
					<option selected>Tears for Fears</option>
					<option selected>Thompson Twins</option>
					<option value="EBTG">Everything But the Girl</option>
					<option>Depeche Mode</option>
					<option>The Smiths</option>
					<option>New Order</option>
				</select>
				</p>
				<select name="icecream" size="7" multiple>
					<optgroup label="traditional">
					<option>vanilla</option>
					<option>chocolate</option>
					</optgroup>
					<optgroup label="fancy">
					<option>Super praline</option>
					<option>Nut surprise</option>
					<option>Candy corn</option>
					</optgroup>
				</select>			
<!--check box-->
				<p>What type of music do you listen to?</p>
				<ul>
				<li><input type="checkbox" name="genre"value="punk" checked> Punk
				rock</li>
				<li><input type="checkbox" name="genre"value="indie" checked> Indie
				rock</li>
				<li><input type="checkbox" name="genre"value="hiphop"> Hip Hop</li>
				<li><input type="checkbox" name="genre"value="rockabilly">
				Rockabilly</li>
				</ul>			
<!--single check box-->
				<p><input type="checkbox" name="OptIn" value="yes">Yes, send me news
				and special promotions by email.</p>
<!--upload file-->
				<label>Send a photo to be used as your online icon
				<em>(optional)</em><br>
				<input type="file" name="photo" size="28"><label>			
<!--radio button-->
				<p>How old are you?</p>
				<ol>
				<li><input type="radio" name="age"value="under24" checked> under
				24</li>
				<li><input type="radio" name="age"value="25-34"> 25 to 34</li>
				<li><input type="radio" name="age"value="35-44"> 35 to 44</li>
				<li><input type="radio" name="age"value="over45"> 45+</li>
				</ol>			
<!--form processing button-->
				<p><input type="submit" value="submit"></p><p><input type="reset" value="Start over"></p>
			</fieldset>
		</form>		
		<form>
			<fieldset>
				<legend>Date</legend>			
<!--date time month-->
				<input type="date"name="name" value="2004-01-14">
				<input type="time"name="name" value="03:13:00">
				<input type="datetime"name="name" value="2004-01-14T03:13:00-5:00">
				<input type="datetime-local"name="name" value="2004-01-14T03:13:00">
				<input type="month"name="name" value="2004-01">
				<input type="week"name="name" value="2004-W2">
			</fieldset>
			<fieldset>
<!--color input-->
				<legend>color</legend>
				<label>Your favorite color <input type="color"name="favorite"></label><br>
<!--progress bar-->
				<p>Percent downloaded:<progress max="100" name="fave">0</progress></p><br>
				<meter min="0" max="100" name="download">50%</meter>
			</fieldset>
		</form>
	</body>
</html>
```
