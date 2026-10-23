// ========================================================
// LESSON 5: Variables (let, const, var) and Naming Conventions
// ========================================================

// Description: Learning how to save values in variables, re-assign them, and use template strings (interpolation).

// 1. VARIABLES (let vs const)
let variable1 = 3;
console.log(variable1);

const calculation = 2 + 2;
console.log(calculation);

// 2. RE-ASSIGNING VARIABLES
// You can change a 'let' variable, but you cannot change a 'const' variable.
variable1 = 5;
console.log(variable1);

variable1 = variable1 + 1;
console.log(variable1);

// 3. INTERPOLATION PRACTICE
const name = 'Ganiya';
console.log(`My name is ${name}`); // Fixed: using the variable 'name'

const cost = 5 + 2 * 3 + 9;
console.log(`Cost of food: $${cost}`);

const tax = cost * 0.1;
console.log(`Tax: $${tax}`);

const totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);
