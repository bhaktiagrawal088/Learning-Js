let random = parseInt(Math.random() * 100 + 1);

const submits = document.querySelector("#submits")
const userInput = document.querySelector(".GuessField")
const guessSlot = document.querySelector(".guesses")
const remainingSlot = document.querySelector(".attemptsremain")
const LowOrHigh = document.querySelector(".LowOrHigh")
const startOver = document.querySelector(".resultparas")

const p = document.createElement('p')

let PreGuess = []
let NumGuess = 1
let playGame = true;

if(playGame){
    submits.addEventListener('click' , function(e){
        e.preventDefault(); // because we don't want to display value on server
        const guess = parseInt(userInput.value);
        console.log(guess);
        ValidGuess(guess);

    });
}
function ValidGuess(guess){
    // validation number should be 1 and 100 , not a string and not less than 1 , not greater than 100
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess < 1 || guess > 100){
        alert("Number is out of range, please try again between 1 - 100.");
    }
    else{
        PreGuess.push(guess);
        if( NumGuess === 11){
            displayGuess(guess);
            MessageDisplay(`Game Over.  Random number was ${random}`);
            EndGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // value low, high, equal 
    if(guess === random ){
        MessageDisplay(`you guessed it right , number is ${random}`);
        EndGame();
    }
    else if (guess < random){
        MessageDisplay("Your guess is too Low");
    }
    else{
        MessageDisplay("Your guess is too High");
    }
}

function displayGuess(guess){
    // clear the value , update the guess and remainig attempts
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    NumGuess++;
    remainingSlot.innerHTML = `${11 - NumGuess}`;
}

function MessageDisplay(message){
    // DOM manipulation 
    LowOrHigh.innerHTML = `<h2> ${message}</h2> `;
}

function EndGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id = "NewGame" > Start a New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    NewGame();
}

function NewGame(){
    const newgamebutton = document.querySelector('#NewGame');
    newgamebutton.addEventListener('click', function(e){
        random = parseInt(Math.random() * 100 + 1);
        PreGuess= [];
        NumGuess = 1;
        guessSlot.innerHTML = '';
        remainingSlot.innerHTML = `${11 - NumGuess}`;
        userInput.removeAttribute('disabled');
        startOver.appendChild(p); 
        playGame = true;

    })
}
 
