window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById("myBody").classList.add("s-body");
    } else {
    header.classList.remove("sticky");
    document.getElementById("myBody").classList.remove("s-body");
    }
}