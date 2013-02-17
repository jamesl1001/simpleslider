/*
NOTES:
JSON file
frame.length
currentFrame
current class for active frame
remove all other current states
css3 animation
*/

(function(){
    // Setup variables
    var ss         = document.getElementById("simpleslider"),
        ssWrapper  = document.getElementById("ss__wrapper"),
        ssControls = document.getElementById("ss__controls"),
        ssHeight   = 530;

    // Set dimensions
    ss.style.height = ssHeight + 25 + "px";
    ssWrapper.style.height = ssHeight + "px";

    // Get images
    var ssImages = ss.getElementsByTagName("img");

    console.log(ssImages);
})();