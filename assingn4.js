//[1] Take two numbers and perform all the arithmetic
// operations over them

let num1 = 6;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);

//[2] Take 2 numbers and 2 strings and perform addition
// operation on them in same sequence

const str1 = "vinod";
const str2 = "ram";

console.log(str1 + str2 + num1 + num2);

//[3] Take 2 strings and 2 numbers and perform addition
// operation on them in same sequence

console.log(num1 + num2 + str1 + str2);

//[4] Write an operation to get its result as NaN.

console.log(num1 / str1);

// [5]Take 2 boolean variables as true and false and perform
// And and Or logical operation over them and print the
// result as well as operation

const val1 = true;
const val2 = false;

console.log(val1 & val1);
console.log(val2 & val1);
console.log(val1 & val2);
console.log(val2 & val2);

console.log(val1 | val1);
console.log(val2 | val1);
console.log(val1 | val2);
console.log(val2 | val2);

//[6] Take 2 variables and compare them using == and
// === such that result of both the comparisons operation
// is not equal."

let var1 = 5;
let var2 = "5";

console.log(var1 == var2);
console.log(var1 === var2);
