function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

function changeBack() {
    document.getElementById("picture").style.filter = "gold(70%)";
}

// this part is for the news page
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}


// this part is for the bob up message
var messageBox = document.getElementById("messageBox");
var fullMess = document.getElementById("fullMess");

function openMessage() {
    messageBox.style.display = "flex";
}
function closeMessage() {
    messageBox.style.display = "none";
}
// this is for the slide
function NextImg() {

}