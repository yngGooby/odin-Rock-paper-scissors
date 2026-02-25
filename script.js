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


let humanScoreVal = 0;
let computerScoreVal = 0;

function updateDisplayValues(){
    humanScore.textContent = humanScoreVal + " human score";
    computerScore.textContent = computerScoreVal + " computer score";
}
function winner(){
    if(humanScoreVal == 5){
        winningScore.textContent = "you won!"
        humanScoreVal = 0;
        computerScoreVal = 0;
    }
    else if(computerScoreVal == 5){
        winningScore.textContent = "computer won!"
        humanScoreVal = 0;
        computerScoreVal = 0;
    }
}
function playRound(humanSelection, computerSelection){
    if(humanSelection === computerSelection){
        console.log("uh oh! same choice");
    }
    else if(humanSelection === "rock" && computerSelection === "scissor"){
        console.log("Rock beats scissors! +1 human score!");
        humanScoreVal++;
    }
    else if(computerSelection === "paper" && humanSelection === "rock"){
        console.log("Paper beats rock... +1 computer score");
        computerScoreVal++;
    }
    else if(humanSelection === "scissor" && computerSelection === "paper"){
        console.log("Scissors beat paper! +1 human score!");
        humanScoreVal++;
    }
    else if(computerSelection === "rock" && humanSelection === "scissor"){
        console.log("Rock beats scissors... +1 computer score");
        computerScoreVal++;
    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
        console.log("Paper beats rock! +1 human score!")
        humanScoreVal++;
    }
    else if(humanSelection === "paper" && computerSelection === "scissor"){
        console.log("Scissor beats paper... +1 computer score");
        computerScoreVal++;
    }
    updateDisplayValues();
    winner();
};


function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    let randomValue = choices[Math.floor(choices.length * Math.random())];
    return randomValue;
}
const container = document.querySelector("#container");

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.addEventListener("click", () => playRound("rock",getComputerChoice()));
btn1.textContent = "rock"
btn2.addEventListener("click", () => playRound("paper",getComputerChoice()));
btn2.textContent = "paper";
btn3.addEventListener("click", () => playRound("scissor",getComputerChoice()));
btn3.textContent = "scissor";


const div = document.querySelector("#display");
div.style.border = "solid"
div.style.borderColor = "black"

const humanScore = document.createElement('h2');
humanScore.textContent = humanScoreVal + " human score";

const computerScore = document.createElement("h2");
computerScore.textContent = computerScoreVal + " computer score";

const winningScore = document.createElement("h1")
winningScore.textContent = "";

div.appendChild(humanScore);
div.appendChild(computerScore)
div.appendChild(winningScore);

container.appendChild(btn1)
container.appendChild(btn2)
container.appendChild(btn3)
