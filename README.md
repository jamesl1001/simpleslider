SimpleSlider v1.3
=================

A vanilla Javascript and CSS3 slider.


About
-----

SimpleSlider is a responsive slider script written using pure Javascript (no libraries).

The images will scale to completely fill the wrapper leaving no whitespace, similar to `background-size:cover`

All animations are done using CSS3, which means to see the beautiful transitions you'll have to be using a modern browser, but it will still gracefully degrade for older browsers.

The project is open source; use the [issue tracker](https://github.com/jamesl1001/simpleslider/issues) to submit bugs or change requests.

I would love to know if you're using SimpleSlider. Contact me and I'll feature your site.

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US" title="SimpleSlider by JaL Productions is licensed under a Creative Commons Attribution 3.0 Unported License"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a>


Browser support
---------------

- Chrome 24+
- Firefox 18+
- Opera 20+
- Safari 5.1.7
- IE7+


How to use
----------

**If you are comfortable adding images in HTML, you can use this method:**

1 - Set up your markup and add your images. Any `<img>` tags you add within `<div id="ss__wrapper">` will become part of the slider.
```html
<div id="simpleslider">
	<div id="ss__wrapper">
		<img src="img/image1.jpg" alt="An orange image" class="current"/>
		<img src="img/image2.jpg" alt="A larger image with a different proportion to ss"/>
		<img src="img/image3.jpg" alt="A portrait image"/>
	</div>
	<div id="ss__controls">
		<div id="ss__prev"><div id="ss__prevChev"></div></div>
		<div id="ss__next"><div id="ss__nextChev"></div></div>
		<div id="ss__dots"></div>
	</div>
</div>
```

2 - Link to `simpleslider.css` in the `<head>` tag:
```html
<link rel="stylesheet" type="text/css" href="simpleslider.css"/>
```

3 - Include `simpleslider.js` just before the `</body>` tag:
```html
<script src="simpleslider.js"></script>
```

4 - SimpleSlider's dimensions are set using a width:height ratio. The width will always be 100% of its parent container.

5 - Initiate SimpleSlider and pass through the width:height ratio as the parameter:
```html
<script>
	simpleslider('16:9');
</script>
```

**SimpleSlider can also load a set number of images from a specified directory, without having to specify them in the HTML:**

1 - Set up your markup, this time leaving the `ss__wrapper` container empty:
```html
<div id="simpleslider">
	<div id="ss__wrapper"></div>
	<div id="ss__controls">
		<div id="ss__prev"><div id="ss__prevChev"></div></div>
		<div id="ss__next"><div id="ss__nextChev"></div></div>
		<div id="ss__dots"></div>
	</div>
</div>
```

2 - Link to `simpleslider.css` in the `<head>` tag:
```html
<link rel="stylesheet" type="text/css" href="simpleslider.css"/>
```

3 - Include `simpleslider.js` just before the `</body>` tag:
```html
<script src="simpleslider.js"></script>
```

4 - SimpleSlider's dimensions are set using a width:height ratio. The width will always be 100% of its parent container.

5 - Initiate SimpleSlider. Pass SimpleSlider the *width:height ratio*, *how many images* to load, the *directory* in which they belong and the filename prefix:
```html
<script>
	simpleslider('16:9', 3, "img/directory", "prefix");
</script>
```
