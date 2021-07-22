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
			'Text "Пользователь Вечна Хом не доступен."',
			'jump Scene1'
		],
	'Scene1': [
		'show scene home with fadeIn',
		'Text 70 земных дней назад.',
		'show character Vechna normal at left with fadeIn',
		'show character Chernii normal at right with fadeIn',
		'Vechna Классно, что в фудрариум ты поселил светлячков! Сверчки уже надоели.',
		'Vechna Правда, еда слишком свежая.',
		'Из тарелки девушки медленно выполз чудом выживший светлячок.',
		'show character Vechna thinking at left',
		'Vechna Ну рили?! Я не могу это есть! Их нужно оставлять без кислорода хотя бы на десять минут!',
		'Vechna Сверчки живы, а ужин убит.',
		'show character Chernii annoyed at right',
		'Chernii Я как могу освобождаю тебе время для работы, зная как ты ее любишь.',
		'show character Chernii normal at right',
		'Chernii Точно больше, чем жизнь в реальности.',
		'show character Vechna normal at left',
		'Vechna Нужно сходить в кино! А может, запустим змея?',
		'show character Vechna smile at left',
		'Vechna Хотя, мы ведь в лавовых туннелях под поверхностью Луны. Упс!',
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
		'show character Vechna whitenoise at left',
		'Лицо девушки расплылось, и вместо зеленых глаз сестры, Аш увидел белую рябь.',
		'Не успел он возмутиться, как она уже распространилась на все ее тело.',
		'show character Chernii angry at right',
		'Chernii Ты улыбаешься?',
		'Девушка собрала оставшихся в живых, и, уже было собравшихся расползтись из тарелки светлячков, и убрала их в фудрариум, к остальным насекомым.',
		'jump Scene2'
		],
		'Scene2': [
			'show scene home with fadeIn',
			'Text На следующий день после блока.',
			'show character Vechna whitenoise at left with fadeIn',
			'Vechna ...',
			'show character Chernii angry at right with fadeIn',
			'Парень пытался докричаться со сестры.',
			'Chernii Сразу видно рациональное мышление!',
			'show character Chernii normal at right',
			'Vechna ...',
			'Chernii Хорошо, проведем другой эксперимент. На чем там раньше писали?',
			'Он оглянулся по сторонам. Девушка подошла к кухонной стойке.',
			'Chernii Есть мысль!',
			'Он встал рядом с ней и достал самую большую тарелку, открыл фудрариум с растениями и вырвал пучок петрушки.',
			'Оборвал со стеблей листья, выложил на тарелке текст.',
			'Text Поговори!',
			'Поставил тарелку под нос девушке, уже сидящей за столом.',
			'Vechna ...',
			'Chernii Ты упрямая или заблокировала все способы передачи информации? Звуки, буквы, цифры и рисунки?',
			'Chernii Не верю.',
			'У стойки он начистил еще стеблей петрушки и выложил на тарелке новый текст, который поставил на стол перед девушкой.',
			'Text “Копируйся в сеть”',
			'Vechna ...',
			'Chernii Ты все-таки это сделала…',
			'show character Chernii annoyed at right',
			'Chernii Отличный способ решать вопросы! Кто тут из нас еще старший!',
			'Его голову посетила пугающая мысль: вдруг она вместо него тоже видит белый шум?',
			'Chernii И что мне делать? Обездвижить тебя, пока не разблокируешь каналы связи?',
			'Chernii Проверим, видишь ли ты меня.',
			'Оглядываясь по сторонам, его взгляд упал на кухню. Особо там больше не на что и смотреть.',
			'Пооткрывав шкафы, он достал нож. Сел на кровать и положил руку ладонью вверх на колено.',
			'Chernii Кровь на полу ты увидишь, даже если я заблочен, но на моей одежде - нет.',
			'Полоснул руку ножом.',
			'Chernii А в виаре с ощущениями на максимуме больней!',
			'Он ждал, кровь впитывалась в ткань, ее тепло уже чувствовалось в районе икры, обещая скоро растечься по полу.',
			'Силуэт, залитый белым шумом, отложил в сторону китайские палочки и направился в сторону кухонных шкафов.',
			'Chernii Ты заметила? Или не наелась?',
			'Девушка достала тюбик из верхнего шкафчика и положила его на кровать рядом с братом.',
			'Он прочел: клей для обработки порезов.',
			'Chernii Я был прав! Ты меня видишь!',
			'И грустно закончил.',
			'Chernii Только лишь видишь...',
			'Он подошел к источнику с водой и смыл кровь. Обсушил теплым воздухом, затем  нанес клей.',
			'Chernii Значит, придется тестировать импланты в боевых условиях. И нужно научить ИИ узнавать эмоции, чтобы они отображались на заячьих Ушах.',
			'Chernii Я очень хочу показать тебе свои чувства. И они не делают меня счастливым.',
			'Chernii Вот и повод вернуться в любимую игру.',
			'Вечна начала растяжку, используя минимальные, необходимые упражнения, чтобы скорее вернуться в мир сети.',
			'show character Chernii angry at right',
			'Chernii Не смогу не тебя смотреть после сложной игры. Мне ведь нужно море, целый океан крови и страданий.',
			'jump Scene3'
		],
		'Scene3': [
			'show scene audience with fadeIn',
			'show character Chernii normal at right with fadeIn',
			'Text Прошло 70 дней после блокировки Вечны.',
			'Если люди на Лунной Станции куда-то и выходили - это были прогулки под Куполом с произрастающей зеленью и спортзалы.',
			'Лекционный зал никто не использовал.',
			'Для чего идти куда-то, если любое выступление транслируется в сеть?',
			'Теперь аудитория походила на место, куда можно сбежать.',
			'Иногда сюда заглядывали мобильные камеры, которые следят за порядком, или роботы уборщики, убирающие просочившуюся с поверхности пыль.',
			'Аш натянул на ладонь рукав толстовки и провел по лавке, проверив, что на той не осела мелкая фракция.',
			'Лунная пыль мелкая, как порошок и острая, как стекло.',
			'Ведь на спутнике Земли нет ветра и воды, которые закругляют ее края.',
			'Chernii Отлично, сегодня ничего не попадет в мои легкие. Ещё рака мне не хватало.',
			'Он лег на скамейку.',
			'В последнюю секунду ему показалось, что открылась дверь в аудиторию, но он уже был в другой реальности.',
			'jump Scene4'
		],
		'Scene4': [
			'show scene vr with fadeIn',
			'show character Chernii normal at right with fadeIn',
			'Вокруг гудели звуки. Аш выкрутил их на минимум и отправился к двери с надписью "Game".',
			'Она должна была привести его в ту игру, в которую он играл последний раз.',
			'С тех пор как он узнал, что Вечна его видит, Аш пропадал в хорроре.',
			'Раз за разом он пытался поставить себя в самые стрессовые ситуации.',
			'Чем чаще парень испытывал эмоцию, тем с большей вероятностью она отображалась на дисплеях его имплантов.',
			'Аш всегда выбирал роль жертвы.',
			'В отличии от остальных, ему было не так уж интересно проектировать испытания, как показывать другим свое превосходство.',
			'Chernii Люблю выигрывать на чужом поле боя.',
			'Chernii Сегодня мне нужен самый изощренный проектировщик игр.',
			'Он выбрал верхнее имя в рейтинге создателей хорроров и отправил приглашение.',
			'Подтверждение пришло сразу.',
			'Chernii Надеюсь, ты дашь мне море негативных впечатлений. Что-то пооригинальней зомби.',
			'Молодой человек с кибер-ушами вошел в дверь.',
			'jump Scene5'
		],
		'Scene5': [
			'show scene vr2 with fadeIn',
			'show character Chernii normal at right with fadeIn',
			'Аш привычно выкрутил на максимум остроту чувств.',
			'В любой стимуляции, чтобы не травмировать человека как психически, так и физически - в виаре ты волен притупить ощущения.',
			'Игровая площадка выглядела невинно. Немного и довольно смутно напоминая старый добрый “майнкрафт”.',
			'Только в этой игре правила нужно изучить на собственной шкуре.',
			'show character Chernii confused at right',
			'Chernii Эм, и у этого проектировщика самый высокий рейтинг? И какой алгоритм его составляет?',
			'show character Chernii normal at right',
			'Блоки на локации вели в разных направлениях. Перед героем предстало пустое пространство, освещенное огнями.',
			'Chernii И какая цель игры?',
			'show character M noise at left with fadeIn',
			'M Ищи блок, где сможешь удовлетворить самую базовую потребность.',
			'show character Chernii annoyed at right',
			'Chernii Много ты знаешь о моих потребностях.',
			'M Есть то, чего бояться все. Удачи!',
			'show character Chernii normal at right',
			'Проектировщик отключился. Аш стоял в задумчивости, размышляя, чего же ему ждать от “топовой” игры.',
			'Нет ни оружия, ни пугающей атмосферы.',
			'Chernii Найти блок? Скучно, сил нет. Самый высокий рейтинг, черт возьми...',
			'Он пошел по блокам. После первого шага что-то как будто бы изменилось.',
			'Аш зевнул. А потом еще. И еще.',
			'Не обращая на это внимания, парень продолжал двигаться.',
			'Царящая вокруг тишина способствовала нарастающему раздражению, и как будто бы усиливала появившуюся головную боль.',
			'Он заглядывал за блоки, стучал по ним и прыгал, пытаясь понять: чего же от него хотят?',
			'Голова уже начала раскалываться на части. Теперь и воздух становился тяжелым.',
			'Поднявшись на небольшую ступеньку, Аш попытался сделать глубокий вдох. Он задыхался.',
			'Chernii Головная боль, сонливость и удушье. Нехватка кислорода?',
			'Chernii Экзогенная гипоксия – пооригинальней зомби. Уже интересней.',
			'Chernii Кислород действительно базовая потребность.',
			'Он сел на пол.',
			'Chernii Очень злая шутка для жителей Луны, погибающих от разгерметизации станций.',
			'Головная боль стала невыносимой и мешала сосредоточиться на задании.',
			'Впервые он пожалел, что использовал всю остроту чувств, а не притупил их.',
			'Можно смириться с раной в ноге или укусом какой-то твари: как-то раз ему откусили голову, напоминало сильный ожог.',
			'Chernii Непривычно. Значит, нужен блок?',
			'Chernii Так, я был здесь? Вот и дезориентация со снижением когнитивных способностей.',
			'Сердце бешено колотилось от каждого шага, а идти становилось все труднее.',
			'Chernii В конце я должен потерять сознание.',
			'show character M noise at left with fadeIn',
			'M Не потеряешь. Это же игра.',
			'Шел второй час, Ашу казалось, что он находится на грани состояния, когда вот-вот, через секунду, упадет.',
			'Перед глазами было мутно, словно в густом смоге.',
			'Тело отказывалось слушаться. Парень готов был поклясться, что не раз обошел все игровое пространство.',
			'Chernii Неужели нужно лезть на верхние блоки?',
			'Он перешел на шепот',
			'show character Chernii annoyed at right',
			'Chernii Верните кислород!',
			'Он ухватил руками за край и попробовал подтянуться.',
			'Chernii Смешно. Не могу даже нормально видеть, какое лезть... Это кошмар.',
			'Chernii Я хочу закончить игру.',
			'Никто не отвечал.',
			'Chernii ...',
			'Он хотел убедить проектировщика, но понял, что уже не способен даже говорить. Только думать:',
			'Chernii Как долго я могу здесь проваляться?',
			'Chernii В сознании, с жжением во всем теле, словно ты задержал дыхание на час, а кислород закончился 59 минут назад!',
			'Он пытался продолжить внутренний диалог, но теперь не мог даже думать.',
			'Его охватил страх. Самый жуткий и первобытный – нехватка кислорода.',
			'Он не мог ползти по ступеням вниз, поэтому скатился.',
			'Парень приближался к границе блоков, где начиналась черная, непроглядная тьма.',
			'Он очень хотел проиграть. Только как это сделать?',
			'Прежде, чем сброситься во тьму, он почувствовал ужас, живот скрутило.',
			'А что, если игра не закончиться?',
			'Упав вниз, он не сможет вернуться и никогда не доберется до блоков.',
			'show character Chernii fear at right',
			'Перед глазами высветилось уведомление',
			'Text Изучена новая эмоция - страх.',
			'Он перевалился за край, ожидая ощутить падение, но почувствовал холодную поверхность и удар головой.',
			'Вдох вызвал жгучую боль.',
			'Значит, страх.',
			'show character M noise at left',
			'M Невидимый, зато огромный блок открыт! Довольно хитро, а?',
			'M Ты почти 2 часа бродил, обычно сбрасываются после часа тяжелой гипоксии.',
			'show character Chernii angry at right',
			'Chernii Ты садист!',
			'M Это хоррор, ты вообще дольше меня играешь. И только за жертву. К кому еще вопросы?',
			'show character Chernii normal at right',
			'M Месье мазохист, к вашим услугам садист.',
			'Он произнес это со смехом, пока Аш пытался прийти в себя.',
			'Chernii Это для науки.',
			'M Вся наука для человеческого эго, не заливай.',
			'M Не обижайся. Хочешь кастомную игру?',
			'show character Chernii angry at right',
			'Chernii ...',
			'Аш вышел из игры.',
			// тут герой должен пропасть
			'M Постоянно они обижаются…',
			'jump Scene6'
		],
		'Scene6': [
			'show scene vr with fadeIn',
			'show character Chernii normal at right with fadeIn',
			'Chernii До сих пор трясет, но эффективно - ничего не скажешь.',
			'Chernii Пара часов и код ушей смог узнать в мозгу страх, а потом отобразить на дисплее.',
			'Chernii Хотя страх я до этого часто чувствовал, скорее всего там получил недостающие данные.',
			'Его внимание привлекло уведомление, появившееся перед лицом.',
			'Сообщение демонстрируется принудительно, поскольку до этого было проигнорировано 10 уведомлений в 3 каналах связи.',
			'show character Chernii fear at right',
			'Chernii Похоже, это проблемы.',
			//мысли
			'Text Вам нужно явиться в Центр Помощи.',
			'show character Chernii normal at right',
			'Chernii Конечно, я приду.',
			'Он усмехнулся и вышел из сети.',
			'Конечно, я не приду! Мне нужно домой.',
			//мысли
			'jump Scene7'
		],
		'Scene7': [
			'show scene audience with fadeIn',
			'Аш Он лежал на лавке и ждал, пока скелетные мышцы начнут его слушаться.',
			'Состояние напоминало сонный паралич.',
			'Чип в голове позволял не только выходить в сеть, собирать данные о здоровье и эмоциях человека.',
			'Но и синтезировать нейропередатчики, для блокировки движений, как во время сна.',
			'В конце зала раздался звук, словно что-то поставили на лавку.',
			'show character Chernii normal at right with fadeIn',
			'Chernii Кто здесь?',
			//спрайт мобильной камеры,
			'Контроль над телом вернулся. Он сел и увидел перед собой мобильную камеру.',
			'show character Chernii fear at right',
			'Chernii Я уже и забыл.',
			'Stations II Пройдите в Центр Помощи. Это не займет много времени. Спасибо.',
			'Chernii Пожалуйста...',
			'jump Scene8'
		],
		'Scene8': [
			'show scene audience with fadeIn',
			//заменить на центр копирования,
			'show character Chernii normal at right with fadeIn',
			'Аш встал с кушетки.',
			'Chernii Все впорядке?',
			'Stations II Уровень кортизола, пролактина, триотропного гормона и магния показал…',
			'Stations II ...что вы испытываете стресс, несовместимый с приемлемыми когнитивными способностями на протяжении 2 месяцев.',
			'Chernii И для чего я здесь? Чип и так в реальном времени присылает вам показатели.',
			'Chernii Зря столько датчиков в тело помещали?',
			'Stations II Правила требуют перепроверки данных.',
			'Stations Ваше состояние оценивается как опасное для окружающих, находящихся в замкнутой системе жизнеобеспечения.',
			'Stations II Необходимо восстановить показатели до уровня, который считается здоровым.',
			'Chernii Как это выглядит?',
			'Stations II Первая ступень восстановления – когнитивная терапия: вы должны посещать свидания.',
			'Stations II Знакомы с системой свиданий?',
			'Chernii А ты не знаешь? Мы же заучивали правила перед отправкой.',
			//мысли
			'Chernii К сожалению, не помню.',
			'Chernii И как мне отвертеться? Не мое это...',
			//мысли
			'Stations II Все эксперименты по длительному пребыванию человека в замкнутом пространстве указывали, что один из самых высоких факторов риска для провала миссии – человеческая психика.',
			'Stations II Например, участники эксперимента Биосфера 2 разделились на две группы и снизили эффективность работы.',
			'Stations II Член 3 экипажа Станции Клоун нарушил герметичность, что привело к жертвам и дорогостоящему ремонту станции.',
			'Chernii Наверное, их проблема была в том, что они слишком много общались. Я со своей "причиной стресса" даже не разговариваю.',
			'Stations II Это хорошо.',
			'Chernii Наоборот.',
			'Аш усмехнулся.',
			'Chernii Стресс отслеживать научились, а вот с определением источника проблема.',
			//мысли
			'Stations II Человек может непредсказуемо повести себя в замкнутом пространстве.',
			'Stations II Поэтому, необходимо общаться с людьми извне. Вы обязаны ежедневно, посещать свидания в сети.',
			'Chernii Вся моя семья здесь. Я готов пойти на встречу в сети, но с человеком со станции.',
			'Stations II Свидания могут быть организованы только с жителями Земли.',
			'Stations II Коммуникация с экипажем незначительно снижает риски психических расстройств.',
			'Chernii Значит нет?',
			'Stations II Вы не можете организовать свидание с жителем станции.',
			'Stations II Вам будет выслан план лечения. Убедительная просьба следовать ему.',
			'Chernii Могу отказаться?',
			'Stations II Если в течении 2 недель вы не покажете положительный прогресс, вас изолируют от остальных.',
			'Stations II Вы получите принудительную визуальную и звуковую блокировку – белый шум',
			'Stations II Вы знаете что это? Если в сети вы можете поставить блок внешности, здесь вы будете заблокированы в реальности.',
			'Chernii Сталкивался с этим разок.',
			'Stations II При попытке тактильного контакта – вам будет отказано в возвращении на Землю.',
			'show character Chernii fear at right',
			'Chernii Значит,  Вечна меня не увидит...',
			'Chernii Что тут сказать, я согласен...',
			//мысли 
			'jump Scene9'
		],
		'Scene9': [
			'show scene audience with fadeIn',
			//заменить на центр копирования,
			'show character Chernii normal at right with fadeIn',
			'show character Vechna whitenoise at left with fadeIn',
			'Chernii Сейчас ты меня хотя бы видишь, а что будет через 2 недели?',
			'Chernii Интересно как это, когда ты для всех заблочен. Хотя совсем не интересно…',
			'Силуэт, залитый белым шумом, встал в мостик из положения стоя, а затем на руки.',
			'Аш знал, что она его не слышит – но с другими, особенно с незнакомцами с Земли, говорить не хотелось.',
			'Chernii Ирония - я считаюсь опасным элементом за то, что сам себя подвергаю стрессу.',
			'Chernii Потому что ИИ станции, неверно определил мою настоящую проблему.',
			'Chernii Разреши правила станции приглашать на свидания жителей Луны – это бы все решило.',
			'Chernii Ирония – можно встретиться в сети с жителями Земли, но не с человеком в твоей комнате.',
			'Chernii Расстояние приняло странную форму.',
			'Девушка села на продольный шпагат.',
			'Chernii Придется финализировать эксперимент с имплантами.',
			'Chernii Терапия ИИ станции для меня бесполезна, а других идей нет.',
			'Chernii А если повезет наладить с тобой контакт - проблема решится сама собой.',
			'Ему пришло уведомление с заголовком "План терапии".',
			'Chernii Не поверите, но мне нужно поиграть. Завтра.',
			'Chernii Теперь мой личный доктор – психопат проектирующий ужасы.',
			'jump Scene10'
		],
		'Scene10':














			






















		






















		],















		







})