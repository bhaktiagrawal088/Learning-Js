const coding = ['js','ruby','java','python','cpp']
const values = coding.forEach((item)=>{
    console.log(item)
})
console.log('------------------------')
console.log(values) // undefined
// for Each loop does not return any value

const myNums = [1,2,3,4,5,6,7,8]
const newNums = myNums.filter((num)=>num>4)
console.log(newNums) // --> [5,6,7,8]

const myNum = [1,2,3,4,5,6,7,8]
const newNum = myNum.filter((num)=>{
    return num>4
}
    )
console.log(newNum) // --> [] 🙄 solve this problem using return keyword


// for Each instead of filter
const nums = []
myNum.forEach((num)=>{
    if(num>4){
        nums.push(num)
    }
})
console.log(nums) // --> [5,6,7,8]

// Some Example 

const books = [
    {title: 'Book one',genre: 'Fiction',publish:1981,
    edition: 2004},
    {title:'Book two', genre: 'Non-fiction', publish:1990,
    edition: 2005},
    {title:'Book three', genre: 'Science fiction', publish:2000,
    edition: 2006},
    {title:'Book four', genre: 'Thriller', publish:1995,
      edition: 2007},
];
let userBooks = books.filter((bk)=>bk.genre === 'Thriller' )
console.log(userBooks);
userBooks = books.filter((bk)=> { return bk.publish >= 2000})
console.log(userBooks);


// map method
const numbers = [1,2,3,4,5,6]
const newNumbers = numbers.map((num) => num +10)
console.log(newNumbers) // --> [11,12,13,14,15,16]

// chaining

const n = [1,2,3,4]
const ns = n
            .map((num)=>num*10)
            .map((num)=> num+1)
            .filter((num)=> num > 30)
console.log(ns);

// reduce method
const MyNum = [1,2,3]
const myTotal = MyNum.reduce(function(acc, currval){
    console.log(`acc: ${acc}, and currval: ${currval}`)
    return acc + currval;
},0)
console.log(myTotal) // --> 6

const Total = MyNum.reduce((acc, curr)=> acc+curr, 0)
console.log(Total) // --> 6

const shoopingCart = [
    {
        itemName : "js course",
        price :  2999
    },
    {
        itemName : "react course",
        price :  1999
    },
    {
        itemName : "node js course",
        price :  1499
    }
]

const priceToPay= shoopingCart.reduce((acc, item)=> acc+ item.price,0)
console.log(priceToPay) // --> 6898