//Uncomment the code to see the normal function code
// let value = "Dinesh";
// function showMessage(){
//     let value = "Divya";
//     console.log(value);
// }
// showMessage(); // Divya
// console.log(value);  // Dinesh


//Let's understand the concept the shadowing consider the below code
let value = "Dinesh";
function showMessage(){
    value = "Divya";
    console.log(value);
}
console.log(value); //Here the global variable is printed "Dinesh"
showMessage(); //Here the local variable is printed "Divya" 
console.log(value);  //insted of the global variable here the local variable is printed agein
// this is because, if u could see clearly the value in the function is not ddeclared by let|const
// so it replaces the global varible value to local variable, and since we call the function before the value is modified 
// and we get the asn as "Divya"

/*Note:
-> The concept is called as "SHADOWING".
-> In the Normal Function hoisting is done.
*/
