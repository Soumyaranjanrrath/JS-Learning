const name = "tapan"
const repoCount = 3

// console.log(name + repoCount + "Value");

console.log(`Hello my name id ${name} and my repo count is ${repoCount} `);

const gameName = new String('Tapan')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newStr = gameName.substring(0,3)
console.log(newStr);

const anotherStr = gameName.slice(-8, 4)
console.log(anotherStr);

const trimStr = "         Tapan            "
console.log(trimStr);
console.log(trimStr.trim());

