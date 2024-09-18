document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');
    const newsItems = document.querySelector('.news-items');

    prevBtn.addEventListener('click', () => {
        newsItems.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        newsItems.scrollBy({ left: 200, behavior: 'smooth' });
    });
});

