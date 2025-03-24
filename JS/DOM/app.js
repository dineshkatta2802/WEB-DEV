// 1. getElementById(id)
let heading = document.getElementById('main-heading');
console.log(heading);

// 2. getElementsByClassName(className)
// Returns elements with the given CSS class.
let items = document.getElementsByClassName('items');
console.log(items);

// 3. getElementsByTagName(TagName)
// Returns a collection of elements with the given tag.
let tags = document.getElementsByTagName('li'); // Fixed: Changed to getElementsByTagName
console.log(tags);

// 4. querySelector('element')
// Gives the first matching element.
let container = document.querySelector('div'); 
console.log(container);

// 5. querySelectorAll('element')
// Selects all matching elements.
let allContainer = document.querySelectorAll('div');
console.log(allContainer);

// 6. document.getElementsByName(name) -- Rarely used

// 7. matches()
// It checks if the element matches the CSS selector.
let random = document.getElementsByTagName('li')[0]; // Fixed: Select the first 'li' element
if(random && random.matches("li")){ // Check if 'random' exists before calling matches()
    console.log("Matches");
}
