const first = document.getElementById('time1')
const second = document.getElementById('time2')
const third = document.getElementById("time3")
const forth = document.getElementById('time4')

const monthMaxDays = [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31 
];
monthMaxDays.reverse()

setInterval(function(){
    let date = new Date()
    let count = 0
    for (let i of monthMaxDays.toSpliced(12-date.getMonth())){
        count += i
    }
    let days = count-date.getDate()
    let seconds = 59-date.getSeconds()
    let minutes = 59-date.getMinutes()
    let hourse = 23-date.getHours()
    first.textContent = days
    second.textContent = hourse
    third.textContent = minutes
    forth.textContent = seconds
    if (hourse == 0 && minutes == 59 && seconds == 59){
        count --
    }
},1)