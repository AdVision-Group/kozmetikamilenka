let currentSlide = 1
let currentReference = 1

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function swipeHandle(offset,yDown,yUp){
    yStart = yDown + window.pageYOffset
    yEnd = yUp + window.pageYOffset
    if (yStart > $('#slideshow').offset().top && yEnd < $('#slideshow').offset().top + $('#slideshow').height()){
        scrollToSlide(currentSlide + offset)
    }
    else if (yStart > $('#references-content').offset().top && yEnd < $('#references-content').offset().top + $('#references-content').height()){
        scrollToReference(currentReference + offset)
    }
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            swipeHandle(1,yDown,yUp)
        } else {
            swipeHandle(-1,yDown,yUp)
        }
    }
    xDown = null;
    yDown = null;
};



function scrollToSlide(slide) {
    currentSlide = slide
    if (currentSlide == 4){
        currentSlide = 1
    }
    else if (currentSlide == 0){
        currentSlide = 3
    }
    if (currentSlide == 1) {
        document.getElementById("slide-content").style.left = "0px";
        
        document.getElementById("btn1").classList.add("active");
        document.getElementById("btn2").classList.remove("active");
        document.getElementById("btn3").classList.remove("active");
    } else if (currentSlide == 2) {
        document.getElementById("slide-content").style.left = "-100vw";
        
        document.getElementById("btn1").classList.remove("active");
        document.getElementById("btn2").classList.add("active");
        document.getElementById("btn3").classList.remove("active");
    } else if (currentSlide == 3) {
        document.getElementById("slide-content").style.left = "-200vw";
        
        document.getElementById("btn1").classList.remove("active");
        document.getElementById("btn2").classList.remove("active");
        document.getElementById("btn3").classList.add("active");
    }
}

function scrollToReference(reference) {
    currentReference = reference
    if (currentReference == 5){
        currentReference = 1
    }
    else if (currentReference == 0){
        currentReference = 4
    }
    if (currentReference == 1) {
        document.getElementById("references-content").style.marginLeft = "0px";
        
        document.getElementById("rbtn1").classList.add("active");
        document.getElementById("rbtn2").classList.remove("active");
        document.getElementById("rbtn3").classList.remove("active");
        document.getElementById("rbtn4").classList.remove("active");
    } else if (currentReference == 2) {
        document.getElementById("references-content").style.marginLeft = "-100vw";
        
        document.getElementById("rbtn1").classList.remove("active");
        document.getElementById("rbtn2").classList.add("active");
        document.getElementById("rbtn3").classList.remove("active");
        document.getElementById("rbtn4").classList.remove("active");
    } else if (currentReference == 3) {
        document.getElementById("references-content").style.marginLeft = "-200vw";
        
        document.getElementById("rbtn1").classList.remove("active");
        document.getElementById("rbtn2").classList.remove("active");
        document.getElementById("rbtn3").classList.add("active");
        document.getElementById("rbtn4").classList.remove("active");
    } else if (currentReference == 4) {
        document.getElementById("references-content").style.marginLeft = "-300vw";
        
        document.getElementById("rbtn1").classList.remove("active");
        document.getElementById("rbtn2").classList.remove("active");
        document.getElementById("rbtn3").classList.remove("active");
        document.getElementById("rbtn4").classList.add("active");
    }
}