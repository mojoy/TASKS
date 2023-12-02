

/*
for (let i=0; i<5; i++) {
    console.log(i)
}

*/
/*
const myArray = ['first', 'second', 'third']

for (let i=0; i < myArray.length; i++ ) {
    console.log(myArray[i])
}

myArray.forEach((element, index) => {
    console.log(element, index) 
});*/


const myObject = {
    car: 'bmw',
    price: 25680,
    color: 'red'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}
