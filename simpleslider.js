(function(){
    // Setup variables
    var ss              = document.getElementById("simpleslider"),
        ssWrapper       = document.getElementById("ss__wrapper"),
        ssControls      = document.getElementById("ss__controls"),
        ssPrev          = document.getElementById("ss__prev"),
        ssNext          = document.getElementById("ss__next"),
        ssImages        = ss.getElementsByTagName("img"),
        ssFrames        = ssImages.length,
        ssHeight        = 530,
        ssCurrentFrame  = 0;

    // Set outer dimensions
    ss.style.height = ssHeight + 25 + "px";
    ssWrapper.style.height = ssHeight + "px";

    // Current class functions
    function addCurrent(n) {
        ssImages[n].className = "current";
    }

    function clearCurrent() {
        for(i = 0; i < ssFrames; i++) {
            ssImages[i].className = "";
        }
    }

    function updateCurrentFrame(direction) {
        if(direction) {
            ssCurrentFrame++;
        } else {
            ssCurrentFrame--;
        }

        if(ssCurrentFrame >= ssFrames) {
            ssCurrentFrame = 0;
        } else if(ssCurrentFrame < 0) {
            ssCurrentFrame = ssFrames - 1;
        }

        console.log(ssCurrentFrame);
    }

    // Always initialise first image as .current
    addCurrent(0);

    // Next and Previous click handlers
    ssPrev.addEventListener('click', clickPrev, false);
    ssNext.addEventListener('click', clickNext, false);

    function clickPrev() {
        clearCurrent();
        updateCurrentFrame(0);
        addCurrent(ssCurrentFrame);
    }

    function clickNext() {
        clearCurrent();
        updateCurrentFrame(1);
        addCurrent(ssCurrentFrame);
    }
})();