    chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({ text: "OFF" });
    });

    chrome.action.onClicked.addListener(async (tab) => {
    const currentBadge = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = currentBadge === "ON" ? "OFF" : "ON";

    await chrome.action.setBadgeText({ text: nextState, tabId: tab.id });

    if (nextState === "ON") {
        await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
        });
    } else if (nextState === "OFF") {
        await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
        });
    }
    });

    let toggle = document.querySelector(".toggle");
    toggle.addEventListener('click' , () => {
        
    })