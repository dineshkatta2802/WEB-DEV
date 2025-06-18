const blockedPatterns = [
  "*://*.trackingdomain.com/*",
  "*://*.adsdomain.com/*",
  "*://*.maliciousdomain.com/*",
  "*://*.trackersite.net/*",
  "*://*.adserver.example/*"
];

// Set up rules for blocking requests
const rules = blockedPatterns.map(pattern => ({
  id: `block-${pattern}`,
  priority: 1,
  action: { type: "block" },
  condition: {
    urlFilter: pattern,
    resourceTypes: ["main_frame"]
  }
}));

// Add rules to the declarativeNetRequest API
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: rules,
  removeRuleIds: rules.map(rule => rule.id)
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "closeTab" && sender.tab) {
    chrome.tabs.remove(sender.tab.id);
  }
});
    