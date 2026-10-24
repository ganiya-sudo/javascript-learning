// ========================================================
// LESSON 10: Advanced Functions (Arrow Functions & Returns)
// ========================================================

// 1. BASIC ARROW FUNCTIONS & RETURNS
// A machine that takes a number and returns it multiplied by 2.
const multiplyByTwo = (num) => {
  return num * 2;
};

// A machine that takes two numbers and returns the calculated tax.
const calculateTax = (price, taxRate) => {
  return price * taxRate;
};

console.log(multiplyByTwo(5)); 
console.log(calculateTax(100, 0.1)); 

// ========================================================
// 2. USING LET (Mutable variables)
// ========================================================

// Example A: Bug Severity
let bugSeverity = "Low";

const updateSeverity = () => {
  bugSeverity = "High";
  console.log("The severity is now: " + bugSeverity);
};

updateSeverity();

// Example B: Database Connection Status
let connectionStatus = "Offline";

const connectToDatabase = () => {
  connectionStatus = "Online";
  console.log("The connection is now: " + connectionStatus);
};

connectToDatabase();
