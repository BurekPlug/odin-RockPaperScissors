console.log("Hello World!");

getComputerChoice();
//Teststatistics();

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