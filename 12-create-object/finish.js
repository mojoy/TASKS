/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myInfo = {
    name: 'Ivan',
    surname: 'Ivanov',
    favoriteNumber: 7
}

const result = `My name is ${myInfo.name} ${myInfo.surname} and my favorite number is ${myInfo.favoriteNumber}`

console.log(result)