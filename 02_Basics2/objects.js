// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harry",
    "full name": "Harry Potter",
    [mySym]: "mykey1",
    age: 24,
    location: "BAreilly",
    email: "blue@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) => object cannot be modified
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();