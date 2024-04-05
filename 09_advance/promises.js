// In javascript, a Promise is an object which ensures to produce a single value in the future (when required). Promise in javascript is used for managing and tackling asynchronous operations.

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('P1 Async task is compelete');
        resolve()   // will connect to .then()
    }, 1000)
});

promiseOne.then(function(){
    console.log("promise one consumed");
})

/////////////////////////////////////////////////////


new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Promise 2 task");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise2 resolved");
})

///////////////////////////////////////////////////////


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve({promise_3_username: "Ourkay", email: "qwe@gmail.com"})
    }, 1200)
})

promiseThree.then(function(user){
    console.log(user);
})

//////////////////////////////////////////////////////////


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "ravi", password: "qwerty"})
        }else{
            reject("Promise 4: something went wrong")   // will connect to catch()
        }
    }, 1200)
})
.then((user)=>{
    console.log(user);
    return user.password;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{console.log("Promise 4 either resolved or rejected");})

//////////////////////////////////////////////////////////////


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('Promise 5 JS went wrongggggg')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log("consume P5", response);       
    } catch (error) {
        console.log("PewPew_5",error);
    }
}

consumePromiseFive();

// async function getGithubProfile(){
//     try {
//         const response = await fetch('https://api.github.com/users/theperfectblue');
//         //console.log(response);
//         const data = await response.json() // ******
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }

// }

// getGithubProfile()

// fetch('https://api.github.com/users/theperfectblue')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })