var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

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
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; /*pour faire disparatire un élément*/
    }
    slideIndex2++; /* on peut faire du modulo ici: (slideIndex2 = slideIndex2 + 1) % slides.length*/
    if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); /*Donc les ronds changent de couleur à chaque fois*/
    }
    slides[slideIndex2-1].style.display = "block"; /*On affiche l'élément*/
    dots[slideIndex2-1].className += " active"; /*le rond courant change de couleur */

}

setInterval(showSlides2, 2000); /*fait appel à la fonction showSlide2 toutes les 1000ms*/