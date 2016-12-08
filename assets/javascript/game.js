// set up word list as variables for the game
var hangmanGame = {
	gameWords: {
		"saddle pad" : {
			picture: '..\assets\images\tough-1-miniature-horse-western-saddle-pad-M3.jpg',
			song: "Old Paint",
			preview: 'https://www.youtube.com/watch?v=tAHGbhmGttQ' 
		},
		"shetland pony" : {
			picture: '...\assets\images\shetland_pony_stock_by_humblebeez-d3kg7h7.jpg',
			song: "Pony by Kasey Chambers",
			preview: 'https://www.youtube.com/watch?v=FEViH7Vbays'
		},
		"clydesdale" : {
			picture: '..\assets\images\b0c7788e8affe5b2814b48f3c2cee5aa.jpg',
			song: "Heavy Horses by Jethro Tull",
			preview: 'https://www.youtube.com/watch?v=vRHATZzMh-g'
		},
		"english saddle" :{
			picture: '..\assets\images\s-1225.jpg',
			song: "Back in the Saddle Again by Gene Autry",
			preview: 'https://www.youtube.com/watch?v=80NoPLp-Zl0'
		},
		"reins" : {
			picture: '..\assets\images\Brown-WESTERN-BRIDLE-Reins-COB-FULL-Matching_57.jpg' ,
			song: "Pullin' Back the Reins by KD Lang",
			preview: 'https://www.youtube.com/watch?v=aHZXJJN4_Mg'
		},
		"thoroughbred" : {
			picture: '..\assets\images\SantaAnitaHandicapDayc_3-17-15-4.jpg',
			song: "Run for the Roses by Dan Fogelberg",
			preview: "https://www.youtube.com/watch?v=ZdDwm3QIwfg"
		},
		"headstall" : {
			picture: "..\assets\images\Masai-Beaded-Bridle-and-Breast-Collar-set-012-510x700.jpg",
			song: "Let That Pony Run by Pam Tillis",
			preview: "https://www.youtube.com/watch?v=CvrJZDgYB-g"
		},
		"quarter horse" : {
			picture: '..\assets\images\e7a685f127bb4ca709aea46818dc89ce.jpg',
			song: "A Horse in the Country by The Cowboy Junkies",
			preview: "https://www.youtube.com/watch?v=8RJWI1MEkiE"
		},
		"western saddle" : {
			picture: '..\assets\images\6576_c30949a3-be24-4021-9d37-2195ad46c9a3_large.jpg',
			song: "Strawberry Roan by Marty Robbins",
			preview: "https://www.youtube.com/watch?v=L3BkHtlSYR4"
		},
		"palomino": {
			picture: '..assets\images\681564-bigthumbnail.jpg',
			song: "Tennessee Stud by Johnny Cash",
			preview: "https://www.youtube.com/watch?v=cGUXkPhQ6YM"
		},
		"arabian" : {
			picture: '..\assets\images\31354816-arabian-horse-runs-gallop-on-green-background.jpg',
			song: "Wildfire by Michael Martin Murphey",
			preview: "https://www.youtube.com/watch?v=Pc3OnSQc48s"
		}
	},
	wordInPlay: null,
	lettersOfTheWord: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,

	//getting the game started
	//first, pick a random word
	setupGame: function() {
	var objKeys = Object.keys(this.gameWords);
	//set the length of the game face
	this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
	//split the word into individual letters
	this.lettersOfTheWord = this.wordInPlay.split("");
	//set a way to rebuild the word
	this.rebuildWordView();
	// and update the word rebuild
	this.processUpdateTotalGuesses();
	 },

	updatePage: function(letter) {
	 	if (this.guessesLeft == 0) {
	 		this.restartGame();
	 	}else{
	 		this.updateGuesses(letter);

	 		this.updateMatchedLetters(letter);

	 		this.rebuildWordView();

	 		if (this.updateWins() == true) {
	 			this.restartGame();
	 			}
	 		}
	 	},
	 	updateGuesses: function(letter){
	 		//if the letter is not in the guessedLetters array and
	 		//the letter is not in the lettersOfTheWord array
	 		//then make guesses go down
	 		if ((this.guessedLetters.indexOf(letter) == -1) && (this.lettersOfTheWord.indexOf(letter) == -1)){
	 			this.guessedLetters.push(letter);
	 			this.guessesLeft--;
	 			document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
	 			document.querySelector('#guessed-letters').innerHTML = this.guessedLetters.join(', ');
	 		}
	 	},
	 	processUpdateTotalGuesses: function() {
	 		this.totalGuesses = this.lettersOfTheWord.length + 5;
	 		this.guessesLeft = this.totalGuesses;

	 		// render the guesses left
	 		document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
	 	},
	 	updateMatchedLetters: function(letter){
	 		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
	 			if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) == -1)){
	 					this.matchedLetters.push(letter);
	 			};
	 		};
	 	},
	 	rebuildWordView: function() {
	 		var wordView = " ";

	 		for (var i=0; i < this.lettersOfTheWord.length; i++){
	 				if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) != -1) {
	 					wordView += this.lettersOfTheWord[i];
	 					}else{
	 						wordView += '&nbsp;_&nbsp';
	 					}
	 		}
	 		document.querySelector('#current-word').innerHTML = wordView;
	 	},
	 	restartGame : function(){
	 		document.querySelector('#guessed-letters').innerHTML = '';
	 		this.wordInPlay = null;
	 		this.lettersOfTheWord = [];
	 		this.matchedLetters = [];
	 		this.guessedLetters = [];
	 		this.guessesLeft = 0;
	 		this.totalGuesses = 0;
	 		this.letterGuessed = null;
	 		this.setupGame();
	 		this.rebuildWordView();
	 	},
	 	updateWins: function() {
	 		//this won't work for words with double or triple letters
			//var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
			//this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')
			if (this.matchedLetters.length ==0){
				var win = false;
			}else{
				var win = true
			}
			for (var i=0; i < this.lettersOfTheWord.length; i++){
					if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) == -1){
						win = false;
					}
			}

			if (win == true) {
				this.wins = this.wins + 1;
				document.querySelector('#wins').innerHTML = this.wins;

			document.querySelector('#music').innerHTML = this.wordsToPick[this.wordInPlay].song + " By " + this.wordInPlay;

			document.querySelector('#bandDiv').innerHTML = '<img class="bandImage" src="images/' + this.wordsToPick[this.wordInPlay].picture + '" alt="' + this.wordsToPick[this.wordInPlay].song + '">';

			var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
			audio.play();


			return true;
		}else{
			return false;
			}
	 	}
	 };

	 hangmanGame.setupGame();

document.onkeyup = function(event) {
	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	hangmanGame.updatePage(hangmanGame.letterGuessed);
}	 





