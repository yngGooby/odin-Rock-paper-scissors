/** 
 * Objective is to write a rock paper scissor game in javascript
 * generate text that displays the name of the game
 * the match will consist of 3 rounds
 * user must win two to complete match viceversa
 * the computer will countdown, then user choses their answer
 * computer will already have answer generated prior
 * see if you can add a pause between so that it builds "suspense"
 * give the 3 options a heirchy
 * instead of "if" statements use functions to make it more neat
 * with the functions make seperate ones to check which is greater than the other
 */


let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    let ranomValue = choices[Math.floor(choices.length * Math.random())];
    return ranomValue;
}

console.log(getComputerChoice());
function getHumanChoice(){
    var choice = prompt("make a choice");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    winningRules();
    gameWinner();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();








function winningRules(){
    if(humanSelection === computerSelection){
        console.log("uh oh same choice! Go again!");
    }
    if(humanSelection === "rock" && computerSelection === "scissor"){
        console.log("Rock beats scissors!");
        return humanScore++;
    }
    else {
        console.log("Paper beats rock!");
        return computerScore++;
    }
    if(humanSelection === "scissor" && computerSelection === "paper"){
        console.log();
        return humanScore++
    }
    else{
        console.log("Rock beats scissors!");
        return computerScore++;
    }
}
function gameWinner(humanScore, computerScore){
    if(humanScore == 3){
        console.log("Congradulations! You won!")
    }
    else if (computerScore == 3){
        console.log("Sorry! You lost!")
    }
}

playRound(humanSelection, computerSelection);
console.log(playRound());
