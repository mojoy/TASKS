
/*
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const newArray = [...arr1, ...arr2]

console.log(newArray) //[ 1, 2, 3, 4, 5, 6 ]
*/

/*
// получить уникальные элементы

const array = [15,56,51,9,59,652,156,95,15,1,26,15,65,49,89,26,98,48,15,46,98,56,15,95]

//Использование Set:
//const uniqueArray = [...new Set(array)];
//console.log(uniqueArray);

//Объект Set автоматически удаляет дубликаты, и его можно преобразовать обратно в массив, используя оператор распространения (...).

//Использование filter и indexOf:
//Этот метод использует filter вместе с indexOf для фильтрации только уникальных элементов.

//const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
//console.log(uniqueArray);

//Использование reduce:
const uniqueArray = array.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  console.log(uniqueArray);

//Метод reduce используется для построения нового массива, добавляя только те элементы, которые еще не присутствуют в массиве-аккумуляторе.
//Выбор метода зависит от ваших предпочтений и контекста использования. В большинстве случаев использование Set является простым и эффективным способом получения уникальных элементов в массиве.


*/

/*
//создать новый массив и выстроить элементы по возрастанию
const array = [15, 56, 51, 9, 59, 652, 156, 95, 15, 1, 26, 15, 65, 49, 89, 26, 98, 48, 15, 46, 98, 56, 15, 95];

// Создаем новый массив с отсортированными элементами
const sortedArray = array.slice().sort((a, b) => a - b);

console.log(sortedArray);

//В этом примере array.slice() используется для создания копии массива (чтобы избежать изменения оригинального массива) и затем применяется метод sort с функцией сравнения (a, b) => a - b, которая гарантирует сортировку чисел в порядке возрастания.
//Теперь sortedArray будет содержать новый массив с элементами, отсортированными по возрастанию.
*/


// вывести только двузначные числа и отсортировать по возрастанию 
const array = [15, 56, 51, 9, 59, 652, 156, 95, 15, 1, 26, 15, 65, 49, 89, 26, 98, 48, 15, 46, 98, 56, 15, 95];

//реверс массива
//const reverseArray = array.reverse()

// Фильтруем только двузначные числа
const twoDigitNumbers = array.filter(number => number >= 10 && number <= 99);

// Получить сумму двузначныых элементов
const sumTwoDigitNumbers = twoDigitNumbers.reduce((accumulator, current) => accumulator + current, 0);

// Сортируем отфильтрованные числа по возрастанию
const sortedTwoDigitNumbers = twoDigitNumbers.sort((a, b) => a - b);

// Сортируем исходный массив по убыванию
const sortedTwoDigitNumbers2 = array.sort((a, b) => b - a);

//Получаем уникальные значения
const uniqueArray = [...new Set(array)];

// Используем reduce для вычисления суммы уникальных элементов
const sumOfUniqueNumbers = uniqueArray.reduce((accumulator, current) => accumulator + current, 0);

//console.log('массив в другой последовательности:', reverseArray);
console.log('Фильтруем только двузначные числа:', twoDigitNumbers);
console.log('Получить сумму двузначныых элементов:', sumTwoDigitNumbers);
console.log('Сортируем отфильтрованные числа по возрастанию', sortedTwoDigitNumbers);
console.log('Сортируем отфильтрованные числа по убыванию', sortedTwoDigitNumbers2);
console.log('Получаем уникальные значения', uniqueArray);
console.log('сумма уникальных элементов:', sumOfUniqueNumbers);




