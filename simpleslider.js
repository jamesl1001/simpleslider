/*
  SimpleSlider v0.8 by JaL Productions
  http://jalproductions.co.uk/
  https://github.com/jamesl1001/simpleslider
*/

function simpleslider(ssR, ssF, ssD, ssP) {
    // Setup variables
    var ss              = document.getElementById('simpleslider'),
        ssWrapper       = document.getElementById('ss__wrapper'),
        ssControls      = document.getElementById('ss__controls'),
        ssPrev          = document.getElementById('ss__prev'),
        ssNext          = document.getElementById('ss__next'),
        ssDots          = document.getElementById('ss__dots'),
        ssImages        = ssWrapper.getElementsByTagName('img'),
        ssFrames        = ssF || ssImages.length,
        ssRatio         = ssR,
        ssDirectory     = ssD,
        ssPrefix        = ssP,
        ssCurrentFrame  = 0,
        ssDotsWidth     = ssFrames * 15;

    // Calculate aspect ratio
    var ssRatioSplit      = ssRatio.split(':');
    var ssRatioPercentage = ssRatioSplit[1] / ssRatioSplit[0] * 100;

    // Set dimensions
    ss.style.paddingBottom = ssWrapper.style.paddingBottom = ssRatioPercentage + '%';
    ssDots.style.width     = ssDotsWidth + 'px';

    // Get pixel dimensions
    var ssWidth  = ssWrapper.offsetWidth;
    var ssHeight = ssWrapper.offsetHeight;

    // Generate navigation dots
    for(var i = 0; i < ssFrames; i++) {
        var ssDot = document.createElement('div');
        ssDot.className = 'ss__dot' + ' ss__frame' + [i];
        ssDots.appendChild(ssDot);
    }

    ssAllDots = ssDots.getElementsByTagName('div');

    // Create img elements if they don't already exist on the DOM
    if(ssImages.length == 0) {
        for(var i = 1; i <= ssFrames; i++) {
            var ssImg = new Image();
            ssImg.src = ssD + '/' + ssP + i + '.jpg'; // 'img/directory/prefix1.jpg'
            ssWrapper.innerHTML += ssImg.outerHTML;
        }
        ssImages = ssWrapper.getElementsByTagName('img');
    }

    for(var i = 0, l = ssImages.length; i < l; i++) {
        if(window.addEventListener) {
            ssImages[i].addEventListener('load', function() { ssImgLoaded(this) });
        } else if(window.attachEvent) {
            ssImages[i].attachEvent('onload', function() { ssImgLoaded(this) });
        }
    }

    function ssImgLoaded(imgElem) {
        var img = new Image();
        img.src = imgElem.src;

        if(img.width < ssWidth) {
            imgElem.className += ' full-width';
        } else if(img.height < ssHeight) {
            imgElem.className += ' full-height';
        } else {
            imgElem.className += ' full-width';
        }
    }

    // Add current class to first frame
    function addCurrent(n) {
        ssImages[n].className += ' current';
        ssAllDots[n].className += ' current';
    }

    // Clear all current classes
    function clearCurrent() {
        for(var i = 0; i < ssFrames; i++) {
            ssImages[i].className = ssImages[i].className.replace(/ current/, '');
            ssAllDots[i].className = ssAllDots[i].className.replace(/ current/, '');
        }
    }

    // Update current frame
    function goToFrame(n) {
        if(n >= ssFrames) {
            ssCurrentFrame = 0;
        } else if(n < 0) {
            ssCurrentFrame = ssFrames - 1;
        } else {
            ssCurrentFrame = n;
        }
    }

    // Always initialise first image as .current
    addCurrent(0);

    // Next and Previous click handlers
    if(window.addEventListener) {
        ssPrev.addEventListener('click', clickPrev, false);
        ssNext.addEventListener('click', clickNext, false);
    } else if(window.attachEvent) {
        ssPrev.attachEvent('onclick', clickPrev);
        ssNext.attachEvent('onclick', clickNext);
    }

    function clickPrev() {
        clearCurrent();
        goToFrame(ssCurrentFrame - 1);
        addCurrent(ssCurrentFrame);
    }

    function clickNext() {
        clearCurrent();
        goToFrame(ssCurrentFrame + 1);
        addCurrent(ssCurrentFrame);
    }

    // Navigation dots click handlers
    for(var i = 0; i < ssFrames; i++) {
        if(window.addEventListener) {
            ssAllDots[i].addEventListener('click', clickDots, false);
        } else if(window.attachEvent) {
            ssAllDots[i].attachEvent('onclick', clickDots);
        }
    }

    function clickDots(e) {
        if(e.target) {
            var dotClicked = e.target.className;
        } else if(e.srcElement) {
            var dotClicked = e.srcElement.className;
        }
        var n = dotClicked.match(/\d/);
        clearCurrent();
        goToFrame(n[0]);
        addCurrent(n[0]);
    }

    document.onkeydown = function(e) {
        evt = e || window.event;
        switch(evt.keyCode) {
            case 37:
                clickPrev();
                break;
            case 39:
                clickNext();
                break;
        }
    };
}