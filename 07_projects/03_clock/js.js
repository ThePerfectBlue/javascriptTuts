const clock = document.getElementById('clock')

setInterval(()=>{
  let time = new Date()
  time.toLocaleTimeString()
  clock.innerText = time},1000)