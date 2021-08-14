var slideIndex = 1; /*when page is loaded it shows slide number 1*/
var myTimer; // ANNE: created global variable so that the various clearIntervals and setIntervals were referring to the same thing

console.log("Our JavaScript file is working");
window.onload = init; /*word init equals on the event that the window is loaded*/


function init() {
    /*makes JavaScript functions within this formula run over the page after the whole page is loaded*/
    console.log("Page is loaded!");

    showSlides(slideIndex);

    var bodyWidth = window.innerWidth;

    console.log(bodyWidth);
    document.body.style.width = bodyWidth - 150;

    myTimer = setInterval(function () {
        plusSlides(1)
    }, 4000);

    console.log("setting timer " + myTimer);
    /*document.getElementById("petSubmit").onclick = showPetText;*/

}





// Next/previous controls
function plusSlides(n) {
   // console.log("clearing timer " + myTimer);
    clearInterval(myTimer);
    if (n < 0) {
        // showslides (slideIndex -= 1);
        showSlides(slideIndex -= 1); // ANNE: fixed capitalization of function name
    } else {
        showSlides(slideIndex += 1);
    }
    myTimer = setInterval(function () {
        plusSlides(1)
    }, 4000);
   // console.log("setting timer " + myTimer);
}

//Thumbnail image controls
/*function currentSlide(n) {
    showSlides(slideIndex = n); 
}*/

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // ANNE: without the space, the classname becomes "dotactive" instead of "dot active" 
    // ANNE: this makes it so getElementsByClassName("dot") (line 56) can't find anything
    //dots[slideIndex - 1].className += "active";
    dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
   // console.log("clearing timer " + myTimer);
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(n + 1)
    }, 4000);
   // console.log("setting timer " + myTimer);
    showSlides(slideIndex = n);
}
//ANNE: This function is overwriting your previous showSlides() function, so none of your code up there is getting called
/*
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    //  setTimeout(showSlides, 5000); // Change image every 5 seconds // ANNE: this will interact poorly with the interval you've set up
}
*/

/*function showPetText() {
    var userPetName = document.getElementById("petName").nodeValue; /*type e.g. name into the field, click the button, then it reads value of textbox */

/*console.log(userPetName); /*prints out the word in the textbox*/

/*} /*outside of init, therefore gets run after the button is clicked*/