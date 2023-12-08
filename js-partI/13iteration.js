// for loop
arr = [1,2,3,4,5]
 for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
 }

// nested for loop
for(let i =1 ; i<=10;i++){
    //console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
    // console.log(`Ineer loop value ${j} and inner loop ${i}`)
    //console.log(i + '*' + j + '=' + i*j);
}
}


let myArray = ["flash", "Batman","Superman"]
console.log(myArray.length)
for(let i = 0; i<myArray.length; i++ ){  // when we use <= sign then last element of an array is undefined
    console.log(myArray[i]);
}

// break and contiune
for(let i =1; i<=10;i++){
    if(i==7){
        console.log("Detected 7");
        //break; // break the loop
        continue; // skip the condiiton
        
    }
        console.log(i)
}

// while loop
let i =1
while(i<=10){
    console.log(`value of i is ${i}`);
    i = i+2;
}

let MYarray = ["Flash","Batman","Superman"]
let index = 0;
while(index < MYarray.length){
    console.log(`Value is ${MYarray}`);
    index++;
}

// do while loop
let k =1
do{
    console.log(`value of k is ${k}`);
    k = k+4;
}while(k<=10)