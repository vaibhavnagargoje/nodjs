// Import the calculator module
const calculator = require("./calculator");
const { subtract, divide } = require("./calculator"); //destructure

const a = 10;
const b = 5;

console.log("Type:", calculator.type); // defined in module.exports
console.log("Value of PI:", calculator.PI); // defined in file and export through module

console.log("Addition:", calculator.addFunc(a, b));
console.log("Subtraction:", subtract(a, b));
console.log("Multiplication:", calculator.mulFunc(a, b));
console.log("Division:", divide(a, b));
console.log("Modules:", (calculator.modulus = (a, b))); // anonymous function
