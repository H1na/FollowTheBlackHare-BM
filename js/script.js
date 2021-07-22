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
		color: '#ff00f0',
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
		color: '#5a9de9',
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
		color: '#3abf0a',
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
		name: 'Текст:',
		color: '#ffffff'
	},
	'Autor': {
		name: '',
		color: '#ffffff'	
	},
	'M': {
		name: 'М',
		color: '#5a9de9',
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
			'Он задавался вопросом, спит она или нет.',
			'Chernii Конечно, Вечна, ты в сети. Спишь на кровати, работаешь на полу.',
			'',
			'Всмотрелся в лицо девушки, но вместо него увидел белый шум.',
			'show character Vechna whitenoise at left',
			'Vechna ...',
			'show character Chernii annoyed at right',
			'Chernii Чертова Луна! Сухая лаборатория, в которой ты или обрабатываешь данные в сети...',
			'Chernii ...или убиваешь время, чтоб не сойти с ума.',
			'show character Chernii normal at right',
			'По старой привычке он подошел к кровати сестры, чтобы поправить.',
			'Вот только она была нетронута...',
			'show character Chernii annoyed at right',
			'Chernii Ты опять 20 час работаешь?!',
			'Chernii Что бы ты не делала в сети - это важнее, чем я, впрочем, как и всегда.',
			'Chernii Чувствую себя в какой-то антиутопии.',
			'show character Chernii normal at right',
			'Chernii Живем в одной комнате, но не можем даже поговорить.',
			'Chernii Если бы аризонский эксперимент Биосфера 2, с живущими в изолированных куполах людьми, был в наше время...',
			'Chernii ...разделившись на 2 группы, испытуемые бы точно забанили друг друга.',
			'Chernii Дальний космос подводят не технологии, а наша психика.',
			'Chernii Но я на тебя не злюсь, уже не злюсь.',
			'Chernii Это отчаяние, от того что ты от меня стала дальше, чем любая планета за пределами Луны. Правда же?',
			'Он снова посмотрел на сестру.',
			'show character Vechna whitenoise at left',
			'Vechna ...',
			'Chernii Но чем черт не шутит?',
			'Он лег на свою кровать и зашел в сеть.',
			'Text "Пользователь Вечна Хом не доступен"',
			'jump Scene1'
		],
	'Scene1': [
		'show scene home with fadeIn',
		'Text 70 земных дней назад.',
		'show character Vechna normal at left with fadeIn',
		'Vechna Классно, что в фудрариум ты поселил светлячков! Сверчки уже надоели.',
		'Vechna Правда, еда слишком свежая.',
		'Из тарелки девушки медленно выполз чудом выживший светлячок.',
		'show character Vechna thinking at left',
		'Vechna Ну рили?! Я не могу это есть! Их нужно оставлять без кислорода хотя бы на десять минут!',
		'Vechna Сверчки живы, а ужин убит.',
		'show character Chernii annoyed at right',
		'Chernii Я как могу освобождаю тебе время для работы, зная как ты ее любишь.',
		'show character Chernii normal at right'
		'Chernii Точно больше, чем жизнь в реальности.',
		'show character Vechna normal at left',
		'Vechna Нужно сходить в кино! А может, запустим змея?',
		'show character Vechna smile at left',
		'Vechna Хотя, мы ведь в лавовых туннелях под поверхностью Луны. Упс!'
		'show character Chernii annoyed at right',
		'Chernii Я не о том, просто я чем могу, тем тебе и помогаю. Ты совсем не понимаешь мои мотивы?',
		'show character Vechna thinking at left',
		'Vechna Понимаю. Даже лучше, чем ты.',
		'Vechna Знаешь, как мне сложно конкурировать за работу с сетевиками?',
		'Vechna Они скопировались в сеть, им ни есть, ни спать не надо.',
		'Vechna Прислал ровер данные от Альфа Центавра, ты их сразу взял!',
		'Vechna И хопа! Запустил обработку в параллельном потоке.',
		'Vechna А я, простая смертная: одно доделай, ресурсы освободи… а сетевики уже статьи публикуют!',
		'Chernii И? Закончишь мысль?',
		'show character Vechna normal at left',
		'Vechna Я бы строила симуляции далеких планет и галактик одна из первых, если б присоединилась к их “фандому”.',
		'Vechna Но ты же не пустишь, ты лучше освободишь мне дополнительный часик.',
		'Она играла с вяло ползающим по столу светлячком. Он все еще отливал холодным синим светом.',
		'show character Vechna normal at left',
		'Vechna Аш, почему ты так против, если понимаешь…',
		'Она сказала это с насмешкой.',
		'Vechna …как сильно я люблю визуализировать далекие миры по набору нулей и единичек?',
		'Vechna Оригинал жил бы с тобой, не тужил и не возмущался.',
		'show character Chernii annoyed at right',
		'Chernii Даже не доказано, идентичная личность выходит после копирования, или нет.',
		'show character Chernii normal at right',
		'Chernii Это как биохакеры в 21 веке – вроде продляют жизнь, а вроде, наоборот. Недостачно данных!',
		'Vechna Но...',
		'Chernii Тебе придется делить свою славу и все остальное со второй “я”. Думаю, вы не поладите. И кто-то кого-то обязательно удалит.',
		'Chernii Я просто боюсь за тебя. Ты слишком увлечена открытиями.',
		'show character Vechna thinking at left',
		'Vechna Сам пилишь импланты, выражающие эмоции - как универсальный визуальный язык для разных культурных кодов.',
		'show character Vechna angry at left',
		'А горю открытиями здесь я?',
		'Chernii Я совмещаю жизнь здесь и работу над проектом. И, вдобавок, еще и помощь тебе.',
		'Chernii При интенсивной загрузке, я бы научил искусственный интеллект Ушей зайца распознавать базовые эмоции месяца за 3! Часть эмоций уже работает.',
		'show character Vechna smile at left',
		'Vechna Типа как, когда ты бесишься? Можно сказать я тебе уже помогаю обучать ИИ ушей.',
		'show character Chernii annoyed at right',
		'Chernii Ага пропая по 20 часов в сети!',
		'show character Vechna angry at left',
		'Vechna Ах, вот оно как! Ну тогда, дорогой брат, я помогу, чем могу.',
		'Vechna Нифига мы с тобой не Диппер и Мейбл! Иди работай!',
		'Лицо девушки расплылось, и вместо зеленых глаз сестры, Аш увидел белую рябь.',
		'show character Vechna whitenoise at left',
		'Не успел он возмутиться, как она уже распространилась на все ее тело.',
		'show character Chernii angry at right',
		'Chernii Ты улыбаешься?',
		'Девушка собрала оставшихся в живых, и, уже было собравшихся расползтись из тарелки светлячков, и убрала их в фудрариум, к остальным насекомым.',
		'jump Scene2'
		],
		'Scene2': [
















		








	]
})