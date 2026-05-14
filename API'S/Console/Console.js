//1. console.assert(conditon ,  message)
//      condition : if true ntg happens
//      message  : only shown when the condition is false

let age = 20;
console.assert(age > 25 , "Age is not greater than 25");
// Assertion failed: Age is not greater than 25

//2. console.clear()
// This method is used to clear the console
console.clear();

//3. console.count()
// This method is used to count the number of times it is log in the console
function greet(name) { 
    console.count("Greet called");
    console.log(`Hello, ${name}`)
}

greet('Dinesh');
greet("John");

//4. console.countReset()
// This method is used to reset the count of the label

function greet(user) {
    console.count(user);
    console.log(`Hello, ${user}`);
}
greet("bob");
greet("alice");
greet("alice");
console.countReset("bob");
console.count("alice");

//5. console.debug()
// This method is used to log the debug level messges to the broser console
// These messages are hiddens are hidden by default by some of the browser we can enable it by selecting "Verbose" or "Default"

const user = { name: "Dinesh", role: "Developer" };
console.debug("User details:", user);


