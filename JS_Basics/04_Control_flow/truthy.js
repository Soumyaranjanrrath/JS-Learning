// const userEmail = "ta@gmail.com"

// if (userEmail) {
//   console.log("User email is set");
// }
// else {
//   console.log("User email is not set");
// }

// Truthy and Falsy values in JavaScript

// Falsy values: false, 0, "", null, undefined, -0, 0n, NaN, BigInt(0)
// Truthy values: everything else (including "0",'false', '', [], {}, etc.)

// Example of truthy values

// const truthyValue = "Hello, World!";
// if (truthyValue) {
//   console.log("This is a truthy value:", truthyValue);
// }
// // Example of falsy values

// const falsyValue = 0;
// if (!falsyValue) {
//   console.log("This is a falsy value:", falsyValue);
// }

// const emptyArray = {};
// if (Object.keys(emptyObject).length === 0) {
//   console.log("This is an empty object");
// }

//Nullish Coalescing Operator

// let val1;
// val1=5 ?? 10; // If val1 is null or undefined, it will be assigned 10
// console.log(val1); // Output: 5
// let val2 = null;
// val2 = val2 ?? 10; // If val2 is null or undefined, it will be assigned 10
// console.log(val2); // Output: 10

//conditional (ternary) operator
//condition ? true : false

const iceTea = 100
iceTea > 50 ? console.log("Ice tea is good") : console.log("Ice tea is bad");
