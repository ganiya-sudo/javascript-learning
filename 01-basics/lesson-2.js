// ========================================================
// LESSON 2: Numbers, Math, and Floating-Point Errors
// ========================================================

// Description: Learning order of operations (BODMAS/PEMDAS), how decimals (floats) can be inaccurate in JavaScript, and how to fix it using Math.round().

// 1. ORDER OF OPERATIONS (Brackets first, then multiply/divide, then add/subtract)
20.95 + 7.99 * 2; // Result: 36.93
(20.95 + 7.99 * 2) * 0.1; // Result: 3.693

// 2. THE FLOATING-POINT ERROR
// Computers struggle with decimals. Notice how the result is slightly off.
20.95 + 7.99; // Result: 28.939999999999998

// 3. THE FIX: ROUNDING
// A common trick is to multiply by 100, do the math, then divide by 100.
(2095 + 799) / 100; // Result: 28.94

// 4. USING MATH.ROUND()
Math.round(2.2); // Result: 2
Math.round(2.8); // Result: 3

// 5. COMBINING MATH WITH MATH.ROUND()
Math.round((2095 + 799) * 0.1) / 100; // Result: 2.89
