// this operator
// 1. This operator is used when we refer to the current contest
// 2. It returns a reference to the object itself, not a copy of it
// 3. The return type of this operator is always 'reference'
// 4. We can use this operator on any class that has an overloaded assignment operator


const user = {
    username : "Bhakti",
    price : 999,
    email: 'bhaktiagrawal@gmail.com',

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}`)
        //console.log(this) // this will print the whole information about the user
    }
}
user.welcomeMessage()
//user.username = "Shakti"   // this is called context(change the username)
//console.log(user)   // now username will be change because of this operator
console.log(this)  // but this will print empty --> {}😂

function chai(){
    let name = "Bhakti Agrawal"
    console.log(this)   // this will be print many functions

    console.log(this.username) // --> undefined 😮 because this opertor is not used inside the function
}
chai()


// arrow function
 const pasta = () => {
        let name = "White-souce"
        console.log(name); // this will work fine --> White-souce
        console.log(this); // this will print empty set --> {}
        console.log(this.name)  // --> undefined
 }
 pasta()
 // syntax of arrow function
 // const function_name = () => {
    //     code block
 // }
// basic arrow function explixt return 
 const addTwo = (num1, num2) =>{
    return num1 + num2;
 }
 console.log(addTwo(3,6))

 // implict return
 // In this we are removing the curely braces { }
 const multiply = (x , y) => x * y ;
 console.log(multiply(5,7));
 
 // using the parenthesis
 const divide = (x,y) => (x/y);
 console.log(divide(6,3));

const display = () => {username: "Bhakti"}
console.log(display())  // -->undefined because without parentheses object can't return

const display1 = () => ({username : "Bhakti Agrawal"})
console.log(display1()); // now it will return { username: "Bhakti Agrawal"}


// Immeddiately Invoked Function Expressions (IIFE)
// we are solve the problem of pollution of global scope
// We can use the IIFE to prevent the pollution of global scope
// It helps us in creating private variables and methods
// function IIFE (){

( function milk(){
    // named IIFF(function name)
    console.log('DB Connected');
})(); // this semicolon is important🧐
// another way of writing IIFE
((name)=>{
    // SIMPLE IIFF(without function name)
    console.log(`DB Ocnnected two ${name}`);
})("BHAKTI AGRAWAL")

// Javascript Execution Context
// 1. Global Execution Context
// 2. Local execution context
// 3. Eval Execution Context

// javascript code execution phase
// 1. Memory Creation Phase(allocate the memory of variables, functions)
// 2. Execution Phase


