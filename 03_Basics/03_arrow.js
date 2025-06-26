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

console.log(this);

