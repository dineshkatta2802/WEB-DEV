//Suppose if want to get an object from a Map we can use the following method
//Object.fromEntries

let map = new Map([
    ['name', "Dinesh"],
    ['age', 18],
    ['gender', 'male']
]);

// Convert Map to Object
let object = Object.fromEntries(map.entries());

// Iterate over Object using Object.entries()
for (let [key, value] of Object.entries(object)) {
    console.log(key, value);
}
