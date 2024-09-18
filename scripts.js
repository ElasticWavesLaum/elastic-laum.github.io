document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carousel = document.querySelector('.news-carousel');
    const itemWidth = document.querySelector('.news-item').offsetWidth;

    let scrollAmount = 0;

    prevButton.addEventListener('click', () => {
        scrollAmount -= itemWidth;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        carousel.scrollLeft = scrollAmount;
    });

    nextButton.addEventListener('click', () => {
        scrollAmount += itemWidth;
        if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = carousel.scrollWidth - carousel.clientWidth;
        }
        carousel.scrollLeft = scrollAmount;
    });
});
