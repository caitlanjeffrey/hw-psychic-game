// variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessRemain = 9; //total guesses per round
var userGuessSoFar = []; //user choice array

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Guess: " + computerGuess);

document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    userGuessChoices.textContent = userGuessSoFar;
    document.getElementById("userguess").innerHTML = "<p><strong>Guesses: " + guessSoFar + "</strong></p>";
        console.log("User Guess: " + userGuess);

    for (var j = 0; j < computerGuess.length; j++) {
        if (computerGuess[j] == userGuess) {
            userGuessSoFar[j] = userGuess;
        };
    };

    if (userGuess === computerGuess) {
        wins++;
        guessRemain = 9;
        userGuessSoFar = [];
        alert("You Won...This Time");
        resetgame();
    };
    
    if (userGuess !== computerGuess) {
        guessRemain--;
        resetgame();
    };
    
    if (guessRemain < 1) {
        guessRemain = 9;
        guessSoFar = [];
        losses++;
        resetgame();
        document.getElementById("userguess").innerHTML = "<p><strong>Guesses: " + guessSoFar + "</strong></p>";
        document.getElementById("guesses").innerHTML = "<p><strong>" + guessRemain + "</strong></p>";
    };
};

function resetgame() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Guess: " + computerGuess);
    userGuessSoFar = [];
    document.getElementById("userguess").innerHTML = guessSoFar;
};

var winPoints = document.getElementById("wins").innerHTML = "<p><strong>" + wins + "</strong></p>";
var guessRemaining = document.getElementById("guesses").innerHTML = "<p><strong>" + guessRemain + "</strong></p>";
var lossPoints = document.getElementById("losses").innerHTML = "<p><strong>" + losses + "</strong></p>";
var userGuessChoices = document.getElementById("userguess").innerHTML = "<p><strong>Guesses: " + guessSoFar + "</strong></p>";
var guessSoFar = document.getElementById("userguess").innerHTML = "<p><strong>Guesses: " + userGuessSoFar + "</strong></p>";