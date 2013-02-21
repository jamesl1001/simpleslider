SimpleSlider v0.3
=================
http://jalproductions.co.uk/projects/simpleslider/

A vanilla Javascript and CSS3 slider.

About
-----

SimpleSlider is a slideshow script written using pure Javascript (no libraries).

All animations are done using CSS3, which means to see the beautiful fades and slides you'll have to be using a modern browser, but it will still fall back to appearing and disappearing for older browsers (not IE yet).

The project is open source; I accept suggested change requests.

Anyone is free to use and modify it as they wish, however I would love to know if you do use it; contact me through my website.

How to use
----------

1. Set up your markup:
```html
	<div id="simpleslider">
		<div id="ss__wrapper">
			
		</div>
		<div id="ss__controls">
			<div id="ss__prev"><div id="ss__prevChev"></div></div>
			<div id="ss__next"><div id="ss__nextChev"></div></div>
			<div id="ss__dots"></div>
		</div>
	</div>
```

2. Link to ```simpleslider.css``` in the ```<head>``` tag:
```html
	<link rel="stylesheet" type="text/css" href="simpleslider.css" />
```

3. Include ```simpleslider.js``` just before the ```</body>``` tag:
```html
    <script src="simpleslider.js"></script>
```

4. Add your images! Any ```<img>``` tags you add within ```<div id="ss__wrapper">``` will become part of the slideshow.

5. Set up the width. SimpleSlider uses the width of the parent container of ```#simpleslider``` for its width. In this example, I use ```.center { width: 1000px; };```.

6. Initiate SimpleSlider and pass through the height as the parameter:
```html
	<script>
		simpleslider(530);
	</script>
```
