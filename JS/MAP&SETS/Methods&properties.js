// 1. Creation of the map 
let map = new Map();

//The creation of the map can be donein the following way
// let map = new Map([
//     ['name' , 'Dinesh'],
//     ['age' , 18]
// ]);

// 2. map.set(key, value);
// Storing the key-value pairs
// Here, the key can be of any datatype
map.set('1', 'String1'); // String type key
map.set(2, true);        // Number type key
map.set(true, 'hello');  // Boolean type key

// 3. map.get(key);
// Returns the value of the key if it exists, else returns undefined 
console.log(map.get('1')); // "String1"
console.log(map.get(1));   // undefined

// 4. map.has(key);
// Returns true if the key exists, otherwise false
console.log(map.has(true));  // true
console.log(map.has('2'));   // false

// 5. map.delete(key)
// Deletes the key-value pair
map.delete(true);

// 6. map.size
// Returns the current number of elements in the map
console.log(map.size); // 2 (after deleting 'true')

// 7. map.clear();
// Removes all elements from the map
map.clear();
console.log(map.size); // 0
