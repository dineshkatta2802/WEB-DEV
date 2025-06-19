chrome.runtime.onMessage.addListener((msg) => {
  if (msg.updateRules) {
    chrome.storage.sync.get(["blockedSites", "powerEnabled"], (data) => {
      const blocked = data.powerEnabled ? data.blockedSites || [] : [];

      const rules = blocked.map((site, i) => ({
        id: i + 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/blocked.html" }
        },
        condition: {
          urlFilter: `||${site}^`,
          resourceTypes: ["main_frame"]
        }
      }));

      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: Array.from({ length: 100 }, (_, i) => i + 1),
        addRules: rules
      });
    });
  }
});
