// ✅ Without Callback: Goodbye executes immediately, before Hello (as Hello is delayed)

// Step 1: Normal functions
function hello() {
    console.log('Hello');
}

function goodbye() {
    console.log('Goodbye!');
}

// Step 2: Using setTimeout — asynchronous behavior
setTimeout(hello, 2000); // Executes after 2 seconds
goodbye(); // Executes immediately

// Output:
// Goodbye!
// (after 2s) Hello

// ❌ Problem: goodbye() runs before hello() finishes
// ✅ Solution: Use Callback to ensure order

// Step 3: Using Callback to control execution order
function hello(callback) {
    console.log('Hello');
    callback(); // This ensures goodbye() runs after hello
}

function goodbye() {
    console.log('Goodbye!');
}

// Step 4: Calling hello with goodbye as a callback
hello(goodbye);

// Output (in order):
// Hello
// Goodbye!
