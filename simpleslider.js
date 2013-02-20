/*
  SimpleSlider by JaL Productions
  http://jalproductions.co.uk/
*/

function simpleslider(ssH) {
    // Setup variables
    var ss              = document.getElementById("simpleslider"),
        ssWrapper       = document.getElementById("ss__wrapper"),
        ssControls      = document.getElementById("ss__controls"),
        ssPrev          = document.getElementById("ss__prev"),
        ssNext          = document.getElementById("ss__next"),
        ssDots          = document.getElementById("ss__dots"),
        ssImages        = ssWrapper.getElementsByTagName("img"),
        ssFrames        = ssImages.length,
        ssHeight        = ssH,
        ssCurrentFrame  = 0,
        ssDotsWidth     = (ssFrames * 5) + ((ssFrames - 1) * 10);

    // Set dimensions
    ss.style.height = ssHeight + 25 + "px";
    ssWrapper.style.height = ssHeight + "px";
    ssControls.style.height = ssHeight + "px";
    ssDots.style.width = ssDotsWidth + "px";

    // Generate navigation dots
    for(i = 0; i < ssFrames; i++) {
        var ssDot = document.createElement("div");
        ssDot.className = "ss__dot" + " ss__frame" + [i];
        ssDots.appendChild(ssDot);
    }

    ssAllDots = ssDots.getElementsByTagName("div");

    // Add current class to frame
    function addCurrent(n) {
        ssImages[n].className = "current";
        ssAllDots[n].className += " current";
    }

    // Clear all current classes
    function clearCurrent() {
        for(i = 0; i < ssFrames; i++) {
            ssImages[i].className = "";
            ssAllDots[i].className = ssAllDots[i].className.replace(/ current/, "");
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
    ssPrev.addEventListener('click', clickPrev, false);
    ssNext.addEventListener('click', clickNext, false);

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
    for(i = 0; i < ssFrames; i++) {
        ssAllDots[i].addEventListener('click', clickDots, false);
    }

    function clickDots(e) {
        var dotClicked = e.target.className;
        var n = dotClicked.match(/\d/);
        clearCurrent();
        goToFrame(n[0]);
        addCurrent(n[0]);
    }
};