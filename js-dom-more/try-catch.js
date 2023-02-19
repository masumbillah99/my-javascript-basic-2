const day = 'day the hero';
console.log(day);
console.log(25);
// console.log(month);
// let month = 'January';
console.log(61);
console.log(65);

// try-catch-finally to handler code with error
try {
    console.log('inside try');
    // console.log(year);
    console.log(month);
    let month = 'January';
    console.log('after error');
}
catch (error) {
    console.log('inside catch');
    // console.log(error);
}
finally {
    console.log('finally done');
}
console.log('last line of the code');