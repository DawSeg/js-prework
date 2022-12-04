function getMoveName(argMoveId){
    if(argMoveId == 1) {
        return "kamień";
    }
    else if(argMoveId == 2) {
        return "nożyce";
    }
    else if(argMoveId == 3) {
        return "papier";
    }
    else{
        return "Ruch niedozwolony";
    }
}

function displayResult(argComputerMove, argPlayerMove){
    {printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
    }
    if(argComputerMove=="kamień" && argPlayerMove=="papier") {
        printMessage("Wygrywasz");
    }
    else if(argComputerMove=="papier" && argPlayerMove=="nożyce") {
        printMessage("Wygrywasz");
    }
    else if(argComputerMove=="nożyce" && argPlayerMove=="kamień") {
        printMessage("Wygrywasz");
    }
    else if(argComputerMove=="kamień" && argPlayerMove=="nożyce") {
        printMessage("Przegrywasz");
    }
    else if(argComputerMove=="papier" && argPlayerMove=="kamień") {
        printMessage("Przegrywasz");
    }
    else if(argComputerMove=="nożyce" && argPlayerMove=="papier") {
        printMessage("Przegrywasz");
    }
    else if(argComputerMove == argPlayerMove) {printMessage("Mamy remis");
    }
    else{
       printMessage("Runda nierozstrzygnięta");
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Komputer wylosował: " + randomNumber);

let ComputerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(playerInput);

displayResult(ComputerMove, PlayerMove);


