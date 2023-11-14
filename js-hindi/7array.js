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


const ar1 = [1,2,3,4]
const ar2 = ar1.join();
console.log(ar1)
console.log(typeof ar1) // it's type is object
console.log(ar2)
console.log(typeof ar2) // it's type is string  because join operation convert its type into string

// SLice, splice

 const num = [1,2,3,4,5];
 const num1 = num.slice(1,3)
 console.log(num1) // print index element 1 and 2 not including 3 
 console.log(num) // print original element of an array

 const num2 = num.splice(1,3);
 console.log(num)
 console.log(num2) // print removed element from index 1 to 3
 console.log(num) // print remaining element after removing
// little bit confusing 🙁

const marvel_heroes = ["thor", "ironman","groot"]
const dc_heroes = ["superman","batman"]
heroes = marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes) 
console.log(dc_heroes)
console.log(heroes) // combine both of an array

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes) // its treating like a one element of second array

// spread
let conc = [...[1,2], ...[3,4],...["Bhakti","Agrawal"]] // more interesting and easy one 😃
console.log(conc)

// flat function
let nnn = [[1,2],[3,[4,5]],[[6,7]]]
console.log(nnn.flat(Infinity)) // flattening all nested arrays

console.log(Array.isArray("Bhakti"))
console.log(Array.from("Bhakti")) // its convert into an array --> ['B','h','a','k',t','i'] 😀
console.log(Array.from({name: "Bhakti"})) // its return a empty string , can't convert into an Array 😕

// of function
let arrr = Array.of(10,20,30) 
console.log(arrr) // convert into an array

let mark1 = 10
let mark2 = 20
let marks = Array.of(mark1,mark2) 
console.log(marks) // convert into an array 


