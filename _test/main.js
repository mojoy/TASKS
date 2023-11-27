/*
const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(button)
console.table(redButton)

*/

function my(value = 5, multiplier = 1) {
    return value * multiplier
}

const result1 = my(2, 5)

console.log(result1)

const myResult = (value, multiplier) => {
    return value * multiplier
}

const result2 = myResult(2, 8)
console.log(result2)