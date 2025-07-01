// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element ==  5) {
        // console.log("Found 5");
        
    }
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`  Inner loop: ${j}`);
        // console.log(i + '*' + j + '=' + (i * j));
    }
}

let myArray = ["apple", "banana", "cherry"];
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(`Element at index ${i}: ${element}`);
}

// break and continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        // console.log("Breaking at 5");
        break; // exits the loop when i is 5
    }
    // console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        // console.log("Skipping 5");
        continue; // skips the rest of the loop when i is 5
    }
    // console.log(i);
}

// for...of loop
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    // console.log(`Number: ${number}`);
}

