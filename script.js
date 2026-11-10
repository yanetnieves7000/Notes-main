// 1. Declare two numbers
const num1 = 15;
const num2 = 4;
let result;

//2. Log sum, difference, product, quotient, and remainder to the console
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);
// 3. Use if-else statements to compare the two numbers and log which one is greater, or if they are equal
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
} else {
    console.log(`${num1} is equal to ${num2}`);
}
 Math.round(4.7); // 5
 const now = new Date();
 now.getFullYear(); // 2026
 now.getMonth(); // 0-11 (January is 0, December is 11)
 now.getDate(); //1-31
 now.getDay(); // 0-6 (Sunday is 0, Saturday is 6)