/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */


const myFunction1 = () => {
    return "Привет, мир!";
}

const result1 = myFunction1();

console.log(result1)

const myFunction2 = () => "Привет, мир!";

const result2 = myFunction2();

console.log(result2)
