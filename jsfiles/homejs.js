
const categoryCards = document.querySelectorAll('.category-card');
const articleCards = document.querySelectorAll('.article-card');
const articleGrid = document.querySelector('.article-grid');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const pageNumbersContainer = document.getElementById('pageNumbers');

const articlesPerPage = 6;
let currentPage = 1;
let filteredArticles = Array.from(articleCards);

        function displayArticles(articles) {
            articleGrid.innerHTML = '';
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;
            const currentArticles = articles.slice(startIndex, endIndex);

            currentArticles.forEach(article => {
                articleGrid.appendChild(article.cloneNode(true));
            });

            updatePagination(articles.length);
        }

        function updatePagination(totalArticles) {
            const totalPages = Math.ceil(totalArticles / articlesPerPage);
            pageNumbersContainer.innerHTML = ''; // Clear previous page numbers

            if (totalPages <= 1) {
                prevPageButton.disabled = true;
                nextPageButton.disabled = true;
                return;
            }

            prevPageButton.disabled = currentPage === 1;
            nextPageButton.disabled = currentPage === totalPages;

            // Create page number buttons
            for (let i = 1; i <= totalPages; i++) {
                const pageNumberButton = document.createElement('a');
                pageNumberButton.href = '#'; // Prevent default link behavior
                pageNumberButton.classList.add('page-number');
                pageNumberButton.textContent = i;
                if (i === currentPage) {
                    pageNumberButton.classList.add('active');
                }
                pageNumberButton.addEventListener('click', function() {
                    currentPage = parseInt(this.textContent);
                    displayArticles(filteredArticles);
                });
                pageNumbersContainer.appendChild(pageNumberButton);
            }
        }

        function filterArticles(category) {
            currentPage = 1;
            if (category === 'all') {
                filteredArticles = Array.from(articleCards);
            } else {
                filteredArticles = Array.from(articleCards).filter(article =>
                    article.dataset.category === category
                );
            }
            displayArticles(filteredArticles);
        }

        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                filterArticles(category);
            });
        });

        prevPageButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayArticles(filteredArticles);
            }
        });

        nextPageButton.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayArticles(filteredArticles);
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
  displayArticles(filteredArticles);
});

// Initial display
//  displayArticles(filteredArticles);
// yaha tak dala

const nav1Icon = document.getElementById('nav1-icon');
const sideMenu = document.getElementById('side-menu');
const closeMenuIcon = document.getElementById('close-menu-icon');
const body = document.querySelector('body');

nav1Icon.addEventListener('click', () => {
    sideMenu.classList.add('menu-active');
    nav1Icon.classList.toggle('change');
    body.classList.add('overflow-hidden');
});

closeMenuIcon.addEventListener('click', () => {
    sideMenu.classList.remove('menu-active');
    nav1Icon.classList.remove('change');
    body.classList.remove('overflow-hidden');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !nav1Icon.contains(event.target) && sideMenu.classList.contains('menu-active')) {
        sideMenu.classList.remove('menu-active');
        nav1Icon.classList.remove('change');
        body.classList.remove('overflow-hidden');
    }
});


const categorySlider = document.querySelector('.category-slider');
const categoryPrev = document.getElementById('category-prev');
const categoryNext = document.getElementById('category-next');
const categorySlides = document.querySelectorAll('.category-slide');
const slideWidth = categorySlides[0].offsetWidth + 20;
let currentPosition = 0;

categoryNext.addEventListener('click', () => {
    if (currentPosition < (categorySlides.length - 1) * slideWidth) {
        currentPosition += slideWidth;
        categorySlider.style.transform = `translateX(-${currentPosition}px)`;
    } else {
        currentPosition = 0;
        categorySlider.style.transform = `translateX(0px)`;
    }
});

categoryPrev.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition -= slideWidth;
        categorySlider.style.transform = `translateX(-${currentPosition}px)`;
    } else {
        currentPosition = (categorySlides.length - 1) * slideWidth;
        categorySlider.style.transform = `translateX(-${currentPosition}px)`;
    }
});

const heroSlider = document.querySelector('.hero-content');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');
const slides = [
    {
        title: "Explore the World",
        text: "Discover amazing places and read about exciting travel experiences.",
        imageUrl: "hero-image.jpg"
    },
    {
        title: "Uncover Hidden Gems",
        text: "Find unique destinations off the beaten path.",
        imageUrl: "hero-image2.jpg"
    },
    {
        title: "Adventure Awaits",
        text: "Plan your next thrilling journey.",
        imageUrl: "hero-image3.jpg"
    }
];

let currentSlide = 0;
const intervalTime = 5000;
let slideInterval;

function loadSlide(index) {
    const slide = slides[index];
    $('.hero').css('background-image', `url(${slide.imageUrl})`);
    heroSlider.querySelector('h1').textContent = slide.title;
    heroSlider.querySelector('p').textContent = slide.text;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    loadSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    loadSlide(currentSlide);
}

prevSlideBtn.addEventListener('click', prevSlide);
nextSlideBtn.addEventListener('click', nextSlide);

loadSlide(currentSlide);
// slideInterval = setInterval(nextSlide, intervalTime); // Uncomment to enable auto-sliding
