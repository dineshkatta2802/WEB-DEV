document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle');
  const icon = toggleBtn.querySelector('i');
  const powerToggle = document.getElementById('powerToggle');
  const siteForm = document.getElementById('siteForm');
  const siteCheckboxes = siteForm.querySelectorAll('input[name="site"]');
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  // Toggle dark mode
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  // Load power + site states
  chrome.storage.sync.get(['powerEnabled', 'blockedSites'], (data) => {
    const powerEnabled = data.powerEnabled ?? false;
    const savedBlockedSites = data.blockedSites || [];

    powerToggle.checked = powerEnabled;
    if (powerEnabled) {
      applyBlockedSites(savedBlockedSites);
    } else { 
      clearAllSites();
    }

    setCheckboxEnabled(powerEnabled);
  });

  // Handle checkbox changes
  siteCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      if (!powerToggle.checked) return;

      const selectedSites = Array.from(siteCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);

      chrome.storage.sync.set({ blockedSites: selectedSites }, () => {
        chrome.runtime.sendMessage({ updateRules: true });
      });
    });
  });

  // Handle power toggle
  powerToggle.addEventListener('change', () => {
    const isOn = powerToggle.checked;

    chrome.storage.sync.set({ powerEnabled: isOn }, () => {
      if (isOn) {
        const selectedSites = Array.from(siteCheckboxes)
          .filter(c => c.checked)
          .map(c => c.value);
        chrome.storage.sync.set({ blockedSites: selectedSites });
      } else {
        clearAllSites();
      }

      setCheckboxEnabled(isOn);
      chrome.runtime.sendMessage({ updateRules: true });
    });
  });

  function setCheckboxEnabled(enabled) {
    siteCheckboxes.forEach(cb => cb.disabled = !enabled);
  }

  function applyBlockedSites(sites) {
    siteCheckboxes.forEach(cb => {
      cb.checked = sites.includes(cb.value);
    });
  }

  function clearAllSites() {
    siteCheckboxes.forEach(cb => {
      cb.checked = false;
    });
  }
});
