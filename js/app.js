const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

//назначаем дата отсчета
let countdownDate = new Date(2024, 0, 1, 0, 0, 0).getTime();

function getCountdownTime(){
    //получаем текущее время
    const now = new Date().getTime();

    //находим разницу времени
    const distance = countdownDate - now;

    //1с = 1000мс
    //1м = 60с
    //1ч = 60м
    //1д = 24ч

    //создаем переменные в мс
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    //подсчет для каждой единицы времени
    let days = Math.floor(distance/oneDay);
    let hours = Math.floor((distance%oneDay)/oneHour);
    let minutes = Math.floor((distance%oneHour)/oneMinute);
    let seconds = Math.floor((distance%oneMinute)/1000);

    //создаем массив с переменными
    const values = [days, hours, minutes, seconds];
    console.log(values);
    console.log(now);

    //выводим значения переменных на страницу
    items.forEach(function (item, index){
        item.textContent = values[index];
    });

    //если время вышло
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Время вышло:(</h4>";
    }
}

//обновление счетчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000);

//инициализация текущего времени
getCountdownTime();

