const { use } = require("react");

function sayMyName(){
    // console.log("My name is Tapan Rath");
}

// sayMyName(); // Calling the function to display the name

function addTwoNumbers(num1, num2){
    return num1 + num2; // Returning the sum of the two numbers
}
//console.log(addTwoNumbers(10, 20)); // Calling the function with arguments 10 and 20 and displaying the result

function loginUserMsg (username) {
    if (!username) {
        // console.log("please enter a username"); // Prompting the user to enter a username if not provided
        return
    }
    // return `User ${username} is logged in`; // Returning a message indicating the user is logged in
}
// console.log(loginUserMsg("Tapan")); // Calling the function with the username "Tapan" and displaying the result

// console.log(loginUserMsg()); // Calling the function without a username to demonstrate the prompt for input


function calculateCartPrice(v1, v2, ...num1) {
    return num1
}
console.log(calculateCartPrice(100, 200, 300)); // Calling the function with multiple arguments and displaying the result

const user = {
    username: "Tapan",
    age: 20,
}

function handleObject(obj) {
    console.log(`Username is ${obj.username} and age is ${obj.age}`); // Displaying the username and age from the object
}
//handleObject(user); // Calling the function with the user object to display its properties

handleObject({
    username: "Tapan",
    age: 20,
}); // Calling the function with an object literal to display its properties


const arr = [1, 2, 3, 4, 5];    
function handleArray(getArr) {
    return getArr[1]
}
// console.log(handleArray(arr)); // Calling the function with the array and displaying the second element