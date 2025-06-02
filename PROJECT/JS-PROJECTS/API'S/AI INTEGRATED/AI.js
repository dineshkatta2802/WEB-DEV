let toggle = document.querySelector('.toggle');
let container = document.querySelector('.con');
let logoIcon = document.querySelector('.logo i');
let logoHeader = document.querySelector('.logo h1');
let color = document.querySelector('.color');
let prompt = document.querySelector('.prompt');
let dice = document.querySelector('.prompt-btn');
let generatebtn = document.querySelector('.Generate-btn button');

let isDark = false;

toggle.addEventListener('click', () => {
    isDark = !isDark;

    document.body.classList.toggle('dark-mode');

    // Icon toggle: moon ↔ sun
    if (isDark) {
        toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});


    