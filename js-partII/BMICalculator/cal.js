const form = document.querySelector('form')
// this usecase willl give empty value
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector('#result')
    if (isNaN(height) || isNaN(weight)) {
        result.innerHTML = "Please Enter a valid number";
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        // show the result
        // result.innerHTML =` <span> ${bmi} </span>`;
        if(bmi>25){
            result.innerHTML = `Over Weight : ${bmi}`;
        }
        else if(bmi>=18.5 && bmi<=24.9){
            result.innerHTML = `Normal: ${bmi}`;
        }
        else{
            result.innerHTML = `UnderWeight : ${bmi}`;
        }
    }}
);