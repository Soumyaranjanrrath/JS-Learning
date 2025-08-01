//Premitive --

//7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

//Dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggeIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber= 34554345544445353233432334n


//Reference (non-primitive)

//Array, Objects, Functions

const heros =["shkatman", "naagraj", "thor"];
let myObj = {
    name:"tapan",
    age:"20"
}

const myFunction =function() {
    console.log("Hello world");
}

console.log(typeof heros);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive ), heap (non-Primitive)

let myName= "Tapanrath"

let myName2 =myName
myName2 = "soumya"
console.log(myName);
console.log(myName2);


let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "tapan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
