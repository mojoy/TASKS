/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */


// Шаг 1
const myString = "Пример строки";

// Шаг 2
console.log(myString instanceof String); // false

// Шаг 3
console.log(typeof myString === "string"); // true

// Шаг 4
const uppercaseString = myString.toUpperCase();

// Шаг 5
console.log(uppercaseString); // "ПРИМЕР СТРОКИ"
