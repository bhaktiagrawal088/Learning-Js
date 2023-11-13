// ***********String*********
const name = "Bhakti"
const age = 21
console.log(name +" Agrawal " + age ) // concatenation

console.log(`Name is ${name} and Age is ${age}`) // string interpolation 🤗😎

// String decleration
const Game = new String("Badminton")
console.log(Game)
console.log(Game[0]) // B
console.log(Game.__proto__) // object {}
console.log(Game.length)    // find out the length
console.log(Game.toUpperCase()) // Convert to Uppercase
console.log(Game.charAt(3)) // find the character from its index number
console.log(Game.indexOf('n')) // Find the first occurrence of a substring in a string, returns -1 if not found
console.log(Game.substring(0,3)) // print the substring using starting and ending index number
console.log(Game.slice(-8, 4)) // in slice function we can pass the negative value ✂
console.log("   Bhakti  ".trim()) // Its remove the Starting and Ending Space


// String Methods
let str = 'Hello World'
str.toLowerCase() // to convert all letters in a string into lowercase
console.log(str.toLowerCase())

const Name = "Bhakti_Agrawal"
console.log(Name.replace('_','-')) // replace 
console.log(Name.split('_')) // split the string based on '_'
console.log(Name.includes('Bhakti')) // true Bhakti present in Name
console.log(Name.includes('Abc')) // false beacuse Abc is not present in Name
console.log(Name.startsWith('Bhakti')) // true if starts with Bhakti
console.log(Name.endsWith('Agrawal')) // true if ends with Agrawal
