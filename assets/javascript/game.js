// Create object to contain the game variables

var objHangman = {
	"wins":0,
	"losses":0,
	"displayWord":"",
	"guessWord":"",
	"chances":"",
	"guessedLetters":[],
	"validLetters":"abcdefghijklmnopqrstuvwxyz",
	"availableLetters":"abcdefghijklmnopqrstuvwxyz",
	"userGuess":"",

}


// Create an array of possible words

var wordsArr = ["pumpkin", "costume", "ghost", "goblin", "vampire", "witch", "princess", "candy", "party"];

// Create a function to choose a random word

function randomWord(string) {
	var randomNum = Math.floor(Math.random() * wordsArr.length);
	objHangman.guessWord = wordsArr[randomNum];

	console.log("randomNum = " + randomNum);
	console.log("guessWord = " + objHangman.guessWord);
}

randomWord();

// Change the display word to underscores to be guessed

objHangman.displayWord = objHangman.guessWord;

console.log("displayWord = "+ objHangman.guessWord);


// Create a function to record user guesses
document.onkeyup = function(event) {

	var userGuess = event.key;

	if (objHangman.validLetters.indexOf(userGuess) === -1)  {
		console.log("Please enter a valid letter.");
	} else {
		if (objHangman.guessedLetters.indexOf(userGuess) !== -1) {
			console.log("You already guessed " + userGuess + ". Please choose another letter.");
		} if (objHangman.guessWord.indexOf(userGuess) !== -1) {
			console.log(userGuess + " is part of the word!");
			objHangman.guessedLetters.push(userGuess);
		} else {
			console.log(userGuess + " is not part of the word.");
		}
	}
	
}

// If Guess is found in display word array, identify the position and replace underscores with letters


// If guess is not found in display word array, subtract 1 from chances, and post the missed letter to the wrong guesses display


// If guess completes the word, increment wins by 1, display a victory confirm message, and choose a new word.


// If wrong guess decrements chances to "0", end current game, record it as a loss, and choose a new word.