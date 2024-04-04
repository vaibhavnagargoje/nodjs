// Addition function
function add(a, b) {
  return a + b;
}

// Subtraction function
function subtract(a, b) {
  return a - b;
}

// Multiplication function
function multiply(a, b) {
  return a * b;
}

// Division function
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

const PI = 22 / 7;

exports.modulus = (a, b) => a % b;

// Export the calculator module functions
module.exports = {
  addFunc: add,
  subtract,
  mulFunc: multiply,
  divide,
  type: "Functions",
  PI, // const variable
};
