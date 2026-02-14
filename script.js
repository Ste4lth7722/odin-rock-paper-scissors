let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let input = prompt("Enter your choice: Rock, paper, or scissors:");
    let inputLower = input.toLowerCase();
    return inputLower;
}


function playGame(){
    let roundsPlayed = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            console.log("You win! rock beats scissors.");
        }
        else if (humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            console.log("You lose! paper beats rock!");
        }
        else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            console.log("You win! paper beats rock.");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            console.log("You lose! scissors beats paper!");
        }
        else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            console.log("You win! scissors beats paper.");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            console.log("You lose! rock beats scissors.");
        }
        else{
            console.log("Draw!");
        }
    }
    
    while (roundsPlayed < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        roundsPlayed++;
    }

    checkWin();
}

function checkWin(){
    if (humanScore > computerScore) {
        console.log("You win overall!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins overall!");
    }
}

playGame();