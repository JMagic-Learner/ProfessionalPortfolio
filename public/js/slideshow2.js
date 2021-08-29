let slideshowINDEX = [
    "/images/Horiseon_Banner.jpg",
    "/images/Playlistify_Banner.jpg",
    "/images/Life-Organizer-Card.jpg",
    "/images/PassGenBanner.jpg",
    "/images/Project1Banner.jpg",
    "/images/Weather-Application-Card.jpg",
    "/images/Time-Quiz-Card.jpg",
    "/images/ZENITH_HIGHLIGHT_BANNER2.jpg",
]




let currentSlide = 0;


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
    if (currentSlide > 7 ) {
        console.log("The trigger has happened");
        currentSlide = currentSlide - 8;

    }
    $("img").attr("src", slideshowINDEX[currentSlide]);
}


function prevSlide() {
    currentSlide--;
    slideshowINDEX[currentSlide];
    console.log(slideshowINDEX[currentSlide]);
    if (currentSlide < 0) {
        console.log("The Trigger has happened");
        currentSlide = currentSlide + 8;
    }
    $("img").attr("src", slideshowINDEX[currentSlide]);
}







prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);