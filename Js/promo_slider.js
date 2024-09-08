// promo-slider.js

document.addEventListener('DOMContentLoaded', function () {
    const promoImage = document.getElementById('promo-image');
    const promoImages = ['Image/ring1.png', 'Image/ring2.jpg', 'Image/ring3.jpg'];
    let currentImageIndex = 0;

    function changePromoImage() {
        promoImage.style.opacity = 0;
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % promoImages.length;
            promoImage.src = promoImages[currentImageIndex];
            promoImage.style.opacity = 1;
        }, 500);
    }

    setInterval(changePromoImage, 5000);
});
