setInterval(()=>{
let date = new Date();

let secund = date.getSeconds();
console.log(secund)
let minute = date.getMinutes();
console.log(minute)
let hour = date.getHours()
console.log(hour)


let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');
let secunds = document.querySelector('.secund');

hours.textContent = hour; + ' \n hour'
minutes.textContent = minute;
secunds.textContent = secund;
},1000)
