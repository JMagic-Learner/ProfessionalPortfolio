var slideshowINDEX = [
    "assets/images/ZENITH_HIGHLIGHT2.jpg",
    "assets/images/LinkedInBanner.jpg",
    "assets/images/JasonMaBanner.jpg",
    "assets/images/InProgressBanner.jpg",
    "assets/images/InProgressBanner.jpg"
]




var currentSlide = 0;










function nextSlide() {
    
    currentSlide++;
    slideshowINDEX[currentSlide];
    console.log(slideshowINDEX[currentSlide]);
    if (currentSlide >= 4) {
        console.log("The trigger has happened");
        currentSlide = currentSlide - 4;
       
    }
    $("img").attr("src", slideshowINDEX[currentSlide]);
}

function prevSlide() {
    currentSlide--;
    slideshowINDEX[currentSlide];
    console.log(slideshowINDEX[currentSlide]);
    if (currentSlide <= 0) {
        console.log("The Trigger has happened");
        currentSlide = currentSlide + 4;
    }
    $("img").attr("src", slideshowINDEX[currentSlide]);
}







prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);