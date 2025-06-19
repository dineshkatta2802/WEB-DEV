// Theme toggle logic
const toggleBtn = document.querySelector('.toggle');
const icon = toggleBtn.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.classList.replace('fa-moon', 'fa-sun');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Power button redirects and stores power status
document.querySelector('.power-btn').addEventListener('click', () => {
  localStorage.setItem('powerStatus', 'on'); // Save ON state
  chrome.storage.sync.set({ powerEnabled: true }); // Optional: for cross-page access
  window.location.href = 'details.html';
});
