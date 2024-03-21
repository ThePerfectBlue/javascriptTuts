// falcy => false, "", 0, -0, BigInt 0n, null, undefined, NaN

// truthy => [], "false", "0", " ", {}, function(){}, 

const userEmail = "a@gmail.com"

if (userEmail.length === 0) {
        console.log("Array is empty");
    }

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("empty object");
}

// false == 0
// false == ""
// 0 == ""

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 2 ?? 5   // => 2
val1 = null ?? 10 // => 10
val1 = undefined ?? 10 // => 10

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

