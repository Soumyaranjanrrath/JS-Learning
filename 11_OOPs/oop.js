// const user = {
//     username : "tapan",
//     logincount : 8,


//     getUserdetail : function () {
//         console.log("USer detailss!!!");
//         // console.log(`Username : ${this.username}`);
//         // console.log(this);    
//     }

// }

// console.log(user.username);
// console.log(user.getUserdetail());
// console.log(this);


// const promiseOne = new Promise() //
// const date = new Date()          //  'new '- constructor function


function USer(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    this.greet = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this //  (it implcitly defined)
}

const userOne = new USer("tapan", 12, true)
const userTwo = new USer("rath", 4 ,false)
console.log(userOne.constructor);
// console.log(userTwo);
