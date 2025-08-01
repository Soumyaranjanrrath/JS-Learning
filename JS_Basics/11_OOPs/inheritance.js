class User {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourses() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const ros = new Teacher("ros", "tros@teacher.com", "123")
ros.addCourses()

const masalchai = new User("Masala chai")
masalchai.logme()

console.log(ros instanceof User);
