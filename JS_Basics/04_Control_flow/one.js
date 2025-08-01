// if

if (true) {
  console.log('This will always run');
}
if (false) {
  console.log('This will never run');
}

// if-else
const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log('User is logged in');
}
else {
  console.log('User is not logged in');
}

//>, <,  <=, <=, ==, !=, ===

// const score = 250;

// if (score > 200) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`Your power is ${power}`); // ReferenceError: power is not defined

// const balance = 1000;
// if (balance >= 500) console.log('You can withdraw money'), console.log('You can buy a new phone');
// ;

//nesting

// if (balance >= 500) {
//   console.log('You can withdraw money');
//   if (balance >= 1000) {
//     console.log('You can buy a new phone');
//   }
//   else if (balance >= 500) {
//     console.log('You can buy a used phone');
//   }
//   else {
//     console.log('You cannot buy a new phone');
//   }
// }


const debitCard = true; 
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard && 2==3) {
  console.log('You can buy a new phone');
}
if(loggedInFromGoogle || loggedInFromEmail) {
  console.log('You can login to your account');
}