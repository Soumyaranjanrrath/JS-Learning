let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number between 1 and 100.");
    }else if(guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayMsg(`Game Over! You've used all your attempts. & the number was ${randomNumber}.`);
            endGame();
        }else {
            displayGuess(guess);
            checkGuess(guess);    
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMsg(`Congratulations! You guessed the number ${randomNumber} correctly!`);
        endGame();
    } else if(guess < randomNumber) {
        displayMsg("Your guess is too low.");
        lowOrHi.textContent = "Last guess was too low.";
    } else if (guess > randomNumber) {
        displayMsg("Your guess is too high.");
        lowOrHi.textContent = "Last guess was too high.";
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} attempts remaining.`;
}

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id='newGame'> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess} attempts remaining.`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}

