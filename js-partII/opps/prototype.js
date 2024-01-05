let Name = "Bhakti       "
// console.log(Name.truelength) // ---> Undefined
// console.log(Name.trim().length) // 6 but this is not good approach

let heroes = ['Thor', 'Spiderman']
let heropower = {
    Thor : 'Hammer',
    Spiderman : 'Sling',

    getSpiderPower: function(){
        console.log(`Spider power is ${this.Spiderman}`)
    }
}

Object.prototype.Bhakti = function(){
    console.log('Bhakti is present in all Object')
}

Array.prototype.SayBhakti = function(){
    console.log('Hello Bhakti')
}
// heropower.Bhakti(); // object have an power of object
// heroes.Bhakti();  // object have an power of array 

// But in case of array prototype Array doesn't have a power of object
// heroes.SayBhakti(); // -> Hello Bhakti
// heropower.SayBhakti(); // -> in case of object it will give an error SyaBhakti is not a function 

// ********** Inheritance *************

const user = {
    username: "Bhakti",
    email: 'bhaktiagrawal286@gmail.com'
}
const Teacher = {
    makevideo : true,
}
const TeachingSupport = {
    isAvailable : false,
}
const TASupport = {
    makeassignment : "Js Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}
// OutDated Approach
Teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anothername = "Bhakti Agrawal      "
String.prototype.TrueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.anothername}`) //-> undefined
    console.log(`True length is : ${this.trim().length}`)
}
anothername.TrueLength();
"Bhakti".TrueLength();
"ChaiAurCode ".TrueLength();