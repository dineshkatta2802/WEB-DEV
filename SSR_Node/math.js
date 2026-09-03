const add = (a, b) => {
    return a+b;
}

const subtract = (a, b) => {
    return a-b;
}

// Single Exports: 
// module.exports = add;
// module.exports = {add};
// module.exports = {add : add}
// module.exports = {addition : add}

// ----------

// Multiple Exports:
// module.exports = {
//     add,
//     subtract
// }
// module.exports = {
//     add : add,
//     subtract : subtract
// }
// module.exports = {
//     addition : add,
//     subtraction : subtract
// }