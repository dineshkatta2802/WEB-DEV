document.addEventListener("DOMContentLoaded", () => {
  const powerToggle = document.getElementById("powerToggle");
  const openPopupBtn = document.getElementById("openPopup");
  const popupOverlay = document.getElementById("popupOverlay");
  const cancelBtn = document.getElementById("cancelBtn");
  const saveBtn = document.getElementById("saveBtn");
  const defaultWebsites = document.getElementById("defaultWebsites");
  const dropdownContainer = document.getElementById("dropdownContainer");
  const dropdownContent = document.getElementById("dropdownContent");
  const siteCheckboxes = defaultWebsites.querySelectorAll('input[type="checkbox"]');

  let addedWebsites = [];

  // Load saved power toggle state
  const savedPowerState = localStorage.getItem("powerState");
  powerToggle.checked = savedPowerState !== "off";

  // Load theme
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggleThemeIcon();
  }

  // Load websites from localStorage
  const storedWebsites = JSON.parse(localStorage.getItem("websites")) || [];
  addedWebsites = storedWebsites;
  loadWebsites(storedWebsites);

  // Load sync state from Chrome storage (moved inside DOMContentLoaded)
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

  // Event listeners
  openPopupBtn?.addEventListener("click", showPopup);
  cancelBtn?.addEventListener("click", hidePopup);
  saveBtn.addEventListener("click", saveWebsite);
  document.querySelector(".toggle")?.addEventListener("click", toggleTheme);
  powerToggle.addEventListener("change", togglePower);

  // Website UI
  function loadWebsites(websites) {
    websites.forEach((site, index) => {
      const element = createWebsiteElement(site.name, site.url);
      if (index < 5) {
        defaultWebsites.appendChild(element);
      } else {
        dropdownContainer.classList.remove("hidden");
        dropdownContent.appendChild(element);
      }
    });
  }

  function showPopup() {
    popupOverlay.style.display = "flex";
    popupOverlay.classList.toggle("dark-mode", document.body.classList.contains("dark-mode"));
  }

  function hidePopup() {
    popupOverlay.style.display = "none";
    clearPopupInputs();
  }

  function saveWebsite() {
    const name = document.getElementById("siteName").value.trim();
    const url = document.getElementById("siteURL").value.trim();

    if (name && url) {
      const website = { name, url };
      addedWebsites.push(website);
      localStorage.setItem("websites", JSON.stringify(addedWebsites));

      const websiteElement = createWebsiteElement(name, url);
      if (defaultWebsites.children.length < 5) {
        defaultWebsites.appendChild(websiteElement);
      } else {
        dropdownContainer.classList.remove("hidden");
        dropdownContent.appendChild(websiteElement);
      }

      hidePopup();
    }
  }

  function clearPopupInputs() {
    document.getElementById("siteName").value = "";
    document.getElementById("siteURL").value = "";
  }

  function createWebsiteElement(name, url) {
    const container = document.createElement("div");
    container.className = "website";

    const favicon = document.createElement("img");
    favicon.src = `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`;
    favicon.alt = "Site Icon";
    favicon.style.width = "24px";
    favicon.style.height = "24px";
    favicon.style.marginRight = "10px";
    favicon.style.borderRadius = "4px";

    const siteLink = document.createElement("a");
    siteLink.href = url;
    siteLink.target = "_blank";
    siteLink.textContent = name;
    siteLink.style.fontSize = "18px";
    siteLink.style.fontWeight = "500";
    siteLink.style.textDecoration = "none";
    siteLink.style.color = "inherit";

    const leftPart = document.createElement("div");
    leftPart.style.display = "flex";
    leftPart.style.alignItems = "center";
    leftPart.appendChild(favicon);
    leftPart.appendChild(siteLink);

    const label = document.createElement("label");
    label.className = "theme-switch";
    label.innerHTML = `
        <input type="checkbox">
        <span class="slider">
            <i class="fa-solid fa-lock toggle-icon lock"></i>
            <i class="fa-solid fa-unlock toggle-icon unlock"></i>
        </span>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.title = "Delete";
    deleteBtn.addEventListener("click", () => {
      container.remove();
      addedWebsites = addedWebsites.filter(site => !(site.name === name && site.url === url));
      localStorage.setItem("websites", JSON.stringify(addedWebsites));
    });

    container.appendChild(leftPart);
    container.appendChild(label);
    container.appendChild(deleteBtn);

    return container;
  }

  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleThemeIcon();
  }

  function toggleThemeIcon() {
    const toggleBtn = document.querySelector(".toggle");
    const icon = toggleBtn?.querySelector("i");
    icon?.classList.toggle("fa-moon");
    icon?.classList.toggle("fa-sun");
  }

  function togglePower(e) {
    const isOn = e.target.checked;
    localStorage.setItem("powerState", isOn ? "on" : "off");

    chrome.storage.sync.set({ powerEnabled: isOn }, () => {
      if (!isOn) {
        clearAllSites();
        setCheckboxEnabled(false);
        chrome.runtime.sendMessage({ updateRules: true });
        window.location.href = "popup.html"; // ✅ Redirect when toggled off
      } else {
        const selectedSites = Array.from(siteCheckboxes)
          .filter(c => c.checked)
          .map(c => c.value);

        chrome.storage.sync.set({ blockedSites: selectedSites }, () => {
          chrome.runtime.sendMessage({ updateRules: true });
        });

        setCheckboxEnabled(true);
      }
    });
  }

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

  // Checkbox change events
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
});
