///  fetch("https://something.com").then().catch().finally()
// then() --> response , catch() --> response and finally() --> alaways run
// A promises have 3 state 
// Pending -> intial state nither Fulfilled or Rejected
// Fulfilled (Resolved) -> meaning that the operation was complete successfully
// Rejected -> meaning that the operation failed.

const PromiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB call, crytopograph, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000)
});
PromiseOne.then(function(){
    console.log("Promise Consumed")
})

// ************//
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 Consumed")
})

 // *********** //
 const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'bhaktiagrawal088', email : 'bhaktiagrawal286@gmail.com'})
    }, 1000)
 })
 PromiseThree.then(function(user){
    console.log(user)
 })

 // ********** //
const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : 'Bhakti', password : '123'})
        }
        else{
            reject('Error: Somenthing went Wrong')
        }
    },1000)
})
PromiseFour
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((myusername)=>{
    console.log(myusername)
})
.catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('Finnally, the promsie is either resolve or reject')
})

// *********** //
const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'javascript', password : '123'})
        }
        else{
            reject('Error: Js went wrong')
        }
    }, 1000)
});

// Async  await syntax
async function consumePromiseFive(){
    try{
    const response = await PromiseFive
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
 consumePromiseFive();

 // ************* //
//  async function getUserAll(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: Error');
//     }
//  }
//  getUserAll();

// ********* //
// fetch call using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

