const user = {
  name: "John",
  price: 300,

  welcomeMessage: function() {
    console.log(`${this.name} is welcome to the course`);
    console.log(this);
    
  }

}
// user.welcomeMessage(); // John is welcome to the course
// user.name = "Tapan";
// user.welcomeMessage(); // Tapan is welcome to the course

// console.log(this);

// function one() {
//   let user="tapan";
//   console.log(this.user); // undefined in strict mode, global object in non-strict mode  
// }

// const one = function() {
//   let user = "tapan";
//   console.log(this.user); // undefined in strict mode, global object in non-strict mode  
// }


// const one = () => {
//   let user = "tapan";
//   console.log(this.user); // undefined in strict mode, global object in non-strict mode
// }

// one(); 

// const addTwo = (n1,n2) => {
//   return n1 + n2;
// }

//or
// const addTwo = (n1,n2) => n1 + n2;
//or
// const addTwo = (n1,n2) => (n1 + n2);

const addTwo = (n1,n2) => ({user : "Tapan"})
console.log(addTwo(10,20)); // { user: 'Tapan' }
// console.log(addTwo(10,20)); // 30