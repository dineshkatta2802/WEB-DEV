// In comparison operators, we get the value as a boolean (true | false).
let a = 10;
let b = 10;
let c = "10"; // This is a string

// --- EQUALITY OPERATOR ---
console.log(a == b);        // true  -> Both are numbers and equal
console.log(a == c);        // true  -> '10' (string) is converted to a number before comparison
console.log(0 == false);    // true  -> (0 == 0) as false is treated as 0

// --- INEQUALITY OPERATOR ---
console.log(a != b);        // false -> Both are equal
console.log(a != c);        // false -> (10 == '10') is true, so != returns false

// --- STRING COMPARISONS ---
console.log('2' > 1);       // true  -> '2' is converted to number (2 > 1)

// Lexicographical Order
console.log('Z' > 'A');        // true  -> 'Z' comes after 'A' in Unicode
console.log('Glow' > 'Glee');  // true  -> 'l' (from "Glow") comes after 'l' (from "Glee")
console.log('Bee' > 'Be');     // true  -> 'e' in "Bee" is compared with nothing in "Be", so "Bee" is greater

// Strings are compared character by character based on Unicode values.
// Uppercase letters (A-Z) come before lowercase letters (a-z).
// If one string is a prefix of another, the longer string is considered greater.

// --- SPECIAL CASES ---
// Falsy Values: 0, "", null, undefined, false, and NaN behave differently in comparisons.

// 1. NaN Cases
console.log(NaN != NaN);   // true  -> NaN is not equal to itself
console.log(NaN == NaN);   // false -> NaN is never equal to NaN
console.log(NaN === NaN);  // false -> NaN is never strictly equal to NaN

// 2. Null Cases
console.log(null == 0);    // false -> null is only loosely equal to undefined, not 0
console.log(null === 0);   // false -> strict comparison (different types)
console.log(null != 0);    // true  -> since null == 0 is false, null != 0 is true
console.log(null !== 0);   // true  -> strict comparison (different types)
// In relational operators, "null is converted to 0"
console.log(null > 0);     // false -> 0 > 0 is false
console.log(null < 0);     // false -> 0 < 0 is false
console.log(null >= 0);    // true  -> 0 >= 0 is true
console.log(null <= 0);    // true  -> 0 <= 0 is true

// 3. Undefined Cases
console.log(undefined == 0);  // false -> undefined is only equal to null
console.log(undefined === 0); // false -> strict comparison (different types)
console.log(undefined != 0);  // true  -> undefined is only equal to null
console.log(undefined !== 0); // true  -> strict comparison (different types)
// In relational operators, "undefined is converted to NaN"
console.log(undefined > 0);   // false -> NaN > 0 is false
console.log(undefined < 0);   // false -> NaN < 0 is false
console.log(undefined >= 0);  // false -> NaN >= 0 is false
console.log(undefined <= 0);  // false -> NaN <= 0 is false

// 4. Null vs Undefined
console.log(null == undefined);  // true  -> They are loosely equal
console.log(null === undefined); // false -> They are only loosely equal
