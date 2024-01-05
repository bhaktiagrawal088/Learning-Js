const User = {
    username : 'Bhakti',
    loginCount : 8,
    signedIn : true, 
    getUserDetails : function(){
        console.log('Got User Details from Database');
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}
console.log(User.username)
console.log(User.getUserDetails())
console.log(this) // --> {} empty object


// Constructor function (new keyword)

// const PromiseOne = new Promise()
// const date =  new Date()

// this keyword
function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username} `)
    }
    // return this
}
const userone = user('Bhakti', 12, true)
const usertwo = user('Poonam', 11, false)
console.log(userone) // overrride the value of usertwo 
// don't write return this keyword we can't print the function without using the new keyword
// console.log(userone.constructor) --> can't defined

// Solve this Problem using new keyword
const userthree = new user('Sakshi', 13, true)
const userfour  = new user('Priyanaka', 14, false)
console.log(userthree)
console.log(userthree.constructor)
console.log(userfour)