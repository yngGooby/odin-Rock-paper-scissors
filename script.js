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
function getHumanChoice(){
    let choice = prompt("make a choice");
    return choice.toLowerCase();
}

function playRound(humanSelection, getComputerChoice){
    if(humanSelection === computerSelection){
        console.log("uh oh! same choice")
    }
    if(humanSelection === "rock" && getComputerChoice === "scissor"){
        console.log("Rock beats scissors! +1 human score!");
        return humanScore++;
    }
    else if(getComputerChoice === "paper" && humanSelection === "rock"){
        console.log("Paper beats rock... +1 computer score");
    }
    if(humanSelection === "scissor" && getComputerChoice === "paper"){
        console.log("Scissors beat paper! +1 human score!");
        return humanScore++
    }
    else if(computerSelection === "rock" && humanSelection === "scissor"){
        console.log("Rock beats scissors... +1 computer score");
    }
    if(humanSelection === "paper" && getComputerChoice === "rock"){
        console.log("Paper beats rock! +1 human score!")
    }

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
