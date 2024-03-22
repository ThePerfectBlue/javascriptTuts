// reduce

const arr = [1,2,3,4,5];
const init = 0
const fun = arr.reduce((accu, curr) => {return accu + curr}, init)

console.log(fun);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "py course",
        price: 1000
    },
    {
        itemName: "mobile dev course",
        price: 6000
    },
    {
        itemName: "data science course",
        price: 12000
    },
]

const totPrice = shoppingCart.reduce((accu, curr)=>{
    return (
        accu + curr.price
    )
},0)

console.log(totPrice);