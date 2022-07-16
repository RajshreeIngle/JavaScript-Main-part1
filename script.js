function computerPlay() {
    let array = ['rock', 'paper', 'scissor'];
    let computerChoice = "";
    let selectNumber = Math.floor(Math.random() * 3);
    computerChoice = array[selectNumber];
    return computerChoice;
}

function playerChoice() {
    let playerSelection = prompt("Select Your choice : Rock, Paper, or Scissor");
    //console.log("player selection : " + playerSelection);
    while (!playerSelection) {
        console.log("Nothing selected.... Please Select Your choice");
        alert("Nothing selected.... Please Select Your choice");
        playerSelection = prompt("Please Select Your choice : Rock, Paper, or Scissor");
    }
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == "rock") || (playerSelection == "scissor") || (playerSelection == "paper")) {
        //console.log("in if");
        return playerSelection;
    } else {
        alert("please enter valid selection between rock, paper, scissor");
        console.log("please enter valid selection between rock, paper, scissor");
        playerSelection = playerChoice();
        // playerSelection = prompt("please enter valid selection between rock, paper, scissor : ");
        return playerSelection;
    }
}

function playRound(playerSelection, computerSelection) {
    //Rock > scissor, scissor > paper , paper> rock
    // playerSelection = playerSelection.toLowerCase(); //commented for playerSelect function
    console.log(`Player choice "${playerSelection.toUpperCase()}" and computer choice is "${computerSelection.toUpperCase()}"`);
    if (playerSelection == computerSelection) {
        console.log("TIE");
        return "Its a Tie";
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock")) {
        console.log(`${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        console.log("COMPUTER WINS");
        return "Lost";
    } else {
        console.log(`${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        console.log("PLAYER WINS");
        return "Win";
    }
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;
    let string;
    let round = 1;
    for (i = 0; i < 5; i++) {
        // let playerSelection = prompt("Select Your choice : Rock, Paper, or Scissor"); // commented for playerSelect function
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        //const computerSelection = "rock"; 
        console.log(`******* Round ${round} *******`);
        round++;
        string = playRound(playerSelection, computerSelection);
        if (string == "Its a Tie") {
            tieCount++;
            console.log(`Player win count ${playerWinCount}, Computer win count ${computerWinCount}, Tie count ${tieCount},`);
        } else if (string == "Win") {
            playerWinCount++;
            console.log(`Player win count ${playerWinCount}, Computer win count ${computerWinCount}, Tie count ${tieCount}`);
        } else {
            computerWinCount++;
            console.log(`Player win count ${playerWinCount}, Computer win count ${computerWinCount}, Cie count ${tieCount}`);
        }
    }
    if (playerWinCount == computerWinCount) {
        return ("ITS BEEN A TIE. PLAY AGAIN");
    } else if (playerWinCount > computerWinCount) {
        return (`PLAYER WINS by ${playerWinCount} and COMPUTER LOSE by ${computerWinCount}`);
    } else {
        return (`COMPUTER WINS by ${computerWinCount} and PLAYER LOSE by ${playerWinCount}`);
    }
}

//let playerSelection = "RoCk"; 
// const computerSelection = computerPlay();
// console.log("computer selection is :" + computerSelection)
// playRound(playerSelection, computerSelection);

let winner = game();
if (winner == "ITS BEEN A TIE. PLAY AGAIN") {
    console.log(winner);
    let playAgain = prompt("Ohh! Its been a tie! Do you want to play again? (Yes/No)");
    if (playAgain) {
        console.log("playAgain : " + playAgain);
        if (playAgain.toLowerCase() == "yes") {
            winner = game();
            console.log(winner);
        } else {
            console.log("Visit again!");
        }
    } else {
        console.log("Game Over!");
    }
} else {
    console.log(winner);
}
