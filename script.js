let humanScore = 0;
let computerScore = 0;


const actionButtons = document.querySelector("#actionParent");
actionButtons.addEventListener("click", getHumanChoice);


function getComputerChoice(){ 
    let random = Math.random();
    let index = Math.ceil(random * 3);
    if (index === 1){
        return "rock";
    }
    else if (index === 2){
        return "paper";
    }
    else if (index === 3){
        return "scissors";
    }
}

let humanChoice = "";
let roundsPlayed = 0;
let gameOver = false;

function getHumanChoice(e) {
    humanChoice = e.target.textContent.toLowerCase();
    playRound(humanChoice, getComputerChoice());
}

function playRound(humanChoice, computerChoice){
    if (gameOver !== true){
        roundsPlayed += 1;
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            makeText("You win! rock beats scissors.");
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            makeText("You lose! paper beats rock!");
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            makeText("You win! paper beats rock.");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            makeText("You lose! scissors beats paper!");
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            makeText("You win! scissors beats paper.");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            makeText("You lose! rock beats scissors.");
        }
        else {
            makeText("Draw!");
        }

        checkWin();
    }
}

function makeText(text, color) {
    const newText = document.createElement("p");
    newText.textContent = text;
    if (color != null) {
        const oldText = document.querySelector("#winLabel");
        if (oldText != null) {
            oldText.remove();
        }
        newText.style.color = color;
        newText.id = "winLabel"
    }
    else {
        const oldText = document.querySelector("#statusLabel");
        if (oldText != null) {
            oldText.remove();
        }
        newText.id = "statusLabel"
    }
    const results = document.querySelector("#results");
    results.appendChild(newText);
    
    const roundsLabel = document.querySelector("#rounds");
    roundsLabel.textContent = "Rounds: " + roundsPlayed;
}

function checkWin(){
    if (humanScore >= 5) {
        makeText("You win as you got 5 points!", "green");
        gameOver = true;
    }
    else if (computerScore >= 5) {
        makeText("Computer wins as they got 5 points!");
        gameOver = true;
    }
    else if (humanScore === 5 && computerScore === 5) {
        makeText("You drew somehow");
        gameOver = true;
    }

    if (gameOver === true){
        const roundsLabel = document.querySelector("#rounds");
        roundsLabel.textContent = "Rounds: " + roundsPlayed + " - GAME OVER";
    }
}