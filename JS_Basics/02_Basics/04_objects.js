// const tiktokUser = new Object() //singleton object
const tiktokUser = {} //object literal (non-singleton object)

tiktokUser.id = "12345";
tiktokUser.name = "ross";
tiktokUser.isLoggedIn = false;
// console.log(tiktokUser); 

const regUser = {
    email : "ross@gmail.com",
    fullName: {
        UserFullName: {       
            firstName: "Ross",
            lastName: "Bell",
        }
    }
}
// console.log(regUser.fullName.UserFullName.firstName);// Accessing nested properties in the regUser object

const ob1 = {1:"a", 2:"b", 3:"c"};
const ob2 = {4:"d", 5:"e", 6:"f"};

// const ob3 = {ob1, ob2}; // Creating a new object that contains ob1 and ob2 as properties
const ob4 = Object.assign({}, ob1, ob2); // Merging ob1 and ob2 into a new object using Object.assign
// console.log(ob4); // Displaying the merged object ob4  => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const ob5 = {...ob1, ...ob2}; // Merging ob1 and ob2 into a new object using the spread operator
// console.log(ob5); // Displaying the merged object ob5  => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const player = [
    {
        id: "12345",
        name: "tapan",
    },
    {
        id: "12346",
        name: "soumya",
    },
    {
        id: "12347",
        name: "ross",
    },
    {
        id: "12348",
        name: "vinay",
    },
    {
        id: "12349",
        name: "munna",
    }
]

// console.log(player[0].name); // Accessing the name property of the first player object in the player array

console.log(tiktokUser);
console.log(Object.keys(tiktokUser)); // Displaying the keys of the tiktokUser object
console.log(Object.values(tiktokUser)); // Displaying the values of the tiktokUser object
console.log(Object.entries(tiktokUser)); // Displaying the key-value pairs of the tiktokUser object as an array of arrays

console.log(tiktokUser.hasOwnProperty("id")); // Checking if the tiktokUser object has a property named "id"


const course = {
    name: "JavaScript",
    price: 999,
    isPaid: true,
    
};
course.price
const {name} = course; // Destructuring to extract the name property from the course object
console.log(name); // Displaying the extracted name property



