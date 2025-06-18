document.addEventListener("DOMContentLoaded", () => {
  const powerToggle = document.getElementById("powerToggle");
  
  // Load saved power toggle state; default to 'on' (locked) if not set
  const savedPowerState = localStorage.getItem("powerState");
  powerToggle.checked = savedPowerState !== "off"; // Check if it's 'on'

  // Event listener for toggle changes
  powerToggle.addEventListener("change", togglePower);

  // Other initialization code can go here or below...
  
  // For example, initialize theme, load websites, etc.
});

const openPopupBtn = document.getElementById("openPopup");
const popupOverlay = document.getElementById("popupOverlay");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");
const defaultWebsites = document.getElementById("defaultWebsites");
const dropdownContainer = document.getElementById("dropdownContainer");
const dropdownContent = document.getElementById("dropdownContent");
const powerToggle = document.getElementById("powerToggle"); // Reference to the toggle

let addedWebsites = [];

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
    // Apply theme
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        toggleThemeIcon();
    }

    // Load websites from localStorage
    const storedWebsites = JSON.parse(localStorage.getItem("websites")) || [];
    addedWebsites = storedWebsites;
    loadWebsites(storedWebsites);

    // Load saved power toggle state; default to 'on' (locked) if not set
    const savedPowerState = localStorage.getItem("powerState");
    powerToggle.checked = savedPowerState !== "off"; // Check if it's 'on'

    // Event listeners
    openPopupBtn?.addEventListener("click", showPopup);
    cancelBtn?.addEventListener("click", hidePopup);
    saveBtn.addEventListener("click", saveWebsite);
    document.querySelector(".toggle")?.addEventListener("click", toggleTheme);
    powerToggle.addEventListener("change", togglePower);
});

// Load websites into the UI
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

// Show popup
function showPopup() {
    popupOverlay.style.display = "flex";
    popupOverlay.classList.toggle("dark-mode", document.body.classList.contains("dark-mode"));
}

// Hide popup
function hidePopup() {
    popupOverlay.style.display = "none";
    clearPopupInputs();
}

// Save website
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

// Clear input fields
function clearPopupInputs() {
    document.getElementById("siteName").value = "";
    document.getElementById("siteURL").value = "";
}

// Create website DOM element with delete button
function createWebsiteElement(name, url) {
    const container = document.createElement("div");
    container.className = "website";

    // Website icon
    const favicon = document.createElement("img");
    favicon.src = `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`;
    favicon.alt = "Site Icon";
    favicon.style.width = "24px";
    favicon.style.height = "24px";
    favicon.style.marginRight = "10px";
    favicon.style.borderRadius = "4px";

    // Website name link
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

    // Toggle switch
    const label = document.createElement("label");
    label.className = "theme-switch";
    label.innerHTML = `
        <input type="checkbox">
        <span class="slider">
            <i class="fa-solid fa-lock toggle-icon lock"></i>
            <i class="fa-solid fa-unlock toggle-icon unlock"></i>
        </span>
    `;

    // Delete Button
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

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleThemeIcon();
}

// Update theme icon
function toggleThemeIcon() {
    const toggleBtn = document.querySelector(".toggle");
    const icon = toggleBtn?.querySelector("i");
    icon?.classList.toggle("fa-moon");
    icon?.classList.toggle("fa-sun");
}

// Toggle power
function togglePower(e) {
    const isOn = e.target.checked;
    localStorage.setItem("powerState", isOn ? "on" : "off");
    if (!isOn) window.location.href = "popup.html"; // Redirect back
}

// Toggle dropdown content
function toggleDropdown() {
    dropdownContainer.classList.toggle("active");
    dropdownContent.style.display = dropdownContainer.classList.contains("active") ? "flex" : "none";
}
