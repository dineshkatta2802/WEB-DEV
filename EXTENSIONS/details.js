const openPopupBtn = document.getElementById("openPopup");
const popupOverlay = document.getElementById("popupOverlay");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");

const defaultWebsites = document.getElementById("defaultWebsites");
const dropdownContainer = document.getElementById("dropdownContainer");
const dropdownContent = document.getElementById("dropdownContent");

let addedWebsites = [];

document.addEventListener("DOMContentLoaded", () => {
  // Apply theme
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    const toggleIcon = document.querySelector(".toggle i");
    toggleIcon?.classList.replace("fa-moon", "fa-sun");
  }

  // Theme toggle
  const toggleBtn = document.querySelector(".toggle");
  const icon = toggleBtn?.querySelector("i");

  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    icon?.classList.toggle("fa-moon");
    icon?.classList.toggle("fa-sun");
  });

  // Home button
  const homeBtn = document.querySelector(".homeBtn");
  homeBtn?.addEventListener("click", () => {
    window.location.href = "popup.html";
  });

  // Load websites from localStorage
  const storedWebsites = JSON.parse(localStorage.getItem("websites")) || [];
  addedWebsites = storedWebsites;

  storedWebsites.forEach((site, index) => {
    const element = createWebsiteElement(site.name, site.url);
    if (index < 5) {
      defaultWebsites.appendChild(element);
    } else {
      dropdownContainer.classList.remove("hidden");
      dropdownContent.appendChild(element);
    }
  });
});

// Show popup
openPopupBtn?.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
  if (document.body.classList.contains("dark-mode")) {
    popupOverlay.classList.add("dark-mode");
  } else {
    popupOverlay.classList.remove("dark-mode");
  }
});

// Cancel popup
cancelBtn?.addEventListener("click", () => {
  popupOverlay.style.display = "none";
  clearPopupInputs();
});

// Save website
saveBtn.addEventListener("click", () => {
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

    popupOverlay.style.display = "none";
    clearPopupInputs();
  }
});

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
  deleteBtn.style.background = "transparent";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.color = "red";
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

// Toggle dropdown content
function toggleDropdown() {
  dropdownContainer.classList.toggle("active");

  // If dropdown becomes active, show the content
  if (dropdownContainer.classList.contains("active")) {
    dropdownContent.style.display = "flex";
  } else {
    dropdownContent.style.display = "none";
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const powerToggle = document.getElementById("powerToggle");

//   // Set initial toggle state
//   powerToggle.checked = localStorage.getItem("powerStatus") === "on";

//   // Toggle power OFF
//   powerToggle.addEventListener("change", () => {
//     if (!powerToggle.checked) {
//       localStorage.setItem("powerStatus", "off");
//       window.location.href = "popup.html"; // Redirect back
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("checkbox");
  
  // Set current toggle state based on localStorage
  const powerState = localStorage.getItem("powerState");
  toggleCheckbox.checked = (powerState === "on");

  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      localStorage.setItem("powerState", "on");
    } else {
      localStorage.setItem("powerState", "off");
      window.location.href = "popup.html"; // redirect back to popup
    }
  });
});

