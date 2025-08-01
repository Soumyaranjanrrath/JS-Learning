// A promise object represents the eventual 
// completion {or failure} of am asynchronous 
// operation and its resulting value.


const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, crytography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "tapan", email:"tapanrath2005@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Tapan", pass: "1233"})
        } else{
            reject("ERROr")
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "JavaScript", pass: "js124"})
        } else{
            reject("ERROr: JS")
        }
    }, 1000)
})

async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
}
consumePromiseFive();