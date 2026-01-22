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

function playRound(humanSelection, computerSelection){
    if(humanSelection === computerSelection){
        console.log("uh oh! same choice");
    }
    else if(humanSelection === "rock" && computerSelection === "scissor"){
        console.log("Rock beats scissors! +1 human score!");
        humanScore++;
    }
    else if(computerSelection === "paper" && humanSelection === "rock"){
        console.log("Paper beats rock... +1 computer score");
        computerScore++;
    }
    else if(humanSelection === "scissor" && computerSelection === "paper"){
        console.log("Scissors beat paper! +1 human score!");
        humanScore++;
    }
    else if(computerSelection === "rock" && humanSelection === "scissor"){
        console.log("Rock beats scissors... +1 computer score");
        computerScore++;
    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
        console.log("Paper beats rock! +1 human score!")
        humanScore++;
    }
    else if(humanSelection === "paper" && computerSelection === "scissor"){
        console.log("Scissor beats paper... +1 computer score");
        computerScore++;
    }
};

while(humanScore != 3 && computerScore != 3){
    playRound(getHumanChoice(), getComputerChoice());
    console.log("human score: " + humanScore + " Computer score: " + computerScore);
    if(humanScore == 3){
        console.log("congragulations! You win!");
        break;
    }
    else if(computerScore == 3){
        console.log("Sorry, you lose!");
        break;
    }
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    let randomValue = choices[Math.floor(choices.length * Math.random())];
    return randomValue;
}
function getHumanChoice(){
    let choice = prompt("make a choice");
    return choice.toLowerCase();
}
