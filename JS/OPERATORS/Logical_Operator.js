//IMPORTANT NOTE:
/*Any number > 0 (e.g., 5, 100) → ✅ Truthy
2️⃣ Any string (e.g., "hello", "Dinesh") → ✅ Truthy
3️⃣ "" (Empty string) → ❌ Falsy
4️⃣ 0 (Zero) → ❌ Falsy
5️⃣ NaN (Not a Number) → ❌ Falsy
6️⃣ null → ❌ Falsy
7️⃣ undefined → ❌ Falsy
*/
// 1. Logical AND (&&) 
// Returns the first falsy value or the last truthy value if all are truthy.
console.log("AND Operator:");
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Values mixed with 0 (falsy)
console.log(1 && 0);   // 0 (Falsy value found)
console.log(1 && 1);   // 1 (Both truthy, returns last)
console.log(0 && 1);   // 0 (Falsy value found)
console.log(0 && 0);   // 0 (Falsy value found)

// SPECIAL CASES
console.log(5 && "hello"); // "hello" (Both truthy, returns last value)
console.log("hello" && 5); // 5
console.log(null && "text"); // null (First falsy value)
console.log(undefined && 123); // undefined (First falsy value)
console.log("" && "hello"); // "" (First falsy value)
console.log(NaN && 10); // NaN (First falsy value)


// 2. Logical OR (||)
// Returns the first truthy value or the last falsy value if all are falsy.
console.log("\nOR Operator:");
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// Values mixed with 0 (falsy)
console.log(1 || 1);   // 1 (First truthy value)
console.log(1 || 0);   // 1 (First truthy value)
console.log(0 || 1);   // 1 (First truthy value)
console.log(0 || 0);   // 0 (Last falsy value)

// SPECIAL CASES
console.log(5 || "hello"); // 5 (First truthy value)
console.log("hello" || 5); // "hello" (First truthy value)
console.log(null || "text"); // "text" (First truthy value)
console.log(undefined || 123); // 123 (First truthy value)
console.log("" || "hello"); // "hello" (First truthy value)
console.log(NaN || ""); // "" (Last falsy value)
console.log(NaN || 0); // 0 (Last falsy value)
console.log(NaN || 10); // 10 (First truthy value)


// 3. Logical NOT (!)
// Converts the value to a boolean and negates it.
console.log("\nNOT Operator:");
console.log(!true);  // false
console.log(!false); // true
console.log(!0); // true (0 is falsy)
console.log(!"hello"); // false (Non-empty strings are truthy)
console.log(!null); // true (null is falsy)

// Double NOT (!!) to explicitly convert values to boolean
console.log(!!""); // false (Empty string is falsy)
console.log(!!"text"); // true (Non-empty string is truthy)
console.log(!!NaN); // false (NaN is falsy)
console.log(!!0); // false (0 is falsy)
console.log(!!undefined); // false (undefined is falsy)


// 4. Nullish Coalescing Operator (??)
// Returns the right-hand operand when the left-hand operand is either null or undefined.
console.log("\nNullish Coalescing Operator:");
let username1 = null;
let username2 = "Dinesh";
let defaultname = "Guest";

console.log(username1 ?? defaultname); // "Guest"
console.log(username2 ?? defaultname); // "Dinesh"

// SPECIAL CASES
console.log(null ?? "default");       // "default"
console.log(undefined ?? "fallback"); // "fallback"
console.log(0 ?? 100);                // 0 (0 is not null/undefined)
console.log(false ?? true);           // false (false is not null/undefined)
console.log("" ?? "empty");           // "" (empty string is not null/undefined)
console.log(null ?? undefined ?? "last"); // "last"
console.log(undefined ?? null ?? false);  // false
console.log("" ?? 42);                    // "" (empty string is not null)
