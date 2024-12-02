const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Actualizeaza pozitia caruselului
function updateCarousel() {
    const offset = -currentIndex * 100; // Calcul pentru transform
    carousel.style.transform = `translateX(${offset}%)`;
}

// Eveniment pentru butonul "Next"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Trecerea la urmatorul slide
    updateCarousel();
});

// Eveniment pentru butonul "Previous"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Inapoi la slide anterior
    updateCarousel();
});



