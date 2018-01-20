//On page load this should appear in console
console.log("Game is loaded");

//global variables

var wordBank = ["judge", 
				"jury", 
				"executioner",
				"creep"
				];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetSplice

//Starting lives
	const lives = 6;
//Lives remaining
	var remainingLives = 0;

//Win count
	var wins = 0;
//Loss count
	var losses = 0;

//Guessed letters
	var guessedLet = [];
//Game start condition
	var gameStart = false;
//Game end condition
	var gameOver = false;
//Secret word game progress	
	var hiddenWord = [];
//Starting random word from wordbank
	var secretWord;

/////////////////////////////////////////////////////////////////////////////////
//Entire game written inside myGame, executes once "Start Game" button pressed//

document.getElementById("hangStart").onclick = function myGame() {
	//Console message letting you know game has started running
	console.log("Game is ready");
	//Starting conditions set
	document.getElementById("lifeDisplay").innerHTML = "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2>";
	let remainingLives = lives;
	console.log("remaining lives = " + remainingLives);
	let gameStart = true;
	let gameReset = false;
	console.log("game started = " + gameStart + " game reset = " + gameReset);
	//Word chosen from wordBank
	secretWord = Math.floor(Math.random() * (wordBank.length));
	//Word converted into array of secret characters for display
	for (var i = 0; i < wordBank[secretWord].length; i++) {
		hiddenWord.push("<u>*</u>");
	}
	//Secret word and alphabet displayed on game board
	document.getElementById("hiddenWord").innerHTML = hiddenWord.join(" ");
	document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");


	 /////////////////////////////////////////////////
	//Initial game board ready for user interaction//

	document.onkeyup = function(event) {
    	var userGuess = event.key.toLowerCase();
    	console.log(userGuess);
    	//Make sure valid a-z letter//
    	if (event.keyCode >= 65 && event.keyCode <=90) {

    		//splicing in strikethrough letter in alphabet board//
    		let alphabetSplice = (alphabet.indexOf(userGuess));
    		if (alphabetSplice === -1) {
    			console.log("No");
    		} else {
    			alphabet.splice(alphabetSplice, 1, "<s>" + userGuess + "</s>");
    			document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");
    		}

    	} else {
    		console.log("Not a valid input");
    	}
  	}
}



// document.onkeyup = function(event) {
// 	if (gameOver = true) {
// 		document.getElementById("gameConsole").innerHTML = "Game is over creep";
// 	} else {
// 		if (event.keyCode >= 65 && event.keyCode <= 90) {
// 			userGuess(event.key.toLowerCase());
// 		}
// 	}
// 	}