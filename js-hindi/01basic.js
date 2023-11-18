console.log("Hello Bhakti")

    // create a variable --> const, var and let

 const accountId = 134578       // can not be change
 let accountEmail = "Bhakti@gmail.com"
 var accountPassword  = "12356"
 accountCity = "Aligarh"
 let state; // undefined value     
 
 // accountId = 23 (this is not allowed bcz of accountId is const)
accountEmai = "Bhakti.com"
accountPassword  = "123567890"
accountCity = "Delhi"
 
/* Perfer not to use var
  because ofnissue in block scope and functional scope

Q.1 Difference between var and let
The main difference between var and let is the scope of the variables they create. Variables declared with var have function scope, while variables declared with let have block scope.

Function scope means that the variable is accessible anywhere within the function in which it is declared. Block scope means that the variable is only accessible within the block of code in which it is declared.

Another difference between var and let is that variables declared with var are hoisted to the top of their scope, while variables declared with let are not. Hoisting means that the variable is declared before it is used, even if it is declared later in the code.
*/
 console.table([accountId, accountEmail, accountPassword, accountCity, state])
 console.log(accountId)


 "use strict"; // treat all JS code as newer version
 // Q.2 What are the differences between ES5 and ES6 ?
/*
ES5 is the fifth edition and ES6 is the sixth edition 
ES6 introduced a number of new features-
1. Classes
2. Modules
3. Block Scope
4. Let & Const
5. Arrow functions
6. Promises
7. Destructuring Assignment
8. Spread Operator
9. Template Literals
10. New Array Methods
11. Improved Regular Expressions
12. Object Rest/Spread Properties
*/
// alert(3+5) // we are using nodejs, not browser

console.log(3
    + 3) // code readability should be high
console.log("Bhakti")

// Datatype

/* number => 2 to power 53
BigInt
string => " "
Boolean => true/false
null => standalone value
undefined =>undefined value
NaN
Infinity
Symbol() => unique

object  
 */

console.log(typeof "Bhakti") // typeof operation is used to define a datatype of particular line
console.log(typeof null)  // object 
console.log(typeof undefined) // undefined     
