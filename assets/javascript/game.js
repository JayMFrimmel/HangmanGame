// set up word list as variables for the game
var hangmanGame = {
	gameWords: {
		"saddle pad" : {
			picture: 'tough-1-miniature-horse-western-saddle-pad-M3.jpg',
			song: "Old Paint",
			preview: 'https://www.youtube.com/watch?v=tAHGbhmGttQ' 
		},
		"shetland pony" : {
			picture: 'shetland_pony_stock_by_humblebeez-d3kg7h7.jpg',
			song: "Pony by Kasey Chambers",
			preview: 'https://www.youtube.com/watch?v=FEViH7Vbays'
		},
		"clydesdale" : {
			picture: 'b0c7788e8affe5b2814b48f3c2cee5aa.jpg',
			song: "Heavy Horses by Jethro Tull",
			preview: 'https://www.youtube.com/watch?v=vRHATZzMh-g'
		},
		"english saddle" :{
			picture: 's-1225.jpg',
			song: "Back in the Saddle Again by Gene Autry",
			preview: 'https://www.youtube.com/watch?v=80NoPLp-Zl0'
		},
		"reins" : {
			picture: 'Brown-WESTERN-BRIDLE-Reins-COB-FULL-Matching_57.jpg' ,
			song: "Pullin' Back the Reins by KD Lang",
			preview: 'https://www.youtube.com/watch?v=aHZXJJN4_Mg'
		},
		"thoroughbred" : {
			picture: 'SantaAnitaHandicapDayc_3-17-15-4.jpg',
			song: "Run for the Roses by Dan Fogelberg",
			preview: 'https://www.youtube.com/watch?v=ZdDwm3QIwfg'
		},
		"headstall" : {
			picture: "Masai-Beaded-Bridle-and-Breast-Collar-set-012-510x700.jpg",
			song: "Let That Pony Run by Pam Tillis",
			preview: 'https://www.youtube.com/watch?v=CvrJZDgYB-g'
		},
		"quarter horse" : {
			picture: 'e7a685f127bb4ca709aea46818dc89ce.jpg',
			song: "A Horse in the Country by The Cowboy Junkies",
			preview: "https://www.youtube.com/watch?v=8RJWI1MEkiE"
		},
		"western saddle" : {
			picture: '6576_c30949a3-be24-4021-9d37-2195ad46c9a3_large.jpg',
			song: "Strawberry Roan by Marty Robbins",
			preview: "https://www.youtube.com/watch?v=L3BkHtlSYR4"
		},
		"palomino": {
			picture: '681564-bigthumbnail.jpg',
			song: "Tennessee Stud by Johnny Cash",
			preview: "https://www.youtube.com/watch?v=cGUXkPhQ6YM"
		},
		"arabian" : {
			picture: '31354816-arabian-horse-runs-gallop-on-green-background.jpg',
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
	var objKeys = Object.keys(this.gameWords);
	//set the length of the game face
	this.wordInPlay = objKeys[Math.floor(Math.random * objKeys.length)];
	//split the word into individual letters
	this.lettersOfTheWord = this.wordInPlay.split('');
	//set a way to rebuild the word
	this.rebuildWordView();
	// and update the word rebuild
	this.processUpdateTotalGuesses();
	 };

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
	 




