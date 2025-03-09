let max = prompt("Enter the maximum number:");

let random = Math.floor(Math.random() * max) + 1;

let attempts = 0;
let maxattempts = 3;

let guess = prompt(`Guess the number between 1 and ${max} or enter "quit" to exit:`);

while (true) {
    if (guess.toLowerCase() === "quit") {
        console.log("Quitting the game!");
        break;
    }

    attempts++;

    if (guess == random) {
        console.log(`🎉 Congrats! Your guess was right: ${random} in ${attempts} attempts.`);
        break;
    } else if (guess < random) {
        guess = prompt(`Hint: Too small! Try a larger number. Attempts left: ${maxattempts - attempts}`);
    } else {
        guess = prompt(`Hint: Too large! Try a smaller number. Attempts left: ${maxattempts - attempts}`);
    }

    if (attempts >= maxattempts) {
        console.log(`❌ Game Over! You've used all ${maxattempts} attempts. The correct number was ${random}.`);
        break;
    }
}
