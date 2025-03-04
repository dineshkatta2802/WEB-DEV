// --- Arithmetic Operators ---

// 1. Addition Operator
let x = 10 + 20;
console.log(x); // 30

// Number + String => Concatenation
let y = 5 + "Hello";
console.log(y); // "5Hello"

// 2. Subtraction Operator
let s = 10 - 20;
console.log(s); // -10

let u = "Hello" - 1;
console.log(u); // NaN (String cannot be converted to a number)

// 3. Multiplication Operator
let m = 10 * 20;
console.log(m); // 200

let l = Infinity * 0;
console.log(l); // NaN (Multiplying Infinity with 0 is undefined)

let t = Infinity * Infinity;
console.log(t); // Infinity

let i = "Hi" * 2;
console.log(i); // NaN (String cannot be converted to a number)

// 4. Division Operator
let d = 10 / 20;
console.log(d); // 0.5

let o = "Hello" / 2;
console.log(o); // NaN (String cannot be converted to a number)

// 5. Modulus Operator (Remainder)
let a = 20 % 20;
console.log(a); // 0 (20 is completely divisible by 20)

let b = 1 % -1;
console.log(b); // 0 (1 divided by -1 gives remainder 0)

// 6. Exponentiation Operator
let c = 10 ** 3;
console.log(c); // 1000 (10 raised to the power 3)

// 7. Increment Operator
let e = 20;
console.log(e++); // 20 (Post-increment: prints first, then increments)
console.log(++e); // 22 (Pre-increment: increments first, then prints)

// 8. Decrement Operator
let f = 20;
console.log(f--); // 20 (Post-decrement: prints first, then decrements)
console.log(--f); // 18 (Pre-decrement: decrements first, then prints)
