chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "showWarning") {
    if (document.getElementById("obscura-warning-overlay")) return;

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
      zIndex: "2147483647",
      fontSize: "2rem",
      textAlign: "center",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
    });

    overlay.innerHTML = `
      <h1>Warning: Malicious Site Blocked</h1>
      <p>The following site has been blocked for your security:</p>
      <p style="word-break: break-word;"><strong>${message.url}</strong></p>
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
    `;

    document.documentElement.prepend(overlay);

    document.getElementById("obscura-close-btn").addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "closeTab" });
    });
  }
});
