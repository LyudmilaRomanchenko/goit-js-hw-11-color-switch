import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const buttonStart = document.querySelector('button[data-action="start"]');
console.log(buttonStart);

const buttonStop = document.querySelector('button[data-action="stop"]');
console.log(buttonStop);

const getBody = document.querySelector('body');
console.log(getBody);

let timerColor;

//Генерация случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
//const a = randomIntegerFromInterval(0, colors.length - 1);
//console.log(a);

//Кнопка старт
buttonStart.addEventListener('click', onColorStart);
function onColorStart(event) {

    timerColor = setInterval(randomColor, 1000);
    buttonStart.setAttribute('disabled', 'true');
    //disabled="true"


}

let color;
function randomColor() {
    color = randomIntegerFromInterval(0, colors.length - 1);
    getBody.style.backgroundColor = `${colors[color]}`;
    console.log('fffffff');
}

//Кнопка стоп
buttonStop.addEventListener('click', onColorStop);
function onColorStop(event) {
    getBody.style.backgroundColor = `${colors[color]}`;
    clearInterval(timerColor);
    buttonStart.removeAttribute('disabled');
}





