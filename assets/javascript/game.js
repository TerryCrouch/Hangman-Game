var objHangMan = {
	currentWord: "",
	lettersGuessed: [],
	randomWord: "",
	wins: 0,
	losses: 0,
};

var objWords =  {
	randomWord: ["pumpkin","tissue","hairbrush","vase","chameleon","bubble","pajamas","coconut","sink","jewelry","pelican","spare","headband","basket","corner","circus","shovel","seesaw","skunk","wreath","silverware","frog","refrigerator","bucket","plate","shark","tennis","mailbox","dragonfly","flagpole","snowflake","ladder","money","match","eraser","palace","rainbow","wrench","forehead","mitten","catfish","tiger","waist","railroad","puzzle","gumball","calendar","doghouse","scissors","battery","glasses"],
};

function pickWord() {
	var minNumber = 0;
	var maxNumber = 50; 
	randomNum = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
	objHangMan.randomWord = objWords.randomWord[randomNum];
	console.log ("Random Number is " + randomNum);
	console.log("Random Word is " + objHangMan.randomWord);
}

pickWord()