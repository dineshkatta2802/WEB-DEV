const math = ('./math.js');
// const var = ('/math.js');


// => Single Exports : 

// (i) module.exports = add;
// math(2,3);
//     or
// var(2,3);

// (ii) module.exports = {add}
// math.add(2,3);
//     or
// var.add(2,3);

// (iii) module.exports = {add : add}
// math.add(2,3);
//     or
// var.add(2,3);

// (iv)  module.exports = {addition : add}
// math.addition(2,3);
//     or
// var.addition(2,3);

// ----------

// => Multiple Exports

// (i) math.add(2,3);
//     or
// (i) var.add(2,3);
//     math.subtract(20,10);
//     or
//     var.subtract(20,10);

// (ii) math.add(2,3);
//     or
// (ii) var.add(2,3);
//      math.subtract(20,10);
//     or
//      var.subtract(20,10);

// (iii) math.addition(2,3);
//     or
// (iii) var.addition(2,3);
//       math.subtraction(20,10);
//     or
//       var.subtraction(20,10);