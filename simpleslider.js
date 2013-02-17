(function(){
    // Setup variables
    var ss              = document.getElementById("simpleslider"),
        ssWrapper       = document.getElementById("ss__wrapper"),
        ssControls      = document.getElementById("ss__controls"),
        ssImages        = ss.getElementsByTagName("img"),
        ssFrames        = ssImages.length,
        ssHeight        = 530,
        ssCurrentFrame  = 0;

    // Set outer dimensions
    ss.style.height = ssHeight + 25 + "px";
    ssWrapper.style.height = ssHeight + "px";

    // Current class functions
    console.log(ssImages);
    ssImages[0].className = "current";

    function clearCurrent() {
        for(i = 0; i < ssFrames; i++) {
            ssImages[i].className = "";
        }
    }


})();