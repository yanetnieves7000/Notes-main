// 1. Declare two numbers
const num1 = 15;
const num2 = 4;

// 2. Calculate and log operations
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);

// 3. Use Math.round() on the quotient
console.log(`Rounded Quotient: ${Math.round(quotient)}`);
console.log(`Remainder: ${remainder}`);

// 4. Display current year using new Date()
const currentYear = new Date().getFullYear();
console.log(`Current Year: ${currentYear}`);
