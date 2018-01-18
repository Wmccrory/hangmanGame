//On page load this should appear in console
console.log("Game is loaded");

//global variables
var wordBank = ["Judge", "Jury", "Executioner"];
var wins = 0;
var losses = 0;

//Entire game written inside myFunction, executes once "Start Game" button pressed
function myFunction() {
	//Console message letting you know game has started running
	console.log("Game is ready");

	document.getElementById("hiddenWord").innerHTML = "<h3><u>*</u> <u>*</u> <u>*</u> <u>*</u> <u>*</u> <u>*</u> <u>*</u></h3>";
}