let a = 5;
let b = 10;

// ADDITION ASSIGNMENT
a += b;  
console.log(a); // 15

// SUBTRACTION ASSIGNMENT
a -= b;  
console.log(a); // 5

// MULTIPLICATION ASSIGNMENT
a *= b;  
console.log(a); // 50

// DIVISION ASSIGNMENT
a /= b;  
console.log(a); // 5

// MODULUS ASSIGNMENT
a %= b;  
console.log(a); // 5

// EXPONENTIAL ASSIGNMENT
a **= 2;  
console.log(a); // 25 (a = 5^2)

// LEFT-SHIFT ASSIGNMENT
a <<= 1;  
console.log(a); // 50 (Shifts bits left by 1 position)

// RIGHT-SHIFT ASSIGNMENT
a >>= 1;  
console.log(a); // 25 (Shifts bits right by 1 position)

// BITWISE AND ASSIGNMENT
a &= b;  
console.log(a); // 8 (Bitwise AND of 25 and 10)

// BITWISE OR ASSIGNMENT
a |= b;  
console.log(a); // 10 (Bitwise OR of 8 and 10)

// BITWISE XOR ASSIGNMENT
a ^= b;  
console.log(a); // 0 (Bitwise XOR of 10 and 10)

// LOGICAL AND ASSIGNMENT
a &&= b;  
console.log(a); // 0 (Since a is falsy, a becomes 0)

// LOGICAL OR ASSIGNMENT
a ||= b;  
console.log(a); // 10 (Since a is falsy, a takes b's value)
