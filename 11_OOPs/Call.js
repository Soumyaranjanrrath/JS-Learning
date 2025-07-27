function SetUsername(username){
    //complex DB
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const tros = new createUser("tapan", "tapan@ros.com", "211")
console.log(tros);
