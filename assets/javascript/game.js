//On page load this should appear in console
console.log("Game is loaded");

//global variables
var wordBank = ["judge", 
				"jury", 
				"executioner",
				"creep"
				];
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
	var gameReset = false;
//Secret word game progress	
	var hiddenWord = [];
//Starting random word from wordbank
	var secretWord;

////////////////////////////////////////////////////////////////////////////////////
//Entire game written inside myGame, executes once "Start Game" button pressed//

function myGame() {
//Console message letting you know game has started running
	console.log("Game is ready");
//Starting conditions set
	document.getElementById("lifeDisplay").innerHTML = "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2>";
	let remainingLives = lives;
	console.log("remaining lives = " + remainingLives);
	let gameStart = true;
	let gameReset = false;
	console.log("game started = " + gameStart + " game reset = " + gameReset);

	secretWord = Math.floor(Math.random() * (wordBank.length));

	for (var i = 0; i < wordBank[secretWord].length; i++) {
		hiddenWord.push("<u>*</u>");
	}

	document.getElementById("hiddenWord").innerHTML = hiddenWord.join(" ");


// //Initial game board. Ready for user input

}