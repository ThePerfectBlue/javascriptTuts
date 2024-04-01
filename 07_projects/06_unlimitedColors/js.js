const randomColor = function (){
    const hex = "0123456789ABCDEF";
    let color = '#'

    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * 16);
        color = color.concat(hex[index]);
    }
    return color;
}

let intervalId

const startChangingColor = () => {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    
  
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);