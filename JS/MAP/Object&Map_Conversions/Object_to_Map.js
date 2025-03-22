//Suppose we have a palin object and we want to convert it into an map we can use 
//Object.entiries(obj name);
let object = {
    name : "Dinesh",
    age : 18,
    gender : 'male'
};

let map = new Map(Object.entries(object));

map.forEach((value , key ,map) =>{
    console.log(`${key}:${value}`);
});

