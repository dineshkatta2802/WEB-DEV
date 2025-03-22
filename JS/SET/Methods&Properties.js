// 1. Creation of the Set
let set = new Set();

let john = { name: "John" };
let dinesh = { name: "Dinesh" };

// 2. Adding values to the Set
set.add(john);
set.add(dinesh);

// 3. Checking if values exist
console.log(set.has(john));  // true
console.log(set.has({ name: "sena" })); // false (different object reference)

// 4. Deleting a value from the Set
set.delete(john);

// 5. Getting the size of the Set
console.log(set.size); // 1 (after deleting 'john')

// 6. Clearing all elements in the Set
set.clear();
console.log(set.size); // 0
