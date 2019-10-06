// Create Arrays for Computer Choices - alphabet
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for functions
var wins = 0;
var loss = 0;
var guessRemain = 9;
var userGuess = [];

// create a function to run whenever user presses a key
document.onkeyup = function (event) {

    // User key pressed, triggers event
    var userGuess = event.key;

    // Randomly chooses a choice from the options in array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Logic to determine the  outcome of game (win/loss/tie)
    if ((userGuess === computerChoices)) {

    }
}
// Computer is able to select a random letter from the array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// jQuery button animations...extra extra
