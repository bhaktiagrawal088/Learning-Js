// var rec = document.querySelector("#center");

// rec.addEventListener("mousemove", function(details){
//     var recloc = rec.getBoundingClientRect();
//     var insiderect = details.clientX - recloc.left;

//     if(insiderect<recloc.width /2){
//         var redcolor = gsap.utils.mapRange(0, recloc.width/2, 255, 0, insiderect);
//         gsap.to(rec,{
//             backgroundColor: `rgb(${redcolor},0,0)`,
//             ease: Power4,
//         });
//     }
//     else{
//         var bluecolor = gsap.utils.mapRange(recloc.width/2,recloc.width, 0, 255, insiderect);
//         gsap.to(rec,{
//             backgroundColor: `rgb(0,0,${bluecolor})`,
//             ease: Power4,
//     });
// }
// });


// rec.addEventListener("mouseleave",function(){
//     gsap.to(rec, {
//         backgroundColor: "white",
//     })
// })

// rectangle movement with mouse

window.addEventListener("mousemove", function(details){

    var rect = document.querySelector("#rect");

    var xval = gsap.utils.mapRange(0, window.innerWidth, 100 + rect.getBoundingClientRect().width/2, window.innerWidth - (100 + rect.getBoundingClientRect().width/2), details.clientX);
    gsap.to('#rect', {
        left: xval + "px",
        ease: Power3,
    })
})