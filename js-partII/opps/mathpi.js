console.log(Math.PI)
Math.PI = 4
console.log(Math.PI) // can't change the value of pi

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor) // not writable, enumerable, configurable

const chai = {
    name : 'Ginger chai',
    price : 250,
    isAvailable : true,

    orderchai: function(){
        console.log('Chai is not ready') // solve thi problem we can use if condition typeof operator
    }
}


console.log(chai)
// get property descriptor
console.log(Object.getOwnPropertyDescriptor(chai, 'name')) // yes, it is writebale, enumerable, and also configurable

// change the property of our object
// Object.defineProperty(chai, 'name',{
//     writable: false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai,'name')) // now we can change the properties

// forof loop
// for (let [key, value] of chai) { // chai is not iterable🙄
//     console.log(`${key} : ${value}`)    
// }

// solve the iterable problem
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`)
    }
}