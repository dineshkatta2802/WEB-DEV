// Looping over maps can be done in 3 ways
/*
1. map.keys()
2. map.values()
3. map.entries()
*/

let user = new Map([
    ['Name', 'Dinesh'],
    ['age', 18],
    ['Gender', 'Male']
]);

for (let key of user.keys()) {
    console.log(key);
}

for (let value of user.values()) {
    console.log(value);
}

for (let entry of user.entries()) {
    console.log(entry);
}

//Note:
// ***instead the map has gota built in doreach loop 

user.forEach((value , key , map) => {
    console.log(`${key} : ${value}`);    
});