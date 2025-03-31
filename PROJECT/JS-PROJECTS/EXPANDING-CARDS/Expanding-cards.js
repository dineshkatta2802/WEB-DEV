// Select all elements with the class "panel"
const panels = document.querySelectorAll('.panel');

// Loop through each panel and add a click event listener
panels.forEach(panel => {
    // Add an event listener to handle the click event
    panel.addEventListener('click', () => {
        removeActiveClass(); // Remove "active" class from all panels
        panel.classList.add('active'); // Add "active" class to the clicked panel
        
        // The "active" class increases the panel's flex-grow property (flex: 5), 
        // making it expand while others shrink
    });
});

// Function to remove the "active" class from all panels
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active'); // Reset all panels to their original size
    });
}
