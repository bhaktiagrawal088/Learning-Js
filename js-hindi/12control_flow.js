// if statements

if(true){
    console.log("true");
}
else{
    console.log("false");
}
// if else statement
const temp  = 20
if (temp < 15){
    console.log('cold');   // when condition will be true
}
else {
    console.log('Hot');  // when condition will be false
}
console.log('Execute')  // excuted without depend upon a condition

// Comparision operator --> < , > , <=, >=, !=, ===, !==

const score = 200
if(score > 100){
    const power = 'fly'
    console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`); // error because power is out of scope

// if else statement

let x = 3;
if(x == 4) {
    console.log('four');
    }
    else if(x == 3) {
        console.log('three');
    }
    else {
        console.log('not three or four');
    }

const userloggedIn  = true
const debitcard = true
if(userloggedIn && debitcard){ // And(&&) Condition if both the condition becomes true
    console.log('User logged in and Debit card available');
    }
    else if(!debitcard){
        console.log('Debit Card not available');
    }
    else {
        console.log('Not Logged In');
    }

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){   // Or(||) if any one condition becomes true
    console.log('Logged in from either google or email');
    }
    else{
        console.log('Not logged in');


    }

// switch case statement

const month = 3;
switch(month){
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("Februry");
        break;
    case 3:
        console.log('March');
        break;
    case 4: 
    console.log("April");

    default:
        console.log("Invalid Month")
        break;
}

// tutty and fasly value

let userEmail = "bhaktiagrawal286@gmail.com"
if(userEmail){
    console.log(`${userEmail} is valid`);
}
else{
    console.log(`${userEmail} is invalid`);
}

// fasly value 
// false , 0 , -0, BigInt 0n, "", null, undefined, NaN
// tutty value
// true, number (except for 0), string (""), object, array (with length > 0)
// "0", "false", " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log('Empty Object');
}

// false == 0 (true)
// false === 0 (false)
// 0 == '' (true)
// 0 === '' (false)
// '0' == false (true)
// false == ''(true)
// false === ''(false)

// Nullish Coalescing Operator (??) --- null, undefined
let val1;
console.log(val1 ?? "Not Defined"); // Not defined
val1 = null ?? 10
console.log(val1); // 10
val1 = undefined ?? 15
console.log(val1); // 15

// Null Coalescing operator and terniary operator is different

// Terniary Operator
let age = 27;
age >= 18 ? console.log('Adult') : console.log('Minor');
