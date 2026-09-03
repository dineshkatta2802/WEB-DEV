const math = require('./math.js');

// Single Exports : 

// (i) module.exports = add;
// math(2,3);

// (ii) module.exports = {add}
// math.add(2,3);

// (iii) module.exports = {add : add}
// math.add(2,3);

// (iv)  module.exports = {addition : add}
// math.addition(2,3);

// ----------------------------------------

// Multiple Exports

// (i) math.add(2,3);
//     math.subtract(20,10);

// (ii) math.add(2,3);
//      math.subtract(20,10);

// (iii) math.addition(2,3);
//       math.subtraction(20,10);

// ----------------------------------------

// Inline Exports

// (i) math.add(2,3)

// (ii) math.addition(2,3)

//         or

// (i) math.add(2,3)

// (ii) math.addition(2,3)