/* global variables */
var humanScore = 0;
var computerScore = 0;
const NUMBEROFROUNDS = 5;

function getComputerChoice (){
    let randomNumber = Math.random()*  30;
    if (randomNumber < 10) {
        divComputerChoice.textContent =("Computer: Rock! ")
        return 1;
    }

    else if (randomNumber >= 10 && randomNumber < 20) {
        divComputerChoice.textContent =("Computer: Paper! ")
        return 2;
    }

    else {
        divComputerChoice.textContent =("Computer: Scissors! ")
        return 3;
    }
};

function playRound(e) {
    let humanChoice, computerChoice, score;
    switch (e.srcElement.id) 
    {
        case "btnRock":
            humanChoice = 1;
            break;
        case "btnPaper":
            humanChoice = 2;
            break;
        case "btnSissors":
            humanChoice = 3;
            break;
    }

    computerChoice = getComputerChoice();
    
    if (humanChoice == computerChoice)
    {
        divComputerChoice.textContent += ("Tie.");
        score = 0;
    }

    else {
        if (humanChoice == 1 )
        { 
            if  (computerChoice == 2)
            {
                /* Rock vs. Paper */
                divComputerChoice.textContent += ("You lose.");
                score = -1;
            }

            else
            {
                divComputerChoice.textContent += ("You win.");
                score = +1;
            }
        }
        else if (humanChoice == 2)
        { 
            if  (computerChoice == 3)
            {
                /* Paper vs. Scissors */
                divComputerChoice.textContent += ("You lose.");
                score = -1;
            }

            else
            {
                divComputerChoice.textContent += ("You win.");
                score = +1;
            }
        }
        else if (humanChoice == 3)
        { 
            if  (computerChoice == 1)
            {
                /* Scissors vs. Rock */
                divComputerChoice.textContent += ("You lose.");
                score = -1;
            }

            else
            {
                divComputerChoice.textContent += ("You win.");
                score = +1;
            }
        }
        else {
            divComputerChoice.textContent += ("...Try Again.");
        }
    }

    evalScore(score);
}

function evalScore(result) {
    switch(result) {
        case 1:
            humanScore++;
            break;
        case -1:
            computerScore++;
            break;
        case 0:
            humanScore++;
            computerScore++;
            break;
        default:
            break;
    }
    
    if(humanScore >= NUMBEROFROUNDS || computerScore >= NUMBEROFROUNDS )
    {
        divComputerChoice.textContent = "END OF ROUND! Final Score " + humanScore + " : " + computerScore;
        if (humanScore > computerScore)
        {divScoreboard.textContent = "Humanity wins!";}
        else if (humanScore < computerScore)
        {divScoreboard.textContent = "The machine wins!";}
        else
        {divScoreboard.textContent = "TIE!";}
    }
    else
    {
        divScoreboard.textContent = "\n\n current score: " + humanScore + " : " + computerScore;
    }
    

}


function playGame() 
{
    alert("You are about to play Rock, Paper, Scissors. Make your choice.");
    humanScore = computerScore = 0;
};


playGame();

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnSissors = document.querySelector("#btnSissors");

btnRock.addEventListener("click", (e) => playRound(e));
btnPaper.addEventListener("click", (e) => playRound(e));
btnSissors.addEventListener("click", (e) => playRound(e));

const container = document.querySelector("#container");
const divComputerChoice = document.createElement("div");
const divScoreboard = document.createElement("div");
divComputerChoice.classList.add("divComputerChoice");
divScoreboard.classList.add("divScoreboard");

divComputerChoice.textContent = "Computer awaits your choice.";
divScoreboard.textContent = "current score: " + humanScore + " : " + computerScore;

container.appendChild(divComputerChoice);
container.appendChild(divScoreboard);
