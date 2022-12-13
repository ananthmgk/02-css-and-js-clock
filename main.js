window.addEventListener('load', () => {
  const secondHand = document.querySelector('.second-hand');
  const minutesHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const button = document.querySelector('.button');
  const clockFace = document.querySelector('.clock-face');
  const WholeClock = document.querySelector('.clock');

  const weekdayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthList = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const now = new Date();
  const day = weekdayList[now.getDay()];
  const month = monthList[now.getMonth()];
  const date = now.getDate();

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  WholeClock.addEventListener('click', () => {
    if (clockFace.classList == 'clock-face') {
      clockFace.classList.remove('clock-face');
      clockFace.classList.add('clock-face2');
    } else if (clockFace.classList == 'clock-face2') {
      clockFace.classList.remove('clock-face2');
      clockFace.classList.add('clock-face3');
    } else {
      clockFace.classList.remove('clock-face3');
      clockFace.classList.add('clock-face');
    }
    WholeClock.style.border = `15px solid ${getRandomColor()}`;
  });

  document.querySelector('.day-display').innerHTML = day;
  document.querySelector('.month-display').innerHTML = month;
  document.querySelector('.date-display').innerHTML = date;

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);
});
