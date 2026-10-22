// ========================================================
// LESSON 3: Strings, Concatenation, and Interpolation
// ========================================================

// Description: Learning how to handle text (Strings), the difference between concatenation (+) and template strings (``), and using escape characters (\' and \n).
// Observation: Template strings (interpolation) are much cleaner and easier to read than concatenation, though concatenation is still very common in older codebases.

// 1. STRING CONCATENATION (The Old Way)
// Using the plus (+) sign to combine strings and variables.
'some' + 'text'; 
'items (' + (1 + 1) + '): $' + (2095 + 799) / 100;
// Result: 'items (2): $28.94'

// 2. STRING INTERPOLATION / TEMPLATE STRINGS (The Clean Way)
// Using backticks (`) and ${} to insert variables directly into a string.
`Items (${1 + 1}): $${(2095 + 799) / 100}`;
// Result: 'Items (2): $28.94'

// 3. ESCAPE CHARACTERS
// Using the backslash (\) to tell JavaScript to treat a special character as plain text.
'I\'m learning JavaScript'; // Escapes the single quote so it doesn't break the string.
alert('some\ntext'); // The \n creates a new line inside the alert box.

// 4. TYPEOF
// Checking the data type of a value.
typeof 2; // Result: 'number'
typeof 'hello'; // Result: 'string'
