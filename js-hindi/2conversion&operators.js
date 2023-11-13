// Type Converstion and Typeof
let score = "34abc"
/* console.log(typeof score)   // find the type of score    
console.log(typeof (score))

let valuenum = Number(score)
console.log(typeof valuenum);    // convert string to number
console.log(valuenum) //NaN is not a number

let valueString = String(score)
console.log(typeof valueString); // convert number to string

let num = null
console.log(typeof num) // object type
console.log(Number(num)) // comes to 0

let value = undefined
console.log(typeof value) //undefined
console.log(Number(value)) // Nan it is not a number

let bool = true
console.log(typeof bool) //boolean
console.log(Number(bool))  // 1 means value is true
let arr = [1,2,3]
console.log(typeof arr) //object
let obj = {}
console.log(typeof obj) //object
let b = 1
console.log(typeof Boolean(b)) // boolean

// Conclusion
// NaN - Not a number
// Null - It has no value, but we can assign any value to it later on
// Undefined - It has no value at all
// 1 => true; 0=> false
// " " => flase; "Bhakti" => true
*/
// *******************Operators*********************
// Arithmetic operators: +,-,*,/
// Increment / Decrement : ++,--
// Assignment operator : +=,-=,*=,/=,%=,<<=,>>=,>>>=,&=,^=
// Comparison operators : == , ===, !=, !==, >,<,<=,>=``
// Logical operators : &&,||,!
// Bitwise operators : &,|,^,~,<<,>>
// Ternary operator : condition ? expr1 : expr2

// ***************** operations ******************
/* let value = 3
let nvalue = -value
console.log("Negative Value",nvalue)

console.log(2+3)    // addition -> 5
console.log(5-4)    // substraction -> 1
console.log(6*7)    // multiplication -> 42
console.log(8/9)    // division -> 0.88888888
console.log(10%2)   // remainder -> 0
console.log(2**3)   // power -> 8

let s1 = "Hello"
let s2 = "Bhakti"
console.log(s1+" "+s2) // concatenation -> Hello Bhakti

console.log("1"+2)      // 12
console.log(2 + "3")    // 23   
console.log("2" + 2 + 2)    //222
console.log(2+2+"2")    // 42

console.log(true)   // true
console.log(+true)  // 1 but we can't prefer like this
// because in JavaScript there are only two types of data type
// one is string and other is Number so if you try to convert
// boolean into number using (+), then it will give error
console.log(!false)     // true
console.log(true || false)       // true

// link to study https://tc39.es/ecma262/#sec-abstract-operations

// **** Increment/ decrement operation ****
let i = 1
i++
console.log(i)        // 2
--i                   
console.log(i)        // 1
*/

// ************ comparsion operation *************
console.log(1==1)         // true
console.log(1===1)          // true 🤫.
console.log(1!=1)           // false
console.log(1!==1)          // false
console.log(2>1)            // true
console.log(2>=1)           // true
console.log(2<1)            // false
console.log(2<=1)           // false 

// compare a different datatype
console.log('2'>1)             // true automatically convert string into number
console.log('1'<'1')           // false

console.log(null > 0)           // false
console.log(null == 0)          // false
console.log(null >= 0)          // true
// The reason is that an equality check ==  and comaparsions >< >= <= work differently
// comparsion convert null to a number, treating it as 0 that's why null >= 0 is true and null > 0 is false

console.log(undefined == 0)     // false
console.log(undefined === 0)    // false
console.log(undefined < 0)      // false

// === strictly check the value
console.log("2" == 2)           // true
console.log("2" === 2)          // false


// summary 
/* Primitive datatype (call by value means jab inko copy karte hai to inka original data ka refrence
     nhi diya jata copy karke diya jata hai)

 7 types : string, Number, Boolean, null, undefined, symbol(kisi bhi value ko unique banane ke use karte hai), BigInt
 
 const id = Symbol('123')
 const anotherid = Symbol('123')
 console.log(id == anotherid)   // false
 
Non- Primitive or Refrence type ( call by refrence)

Array, Objects, Functions
const heros = ["Saktiman", "naagraj", "doga"]
let myObj = {
    name: 'John',
    age: 45,
}
function addHeroes() { 
    let heroes = ['batman', 'superman']
}

Q.1 Javascripts is dynamically type language or statically type language
Ans: Dynamically typed 
 
*/