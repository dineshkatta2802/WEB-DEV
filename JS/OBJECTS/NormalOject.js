let user = {
    name : "Dinesh",
    age : 18,
    gender : "male",
    "like games" : true
}

//ACCESSING ELEMENTS:
//Accessing can be done in 2 ways
//1.Dot operator:
console.log(user.name);
console.log(user.age);
console.log(user.gender);

//2.Square brackets
//suppose we have got a key which has got more than word then inorder to acess we use the square brackets
console.log(user["age"]);
console.log(user["like games"]);

//3.Object Constructor:
let obj = new Object();
obj.name = "Dinesh";
obj.age = 18;

console.log(obj);


//DELETING ELEMENTS:
//To delete the elements we use a keyword called "delete"
delete user.age;



