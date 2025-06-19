chrome.runtime.onMessage.addListener((msg) => {
  if (msg.updateRules) {
    chrome.storage.sync.get(["blockedSites", "powerEnabled"], (data) => {
      const blocked = data.powerEnabled ? data.blockedSites || [] : [];

      // Create redirect rules with integer IDs
      const rules = blocked.map((site, i) => ({
        id: i + 1, // Must be a number
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/blocked.html" }
        },
        condition: {
          urlFilter: site,
          resourceTypes: ["main_frame"]
        }
      }));

      // First remove existing dynamic rules
      chrome.declarativeNetRequest.getDynamicRules((existingRules) => {
        const existingIds = existingRules.map(rule => rule.id);

        chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: existingIds,
          addRules: rules
        });
      });
    });
  }
});

// Optional: Listen for message from content script to close tab
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "closeTab" && sender.tab?.id) {
    chrome.tabs.remove(sender.tab.id);
  }
});
