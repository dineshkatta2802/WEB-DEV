// Callback hell is the concept where nested callbacks stack below one another
// forming a pyramid — often called the "Pyramid of Doom"
// This makes the program difficult to read and maintain

function Walk(callback_1) {
    setTimeout(() => {
        console.log('Walked!');
        callback_1();
        console.log('Callback of Walk : ',callback_1);
    }, 1500);
}

function Cleaned(callback_2) {
    setTimeout(() => {
        console.log('Cleaned!!');
        callback_2();
        console.log('Callback of Cleaned : ',callback_2);
    }, 2500);
}

function Bath(callback_3) {
    setTimeout(() => {
        console.log('Bathed!!!');
        callback_3();
        console.log('Callback of Bath : ',callback_3);
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