let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choicesArray = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * 3);
    const computerSelection = choicesArray[choiceIndex];
    return computerSelection;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return "player";
    }
    else {
        return "computer";
    }
}

const displayPopup = (message, time) => {
    const Popup = document.querySelector("#popup");
    const PopupText = document.querySelector("#popup-text");
    PopupText.textContent = message;
    // make it visible for 1s only
    Popup.style.display = "flex";
    setTimeout(() => {
        Popup.style.display = "none";
    }, time);
}

const updateUIScore = () => {
    const computerScoreText = document.querySelector("#computer-score");
    const playerScoreText = document.querySelector("#player-score");
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
}

const getWinner = () => {
    let endingSound = document.querySelector("#ending-sound");
    const textContent = playerScore > computerScore ? "You Won 🎉" : "You Lost 😕";
    endingSound.play();
    displayPopup(textContent, 3000);
}

const checkResult = (roundWinner) => {
    if (roundWinner === "tie") {
        let soundForTie = document.querySelector("#sound-for-tie");
        displayPopup("It's a Tie🐶", 1000);
        soundForTie.play();
    }
    else {
        roundWinner === "player" ? playerScore++ : computerScore++;
        updateUIScore();
        if (playerScore === 5 || computerScore === 5) {
            getWinner();
            playerScore = computerScore = 0;
            setTimeout(startScreen, 3000);
        }
    }
}

const handChange = (playerSelection, computerSelection) => {
    const computerHand = document.querySelector("#computer-hand");
    const playerHand = document.querySelector("#player-hand");
    playerHand.src = `./images/${playerSelection}.png`;
    computerHand.src = `./images/${computerSelection}.png`;
}

const handShakeStart = (hands) => {
    hands.forEach(hand => {
        hand.style.animation = "hand-shaking 1s ease-in-out";
    });
}

const handShakeEnd = (hands) => {
    hands.forEach(hand => {
        hand.addEventListener("animationend", function () {    //arrow function cannot be used if using 'this' keyword 
            this.style.animation = "";
        });
    });
}

const game = () => {
    const hands = [...document.querySelectorAll(".hand")];
    handShakeEnd(hands);    // To start animation again **imp 

    const options = [...(document.querySelectorAll(".option"))];
    options.forEach(option => {
        const optionDiv = document.querySelector("#options");
        option.addEventListener("click", (e) => {
            optionDiv.classList.add("disable-options"); // disable the options from selecting
            const computerSelection = getComputerChoice(); // get computer's choice
            const playerSelection = e.target.id;    // get player's choice
            // get the winner for the current round
            const roundWinner = playRound(playerSelection, computerSelection);
            setTimeout(() => {
                handChange(playerSelection, computerSelection);
                checkResult(roundWinner);
                optionDiv.classList.remove("disable-options");  // allow the options for selecting
            }, 2000);
            handShakeStart(hands);
            handChange("rock", "rock");     // reset the hands
        });
    });
}

const startGame = () => {
    const startDiv = document.querySelector("#start-div");
    startDiv.style.display = "none"; // hiding start page 
    game();
}

const startScreen = () => {
    handChange("rock", "rock");     // resetthe hands
    updateUIScore();    // reset scores back to zero
    const startDiv = document.querySelector("#start-div");
    startDiv.style.display = "flex";   // make start page visible
    const startBtn = document.querySelector("#start-btn");
    startBtn.addEventListener("click", startGame);  // upon clicking start btn, start the game
}

startScreen();