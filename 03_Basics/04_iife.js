//IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
// It is a design pattern that helps to create a private scope for variables and functions, preventing
// them from polluting the global scope. This is particularly useful in JavaScript, where variables
// declared without `var`, `let`, or `const` can become global variables.   

(function Hello() {
  console.log("Hello from IIFE");
})(); // Immediately Invoked Function Expression

(() => {
  console.log("Hello from IIFE Arrow Function");
})(); // Immediately Invoked Function Expression with Arrow Function