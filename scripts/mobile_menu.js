window.onload = function() {
    var showNav = document.getElementById("menu_img"),
        closeNav = document.getElementById("close_mobile_menu"),
        navWindow = document.getElementById("mobile_menu");
    showNav.onclick = function() {
        navWindow.style.display = "block";
    }

    closeNav.onclick = function() {
        navWindow.style.display = "none";
    }
}