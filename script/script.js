function toggleMenu(){
    navbar = document.getElementById("navbar-container");
    if(getComputedStyle(navbar).getPropertyValue("display") == "none"){
        navbar.style.display = "unset";
    } else {
        navbar.style.display = "none";
    }
}