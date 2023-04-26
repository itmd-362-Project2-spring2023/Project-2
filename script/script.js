function toggleMenu(){
    navbar = document.getElementById("navbar-container");
    if(getComputedStyle(navbar).getPropertyValue("display") == "none"){
        navbar.style.display = "unset";
    } else {
        navbar.style.display = "none";
    }
}

function validateForm(){
    enableSubmit = true;
    fnameField = document.getElementById("fname");
    lnameField = document.getElementById("lname");
    emailField = document.getElementById("email");
    submitButton = document.getElementById("submit");

    if(fnameField.value == ""){
        enableSubmit = false;
        fnameField.classList.add("incorrect");
    } else {
        fnameField.classList.remove("incorrect");
    }

    if(lnameField.value == ""){
        enableSubmit = false;
        lnameField.classList.add("incorrect");
    } else {
        lnameField.classList.remove("incorrect");
    }

    if(!(emailField.value.includes("@") && emailField.value.includes(".") && emailField.value.length >= 5)){
        enableSubmit = false;
        emailField.classList.add("incorrect");
    } else {
        emailField.classList.remove("incorrect");
    }

    if(enableSubmit){
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }


}