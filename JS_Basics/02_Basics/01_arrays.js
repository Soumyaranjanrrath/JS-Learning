//array

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Thor", "Captain America", "Black Widow", "Hulk"]
 
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);

//Array Methods

myArr.push(6); // adds 6 to the end of the array
myArr.pop(); // removes the last element of the array
myArr.unshift(0); // adds 0 to the beginning of the array
myArr.shift(); // removes the first element of the array
myArr.splice(2, 1); // removes the element at index 2
myArr.splice(2, 0, 2.5); // adds 2.5 at index 2
console.log(myArr);

const newArr = myArr.join()
console.log(newArr); // converts the array to a string
console.log(newArr.split(",")); // converts the string back to an array

//slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // creates a new array with elements from index 1 to 2
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1, 3); // removes elements from index 1 to 3 and returns them
console.log(myn2);

