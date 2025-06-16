const toggleBtn = document.querySelector('.toggle');
const icon = toggleBtn.querySelector('i');

// Apply saved theme on popup load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme on click
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Navigate to details page
document.querySelector('.power-btn').addEventListener('click', () => {
  window.location.href = 'details.html';
});

document.addEventListener("DOMContentLoaded", () => {
  const powerToggle = document.getElementById("powerToggle");
  const isPoweredOn = localStorage.getItem("powerStatus") === "on";

  // Set toggle state based on saved value
  powerToggle.checked = isPoweredOn;

  // If already powered ON, redirect to details.html
  if (isPoweredOn) {
    window.location.href = "details.html";
  }

  powerToggle.addEventListener("change", () => {
    if (powerToggle.checked) {
      localStorage.setItem("powerStatus", "on");
      window.location.href = "details.html";
    }
  });
});

const powerState = localStorage.getItem("powerState");
const powerOnBtn = document.getElementById("powerOnBtn");

if (powerState === "on") {
  // Hide power button permanently
  powerOnBtn.style.display = "none";
}

