/* global variables */
var humanScore = 0;
var computerScore = 0;

function getComputerChoice (){
    let randomNumber = Math.random()*  30;
    console.log(randomNumber);
    if (randomNumber < 10) {
        console.log("Rock!")
        return 1;
    }

    else if (randomNumber >= 10 && randomNumber < 20) {
        console.log("Paper!")
        return 2;
    }

    else {
        console.log("Scissors!")
        return 3;
    }
};

function getHumanChoice (){
    let choice = prompt("Please input your choice: Either 'Rock', 'Paper' oder 'Scissors'");
    console.log(choice);
    switch(choice.toUpperCase()) {
        case "ROCK":
            return 1;
        case "PAPER":
            return 2;
        case "SCISSOR":
            return 3;
        default:
            console.log("invalid choice!");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice)
    {
        console.log("Tie");
    }

    else {
        if (humanChoice == 1 )
        { 
            if  (computerChoice == 2)
            {
                /* Rock vs. Paper */
                console.log("You lose.");
            }

            else
            {
                console.log("You win.");
            }
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log("Hello World!");


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