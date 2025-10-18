// Select elements
const sliderContainer = document.querySelector('.con');
const slideRight = document.querySelector('.right');
const slideLeft = document.querySelector('.left');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// Number of slides
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// --- INITIALIZE PANELS TO SHOW FIRST SLIDE ---
slideRight.style.transform = `translateY(0px)`; 
slideLeft.style.transform = `translateY(-${(slidesLength - 1) * sliderContainer.clientHeight}px)`;

// Button Event Listeners
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Slide change function
function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(-${(slidesLength - 1 - activeSlideIndex) * sliderHeight}px)`;
}

// Optional: adjust slides on window resize
window.addEventListener('resize', () => {
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderContainer.clientHeight}px)`;
    slideLeft.style.transform = `translateY(-${(slidesLength - 1 - activeSlideIndex) * sliderContainer.clientHeight}px)`;
});
