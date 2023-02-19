/** 1. range error -- not in JS that frequently */
const numbers = [3, 4, 5, 8];
// you should not do it (most of the time)
numbers.length = 2;
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[25]);

/** 2. reference error --  */
// console.log(money);
const money = 50;

/** 3. syntax error --  */
// for (let i = 0; i < 5; i++) {}
// if(money >/2){}

/** 4. type error --  */
let student = {};
// console.log(student.name.lname);
// console.log(student.name);       // output: undefined
const num = 43;
// console.log(num.toUpperCase());

/** 5. URL (Uniform Resource Locator) error --  */
// the URLError object represents an error when a global URL handling function was
//  used in a wrong way.
decodeURI('%');

/** 6. Eval error --  */
// the eval error object used to identify errors when using the global eval() function.

/** 7. Aggregate error --  */

/** 8. Internal error --  */