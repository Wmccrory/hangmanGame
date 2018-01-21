function myGame() {
//Variable Bank//	
	//Word arrays
	var wordBank = [
	"judge", "slab", "resyk", "zoomway", "megacity", "creep", "perp", "citizen", "wastelander", "wasteland", "executioner",
	"jury", "droid", "justice", "law", "mutant", "superjudge", "drokk", "innocent", "guilty", "criminal", "misdemeanor",
	"sked", "helmet", "narcotics", "america", "irradiated", "lawbringer", "rookie", "sentence", "felony", "disperse"
	];
	var alphabet = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
	"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
	"u", "v", "w", "x", "y", "z"
	];
	var alphabetSplice;

	//Hangman ASCII
	var hangAscii = [
	"<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2><h2>|*****</h2>",
	"<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|**/**</h2><h2>|*****</h2><h2>|*****</h2>",
	 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|*****</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
	 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|**/**</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
	 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|**/*\\</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
	 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|*****</h2><h2>|**/|\\</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2>",
	 "<h2><u>******</u></h2><h2>|***|*</h2><h2>|**0*</h2><h2>|**/|\\</h2><h2>|**/*\\</h2><h2>|*****</h2><h2>|*****</h2",
	];
	var imgInc = 0;

	//Lives variables
	const lives = 6;
	var remainingLives = 0;

	//Win/Loss variables
	var wins = 0;
	var losses = 0;

	//Gameplay conditions
	var gameStart;
	var gameOver;

	//Secret word variables
	var secret;
	var secretWord = wordBank[secret];
	var hiddenWord = [];

	//Letter guessing variables
	var guessedLet = [];
	var guessedLetSplice;
	var userGuessChecker;

	document.getElementById("hangStart").onclick = function gameStart()
}

function gameStart() {
	console.log("Game is ready");
	document.getElementById("lifeDisplay").innerHTML = hangAscii[imgInc];
	let remainingLives = lives;
	console.log("remaining lives = " + remainingLives);
	let gameStart = true;
	let gameReset = false;
	console.log("game started = " + gameStart + " game reset = " + gameReset);

	secret = Math.floor(Math.random() * (wordBank.length));
	var secretWord = wordBank[secret];
	var guessedLet = [];

	for (var i = 0; i < secretWord.length; i++) {
	hiddenWord.push("<u>*</u>");
	}

	document.getElementById("hiddenWord").innerHTML = hiddenWord.join(" ");
	document.getElementById("alphabetDisplay").innerHTML = alphabet.join(" ");
}