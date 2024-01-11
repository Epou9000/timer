let end = new Date(2024, 0, 22, 7, 30)
let time = document.querySelector(' .giveaway')
let elem1 = document.querySelector('.element1')
let elem2 = document.querySelector('.element2')
let elem3 = document.querySelector('.element3')
let elem4 = document.querySelector('.element4')


const DW = ['Sunday', 'Monday', 'Tuesday', 'Wednasday', 'Thursday', 'Friday', 'Saturday']
const DM = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const endDay = DW[end.getDay()]
const endMonths = DM[end.getMonth()]
let H = end.getHours()
let M = end.getMinutes()

let D = end.getDate()
let Y = end.getFullYear()
time.textContent = `Giveaway ends on ${endDay},  ${D} ${endMonths} ${Y}  ${H}:${M}  `


function timer() {
     let now = new Date()

     let endTimeInMiliSeconds = end.getTime()
     let nowTimeInMiliSeconds = now.getTime()
     let diff = endTimeInMiliSeconds - nowTimeInMiliSeconds;
   
     let oneDay = 24 * 60 * 60 * 1000
     let oneHour = 60 * 60 * 1000
     let oneMinute = 60 * 1000

     let days = Math.floor(diff / oneDay);
     let hours = Math.floor((diff % oneDay) / oneHour);
     let minutes = Math.floor((diff % oneHour) / oneMinute);
     let seconds = Math.floor((diff % oneMinute) / 1000);
     elem1.textContent = days;
     elem2.textContent = hours;
     elem3.textContent = minutes;
     elem4.textContent = seconds;
};
timer();
setInterval(timer, 1000)

