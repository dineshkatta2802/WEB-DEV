// 1.Creation
let now = new Date();
console.log(now);

//To soe no of milliseconds from 1970 we can use something like this
let date = new Date(0); 
console.log(date);//Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
let today = new Date(24 * 3600 * 1000);
console.log(today);//Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)
let yesterday = new Date(-24 * 3600 *1000);
console.log(yesterday);//Wed Dec 31 1969 05:30:00 GMT+0530 (India Standard Time)

//Date string
let datestring = new Date("2006-06-28");
console.log(datestring);//Wed Jun 28 2006 05:30:00 GMT+0530 (India Standard Time)

let newdate = new Date(2011, 0, 1, 0, 0, 0, 0); 
console.log(newdate);// 1 Jan 2011, 00:00:00
let newdate1 = new Date(2011, 0, 1);
console.log(newdate1); // the same, hours etc are 0 by default

//ACCESS COMPNENTS
//get methods
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getFullYear());
//set methods
now.setFullYear(2025);
now.setMonth(11); // December (0-based index)
now.setDate(25);
now.setHours(10, 30, 45); // 10:30:45
