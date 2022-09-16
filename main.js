const display = document.getElementById('clock'); //This is what tells the code where to put the time which is determined by the javascript
const display2 = document.getElementById('DMY');

let alarmTime = null;
let alarmTimeout = null;

// this all obtains the time and puts the separate hours minutes and seconds in their proper place
function updateTime() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    display.innerText = `${hour} : ${minutes} : ${seconds}`
}
/*
function updateYear() {
    const date = new Date(2022, 16, 9); //cant get this stupid shit working. 

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    display2.innerText = `${month} / ${day} / ${year}`
}

setInterval(updateYear)
*/

function setAlarmTime(value) {
    alarmTime = value;
}
//this makes sure that the set alarm function works so that an input will save the date into the console until the time reaches that saved time and once it equals that it will go off
function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        //this makes sure the alarm must be after the current time before the alarm is set
        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}
const audio = new Audio('../aud/GETUP!!!.mp3');
audio.loop = true;


// this gives the clear alarm button the ability to stop the alarm and reset the time of alarm or clear the alarm before it has gone off if it hasnt gone off
function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm Cleared')  //this tells the user the alarm has been cleared
    }

}

// this makes it so that the times are always updating at an interval of 1 second 
setInterval(updateTime, 1000);

