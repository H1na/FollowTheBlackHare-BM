/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'home': 'home.png',
	'lake': 'lake.png',
	'audience': 'audience.png',
	'vr': 'vr.png',
	'vr2': 'vr2.png',
	'planet': 'planet.png',

});


// Define the Characters
monogatari.characters ({
	'chernii': {
		name: 'Аш',
		color: 'ff00f0',
		// default_expression: 'normal',
		directory: 'chernii',
		sprites: {
			normal: 'black_normal.png',
			angry: 'black_angry.png',
			angry2: 'black_angry2.png',
			angry3: 'black_veryangry.png',
			disgust: 'black_disgust.png',
			fear: 'black_fear.png',
			happy: 'black_happy.png',
			happy2: 'black_happy2.png',
			sad: 'black_sad.png',
			annoyed: 'black_annoyed.png',
			confused: 'black_confused.png',
		}
	},
	'Maks': {
		name: 'Максим',
		color: '5a9de9',
		// default_expression: 'noise',
		directory: 'Maks',
		sprites: {
			normal: 'max.png',
			noise: 'max_noise.png',
			fight: 'max_fight.png',
		}
	},
	'vechna': {
		name: 'Вечна',
		color: '3abf0a',
		directory: 'vechna',
		// default_expression: 'normal',
		sprites: {
			normal: 'vechna_smile2.png',
			smile: 'vechna_smile.png',
			thinking: 'vechna_thinking.png',
			angry: 'vechna_angry.png',
			whitenoise: 'vechna_whitenoise.png',
		},
	},
	'Stations II': {
		name: 'ИИ станции',
		color: 'red'
	},
	'Text': {
		name: 'Текст',
		color: 'ffffff'
	},
	'Autor': {
		name: '',
		color: 'ffffff'	
	},
	'M': {
		name: 'М',
		color: '5a9de9',
		// default_expression: 'noise',
		directory: 'Maks',
		sprites: {
			noise: 'max_noise.png',
		},
	},

});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});