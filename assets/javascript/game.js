var gameState = {
	"currentImg": document.getElementById("hangImg"),
	"wins":0,
	"losses":0,
	"displayWord":"",
	"guessWord":"",
	"chances": 6,
	"guessedLetters":[],
	"incorrectLetters":[],
	"validLetters":"abcdefghijklmnopqrstuvwxyz",
	"availableLetters":"abcdefghijklmnopqrstuvwxyz",
	"userGuess":"",
	"correctGuess": {
		"char": "",
		"positions": [],
	}

}


// Create an array of possible words

var wordsArr = ["pumpkin", "costume", "ghost", "goblin", "vampire", "witch", "princess", "candy", "party","cauldron"];

// Create a function to choose a random word

function randomWord(string) {
	var randomNum = Math.floor(Math.random() * wordsArr.length);
	gameState.guessWord = wordsArr[randomNum];
	console.log("guessWord = " + gameState.guessWord);
}

randomWord();


// Change the display word to underscores to be guessed

for (i = 0; i < gameState.guessWord.length; i += 1) {
	gameState.displayWord += "_"
}

var pageDisplay = document.getElementById("displayWord");
pageDisplay.innerHTML = gameState.displayWord;

var letterDisplay = document.getElementById("incorrect");
letterDisplay.innerHTML = gameState.incorrectLetters;

// Create a function to record user guesses
document.onkeyup = function(event) {

	var userGuess = event.key;
	// Checks to see if letter was valid
	if (gameState.validLetters.indexOf(userGuess) === -1)  {
		} else {
		// If it's a valid letter, and not found in the guessed letters array...
		if (gameState.guessedLetters.indexOf(userGuess) === -1) {
			// If the guessed letter is found in the guessWord value, updates guessedLetters array, then calls functions to create an array of index locations of the character, and then update the display word to match those index locations
			if (gameState.guessWord.indexOf(userGuess) !== -1) {
				gameState.guessedLetters.push(userGuess);
				updateCorrectGuess(userGuess);
				updateDisplayWord(gameState.correctGuess);
			// If the guessed letter is not found in the guessWord value, addes the letter to the guessedLetters array, decrements chances by 1, pushes the letter to the id incorrect div, and then updates the display image to match the current chances left.
			} else if (gameState.guessWord.indexOf(userGuess) === -1){
				gameState.guessedLetters.push(userGuess);
				gameState.chances--
				gameState.incorrectLetters.push(userGuess.toUpperCase());
				letterDisplay.innerHTML = gameState.incorrectLetters;
				updateDisplayImg();
			} 
		}
		// If the letter has already been guessed, throws an alert to advise the player to stop doing stupid shit.
		else {
			alert(userGuess.toUpperCase() + " has already been guessed.  Please choose another letter.");
		}
	}

}

// Update a correct guess
function updateCorrectGuess(char) {
	// add correct character to correct guess object
	gameState.correctGuess.char = char;
	// set return object array to empty array
	gameState.correctGuess.positions = [];
	//loop through correct word and build an array of the correct index locations
	for(var i = 0; i < gameState.guessWord.length; i += 1){
		if(gameState.correctGuess.char === gameState.guessWord[i]) {
			// add the index location of the correct guess to the object index array
			gameState.correctGuess.positions.push(i);
		}
	}
}

// Function to update display word for correct guesses
function updateDisplayWord(obj) {
	//
	var tempWord = gameState.displayWord;
	obj.positions.forEach(function(index) {
		tempWord = tempWord.substring(0, index) + obj.char + tempWord.substring(index+1);
	});
	gameState.displayWord = tempWord
	pageDisplay.innerHTML = gameState.displayWord.toUpperCase();
	console.log("TempWord = "+tempWord);
	console.log(obj.positions);
}

// Function to update the display image to match chances

function updateDisplayImg() {
	state = gameState.chances;
	gameState.currentImg.src = `assets/images/hang_${state}.png`
}


// If userGuess is found in guessWord, identify the position in displayWord and replace underscore with letter


// If userGuess is not found in display word array, subtract 1 from chances, and post the missed letter to the wrong guesses display


// If userGuess completes the word, increment wins by 1, display a victory confirm message, and choose a new word.


// If wrong guess decrements chances to "0", end current game, record it as a loss, and choose a new word.