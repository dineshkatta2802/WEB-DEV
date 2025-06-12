document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector('.toggle');
    const powerBtn = document.querySelector('.power-btn');

    // Dark mode toggle
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Navigate to dashboard.html
    powerBtn.addEventListener("click", () => {
        window.location.href = "details.html";
    });
});
