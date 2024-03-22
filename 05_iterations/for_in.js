
                                          //**************** for in ***********
// object

const obj2 = {
    g1 : "gta",
    g2 : "max payne",
    g3 : "rdr2"
}

for (const key in obj2) {
    console.log(`${key} for game is ${obj2[key]}`);
    // g1 for game is gta
    // g2 for game is max payne
    // g3 for game is rdr2
}

// array

const arr2 = ["cpp", "python", "ruby", "java"]

for (const key in arr2){
    console.log(`for ${key} is language ${arr2[key]}`);
    // for 0 is language cpp
    // for 1 is language python
    // for 2 is language ruby
    // for 3 is language java
}

