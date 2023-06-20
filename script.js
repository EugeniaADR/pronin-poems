// Swal.fire({
//     title: 'Добро пожаловать на мой сайт!',
//     showClass: {
//       popup: 'animate__animated animate__fadeInDown'
//     },
//     hideClass: {
//       popup: 'animate__animated animate__fadeOutUp'
//     }
//   })
const allPoems = document.querySelectorAll(".all");

let theName = 'Геннадий Пронин';
let i = 0;
let speed = 100;

function print() {
  if (i < theName.length) {
    document.querySelector('h1').textContent += theName.charAt(i);
    i++;
    setTimeout(print, speed)
  }
}
print()

const btnNext = document.querySelector('#next')
const btnBack = document.querySelector('#back')


const poems = [
  `Ты помнишь, это было, было... 
  Когда кружился, падал снег,
  Когда вода в ручье шумела, спокойно ударяя брег. 
  Тот зимний день, морозцем стойкий, 
  Испуганный взгляд коров.. 
  Пастух, немного удивленный, 
  И снега свежего покров... 
  Тебя люблю и не боюсь 
  Сказать тебе и всем об этом!
  Я помню всё, что было летом, 
  Но будет ли еще потом? `,

`Не обижай, моя любимая,
Прошу тебя, не обижай. 
Когда приеду я любимая, 
Меня, прошу, не обижай.
И, если можешь ты, любимая,
Хоть у порога повстречай.
Пусть и не брит,
Пусть очень грязен я.
Меня домой ты пригласи,
И если можешь ты, любимая,
Как жил, что делал, расспроси.
Мне красоваться вовсе не к чему.
В степи живу, как волк - один.
С утра до вечера работаю,
Здесь сам себе я господин.
Нет, не ропщу, моя любимая,
Нет, не ропщу я, не ропщу.
Лишь о тебе, моя любимая,
И, если где тебя обидел я,
Прошу тебя, прости меня.
И если можешь ты, любимая,
Попробуй ты понять меня. 
Когда приеду я, любимая,
То думаю, что ты простишь.
А впрочем.. знаншь ли, любимая,
Как хочешь... или, как хотишь.`,

`          Судьбу свою благодарю,
Она свела меня с тобою.
Пусть не на долго,
Но с тобою...
За это все ж благодарю.
Да, ты прекрасна, спору нет.
Желаешь, пропою сонет?...
В ответ:"Прошу, не надо...
Нет, нет, нет!".
Жаль, очень жаль...
Судьба дала иной ответ.`,

`          Привет родные, здравствуйте, привет!
Да, в робу цвета хакки я yже давно одет..
На службе все прекрасно у меня, прекрасно.
Эх, милый мой солдат,
Не пишешь правды ты напрасно...
Ты напиши родным, что здесь застрял в горах.
От кишлака, где рота залегла - остался только прах.
Ты напиши, остался только взвод,
С вершины той остервенело лупит пулемет.
Дороги нет назад, отрезана вперед, 
А взводный весь в крови команды подает:
"Витек, бей по вершине, слышишь, бей!
Андрей, ты левый, левый край прикрой скорей!
Казбек, ложись, ложись, убьет!"
А он упал, и почему-то не встает....
И этот грохот, пуль свист, рикошет..
Осколком порванный комбатовский планшет.
Гранат разрывы, пламя, крик...
Витек, схватившись за висок, мгновенно сник...
Вдруг стихло все..
Не верится ушам..
Разноголосый хор твердит:"Мне больно, мам..."
Да, написать об этом я не смею вам...
От пережитого я плачу по ночам..
Мне очень больно, жалко матерей,
Они не спят, домой ждут сыновей....
А с лиц сынов,
Пыль гор сдувает суховей....
Привет родные, здравствуйте, привет!....
На службе все прекрасно у меня, прекрасно...`,

`          Ты помнишь, зорьку мы встречали? 
Покой в душе был..
Ни какой печали.
Нам пели соловьи, 
Меняя свои трели. 
На золото лучей
Глаза твои смотрели.
Что было в них?
Попробуй угадай...
Печаль иль радость,
А быть может рай?
Любовь в котором
Тишь и благодать!
Такую зорьку,
Хочешь вместе ты встречать?`,

`Привет, сегодня прям с утра болела голова... 
Я че хочу сейчас спросить?
А приходил ли Красный нос, 
Что в прошлом годе был,
Как вел себя, что говорил,
Подарки подарил?
К нам в цех вчера Снегурочка пришла...
Стоит,орет на весь завод: "Зовите деда, детвора!"...
А мы с ребятами... так, сяк.. коль баба говрит...
Давай орать, что мочи есть - внутри то всё горит..
Видать пришел он в цех и к нам - поскольку чародей..
Ну и давай там развлекать, собравшихся людей.
Помню стишки ему читал я, стоя на станке.
Потом я скромненько плясал,
В укромном уголке...
За посох к нам его тащил.
К тебе, поверь мне, Зин!
А ты меня по голове!
Так разве можно, Зин?.
Вот и не помню, встретил год,
Иль старый проводил?.`,

`- Влюблялась? ... -Да! 
Земное чувство..."
- Любила?...- Может быть,
Но не всегда. 
- Хотелось острых ощущений? ...
- Да,... получала... иногда.
Выходим замуж за своих мы,
Любя, влюбляемся в чужих...
В порывах острых ощущений
Мы делим счастье на двоих.
Как краток миг сих увлечений!
Запретный плод имеет вкус.
Разочарований, вкус сомнений,
И резких болей, сердца груз.
Очнувшись, Машенька, ты, руками.
На сердце ран, как борозда
А жизнь, как заблудившаяся птичка,
Всё бьётся в стекла...
Так очень часто, 
Так всегда.`,

` Зачем вам это знать? 
К чему мои печали?
Зачем вам это знать,
Что вы мне сниться стали.
Зачем вам это знать,
Что я не сплю все ночи.
Зачем вам это знать,
Что я люблю вас очень!
Зачем вам это знать?
Пусть остается тайной,
И нежные слова,
И добрый взгляд случайный.
Я сам уже не рад,
Но сердце не обманешь.
Зачем вам это знать?
Что для меня ваш взгляд,
Как боль в открытой ране...
Зачем вам это знать?...`,

`Ты от меня легонько отвыкаешь...
Хладеют чувства словно осенью земля.
В душе все потихоньку затихает
И голос говорит:" Бежать пора!"
Бежать, забыть и вывернуть из сердца,
Словно нашкодившего дерзкого кота...
Ну, что ж...да, в жизни
Так бывает.
Ногою за порог его!
Только прошу не бей ты ниже живота..😣`,

`Как же время уходит быстро. 
Лета дни истекают кровью...
В жизни значит не все так просто, 
Перемешка проблем с любовью.
У тебя я спрошу, ты ответишь?
А к чему ты в меня влюбилась?
Чего в жизни тебе не хватало,
Как дальнейшее все ты видишь? 
Ты жила, улыбаясь жизни,
Была счастлива и любима.
И когда тебя осенило,
Будто счастье проходит мимо?
Да, дуэт наш вполне серьёзен, 
Даже ноты звучат красиво!
Мир, в котором живём мы грозен, 
И глядит на нас ревниво.
Не желает он, нет не желает,
Чтоб у нас было все красиво.
Ножки всюду нам подставляет,
Надсмехаясь над этим лениво.
Он силен, он могуч, всюду связи!
И тебе живётся не просто 
Сутки стонешь, меняя маски
Сам вопрос поставлен остро.
Разве жизнь нашу он изменяет?
Не хочу, не могу, не буду 
Подчиняться законам этим!
А тебя, если мне ты веришь,
Я уже никогда не забуду.`,

`Ты не жалеешь, что выбрала меня, 
Не бьешься головой в бессилии о стену?
Меня бояться надо, как огня,
В меня вообще не следует влюбляться!
Я приношу тревогу и печаль,
И в жизнь вношу ненастную погоду.
И, знаешь, не на месяц, не на два,
И не на каких-то там полгода!
Есть время, можешь много изменить...
Смотрю в твои глаза - они полны печали,
Они страдают, нервничают, ждут.
В них пелена, помеха, 
В них трогательная смесь симпатии и смеха, 
И уходящей радости безмерная тоска,
Хрустальною слезой наполнены мгновенно.
Лишь стоит услыхать тебе:
"Что ж, милая, пока"...
Я не хочу вам приносить невзгоды,
Рыть ямы не желаю на пути...
А только трепетно, тихонечко на ушко, шепнуть:
"Ну, что же, милая, лети, лети, лети!"`,

`Храни Господь,
Храни мои признанья. 
Тебе лишь одному их доверяю я,
И темя не целуй - для снятия страдания,
Свой крест я сам несу, за все свои дела.
Позволь предстать мне пред Тобою на колени, 
Позволь просить об отпущении грехов.
Да, радостью с Тобой я не делился,
И этим часто наживал врагов.
Чужая радость вызывает в людях озлобление, 
Вызывает лицемерие и злость.
Я счастлив, Боже, что таким "богатством",
Делиться мне с Тобой не довелрсь.
Меня часто в жизни окружали: Вии, Вурдалаки, Упыри...
Желчные слова во след звучали: 
"Вон, пошел счастливчик, посмотри!"
Чем же я счастливее всех смертных,
Чем я отличился пред Тобой?
Разве же из рога изобилия осыпал меня ты манною мукой?
Как и все к Тебе я обращался,
Как и все просил, чтоб Ты и мне помог.
Дверь заперта была, и я не достучался...
Видать Ты прихворал, мне отпереть не смог?
Сколько мне отмерено, не знаю...
И пока просить не стану... верь!
Тяжко будет - постучу, узнаешь.
Отопри, пожалуйста, мне дверь.`,

`Вот все пришли 
И заняли места, а сели так, конечно не с проста.
Но во главу всего сел Староста.
Повестка дня включала очень жгучие вопросы:
Как жить, культуре как кого учить,
Да на работу в чем ходить. 
Тут голос подала Кобыла:
"Мне есть что о себе сказать.
Мой круп, фигура и вся стать, позволили народу годом лошади назвать,
вон уходящее 10летие!..."
А поглядите на Козла!
Ты повернись к народу задом.
Ну, что там?
Ни фигуры, ни хвоста!
А это, что! 
Тьфу, непроглядь...
"Нет, ты поглядь!"-
Вскричал Козел, весь багровея.
"Достоинство мое-не в том, что бросилось в глаза, 
Не в том, что так маячит сзади.
Достоинство мое в рогах и бороде..."
Обидившись, он тут же сел на стол.
И трубку раскурив, добавил :
"А комплименты, милая, оставьте дяде!"
"Ну, полно вам!"- вскричала вдруг Мартышка.
"Так ведь не долго быть беде!"
Пошерив у себя под мышкой, и чем то громко щелкнув на зубах, 
Обеими схватив руками пах, безмолвно села.
"Дааа...!"- певуче протянул Осел...
Меж зуб слюной обильно швыркнув на пол....
"Друзья! По моему не те решаем мы вопросы"- 
Промолвил Сокол, впялясь в Кабана...
"Причем здесь полосы, причем зарплата.. -нааа!"
Прохрюкал вдруг Кабан, сидящий подле шкафа,
Переводя лениво взор на длинного Жирафа.
"Да, прав Осел, его я поддержу!"
Копытом ударяя стол, вскричал молчавший доселе Жираф. 
Откуда вдруг у Зебры эти все наряды?...
"Да бросьте вы!, причем традиции, причем обряды?"
Не поняв ничего, спросила антилопа Гну.
"Угууу..угу" - в поддержку молвил Филин.
"Друзья! Культура наша неуклонно движет в высь..."
Потягиваясь, произносит Рысь.
Ну и к чему ведем мы этот разговор?...
Давно пора уж многим в бор...
Поднялся председатель, речь завел:
"Эй, секретарь, ведешь ли протокол?"
И видя, как Павлин усердно чистит перья...
Пожалуй, констатирую теперь я.
Культура наша, вижу высока, а в остальном - воздержимся пока...
Молчит... за тем итожит...
"Одежду всем носить лишь ту, что предоставил нам народ! 
Чтоб уберечь свои бока,
От импортной воздержимся пока...
А, что касается учить как жить...
То каждый может!" 
Мораль?...
Какая может быть мораль?...
Где образованности нет - там тьма, не свет.
А нравственности нет - для всех печаль.`,

`Не помню, кажется, в субботу,
Лишь выйдя на работу, всё жду звонка,
Но к сожалению пока,
Не слышно твоего звонка.
Так что же это за примета?
Плоха иль хороша?
Пока что ни шиша!
А этот бес, что там сидит,
Он вам что-либо говорит?
Нет, он пока молчит...
Хороший парень, что сказать!
А может взять его прогнать?
Напрасно, будете пинять
Конечно ж на себя.
Пусть не поседлив он, вертляв,
Пусть бьется головою,
Пусть ваш покой он нарушал,
Но вы с душой живою!
Так берегите вы его,
Пусть он деребет душу,
Пусть даже он кричит порой:
"Внутри я все разрушу!"
Лишь с виду он ершист и плох, и, кажется, мешает.
Но видит Бог, 
Да, видит Бог
Как часто помогает,
Тот бес, что там, внутри сидит.
Он нам порою говорит:
"Надейся, верь, люби и жди!"
Так это жить нам помогает.`,

`Зорька-Зоряница
Ждет когда проснемся,
Молокм тумана от души
Напьемся.
В нежных поцелуях губы искарежим,
А денечку скажем:"И не так мы можем!
Можем мы прижаться,
Нежно друг ко другу,
Можем миловаться, нам плевать на вьюгу."
Пусть она беснует, рвет, шумит и мечет.
Словно в крепкой клетке молоденький кречет.
Утренним рассветом прикоснусь легонько,
Поцелую в губы, нежно и тихонько.
И заревым светом проскольжу по лику...
Как же ты красива,
Как же ты велика!`,

`Зеленый Клин\n

Держись народ, крепись народ, Зеленый Клин гуляет!
Когда закончится гульба, один Господь лишь знает.
Снуют гонцы во все концы: на хутор "ближний", " дальний"...
Наш Джага броды знает все, ходок он капитальный.
Взяв полторашечку в штаны, и канув словно в воду,
Бредет сквозь чащи и кусты, все ближе, ближе к броду.
Заветный дом и свет в окне едва-едва мерцает, 
Но Джага носом чует спирт, спирт длма есть - он знает.
Секретный стук меж стекол в раму.
Он поднял этим стуком "маму"...
Набросив на плечи свой старый халатик, 
И вот на крыльце она - словно лунатик...
"Хто тута?" - сердито спросиа с просонья.
А вдруг показалось?
Вдруг кажется мне?
Аль леший решил надо мной посмеяться,
И будет всю ночку стучать издеваться?
Тонюсенький голос гремит с темноты: 
"Плесни-к в полторашечку спиртику ты!
Вот сорок рублей, на них и налей.
Да меньше водицы, а спирт не жалей."
Уходит хозяйка, давай колдовать - чего по какую черту наливать?
А Джага затылок чесать - ну как бы хозяйке презрение свое показать?
Выходит хозяйка с бутылкой в руке, и путь указала к бурлящей реке...
А путь тот не долог, и вот этот брод.
И снова гуляет, ликует народ!
Народ в Клину крепок, силен и красив, но портит все это спиртяка, мерзавец!`,

`Стан..., над нами..\n
Да, я беру твой гибкий
Станислав руками.
И прижимаюсь словно к маминой груди.
И фибрами души я ощущаю пламя,
Под берестовой кожей
У тебя в груди.
Оно пылает как жерло вулкана
Наружу рвется,
Выскочит гляди!
Надеюсь с нами Купидон
С стрелою  в колчедане.
Как узкоглазый всадник Чингизхана!
Парит и мечет стрелы...
Попади!`,

`Да, жизнь и не прошла,
Судьба нас не связала...
И тот прщальный миг,
Мы в силах позабыть!
Тебе не стоит ждать у старого вокзала 
Того, кого сам Бог сулил на веки полюбить.
Но есть и светлый луч в истории печальной,
В душе я музыкант с поэзией в крови...
А ты все ждешь у старого вокзала?
Не стоит ждать!
Прощай мой друг!
Счастливо, уходи...`,

`Грудь расправить можно.\n
Как песок сквозь пальцы
Дни летят так лихо.
Грудь расправить,
А дышится тихо.
Черемуховым цветом
Душа полыхает.
Что же будет завтра?
Лишь Господь и знает.
Все желают счвстья,
Светлого, большого,
А судьба дуреха - смотрит по иному.
Радости и счастье - отдает другому.
Поднатужив жилы,
Пот с лица стирая,
Упираюсь в время - кожу обдирая...
Двигаюсь все выше
Боль превозмогая.
Не моя уже ты,
Ты уже чужая...`,

`Остатки лета рвет осенний ветер.
Туманы вверх стремятся в облака.
И земляникою не пахнет в поле где-то...
Вползает осень тихо, не спеша.
Шурша дождем чрезмерно моросящим,
И слякотью раскисшихся дорог.
Да лужи солнечными бликами играют,
Как только ты ступаешь за порог.
Что ж, осень как и лето,
Бродит где-то.
Она идет в сопровождении дождей.
Мы понимаем, как прекрасно лето!
И на душе становится теплей.`,

`Я тебя обнимаю, ласкаю.
К себе трепетно прижимаю.
Мои руки скользят по телу...
Вот казалось, какое им дело?
Они любят к тебе прикасаться,
Жаждут телом твоим наслаждаться
Шаловливые? Vожет быть, в меру, и любя, лишь скользят по телу.
Да, не могут они иначе!
Их душа, часто, часто плачет, и скучает, и рвет, и мечет.
Как в силок, ловко пойманный кречет.
Ты прости их, они такие,
Пусть костлявые, пусть кривые.
Пусть на них трудовые мозоли.
Верь, они не доставят боли.
Они любят взъерошить волос.
Словно ветер, пшеничный колос.
Они много чего еще любят...
Приласкают тебя, приголубят.`,

`Вот и осень пришла...
За окошком дождливо...
Пожелтело все вдруг,
И на сердце тоскливо.
Где же те времена,
Когда все непреметно?
Год за годом летит, чередой - не заметно.
Почему же сейчас ощущается остро?
Видишь, осень пришла
Знаешь, в жизни все просто.
Просто верить в себя,
Просто быть, не казаться.
Просто жить и любить,
И любимых касаться.`,

`Как прекрасно любить!
Это точно!
Волноваться и ждать.
Разве это порочно?
Лишь тобою дышать,
Лишь тебя и касаться...
Но не просто любить!
Нет, не просто!
Ожидать и молить,
И прощать, и хвалить...
Боль под сердцем хранить.
Ощущать ее остро.
Воспоминанье так сладко!
Так больно!
Оно все лишь во мне.
Как в бреду, как во сне...
Треплет душу, кусая больно.`,

  `И жалею, и зову, и плачу...\n
  Да - курю, да - пью, но не матерюсь. 
  Да, коплю на чёрный день, а иногда и трачу...
  Да, переедаю, как иначе...
  А врубаясь, нет, не вырубаюсь... 
  А когда вступаю, чаще постою.
  Ой, храплю, в порнухе не снимаюсь! 
  Не зовут, не знаю почему.
  Да, ишачу, и, скажу, не мало...
  На роду написано "ишачь".
  А когда вспотею вспоминаю,
  И не только родненькую мать.
  А глупей или хитрей не знаю.
  Лучше у соседей разузнать... 
  Как хочу я тех, что не имею, нравится им нет когда узнать. 
  Да, бывает загрущу, но редко...  
  Чаще всё пою и веселюсь. 
  Да, я муж, любовник - каюсь, 
  И неся сей непомерный крест, 
  Всё иду по жизни, спотыкаюсь
  Иначе не смогу я, нет 
  Да, прощать, как правило, прощаю 
  И когда ищу то редко нахожу
  Как ворчу, как ковыряюсь
  Ну что, скажите, ведь есть на что смотреть`,

  `Я буду рада, если ты услышишь.\n
Я буду рада коль ты мне напишешь.
Я буду рада если позвонишь!
Я буду рада если ты услышишь,
И буду рада, когда не промолчишь.
Я буду рада каждому мгновению,
Я буду рада дуновению ветерка.
Я буду рада, милый мой,
Ты слышишь?
Когда покоится в твоей руке моя рука.
Я буду так безмерно рада,
Что тихим голосом скажу:"Пока, пока"
Нет, я не прощаюсь, не прощаюсь!
И очень жду лишь твоего звонка...`
 


]

let j = 0;
btnNext.addEventListener('click', function () {
  j++;

  if (j > poems.length - 1) {
    j = 0;
}
  
  document.querySelector('.poet').textContent = poems[j]
})

back.addEventListener('click',function(){
  j--;
  if(j < 0){
      j = poems.length - 1
  }


  document.querySelector('.poet').textContent = poems[j];
})

