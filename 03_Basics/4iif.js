// dont want pollution from global scope
// immediately invoked function expression (IIFE)
(function chai(){
    console.log("iffe")
})();   // named iife

(() => console.log("IFFE"))();