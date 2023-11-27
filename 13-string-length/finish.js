/** ЗАДАЧА 13 - Длина строки
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Виведите в консоль длину этой строки
 */

const string = "новый метод генерации энергииd asdf afadf"

const stringLength = string.length;

console.log(stringLength)

if ( string.length > 20) {

    const newString = string.slice(0,25);

    console.log( `${newString}...`)

} else {
    console.log(string)
}
