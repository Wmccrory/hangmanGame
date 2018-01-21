//On page load this should appear in console
console.log("Game is loaded");
 ////////////////////
//global variables//

//Wordbank
var wordBank = [
	"judge", "slab", "resyk", "zoomway", "megacity", "creep", "perp", "citizen", "radiation", "wasteland", "criminal",
	"jury", "droid", "justice", "law", "mutant", "superjudge", "drokk", "innocent", "guilty", "criminal", "crime",
	"sked", "helmet", "narcotics", "america", "irradiated", "lawbringer", "rookie", "sentence", "felony", "disperse"
				];

//Alphabet bank
var alphabet = [
				"a", "b", "c", "d", "e", "f", "g", "h", 
				"i", "j", "k", "l", "m", "n", 
				"o", "p", "q", "r", "s", "t", 
				"u", "v", "w", "x", "y", "z"
				];
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
	if (hiddenWord.length > 0) {
		console.log("Game already started");
	} else {
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
    		//If user guesses letter already chosen
    		if (alphabetSplice === -1) {
    			console.log("Already entered letter");
    		//If user guesses wrong letter
    		} else if (guessedLet.length === secretWord.length || remainingLives === 0) {
    			console.log("Game already over");
    		}
    		else if (userGuessChecker === -1) {   			
    			alphabet.splice(alphabetSplice, 1, "<s>" + userGuess + "</s>");
    			document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");
    			(--remainingLives);
    			(imgInc++);
    			document.getElementById("lifeDisplay").innerHTML = hangAscii[imgInc];
    			console.log(remainingLives);
    			console.log(gameOver);
    			//Checking if loss condition met and ending game if so
    			if (remainingLives < 1) {
    				document.getElementById("lifeDisplay").innerHTML = hangAscii[6];
    				(losses++);
    				let gameOver = true;
    				console.log(gameOver);
    				document.getElementById("losses").innerHTML ="<p>" + losses + "</p>";
    				document.getElementById("gameConsole").innerHTML ="<p>" + "Justice time." + "</p>";
    				return;
    			}
    		}

    		else {
		    	///////////////////////////////////////////////////////////////////////////////////////////////
		    	//Searching secret word for matching letters and updating guessedLet array / hiddenWord html//
		    	alphabet.splice(alphabetSplice, 1, "<s>" + userGuess + "</s>");
    			document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");
		    	for (var i = 0; i < secretWord.length; i++) {
		    		if (secretWord[i] === userGuess) guessedLet.push(i);
		    		if (secretWord[i] === userGuess) hiddenWord.splice(i, 1, userGuess);
		    		document.getElementById("hiddenWord").innerHTML = hiddenWord.join(" ");
		    		//Checking if win condition met and ending game if so//
				if (guessedLet.length === secretWord.length) {
		    			(wins++);
		    			let gameOver = true;
		    			document.getElementById("wins").innerHTML ="<p>" + wins + "</p>";
		    			document.getElementById("gameConsole").innerHTML ="<p>" + "Prepare yourself for the Cursed Earth." + "</p>";
		    			return;
		    		}
    			}
    		}
    	} else {
    		//User entered invalid character//	
    		console.log("Not a valid input");
    	}
  	}
  }
}

document.getElementById("hangReset").onclick = function myReset() {
	hiddenWord = [];
	guessedLet = [];
	alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	remainingLives = lives;
	imgInc = 0;
	document.getElementById("lifeDisplay").innerHTML = hangAscii[imgInc];
	document.getElementById("hiddenWord").innerHTML = "Decide your fate";
	document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");
	document.getElementById("gameConsole").innerHTML =" ";
}