                                         //************ */ for of ****************88
//array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

// strings

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
//     Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !
}

// Maps

const map = new Map()

map.set("1", "one")
map.set("2", "two")
map.set("3", "three")
map.set("4", "four")

 console.log(map); // => Map(4) { '1' => 'one', '2' => 'two', '3' => 'three', '4' => 'four' }

for (const [key, value] of map) {
    console.log(key,'->',value);  
    // [ '1', 'one' ]
    // [ '2', 'two' ]
    // [ '3', 'three' ]
    // [ '4', 'four' ]
}

// for of will not work for Objects
