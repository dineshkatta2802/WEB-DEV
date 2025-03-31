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
if(random && random.matches("li")) { // Check if 'random' exists before calling matches()
    console.log("Matches");
}

// 8. innerHTML
// This property allows you to get or set the HTML inside an element.
let firstHeading = document.body.getElementsByTagName('h1')[0]; // Fixed
firstHeading.innerHTML = 'Hello brother';
console.log(firstHeading.innerHTML);

// 9. outerHTML
// Unlike innerHTML, outerHTML includes the whole tag
let box = document.getElementById("main-heading");
console.log(box.innerHTML);  // Output: Main Heading
console.log(box.outerHTML);  // Output:  <h1 id="main-heading">Main heading</h1>

// --------------------------------------------------------------------------------------------------------------------------
// 10. Modification of the elements
// 10.1 Creation of a node:
// Creation of nodes has 2 methods 
// 10.1.1 - document.createElement(tag)  :  element node
// 10.1.2 - document.createTextNode(text)  :  text node

// 1. Create <div> element
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
// Append it to the body
document.body.append(div);

// 2. Insertion methods:
document.body.prepend(div);

let ul = document.querySelector('ul');
let li = document.createElement('li');

ul.append(li); // Append new list item to <ul>
li.className = 'items';
li.innerHTML = 'Newton'; // <li class="items">Newton</li>

// Corrected `before` and `after` usage
ul.insertAdjacentHTML("beforebegin", "<p>Hello</p><hr>");
ul.insertAdjacentHTML("afterend", "<p>Herello</p><hr>");

// 11. insertAdjacentHTML(where, html/text);
// Another way to insert elements
ul.insertAdjacentHTML("beforebegin", '<b>Before-begin</b>');
ul.insertAdjacentHTML("afterbegin", '<b>After-begin</b>');
ul.insertAdjacentHTML("beforeend", '<b>Before-end</b>');
ul.insertAdjacentHTML("afterend", '<b>After-end</b>');

// 12. Cloning:
let div1 = div.cloneNode(true);
console.log(div1);

// 13. Removing a node
// ul.remove();

// DocumentFragment
// A special invisible container for storing elements before adding them to the DOM.
// Instead of adding elements one by one (which can be slow), we add them to a DocumentFragment first, then insert the whole fragment at once.
// This improves performance and avoids unnecessary reflows.

let fragment = new DocumentFragment();
let text = 'DOCUMENT-FRAGMENT';
document.querySelector('.con').insertAdjacentHTML("afterend", text);


// 13.document.write
// setTimeout(() => document.write('<h1>Everything is gone!</h1>'), 1000);
document.write('<h1>Welcome!</h1>');
