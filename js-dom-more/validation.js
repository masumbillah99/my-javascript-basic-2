const num = 23;
// string, number, boolean
if (typeof num === 'number') {
    console.log('value is a number');
} else {
    console.log('value is not a number');
}

const numbers = [3, 5, 6, 7, 65, 67];
const student = { name: 'Rongila Rafsan', job: 'khawadawa kora' };
// console.log(typeof numbers);
console.log(typeof student);
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(student));

/**  get confused by isNaN  */
const nan = 'ab';
if (isNaN(nan)) {
    console.log(true);
} else {
    console.log(false);
}