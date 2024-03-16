/**************************NUMBERS*********************8 */ 

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); => "100"
// console.log(balance.toFixed(2)); => 100.00

const num = 23.896
console.log(num.toPrecision(2)) // => 24

const locale = 10000000
console.log(locale.toLocaleString('en-IN')) // => 1,00,00,000

console.log(Math);

/***************************MATHS***********************8 */

console.log(Math.abs(-5.9))  // => 5.9

console.log(Math.round(5.9)) // => 6

console.log(Math.ceil(5.9)) // => 6

console.log(Math.floor(5.9)) // => 5

console.log(Math.min(2,5,3,7)) // => 2

console.log(Math.max(2,5,3,7)) // => 7

console.log(Math.random())  // 0 <-> 1
console.log(Math.floor((Math.random()*10)+1))  // 0 <-> 1


const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min)




