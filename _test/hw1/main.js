//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

/*
const name = "Иван";
let city;

city = name;
console.log(city);
*/


//***2***
//Який буде результат виконання скрипта?
 let name = "Olga";
 //console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // ? привіт Olga






//***3***
//Видобути число зі змінних
 let a = "5";
 let b = "13cvb";
 let c = "12.9sxdcfgv";
// вивести в консоль тип

//console.log(typeof Number(a))
//console.log(typeof parseInt(b))
//console.log(typeof parseFloat(c))


//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
/*
const number1 = 0.1;
const number2 = 0.2;
const sum = (number1*10 + number2*10) / 10;
console.log(sum);
*/

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

//console.log(Math.max(20, 10, 50, 40))


//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

//console.log(Math.round() * (4 - 2)+2)

//***7**
//дізнатись довжину message

const message = "Welcome to Bahamas!";

//console.log( message.length) //19

//***8**
//вивести в консоль message великими літерами

//console.log(message.toUpperCase())


//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
/*
let user = {};
user.name = "Olga";
user.age = 38;
user.city = "kyiv";
*/
//console.log(user)
/*
delete user.city
user['like flowers'] = true;
*/
//console.log(user)


//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта


/*
for (key in user) {
    console.log(key)
    console.log(user[key])
}
*/



const list = document.body.querySelector('.list');
const listHeight = list.clientHeight;
const listWidth = list.clientWidth;

console.log(listHeight);
console.log(listWidth);


/// ширина и высота документа включая прокрученную часть

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth,
)


// высота контента
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
)

console.log(scrollWidth);
console.log(scrollHeight);

//получение значение прокрученных пикселей сверху
//только чтение

const scrollY = window.scrollY;
console.log(scrollY);




//прокрутка страницы на 50рх
const btn = document.body.querySelector('.btn');

btn.addEventListener('click', function () {
    setScrollToOptions();
});

function setScrollBy() {
    window.scrollBy(0, 50);
    const windowScrollTop = window.scrollY;
    console.log(windowScrollTop);
}

function setScrollTo() {
    window.scrollTo(0, 50);
    const windowScrollTop = window.scrollY;
    console.log(windowScrollTop);
}

function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth" // говорит о плавной прокрутки
    })
}
