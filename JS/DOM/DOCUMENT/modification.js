// 1. Modification of the elements
// 1.1 Creation of a node:
// Creation of nodes has 2 methods 
// 1.1.1 - document.createElement(tag)  :  element node
// 1.1.2 - document.createTextNode(text)  :  text node

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

// 2. insertAdjacentHTML(where, html/text);
// Another way to insert elements
ul.insertAdjacentHTML("beforebegin", '<b>Before-begin</b>');
ul.insertAdjacentHTML("afterbegin", '<b>After-begin</b>');
ul.insertAdjacentHTML("beforeend", '<b>Before-end</b>');
ul.insertAdjacentHTML("afterend", '<b>After-end</b>');

// 3. Cloning:
let divClone = div.cloneNode(true);
console.log(divClone);

// 4. Removing a node
ul.remove();

// 5. DocumentFragment
// A special invisible container for storing elements before adding them to the DOM.

let fragment = new DocumentFragment();
let p = document.createElement('p');
p.textContent = 'DOCUMENT-FRAGMENT';
fragment.append(p);
document.querySelector('.con').after(fragment); // Insert fragment after `.con`

// 6. Avoiding document.write() issues
// setTimeout(() => document.write('<h1>Everything is gone!</h1>'), 1000); // Avoid this
document.body.innerHTML += '<h1>Welcome!</h1>'; // Safe alternative

// 7. ClassList Methods
// 1.elem.classList.add/remove("class") - add or remove class
// 2.elem.classList.toggle("class") - adds the class if it doesn’t exist, otherwise removes it.
// 3.elem.classList.contains("class") – checks for the given class, returns true/false

let conDiv = document.querySelector('.con'); // Fixed duplicate variable issue
conDiv.classList.add('new-class'); // Adds without removing existing classes
console.log(conDiv.className);
conDiv.classList.remove('old-class'); // Removes only 'old-class'
conDiv.classList.toggle('hidden'); // Adds 'hidden' if missing, removes it otherwise
console.log(conDiv.classList.contains('hidden')); // true/false
