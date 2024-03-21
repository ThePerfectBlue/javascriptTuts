const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()   
// user.username = "sam"
// user.welcomeMessage()

console.log(this);  // => {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = function () {
    let username = "hitesh"
    console.log(this);  // => {}
}

// implicit return when code is of one line only

//const implicit = (num1, num2) => num1+num2;
const implicit = (num1, num2) => (num1+num2);

console.log(implicit(3,5))