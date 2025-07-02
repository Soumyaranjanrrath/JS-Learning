const coding = ["js", "py", "java", "cpp"];
// coding.forEach(function(val) {
//     console.log(val);
    
// });

// coding.forEach((val) => {
//     console.log(val);
// }); // This will log each value in the array

function printMe(item) {
//     console.log(`Item: ${item}`);
}

// coding.forEach(printMe); // This will log each value in the array using a named function

coding.forEach((item, index, arr) => {
    // console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});  // This will log each value along with its index and the entire array

const myCoding = [
    {
        languagename: "JavaScript",
        languagefileName: "js",
    },
    {
        languagename: "Python",
        languagefileName: "py",
    },
    {
        languagename: "Java",
        languagefileName: "java",
    },
    {
        languagename: "C++",
        languagefileName: "cpp",
    }
]
myCoding.forEach((item, index, arr) => {
    console.log(`Item: ${item.languagename}, Index: ${index}, Array: ${arr}`);
}); // This will log each object in the array along with its index and the entire array