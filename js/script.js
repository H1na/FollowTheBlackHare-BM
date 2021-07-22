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
	'Chernii': {
		name: 'Аш',
		color: 'ff00f0',
		// default_expression: 'normal',
		directory: 'Chernii',
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
	'Vechna': {
		name: 'Вечна',
		color: '3abf0a',
		directory: 'Vechna',
		// default_expression: 'normal',
		sprites: {
			normal: 'Vechna_smile2.png',
			smile: 'Vechna_smile.png',
			thinking: 'Vechna_thinking.png',
			angry: 'Vechna_angry.png',
			whitenoise: 'Vechna_whitenoise.png',
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
			'show scene home with fadeIn',
			'',
			'show character Chernii normal at right with fadeIn',
			'',
			'Chernii И последний ингредиент - как ты любишь, светлячки!',
			'',
			'Аш поставил на стол тарелку с салатом и повернул голову в сторону сестры, лежащей на полу.',
			'Он задавался вопросом, спит она или нет',
			'Chernii Конечно, Вечна, ты в сети. Спишь на кровати, работаешь на полу.',
			'',
			'Всмотрелся в лицо девушки, но вместо него увидел белый шум.',
			'show character Vechna whitenoise at right',
			'Vechna ...',
			'show character Chernii annoyed at left',
			'Chernii Чертова Луна! Сухая лаборатория, в которой ты или обрабатываешь данные в сети...',
			'Chernii ...или убиваешь время, чтоб не сойти с ума.',
			'show character Chernii normal at left',
			'По старой привычке он подошел к кровати сестры, чтобы поправить.',
			'Вот только она была нетронута...',
			'show character Chernii annoyed at left',
			'Chernii Ты опять 20 час работаешь?!',
			'Chernii Что бы ты не делала в сети - это важнее, чем я, впрочем, как и всегда.',
			'Chernii Чувствую себя в какой-то антиутопии.',
			'show character Chernii normal at left',
			'Chernii Живем в одной комнате, но не можем даже поговорить.',
			'Chernii А потом ждать, когда ты, обратишь на меня внимание.',
			'Chernii Если бы аризонский эксперимент Биосфера 2, с живущими в изолированных куполах людьми, был в наше время...',
			'Chernii ...разделившись на 2 группы, испытуемые бы точно забанили друг друга.',
			'Chernii Дальний космос подводят не технологии, а наша психика.',
			'Chernii Но я на тебя не злюсь, уже не злюсь.',
			'Chernii Это отчаяние, от того что ты от меня стала дальше, чем любая планета за пределами Луны. Правда же?',
			'Он снова посмотрел на сестру.',
			'show character Vechna whitenoise at right',
			'Vechna ...',
			'Chernii Но чем черт не шутит?',
			'Он лег на свою кровать и зашел в сеть.',
			'Text "Пользователь Вечна Хом не доступен"',
			'jump Scene1'
		],
	'Scene1': [

	]
})