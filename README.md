# ES6 Drills
## Objectives
- The objective of this lab assignment is to practice ES6 fundamentals that were explored in lecture.

## Template Literals and Default Parameters Value
1. Declare a new function named favMovie that takes in one parameter. $
2. Inside the function log a message to the console that tells the user what your favorite movie is. Note: Use template literals. Example:
    function favMovie(movie) {
        console.log(`my favorite movie is ${movie}`);
    } $
3. Call the function.$
4. Open your developer tools and view what is printed in the console. You should see your message and parameter is undefined. $
5. Now pass in the argument, your favorite movie, when you call the function, update the parameter of the function to have a default value of “The Room”. $
6. Call the function without passing a movie name of your own, take note to what is printed as the movie in the console.
7. Refresh your browser and you should now see your message and the parameter is defined.
8. Add another parameter to your function so you can pass it a name, give this parameter a default value of “world”.
9. Update the string so that you include your name in the message. Example:
10. console.log(`my name is ${name} and my favorite movie is ${movie}`); $
11. Call function favMovie by passing it values for both a movie and a name, and also call it without passing it anything. Do the default values appear in the console? $
## Arrow Functions
12. Change the favMovie function to an ES6 Arrow Function. $
13. Call the function. $
14. Verify that your message is still logged in the console. $
15. Use the shorthand "concise body" syntax for this arrow function so that the console.log statement is on the same line as the arrow. $
16. Create a new arrow function called getFirstName.
17. Create a second arrow function using the concise body syntax. Both function will serve the same purpose.
18. Each function will accept a string that will be someone’s full name (first and last separated by a space). (hint) $
19. When the full name is passed to the function, the function should return the first name.$
20. Create a new function that will take in two parameters and return an object literal. It should have two properties, the exponent result (x^y) and the product of the two numbers.
21. Log each property using a template literal.$
#### Hints
- The split method is used to split a string into an array of substrings, and returns the new array.
## Spread Syntax
22. Write a function that takes 3 parameters: name, location, favFood.$
23. Create an array with 3 values, have the values match the order of the 3 parameters. Ex. let arr = [“Paul”, “Birmingham”, “Kimchi”];$
24. Spread operators allow us to take multiple values, like an array, and insert them as 3 separate values.$
25. Using a spread operator insert the values of the array into the function, check the console and see what appears.$
26. Create a variable that has a value of your name.$
27. Write a function that takes a parameter, name the parameter whatever you’d like.$
28. Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array.$
29. Using a for loop, loop through the spread string and console log each value of the string.$