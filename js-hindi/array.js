// ************ Array **************

const myArr = [0,1,2,3,4,5]
console.log(typeof myArr) // object type
console.log(myArr)
console.log(myArr[3]) // which element at index number 3 
// console.log(myArr[6]) // error because index 6 is out of bounds
let arr = []
arr[0] = 'zero'
arr[1] = 'one'
arr[2] = 'two'
arr[3] = 'three'
arr[4] = 'four'
arr[5] = 'five'
console.log(arr);

const MyHeroes = ["Di caprio", "Brad Pitt"]
MyHeroes.push("Tom Cruise")
console.log(MyHeroes) 

// Dynamic Decleration of Array
const myArr2 = new Array(1,2,3,4);
console.log(myArr2)
// Accessing array elements using for loop
for (let i=0;i<myArr2.length;i++){
    console.log(`Element ${i+1}: ${myArr2[i]}`)
}

// Method of Arrys
const fruits = ['apple', 'banana','cherry']
fruits.push('mango') // push the element of an array
console.log(fruits)
fruits.pop() // delete the element at last Index
console.log(fruits)
fruits.shift() // remove first element from the array
console.log(fruits)
fruits.unshift('kiwi') // add kiwi to the beginning of the array
console.log(fruits)
fruits.splice(2,0,'orange') // insert orange at index 2
console.log(fruits)
fruits.slice(1,3) // slice the array from index 1 to 3
console.log(fruits)
console.log(fruits.includes('kiwi')) // true
console.log(fruits.indexOf('kiwi')) // return the position of the element in the array
console.log(fruits.lastIndexOf(9)) // return -1 bcz index 9 does not exist
