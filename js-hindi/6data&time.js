// Dates
let myDate =  new Date()
console.log(myDate); // not readable form
// Formatting the date
console.log(myDate.toString()) // India Standard Time
console.log(myDate.toLocaleString()); // Indian Standard Time
console.log(myDate.toDateString());   // more readable form
console.log(typeof myDate); // object type😪

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatDates = new Date("2023-01-14") // yyyy--mm--dd
console.log(myCreatDates.toDateString());
console.log(myCreatDates.toLocaleDateString())
let Dated = new Date("01-14-2023") //  mm-dd-yyy
console.log(Dated.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // comes value in min-sec
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())
console.log(newDate.getHours())

newDate.toLocaleString('default',{
    hour: 'numeric',
    minute:'numeric' ,
    second : 'numeric'
})
console.log(newDate)   



