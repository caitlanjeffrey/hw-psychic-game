// variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessRemain = 9; //total guesses per round
var userGuessSoFar = []; //user choice array

var userGuessChoices = document.getElementById("userguess");
var winPoints = document.getElementById("wins");
var guessRemaining = document.getElementById("guess");
var lossPoints = document.getElementById("loss");
var guessSoFar = document.getElementById("userguess");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function updateDisplays() {
    winPoints.textContent = wins;
    guessRemaining.textContent = guessRemain;
    lossPoints.textContent = losses;
}
document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    userGuessChoices.textContent = userGuessSoFar;

    if (userGuess == computerGuess) {
        wins++;
        guessRemain = 9;
        userGuessSoFar = [];
        computerGuess = computerChoices[Math.floor(Math.random() * letters.length)];
    }

    else {
        guessRemain--;

        if (guessRemain == 0) {
            losses++;
            userGuessSoFar = [];
            guessRemain = 9;
        }
    }

    updateDisplays();
}
updateDisplays();

console.log(computerGuess);
console.log(userGuessSoFar);
