// singleton

// object literals

const mySym = Symbol("Key1")
const person = {
  name: 'John',
  [mySym]: "mykey1", // refer as a symbol
  age: 30,
  location: "Aligarh",
  email: "bhaktiagrawal286@gmail.com",
  isLoggedIn: false
};
console.log(person);   
console.log(person.email)        
console.log(person["email"])
console.log(person[mySym])
console.log(typeof person[mySym])

// Changing the value 
person.age = 45;
delete person.location;
person['isLoggedIn']= true;
console.log(person);  

// freeze
//Object.freeze(person) // can not change any value 
person.email = "Bhaktiagrawal@gmail.com"
console.log(person)

// add a greeting
person.greeting = function() {
  console.log("Hello, Welcome User");
}
console.log(person.greeting) // --> [Function (anonymous)]
console.log(person.greeting()) // error 😵 greeting is not a function because of we are freeze a object Person

person.greetingTwo = function(){
  return `Hi ${this.name}`
}
console.log(person.greetingTwo())

// declare a object 

const tinderUser = new Object() // one method to declare a object(singletone object)
const tinderUser1 = {}          // another method to declare a object(Non-Singletone object)
console.log(tinderUser)         // --> {}
console.log(tinderUser1)        // --> {}
console.log(tinderUser === tinderUser1) // Flase

tinderUser.id = "123abc"
tinderUser.name = "Bhakti Agrawal"
tinderUser.age = 21
tinderUser.gender = "Female"
tinderUser.job = "Software Engineer"
tinderUser.interests = ["Coding", "designing"]
console.log(tinderUser)

// object inside object
const regularUser = {
  id : '123',
  fullname : {
    userfulllname : {
      firstName: "John",
      lastName: "Doe"
    }
  }
}
console.log(regularUser)
console.log(regularUser.fullname.userfulllname.firstName)

// merge two object
const obj1 = {1:"a", 2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
// const obj3 = {obj1, obj2} // this is not effective 🥴
//const obj3 = Object.assign({},obj1,obj2) // Actually we are not using this method🙃
const obj3 = {...obj1, ...obj2} // spread method 😎
console.log(obj3);
// access the keys 
console.log(Object.keys(obj1))
//access values of an object
console.log(Object.values(obj1))
//access entries of an object
console.log(Object.entries(obj1))

// property exist or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // False
console.log(tinderUser.hasOwnProperty('id'))  // true

// Object destructuring
const course = {
  coursename : "Javascripts",
  price : 599,
  courseInstructor : "Bhakti"
}
//console.log(course.courseInstructor)
const {courseInstructor: inst} = course
//console.log(courseInstructor);
console.log(inst)    // destructuring the name

// JSON API

// {
//   "name"  : "Bhakti",
//   "age"   : 21,
// }

// [
//   {},
//   {},
//   {}
// ]