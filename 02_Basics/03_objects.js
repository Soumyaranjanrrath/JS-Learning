//singleton

//object literals

const mySym = Symbol("key1"); // Creating a symbol

const User = {
    name: "Tapan",
    "full name": "Tapan Rath", // Property with a space in the name
    age: 20,
    [mySym]: "key1", // Using a symbol as a property value
    location: "India",
    email:"tapan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}
// console.log(User["name"]); // Accessing the name property of the User object
// console.log(User.name); // Another way to access the name property of the User object
// console.log(User["full name"]); // Accessing the full name property of the User object
// console.log(User.mySym); // Attempting to access the symbol property directly (will be undefined)
// console.log(User[mySym]); // Accessing the symbol property of the User object using the symbol variable

User.email = "soumya@gmail.com";
// Object.freeze(User); // Freezing the User object to prevent further modifications
User.email = "soumya2005@gmail.com"; // Attempting to change the email property after freezing (will not work)
// console.log(User); 

User.greet = function() { // Adding a new method to the User object
    console.log("Hello User");
}
console.log(User.greet()); // Calling the greet method of the User object

User.greetTwo = function() {
    console.log(`Hello ${this.name}`);
}// Adding another method to the User object that uses 'this' to access the name property
console.log(User.greetTwo()); // Calling the greetTwo method of the User object
// console.log(User.greet);

