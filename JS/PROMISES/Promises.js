/**
 * A Promise represents the result of an asynchronous operation.
 * 
 * It takes an executor function with two parameters: resolve (for success) and reject (for failure).
 * Once a promise is settled (either resolved or rejected), it becomes immutable.
 * 
 * Below is a step-by-step example to demonstrate this.
 */

// Function that returns a Promise (simulating asynchronous operation)
function getWeather() {
    return new Promise((resolve, reject) => {
        // Simulate a failure scenario
        reject("Sunny!!!");
    });
}

// Handler for successful resolution of the Promise
function Success(data) {
    console.log(`✅ Resolved: ${data}`);
}

// Handler for failure/rejection of the Promise
function Failure(error) {
    console.log(`❌ Rejected: ${error}`);
}

// Optional cleanup or final step that runs regardless of success or failure
function End() {
    console.log('🔚 Operation completed (either resolved or rejected)');
}

// Using the promise with .then, .catch, and .finally
getWeather()
    .then(Success)   // Runs if promise is resolved
    .catch(Failure)  // Runs if promise is rejected
    .finally(End);   // Runs always, after then/catch

