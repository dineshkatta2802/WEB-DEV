// 1. Normal array
let a = [10, 20, 30, 40, 50];
console.log(a);

// 2. Constructor array
let b = new Array(10, 20, 30, 40);
console.log(b);

// Adding elements
a.push(60);    // Add at the end
a.unshift(0);  // Add at the beginning
console.log(a);

// Removing elements
a.pop();    // Removes last element
a.shift();  // Removes first element
console.log(a);

// Slicing the array
console.log(a.slice());    // Copy of the entire array
console.log(a.slice(0));   // Copy from index 0
console.log(a.slice(0, 2)); // Elements from index 0 to 1
console.log(a.slice(-2));  // Last two elements

// Splice method
let color = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];
color.splice(0, 1); // Removes 'red'
console.log(color);

color.splice(2, 1); // Removes 'blue' at index 2
console.log(color);

color.splice(0, 1, 'black', 'grey'); // Replaces first element
console.log(color);

// Iterating through the elements
// 1. Normal loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// 2. forEach loop
a.forEach(el => console.log(el));
