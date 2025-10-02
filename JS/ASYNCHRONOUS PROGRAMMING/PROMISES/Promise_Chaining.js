/**
 * This example demonstrates how to use Promise chaining.
 * Each `.then()` handles the result of the previous one.
 * This is useful when you need to perform multiple asynchronous operations in sequence.
 */

// Simulated async function to get weather
function getWeather() {
    return new Promise((resolve, reject) => {
        // Simulating a success scenario
        resolve("Sunny");
    });
}

// Step 1: Success handler
function handleSuccess(data) {
    console.log(`✅ Weather: ${data}`);
    return `${data} with clear skies`; // Returning data to next `.then()`
}

// Step 2: Another transformation
function addTemperature(info) {
    console.log(`🌡️ Info: ${info}`);
    return `${info}, 30°C`; // Passing to next `.then()`
}

// Step 3: Final transformation
function completeReport(finalInfo) {
    console.log(`📋 Final Report: ${finalInfo}`);
}

// Step 4: Error handler
function handleFailure(error) {
    console.log(`❌ Error: ${error}`);
}

// Step 5: Final block
function handleEnd() {
    console.log("🔚 Operation finished.");
}

// Chained Promise
getWeather()
    .then(handleSuccess)
    .then(addTemperature)
    .then(completeReport)
    .catch(handleFailure)
    .finally(handleEnd);
