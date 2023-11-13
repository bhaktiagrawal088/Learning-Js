const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)


console.log(balance.toString().length) // cheack the length 
console.log(balance.toFixed(2)) // fixed the value after decimal --> 100.00
const n = 123.689
console.log(n.toPrecision(4)) // set the value and also round off😮 --> 123.7 
console.log(Number.isInteger(n)) // check if it is integer or not --> false

const hundreds = 100000000
console.log(hundreds.toLocaleString()) // seperated by commas in US standard
console.log(hundreds.toLocaleString('en-In')) // Indian Standard but answer is same , so bro i don't understand🤷‍♂️


// **************** Maths **************
console.log(Math) // Maths is object which contains many property🧾
console.log(Math.abs(-4)) // convert to negative to positive --> 4
console.log(Math.abs(4)) // not convert to postive to negative --> 4🙁
console.log(Math.round(456.78)) // round off before decimal --> 457
console.log(Math.floor(456.78)) // round down before decimal --> 456
console.log(Math.ceil(456.78)) // round up before decimal --> 457
console.log(Math.max(1,2,3,4,5)) // find maximum number --> 5
console.log(Math.min(1,2,3,4,5)) // find minimum number --> 1
console.log(Math.random()) // random numbers between 0-1 --> 0.xxxxx
console.log((Math.random()*10) + 1) // shift one place --> x.xxxx and +1 to avoid the .0xxxx value🥱
console.log(Math.PI) // constant pi --> 3.141592653589793
 
const min = 10
const max = 20
const range = max - min
console.log(Math.floor(Math.random() * range)+ min )

