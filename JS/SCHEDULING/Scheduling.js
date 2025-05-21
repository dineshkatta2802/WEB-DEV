// 1. setTimeout(function, delay, arguments...)
// 1000ms = 1s

function sayHi() {
    console.log("Hello");
}
let timeoutId = setTimeout(sayHi, 1000); // without arguments

function greeting(phrase, who) {
    console.log(phrase + ', ' + who);
}

let greetingTimeoutId = setTimeout(greeting, 2000, 'Hello', 'Dinesh'); // Correct usage

clearTimeout(timeoutId); // This cancels the scheduled sayHi before it executes

// 2. setInterval(function, delay, arguments...)

let intervalId = setInterval(greeting, 3000, 'Hi', 'Again');

// You can clear it using clearInterval(intervalId);

clearInterval(intervalId);