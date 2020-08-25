function showImage(image) {
    var path = "assets/" + image + ".jpg";
    
    document.getElementById("gallery-image").src = path;
    document.getElementById("gallery-image-container").style.display = "flex";
}

function hideImage() {
    document.getElementById("gallery-image-container").style.display = "none";
}