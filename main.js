window.addEventListener('load', () => {
    const secondHand = document.querySelector('.second-hand');
    const minutesHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const weekdayList = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const monthList = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    const now = new Date();
    const day = weekdayList[now.getDay()];
    const month = monthList[now.getMonth()];
    const date = now.getDate();

    document.querySelector(".day-display").innerHTML = day;
    document.querySelector(".month-display").innerHTML = month;
    document.querySelector(".date-display").innerHTML = date;

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);
});