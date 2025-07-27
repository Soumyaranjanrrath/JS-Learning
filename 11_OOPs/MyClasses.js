// // ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}ros`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const ros = new User("ros", "tros@gmail.com","123")
// console.log(ros.encryptPassword());
// console.log(ros.changeUsername());


//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}ros`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tros = new User("tros", "taros@gmail.com","123")
console.log(tros.encryptPassword());
console.log(tros.changeUsername());