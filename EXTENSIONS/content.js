chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showWarning") {
    if (document.getElementById("obscura-warning-overlay")) return; // already shown

    const overlay = document.createElement("div");
    overlay.id = "obscura-warning-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(255, 0, 0, 0.9)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2147483647,
      fontSize: "2rem",
      textAlign: "center",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
    });

    overlay.innerHTML = `
      <div>
        <h1>Warning: Malicious Site Detected</h1>
        <p>The site you are trying to access is blocked for your protection.</p>
        <p><strong>${message.url}</strong></p>
        <button id="obscura-close-btn" style="
          margin-top: 20px; 
          padding: 10px 20px;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 6px;
          background: white;
          color: red;
          font-weight: bold;
        ">Close Tab</button>
      </div>
    `;

    document.documentElement.prepend(overlay);

    document.getElementById("obscura-close-btn").addEventListener("click", () => {
      // Close the tab on user confirmation
      chrome.runtime.sendMessage({ action: "closeTab" });
    });
  }
});
