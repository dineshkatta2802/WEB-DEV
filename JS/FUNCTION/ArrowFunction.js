//It is one of the most consised function declaration often used better than function expression
console.log("1.Single Parameter");
let square = x => x*x;
console.log(square(2));

console.log("-------------------------");

console.log("2.Multiple Parameter");
let add = (a,b) => a + b;
console.log(add(2,2));

console.log("-------------------------");

console.log("3.No Parameter");
let sayHello = () => "Hello";
console.log(sayHello());

console.log("-------------------------");

console.log("4.Multiline Function");
let Multiply = (a,b) => {
    let result = a*b;
    return result;
};
console.log(Multiply(2,2));