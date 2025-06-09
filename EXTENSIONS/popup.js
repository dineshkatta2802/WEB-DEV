let toggle = document.querySelector('.toggle');
let power_btn = document.querySelector('.power-btn');


let isDark = false;

toggle.addEventListener('click', () => {
    isDark = !isDark;

    document.body.classList.toggle('dark-mode');

    // Icon toggle: moon ↔ suna
    if (isDark) {
        toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});

    power_btn.addEventListener("click", () => {
        window.location.href = "details.html"; // Replace with your actual page
    });



