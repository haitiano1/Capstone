// DARK MODE
document.getElementById("switchButtonLaptop").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
}

document.getElementById("switchButtonMobile").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
}


// Show Icon Close In Navbar Toggler
function showMenu(showIconClose){
	showIconClose.classList.toggle("fa-times");
}



