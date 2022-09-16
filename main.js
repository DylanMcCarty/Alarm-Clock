const display = document.getElementById('clock'); //This is what tells the code where to put the time which is determined by the javascript
const display2 = document.getElementById('DMY');// this would tell the code where to put the date but, it dont work.

let alarmTime = null;
let alarmTimeout = null;

// this all obtains the time and puts the separate hours minutes and seconds in their proper place as well as defining a whole other bunch of junk
function updateTime() {
    const date = new Date();

    let hour = date.getHours(); // these were all let statements so that they could be changed to suit the 12 hour clock. const variables dont ever change and are immovable
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM"
    //ALL THE IF STATEMENTS I DONT CARE!!!!
    if (hour === 0) {
        hour = 12;
    }
    if (hour > 12) {
        session = "PM";
    }
    if (hour > 12) {
        hour = hour - 12
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    display.innerText = `${hour} : ${minutes} : ${seconds} ${session}`
}

function updateYear() {
    const date = new Date(); 

    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    display2.innerText = `${month} / ${day} / ${year}`
    
    if (month < 10){
        month = "0" + month;
    }
}

setInterval(updateYear)


function setAlarmTime(value) {
    alarmTime = value;
}
//this makes sure that the set alarm function works so that an input will save the date into the console until the time reaches that saved time and once it equals that it will go off
function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}
const audio = new Audio('../aud/GETUP!!!.mp3');//this is where i link the audio so that it will play when the alarm goes off
audio.loop = true;// this just makes the alarm loop until it is cleared


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


