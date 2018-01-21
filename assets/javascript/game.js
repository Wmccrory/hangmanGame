//On page load this should appear in console
console.log("Game is loaded");
 ////////////////////
//global variables//

//Wordbank
var wordBank = [
	"judge", 
	"jury",
	"pool"
];

//Alphabet bank
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetSplice

//Hangman image
var hangAscii = ["<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2>",
				 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|**/**</h2><h2>|*****</h2><h2>|*****</h2>",
				 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
				 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|**/**</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
				 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|**/*\\</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
				 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|**/|\\</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
				 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|**0*</h2><h2>|**/|\\</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2",
				];
var imgInc = 0

//Starting lives
	const lives = 6;
//Lives remaining
	var remainingLives = 0;

//Win count
	var wins = 0;
//Loss count
	var losses = 0;

//Game start condition
	var gameStart = false;
//Game end condition
	var gameOver = false;
//Number choosing secret word from wordbank
	var secret;
//Actual secret word
	// var secretWord = wordBank[secret];
//Secret word game progress	
	var hiddenWord = [];
//Guessed letters
	// var guessedLet = [];
	// var guessedLetSplice;
	var userGuessChecker;

/////////////////////////////////////////////////////////////////////////////////
//Entire game written inside myGame, executes once "Start Game" button pressed//

document.getElementById("hangStart").onclick = function myGame() {
	//Console message letting you know game has started running
	console.log("Game is ready");

	//Starting conditions set
	document.getElementById("lifeDisplay").innerHTML = hangAscii[imgInc];
	let remainingLives = lives;
	console.log("remaining lives = " + remainingLives);
	let gameStart = true;
	let gameReset = false;
	console.log("game started = " + gameStart + " game reset = " + gameReset);

	//Word chosen from wordBank
	secret = Math.floor(Math.random() * (wordBank.length));
	var secretWord = wordBank[secret];
	var guessedLet = [];

	//Word converted into array of secret characters for display
	for (var i = 0; i < secretWord.length; i++) {
		hiddenWord.push("<u>*</u>");
	}
	//Secret word and alphabet displayed on game board
	document.getElementById("hiddenWord").innerHTML = hiddenWord.join(" ");
	document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");


	 /////////////////////////////////////////////////
	//Initial game board ready for user interaction//

	document.onkeyup = function(event) {
    	var userGuess = event.key.toLowerCase();

    	 ////////////////////////////////
    	//Update alphabet grid display//
    	if (event.keyCode >= 65 && event.keyCode <=90) {
    		//splicing in strikethrough letter in alphabet board//
    		let alphabetSplice = (alphabet.indexOf(userGuess));
    		let userGuessChecker = (secretWord.indexOf(userGuess));
    		alphabet.splice(alphabetSplice, 1, "<s>" + userGuess + "</s>");
    		document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");
    		//If user guesses letter already chosen
    		if (alphabetSplice === -1) {
    			console.log("Already entered letter");
    		//If user guesses wrong letter
    		} else if (userGuessChecker === -1) {
    			
    			(k = --remainingLives);
    			(imgInc++);
    			document.getElementById("lifeDisplay").innerHTML = hangAscii[imgInc];
    			console.log(remainingLives);
    			//Checking if loss condition met and ending game if so
    			if (remainingLives < 1) {
    				(losses =+ 1);
    				let gameOver = true;
    				console.log(gameOver);
    				document.getElementById("losses").innerHTML ="<p>" + losses + "</p>";
    				document.getElementById("gameConsole").innerHTML ="<p>" + "Justice time." + "</p>";
    			}
    		}

    		else {
		    	///////////////////////////////////////////////////////////////////////////////////////////////
		    	//Searching secret word for matching letters and updating guessedLet array / hiddenWord html//
		    	for (var i = 0; i < secretWord.length; i++) {
		    		if (secretWord[i] === userGuess) guessedLet.push(i);
		    		if (secretWord[i] === userGuess) hiddenWord.splice(i, 1, userGuess);
		    		document.getElementById("hiddenWord").innerHTML = hiddenWord.join(" ");
		    		//Checking if win condition met and ending game if so//
		    		if (guessedLet.length === secretWord.length) {
		    			(wins =+ 1);
		    			let gameOver = true;
		    			document.getElementById("wins").innerHTML ="<p>" + wins + "</p>";
		    			document.getElementById("gameConsole").innerHTML ="<p>" + "Prepare yourself for the Cursed Earth." + "</p>";
		    		}
    			}
    		}
    	} else {
    		//User entered invalid character//	
    		console.log("Not a valid input");
    	}
  	}
}

// 		// copyright start gregg-code
//     	let indexesFound = matchedIndexes(secretWord, userGuess)
//     	$hiddenLetterDOMNodes = $('#hiddenWord').getElementById('u')
//     	// replace innerHTML of DOM nodes at found indexes

// function matchedIndexes(secretWord = '', userGuess = '') {

// 	return secretWord.split().map(function(userGuess, i) {
//     	if (letter === userGuess) {
//     		return i
//     	}
//     })
// }