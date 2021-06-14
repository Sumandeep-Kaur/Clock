function toggleClass(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
}

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const time = document.querySelector('.time');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();

    let hrPosition = hour * 30 + min/2      //hour * 360/12 + ((min * 360/60)/12)
    let minPosition = min * 6;             //min * 360/60
    let secPosition =  sec * 6;           //sec * 360/60

    hr.style.transform = `rotateZ(${hrPosition}deg)`;
    mn.style.transform = `rotateZ(${minPosition}deg)`;
    sc.style.transform = `rotateZ(${secPosition}deg)`;

    if(sec < 10){
        sec = '0' + sec;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(hour < 10){
        hour = '0' + hour;
    }

    time.textContent = hour + ' : ' + min + ' : ' + sec;
    
}, 1000);