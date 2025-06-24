const mcu_heros = ["thor", "iron man", "hulk", "black widow", "captain america"];
const dc_heros = ["superman", "batman", "wonder woman", "flash", "aquaman"];
// mcu_heros.push(dc_heros)
// console.log(mcu_heros);
// // console.log(mcu_heros[5][0]); // Accessing the first hero from dc_heros array

// const all_heros = mcu_heros.concat(dc_heros);
// console.log(all_heros);

// const all_new_heros = [...mcu_heros, ...dc_heros];
// console.log(all_new_heros);

const arr2 = [1, 2, 3, 4, 5,[1, 2, 3],[6, 7, 8]];
const arr3 = arr2.flat();
// console.log(arr3); // Flattening the array to a single level


console.log(Array.isArray("tapan"))
console.log(Array.from("tapan")) // Converts a string to an array of characters
console.log(Array.from({ name: "tapan"})) // Converts an object to an array with a single element containing the object; (interesting)

let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1, score2, score3)); // Creates an array from the given arguments

