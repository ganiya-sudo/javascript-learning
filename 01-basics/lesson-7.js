<!-- ========================================================
LESSON 7: Functions and Objects
======================================================== -->

<!DOCTYPE html>
<html>
  <head>
    <title>Functions and Objects</title>
  </head>
  <body>
    <script>
      // 1. FUNCTIONS
      // A machine that takes a number and multiplies it by 2.
      function multiplyByTwo(currentNumber) {
        return currentNumber * 2;
      }

      let myScore = multiplyByTwo(10); // Changed to 10 to prove it works
      console.log(myScore); // Output: 20

      // 2. OBJECTS
      // A box with labels holding multiple pieces of data.
      const user = {
        name: "Ganiya",
        role: "TSE",
        yearsOfExperience: 3
      };

      // Accessing the data using dot notation
      console.log(user.name); 
      console.log(user.yearsOfExperience); 
    </script>
  </body>
</html>
