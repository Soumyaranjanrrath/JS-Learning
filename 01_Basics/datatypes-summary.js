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
