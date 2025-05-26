// Callback hell is the concept where nested callbacks stack below one another
// forming a pyramid — often called the "Pyramid of Doom"
// This makes the program difficult to read and maintain

function Walk(callback) {
    setTimeout(() => {
        console.log('Walked!');
        callback();
    }, 1500);
}

function Cleaned(callback) {
    setTimeout(() => {
        console.log('Cleaned!!');
        callback();
    }, 2500);
}

function Bath(callback) {
    setTimeout(() => {
        console.log('Bathed!!!');
        callback();
    }, 3500);
}

// Callback Hell Example
Walk(() => {
    Cleaned(() => {
        Bath(() => {
            console.log('Finished');
        });
    });
});
