// for loop
arr = [1,2,3,4,5]
 for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
 }

// nested for loop
for(let i =0 ; i<=10;i++){
    //console.log(`Outer loop value: ${i}`);
    for(let j=0;j<=10;j++){
    // console.log(`Ineer loop value ${j} and inner loop ${i}`)
    console.log(i + '*' + j + '=' + i*j);
}
}