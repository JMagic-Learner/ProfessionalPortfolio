var slideshowINDEX = [
    "assets/images/InProgressBanner.jpg",
    "assets/images/LinkedInBanner.jpg",
    "assets/images/JasonMaBanner.jpg",
    "assets/images/InProgressBanner.jpg",
    "assets/images/InProgressBanner.jpg"
]




var currentSlide = 0;


// This tests the arrow function //
/*
var nextSlide = (currentSlide) => {
    currentSlide++;
    slideshowINDEX[currentSlide];
    console.log(slideshowINDEX[currentSlide]);
    if (currentSlide >= 4) {
        console.log("The trigger has happened");
        currentSlide = currentSlide - 5;

    }
    $("#slideshow-display").attr("src", slideshowINDEX[currentSlide]);
}
*/

function nextSlide() {

    currentSlide++;
    slideshowINDEX[currentSlide];
    console.log(slideshowINDEX[currentSlide]);
    if (currentSlide >= 4) {
        console.log("The trigger has happened");
        currentSlide = currentSlide - 5;

    }
    $("#slideshow-display").attr("src", slideshowINDEX[currentSlide]);
}


function prevSlide() {
    currentSlide--;
    slideshowINDEX[currentSlide];
    console.log(slideshowINDEX[currentSlide]);
    if (currentSlide <= 0) {
        console.log("The Trigger has happened");
        currentSlide = currentSlide + 5;
    }
    $("img").attr("src", slideshowINDEX[currentSlide]);
}







prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);