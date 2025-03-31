const slides = document.querySelectorAll('.panel');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let active = 0;

// Right Button Click Event
rightBtn.addEventListener("click", function() {
    active++;
    if (active > slides.length - 1) {
        active = 0;
    }
    setActiveSlide();
});

// Left Button Click Event
leftBtn.addEventListener("click", () => {
    active--;
    if (active < 0) {
        active = slides.length - 1;
    }
    setActiveSlide();
});

// Click Event for Each Slide
slides.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active'); 
    });
});

// Function to Remove "active" Class from All Slides
function removeActiveClass() {
    slides.forEach(panel => {
        panel.classList.remove('active'); 
    });
}

// Function to Update Active Slide
function setActiveSlide() {
    removeActiveClass();
    slides[active].classList.add('active');
}
