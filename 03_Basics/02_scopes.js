//var c = 30;
// let  a = 300
// if(true){
//     let a = 10 
//     const b = 20
//     console.log("INNER SCOPE : ", a); // 10
// }



// console.log(a); // 10
// console.log(b); // 20       
// console.log(c); // 30


function one() {
    const userName = "Tapan";

    function two() {
        const age = 20;
        console.log(userName);
    }
    console.log(age); // This will throw an error because 'age' is not defined in this scope
    two(); // Calling the inner function to display the username
}
// one(); // Calling the outer function to execute the code

if (true) {
    const userName = "Tapan";
    if ( userName === "Tapan") {
        const age = 20;
                console.log(userName); 
                console.log(age); // This will work because 'age' is defined in this scope
            }
        }