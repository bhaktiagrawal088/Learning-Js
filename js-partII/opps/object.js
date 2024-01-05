function multiplyBy5(num){
     return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5)) // --> 25
console.log(multiplyBy5.power) // --> 2
console.log(multiplyBy5.prototype) // --> {}

function createuser(username, score){
    this.username = username;
    this.score =  score;
}
createuser.prototype.increment = function(){
    this.score++;
}
createuser.prototype.printme = function(){
    console.log(`price : ${this.score}`)
}
const chai = new createuser('Chai', 25)
const tea = createuser('tea', 30)
chai.printme();
chai.increment();
chai.printme();

//  Here's  what happens behind the scenes when the keyword is used:

// A new object is created : The new keyword initiates the creation of a new Javascript object

// A prototype is linked : The newly created object get linked to the prototype property of constructor function.
// This means that it has access to properties and methods defined on the construtor's prototype. 

// The constructor is callled: The constructor function is called with the specified arguments  and 
// this bound to the newly create object. If no explicit value is specified from the constructor, Javascript 
// assumes this, the newly created object, to be the intended return value.

// The new keyword is returned : After the constructor function has been called, if it doesn't not return non-primitive value
// (object, array, function, etc), the newly created object is returned. 



