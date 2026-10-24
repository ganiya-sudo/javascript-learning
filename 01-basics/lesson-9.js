<!DOCTYPE html>
<!-- ========================================================
LESSON 9: Arrays and Loops
======================================================== -->

<html>
  <head>
    <title>Arrays and Loops</title>
  </head>
  <body>
    <script>
      // 1. CREATING THE ARRAY
      const toDoList = ["javaScript", "watchMovies", "thinkAboutMyLife"];

      // 2. UPDATING ITEMS BY INDEX
      toDoList[0] = "Learn JavaScript";
      toDoList[1] = "Watch Movies";
      toDoList[2] = "Think About My Life";
      
      // 3. ADDING A NEW ITEM (.push)
      toDoList.push("Sleep");

      // 4. LOOPING THROUGH THE ARRAY
      toDoList.forEach((task) => {
        console.log(task);
      });
    </script>
  </body>
</html>
