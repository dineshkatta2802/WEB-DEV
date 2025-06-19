const darkModeToggle = document.getElementById("darkModeToggle");
const powerToggle = document.getElementById("powerToggle");
const form = document.getElementById("siteForm");

chrome.storage.sync.get(["blockedSites", "darkMode", "powerEnabled"], (data) => {
  const blockedSites = data.blockedSites || [];
  const darkMode = data.darkMode || false;
  const power = data.powerEnabled ?? true;

  darkModeToggle.checked = darkMode;
  powerToggle.checked = power;

  if (darkMode) document.body.classList.add("dark");

  const checkboxes = form.querySelectorAll("input[type=checkbox][name=site]");
  checkboxes.forEach(cb => {
    cb.checked = blockedSites.includes(cb.value);
    cb.disabled = !power;
  });
});

darkModeToggle.addEventListener("change", () => {
  const isDark = darkModeToggle.checked;
  document.body.classList.toggle("dark", isDark);
  chrome.storage.sync.set({ darkMode: isDark });
});

powerToggle.addEventListener("change", () => {
  const power = powerToggle.checked;
  chrome.storage.sync.set({ powerEnabled: power }, () => {
    updateRules();
  });

  const checkboxes = form.querySelectorAll("input[type=checkbox][name=site]");
  checkboxes.forEach(cb => cb.disabled = !power);
});

form.addEventListener("change", () => {
  const checkboxes = form.querySelectorAll("input[type=checkbox][name=site]");
  const selectedSites = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  chrome.storage.sync.set({ blockedSites: selectedSites }, () => {
    updateRules();
  });
});

function updateRules() {
  chrome.runtime.sendMessage({ updateRules: true });
}
