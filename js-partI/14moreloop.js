// for of

const arr = [1,2,3,4,5,6]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello Bhakti"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps
// In map Values will be unique
const map = new Map()
map.set('IN', "India")
map.set("US", 'USA')
map.set('Fr',"France")
map.set('IN',"India") // not futher print
console.log(map);

for(const [key, value] of map){
    //console.log(key); // we don't want like this so we destracturing an array
    console.log(key, ':-',value)
}
 // for of on object
 const myObject = {
    'game1': 'NFS',
    'game2':'GTA',
    'game3':'PUBG'
 } // for of loop don't work on objects
 // this is not iterable
 //for(const [key, value] of myObject){
    //console.log(key + ':-'+ value) // error
 //}

 // for in loop on object
 for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`);
 }

 // for in loop on array
 let programming = ['Js','rb','py','java','c++']
 for(let key in programming){
    //console.log(key); // print all the keys (index number)
    console.log(programming[key]) // print an array
 }

 // for in loop is not iterable on map


 // for each loop
 const students = ["John","Jane","Jack"]
 students.forEach(function (item){
    console.log(item);
 })

 /// arrow function
 console.log('arrow function')
 students.forEach((item)=>{
    console.log(item);
    
 })

 function printMe(item){
    console.log(item);
 }
 students.forEach(printMe)

 // some interesting things
 students.forEach((item, index, arr) => {
    console.log(item,index,arr)
 })
// In Array create a different objects
 const myCoding = [
    {
        languageName: 'Javascripts',
        LanguageFileName: 'Js'
    },
    {
        languageName: 'Ruby',
        LanguageFileName: 'rb'
    },
    {
        languageName: 'Python',
        LanguageFileName: 'py'
    }
 ]
 myCoding.forEach((item)=> {
    console.log(`${item.languageName} and file name ${item.LanguageFileName}`);
 })