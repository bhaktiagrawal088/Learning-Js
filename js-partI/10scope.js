//var c = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a); // this is not access its out of scope
// console.log(b); // this is not scope its out of scope
console.log(c); // this is accessable so this is one of the problem🙁 that's why we are not use the var 
// we are declare a var c out the if but value of c is not change😒

let a = 200
if(true){
    let a = 100;
    const b = 200;
    console.log("Inner: ", a) // this will print 100
}
console.log(a) // this will print 200 because it's in the same scope as where it was declared


// Nested scope (closer)
// Child function access the variable of parent function

function one(){
   const username = "Bhakti"

   function two(){
    const password = 1234
    console.log(username);
   }
  // console.log(password); // error 😥 because password is out of scope
   two()
}
one()

// using if else
if(true){
    const username = "Bhakti"
    if(username === "Bhakti"){
        const password = 1234
        console.log(`username is ${username} and password is ${password}`)
    }
    //console.log(password)  // error because of out of scope
}
//console.log(username) // error because of out of scope

// ********** Interesting ************

// we can also call function before its definition
console.log(addone(5))
function addone(value){
    return ++value;
}
//console.log(addone(5))

// now we can not call function before its definition 
//console.log(addtwo()) // error can not access before initialization
const addtwo = function(value){
    return value + 2
}
console.log(addtwo(6))