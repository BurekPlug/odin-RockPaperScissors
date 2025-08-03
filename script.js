/* global variables */
var humanScore = 0;
var computerScore = 0;
const NUMBEROFROUNDS = 5;

var humanSelection = 0;
var computerSelection = 0;

function getComputerChoice (){
    let randomNumber = Math.random()*  30;
    if (randomNumber < 10) {
        console.log("Computer: Rock!")
        return 1;
    }

    else if (randomNumber >= 10 && randomNumber < 20) {
        console.log("Computer: Paper!")
        return 2;
    }

    else {
        console.log("Computer: Scissors!")
        return 3;
    }
};

function getHumanChoice (){
    let choice = prompt("Please input your choice: Either 'Rock', 'Paper' oder 'Scissors'");
    console.log("User: " + choice);
    switch(choice.toUpperCase()) {
        case "ROCK":
            return 1;
        case "PAPER":
            return 2;
        case "SCISSORS":
            return 3;
        default:
            console.log("invalid choice!");
    }
}

function playRound(humanChoice, computerChoice) {
   
    if (humanChoice == computerChoice)
    {
        console.log("Tie.");
        return 0;
    }

    else {
        if (humanChoice == 1 )
        { 
            if  (computerChoice == 2)
            {
                /* Rock vs. Paper */
                console.log("You lose.");
                return -1;
            }

            else
            {
                console.log("You win.");
                return +1;
            }
        }
        else if (humanChoice == 2)
        { 
            if  (computerChoice == 3)
            {
                /* Paper vs. Scissors */
                console.log("You lose.");
                return -1;
            }

            else
            {
                console.log("You win.");
                return +1;
            }
        }
        else if (humanChoice == 3)
        { 
            if  (computerChoice == 1)
            {
                /* Scissors vs. Rock */
                console.log("You lose.");
                return -1;
            }

            else
            {
                console.log("You win.");
                return +1;
            }
        }
        else {
            console.log("...Try Again.");
            return undefined;
        }
    }
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
    console.log("Human : Computer - " + humanScore + " : " + computerScore);
}


function playGame() 
{
    humanScore = computerScore = 0;
    for (let i = 0; i < NUMBEROFROUNDS; i++) 
    {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        evalScore(playRound(humanSelection, computerSelection));

    }
};



playGame();

//getComputerChoice();
//console.log(getHumanChoice());

/* Run Tests*/
//Teststatistics();





/* Test Functions */
function Teststatistics () 
{
    let cntR = 0;
    let cntP = 0;
    let cntS = 0;
    for (let i = 0; i<100000; i++) {
        let result = getComputerChoice();
        switch (result) {
            case 1:
                cntR++;
                break;
            case 2:
                cntP++;
                break;
            case 3:
                cntS++;
                break;
        }
    }
    console.log("Count R:" + cntR);
    console.log("Count P:" + cntP);
    console.log("Count S:" + cntS);
}