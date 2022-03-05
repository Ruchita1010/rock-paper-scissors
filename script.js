const computerPlay = () => {
    const choicesArray = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * 3);
    const computerSelection = choicesArray[choiceIndex];
    return computerSelection;
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            return "player";
    }
    else{
        return "computer";
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("enter your choice");
        console.log(computerSelection, playerSelection);
        const roundWinner = playRound(playerSelection, computerSelection);
        roundWinner === "tie" ? 0 : roundWinner === "player" ? playerScore++ : computerScore++;
    }
    playerScore > computerScore ? console.log("Player Wins!!!"): console.log("Computer Wins!!!");
}

game();