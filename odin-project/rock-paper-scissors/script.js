/*
function computerPlay() {
    let rNum = Math.random();
    let cChoice = "";
    if (rNum >= .66){
     cChoice = "rock";
    }
    else if(rNum >= .34){
     cChoice = "scissors";
    }
    else{
     cChoice = "paper";
    }
    return cChoice;
}

function playerSelection() {
    let pChoice = prompt("Rock, Paper, Scissors")
    return pChoice;
}

function playRound(pChoice, cChoice) {
    if(pChoice == cChoice) {
        return "It's a draw!";
    }
    else if (pChoice == "rock" && cChoice == "scissors") {
        return "Player Wins!";
    }
    else if (pChoice == "paper" && cChoice == "rock") {
        return "Player Wins!";
    }
    else if (pChoice == "scissors" && cChoice == "paper") {
        return "Player Wins!";
    }
    else {
        return "Computer Wins";
    }
}

function game() {
    let cChoice = "";
    let pChoice = "";
    for (let i = 0; i < 5; i++) {
        cChoice = computerPlay();
        pChoice = playerSelection();
        pChoice.toLowerCase();
        console.log(playRound(pChoice, cChoice));
    }
}
*/

function rpsSimple() {
    const rpsArray = ["scissors", "rock", "paper", "scissors", "rock"]
    let pChoice;
    let rNum;
    for (let i = 0; i < 5; i++) {
        pChoice = prompt("1 = Rock, 2 = Paper, 3 = Scissors");
        rNum = Math.random();
        if (rNum >= .67){
            console.log(`Player: ${rpsArray[pChoice]}  Computer: ${rpsArray[(pChoice - 1)]}`);
            console.log("You Win!");
        }
        else if(rNum >= .34){
            console.log(`Player: ${rpsArray[pChoice]}  Computer: ${rpsArray[(+pChoice + 1)]}`);
            console.log("You Lose!");
        }
        else{
            console.log(`Player: ${rpsArray[pChoice]}  Computer: ${rpsArray[(pChoice)]}`);
            console.log("It's a draw!");
        }
    }
}