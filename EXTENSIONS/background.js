// background.js

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

        // Rule 2: Block other resources
        rules.push({
          id: i * 2 + 2,
          priority: 1,
          action: { type: "block" },
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


// let stats = {
//   trackers: 0,
//   ads: 0,
//   geo: 0,
//   cookies: 0
// };

// // On install, initialize stats
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.set({ stats });
// });

// // Update DNR rules dynamically
// chrome.runtime.onMessage.addListener((msg) => {
//   if (msg.updateRules) {
//     chrome.storage.sync.get(["blockedSites", "powerEnabled"], (data) => {
//       const blocked = data.powerEnabled ? data.blockedSites || [] : [];
//       const rules = [];

//       blocked.forEach((site, i) => {
//         rules.push({
//           id: i * 2 + 1,
//           priority: 1,
//           action: {
//             type: "redirect",
//             redirect: { extensionPath: "/blocked.html" }
//           },
//           condition: {
//             urlFilter: site,
//             resourceTypes: ["main_frame"]
//           }
//         });

//         rules.push({
//           id: i * 2 + 2,
//           priority: 1,
//           action: { type: "block" },
//           condition: {
//             urlFilter: site,
//             resourceTypes: [
//               "script", "xmlhttprequest", "sub_frame", "image",
//               "font", "stylesheet", "object", "media"
//             ]
//           }
//         });
//       });

//       chrome.declarativeNetRequest.getDynamicRules((existingRules) => {
//         const existingIds = existingRules.map(rule => rule.id);
//         chrome.declarativeNetRequest.updateDynamicRules({
//           removeRuleIds: existingIds,
//           addRules: rules
//         });
//       });
//     });
//   }

//   // Handle "closeTab" from content.js
//   if (msg.action === "closeTab") {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       if (tabs[0]?.id) chrome.tabs.remove(tabs[0].id);
//     });
//   }
// });

// // Track blocked items (DNR feedback)
// chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
//   const url = info.request.url;

//   chrome.storage.local.get("stats", (data) => {
//     const current = data.stats || { trackers: 0, ads: 0, geo: 0, cookies: 0 };

//     if (/track|analytics|pixel|beacon/i.test(url)) current.trackers++;
//     if (/ads|doubleclick|googlesyndication|adservice/i.test(url)) current.ads++;
//     if (/geo|location/i.test(url)) current.geo++;
//     if (/cookie/i.test(url)) current.cookies++;

//     chrome.storage.local.set({ stats: current });
//   });
// });
