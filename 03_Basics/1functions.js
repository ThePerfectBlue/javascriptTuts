// if value not sent in argument then its undefined

const calcPrice = (...num1) => { // spread operator
    console.log(num1);
}
calcPrice(2,4)


const user = {
    username: "ravi",
    age: 24
}

const handleObject = (anyUser) => {
    console.log(`User name is ${anyUser.username} and age is ${anyUser.age}`);
}
handleObject(user)


const newArray = [2,4,6,8];

function returnSecondValue(arr) {
    console.log(arr[1]);
}
returnSecondValue(newArray)



