function sayname() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("K");
    console.log("T");
    console.log("I")
}
// sayname();

function add(num1, num2){   // parameteric function
    console.log(num1 + num2);
}
add(2,3); // --> 5          // arguments
add(2, "4") // --> 24
add(2,'a') // --> 2a

const result = add(4,5) // --> 9
console.log("Result:", result)    // --> but its result value is undefined🙄 now solve this problem 😀

function sum(n1 , n2){
    // let results = n1 + n2
    // console.log(results)  // --> 13
    // return results;
    return n1 + n2
}
let a = sum(6,7)
console.log("A:", a)  // A : 13 I get a solution 😊

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Bhakti"))  // --> Bhakti just logged in
console.log(loginUserMessage())  // --> undefined just logged in 😕 now solve this problem

function loginUserMessage(username){
    if(!username){
        console.log("Please eneter a username");
        return ;
    }
    return `${username} just logged in`
    }
console.log(loginUserMessage()) // now we have solve this problem 😀 using the if statement

// rest operator

function calculateCartPrice(...num1){  // act like an array
        return num1
}
console.log(calculateCartPrice(100,200,300)) // -->[100,200,300]

// object pass in function
const user = {
    username: "Bhakti",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user) // already define object
// define an object
handleObject({
    username: "sam",
    price: 399,
})

// pass an array
const mynewArr = [200,400,100,700,500]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(mynewArr)); // --> 400