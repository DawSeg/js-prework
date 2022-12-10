{
const playGame = function(playerInput){

    clearMessages();

    const getMoveName = function(argMoveId){
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
    const displayResult = function(argComputerMove, argPlayerMove){
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
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Komputer wylosował: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    const playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

document.getElementById("play-scissors").addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(3);
  });
}
