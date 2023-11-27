/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'alex';
const mySurname = 'shamarin';
const myProfession = 'dev';

//optoin 1
const joined = 'my name is ' + myName + ' '+ mySurname + ' and I ' + myProfession;
console.log(joined);


//optoin 2 (шаблонные строки)
const joined2 = `my name is ${myName} ${mySurname} and I ${myProfession}`
console.log(joined2);