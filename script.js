var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFillImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFillImg(){
    fullImgBox.style.display = "none";
}