const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "2 March 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds =(newYearsDate - currentDate) /1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds /3600) % 24;
    const mins = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}


function formatTime(time){
    return time < 10 ? (`0${time}`): time;

}


const daysEl1 = document.getElementById('days1');
const hoursEl1 = document.getElementById('hours1');
const minsEl1 = document.getElementById('mins1');
const secondsEl1 = document.getElementById('seconds1');
const newAge = "16 Jan 2023";

function countdown1() {
    const newAgeDate = new Date(newAge);
    const currentDate = new Date();

    const totalSeconds =(newAgeDate - currentDate) /1000;
    
    const days1 = Math.floor(totalSeconds / 3600 / 24)
    const hours1 = Math.floor(totalSeconds /3600) % 24;
    const mins1 = Math.floor(totalSeconds /60) % 60;
    const seconds1 = Math.floor(totalSeconds) % 60;

    daysEl1.innerHTML = formatTime(days1);
    hoursEl1.innerHTML = formatTime(hours1);
    minsEl1.innerHTML = formatTime(mins1);
    secondsEl1.innerHTML = formatTime(seconds1);
}




countdown1();
countdown();

setInterval(countdown1,1000);
setInterval(countdown,1000);
