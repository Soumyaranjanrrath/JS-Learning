const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => { return num +10})

const newNums = myNums.map((num) => num*10) .map( (num) => num+1).filter((num) => num > 50); 
console.log(newNums);// This will log an array with each number increased by 10 and then increased by 1, and finally filtered to include only numbers greater than 50 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, currval) => {
    console.log(`Accumulator: ${acc}, Current Value: ${currval}`);
    return acc + currval;
},0)
console.log(sum); // This will log the sum of all numbers in the array, which is 15
