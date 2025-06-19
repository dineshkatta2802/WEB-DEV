chrome.runtime.onMessage.addListener((msg) => {
  if (msg.updateRules) {
    chrome.storage.sync.get(["blockedSites", "powerEnabled"], (data) => {
      const blocked = data.powerEnabled ? data.blockedSites || [] : [];

      const rules = [];

      blocked.forEach((site, i) => {
        // Rule 1: Block the whole site
        rules.push({
          id: i * 2 + 1,
          priority: 1,
          action: {
            type: "redirect",
            redirect: { extensionPath: "/blocked.html" }
          },
          condition: {
            urlFilter: site,
            resourceTypes: ["main_frame"]
          }
        });

        // Rule 2: Block trackers/scripts/ads from that domain
        rules.push({
          id: i * 2 + 2,
          priority: 1,
          action: {
            type: "block"
          },
          condition: {
            urlFilter: site,
            resourceTypes: [
              "script",
              "xmlhttprequest",
              "sub_frame",
              "image",
              "font",
              "stylesheet",
              "object",
              "media"
            ]
          }
        });
      });

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
