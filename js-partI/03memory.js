// ********** Memory ************
// Stack (Primitive) , Heap(Non-primitive)
// 1. Primitives are stored in the stack, non-primitives are stored on heap
// 2. The size of a primitive is known at compile time and it's fixed
// 3. The size of an object is not known until runtime because it depends on its content    
// 4. Objects can be created dynamically using new keyword
// 5. When we create objects using 'new', memory for that object is allocated from heap
// 6. In Java, all variables point to some location in the heap where their values are stored
// 7. All objects have a reference variable which points to them
// 8. Reference variables also take up space in the stack but they don’t store any data themselves
// 9. If you want to access the value of an object, you need to use the reference variable
// 10. You cannot directly access the memory address of an object or its value

// *********Stack********** ---> Copy value
let name = "Bhakti"
let AnotherName = name
console.log(AnotherName) // it gives copy of its value not original 🤨
AnotherName = "Agrawal"
console.log(name) // can not be change the value 
console.log(AnotherName);

// *********Heap*********** ---> Refrence Value(original value) 😦
let userOne = {
    email : "bhaktiagrawal286@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "bhaktiaaawal@gmail.com"
console.log("User One", userOne) // also change the value of userone because its gives original value 
console.log("User Two", userTwo)


