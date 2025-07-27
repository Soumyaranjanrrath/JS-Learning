class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const tapan = new User("tapan")
// console.log(tapan.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const s22 = new Teacher("s22", "sam@sung.com")
s22.logme()
// console.log(s22.createId());
