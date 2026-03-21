const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const secondes = document.getElementById('secondes');

const targetDate = new Date('June 28 2026 00:00:00').getTime();

function timer() {
    const todayDate = new Date().getTime();
    const distance = targetDate - todayDate;

    const Days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const Hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const Minutes = Math.floor(distance/1000 / 60) % 60;
    const Secondes = Math.floor(distance / 1000) % 60;

    days.innerHTML = Days;
    hours.innerHTML = Hours;
    minutes.innerHTML = Minutes;
    secondes.innerHTML = Secondes;

    if(distance < 0){
       days.innerHTML = "00";
       hours.innerHTML = "00";
       minutes.innerHTML = "00";
       secondes.innerHTML = "00";
       return;
    }
}
setInterval(timer, 1000);
