# Project related to DOM
## Solution code
### Project 1
```javascript
// <!-- HTML -->
<body>
    <h1>Color Scheme Switcher</h1>

    <div>
    <span class = "button" id = "grey">
        <button id="btn-1">grey</button>
    </span>
    <span class = "button" id = "white">
        <button id="btn-2">white</button>
    </span>
    <span class = "button" id = "blue">
        <button id="btn-3">blue</button>
    </span>
    <span class = "button" id = "yellow">
        <button id="btn-4">yellow</button>
    </span>
    </div>
    
    <span>To change backkground color of this page! </span>
    <h2>Try clicking on one of the colors above</h2>
</body>

// <!-- CSS -->
body{
    background-color: aliceblue;
     color : black;
    }
button{
    height : 3em;
    width : 5em;
    position: relative;
    top: 50;
    left: 10;
    border: 2px solid black;
}
#btn-1{ 
    background-color: grey;
    color: white;}
#btn-2{ 
    background-color: white;
    color:black;}
#btn-3{
    background-color: darkblue;
    color: white;}
#btn-4{
    background-color: yellow;
    color: black;
}

// <!-- Javascript -->
const buttons = document.querySelectorAll("button")
    const body = document.querySelector("body")
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            if(e.target.id === "btn-1"){
                body.style.backgroundColor= "grey";
            }
            if(e.target.id === "btn-2"){
                body.style.backgroundColor = "white";
            }
            if(e.target.id === "btn-3"){
                body.style.backgroundColor = "blue";
            }
            if(e.target.id === "btn-4"){
                body.style.backgroundColor = "yellow";
            }
        })
    })

```
### Project 2

```javascript
// <!-- HTML -->
<body>
    <div class="container">
    <h1>Calculate BMI</h1>
   <form>
    <p><label> Height in cm : </label> 
         <input type="text" , placeholder="Enter your Height", id="height"></p>
    <p><label>Wieght in kg :  </label>
        <input type="text", placeholder="Enter your Weight", id="weight">
    </p>
    <button>Calculate</button>
    <div id = "result"></div>
    <h3>BMI Wieght Guide</h3>
    <p>Under Weight = Less Than 18.6 </p>
    <p>Normal weight = Between 18.5 and 24.9 </p>
    <p>Over Weight = More than 25 </p>
   </form> 
    </div>
    <script src="cal.js"></script>
</body>
// <!-- CSS -->
body{
    background-color: lightcoral;
    font-size: medium;
}
// <!-- Javascript -->
const form = document.querySelector('form')
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
```
### Project 3

```javascript
// <!-- HTML -->
<body>
    <div class="center">
        <div id = "banner"><span>Your Local Time</span></div>
        <br>
        <div id="clock"></div>
    </div>
</body>

// <!-- CSS -->
body{
    background-color: #212121;
    color: #fff;
}
.center{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#clock{
    font-size: 50px;
    background-color: orange;
    border-radius: 5px;
    padding: 20px 4%;
    margin-bottom: 10px;
}
// <!-- Javascript -->
// const clock = document.querySelector("#clock")
const clock = document.getElementById('clock');
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```