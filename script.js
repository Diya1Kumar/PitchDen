const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".card-img-top");
let index = 0;
const imagesPerView = 3; // Number of images visible at once

function updateGallery() {
    const imageWidth = images[0].clientWidth + 10; // Include margin
    gallery.style.transform = `translateX(-${index * imageWidth}px)`;
}

function nextSlide() {
    if (index < images.length - imagesPerView) {
        index++;
    } else {
        index = 0; // Reset to the start when reaching the end
    }
    updateGallery();
}

function prevSlide() {
    if (index > 0) {
        index--;
    } else {
        index = images.length - imagesPerView; // Loop to the end
    }
    updateGallery();
}
