SimpleSlider v0.4
=================
http://jalproductions.co.uk/projects/simpleslider/

A vanilla Javascript and CSS3 slider.


About
-----

SimpleSlider is a slideshow script written using pure Javascript (no libraries).

All animations are done using CSS3, which means to see the beautiful fades and slides you'll have to be using a modern browser, but it will still gracefully degrade for older browsers.

The project is open source; I accept suggested change requests.

Anyone is free to use and modify it as they wish, however I would love to know if you do use it; contact me through my website.

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US" title="SimpleSlider by JaL Productions is licensed under a Creative Commons Attribution 3.0 Unported License"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a>


Browser support
---------------

- Chrome 24
- Firefox 18
- Safari 5.1.7
- IE7+


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
