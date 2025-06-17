    const blockedRequestPatterns = [
    "*://*.trackingdomain.com/*",
    "*://*.adsdomain.com/*",
    "*://*.maliciousdomain.com/*",
    "*://*.trackersite.net/*",
    "*://*.adserver.example/*"
    ];

    let protectionEnabled = true;

    chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.powerState) {
        protectionEnabled = changes.powerState.newValue === "on";
    }
    });

    chrome.storage.local.get("powerState", (result) => {
    protectionEnabled = result.powerState === "on";
    });

    // Listen for main_frame requests matching malicious URLs
    chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (!protectionEnabled) return; // protection off, do nothing

        // Send message to tab to show warning overlay
        chrome.tabs.sendMessage(details.tabId, { action: "showWarning", url: details.url });
        
        // Block the request (optional, if blocking desired)
        return { cancel: true };
    },
    {
        urls: blockedRequestPatterns,
        types: ["main_frame"] // only top-level document loads
    },
    ["blocking"]
    );

        // In background.js
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "closeTab" && sender.tab) {
        chrome.tabs.remove(sender.tab.id);
    }
    });
