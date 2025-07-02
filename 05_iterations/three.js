// for of

// [{},{},{}]
// [ '', '', '' ]

const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
    //console.log(`Value is: ${value}`);
}

const greeting = "Hello, World!";
for (const char of greeting) {
    if (char === ' ') {
        continue; // skips the space character
    }
   // console.log(`Character is: ${char}`);
}

//Maps

const myMap = new Map()
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'Wonderland');    

// console.log( myMap);

for (const [key,value] of myMap) {
    // console.log(key, '-', value);
}

const myObj = {
    game :'BGMI',
    game2 :'PUBG',
}

// for (const [key, value] of myObj) {
//     console.log(key, '-', value);
// } // This will not work as expected because myObj is not iterable

for (const key in myObj) {
    console.log(`${key} - ${myObj[key]}`);
}

const programmingLanguages = ['js', 'py', 'java', 'cpp'];

for (const key in programmingLanguages) {
    console.log(programmingLanguages[key]);
} // This will log the indices of the array