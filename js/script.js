var myAudio = new Audio("img/tavern.mp3");
var counter = 1;
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Restart () {
  window.location.reload();
}

function sound() {
  console.log(counter); 
  if (counter%2==0) {
    counter++;
    myAudio.pause();
    $(".music").css("background-image", "url('img/pause.png')");
    $(".music:hover").css("background-image","url('img/pause2.png')");
   } else {
    myAudio.play();
    counter++;
    $(".music").css("background-image", "url('img/1.png')");
    $(".music:hover").css("background-image","url('img/2.png')");
   }
}

console.log(myAudio);


// Определяем текстовку NPC:
var textKami = ["Эй, рады видеть тебя в нашем кабаке. Я Ками, дочь хозяина. Будете что-нибудь заказывать?",
  ["Драю заплеванный вами пол. Можешь сделать это за меня.",
    ["А, ты из тех, что обещает золотые горы, а потом сматывается, когда получил все, что хотел?",
      ["Значит так, донжуан недоделанный. Я сейчас позову отца и он тебе быстро уши надерет. И ты вряд ли сможешь после этого ходить.",
        "Вы не сразу поняли, что допустили серьезный промах. Из-за стойки вылез большой грузный мужик, медленно приблизился к вам и уверенно опустил свой большой и сильный кулак на вашу хилую голову. Характерный треск вы уже не услышали, потому что отправились отдыхать."
      ],
      "А что их показывать. Тем более, что вряд ли тебя интересуют койки, кишащие клопами, и засаленные шторы."
    ],
    "Пфф… Ваш паршивый эль в каждой подворотне Амиума продают. У нас только местный, отец сам делает. Будете брать?",
    [
      "Если ты не заплатишь, мой отец Ижак отправит тебя батрачить на поле. Он так со всеми должниками поступает. Вон, может спросить у Клифа.",
      ["*Ее рука резко исчезла из поля зрения, а затем вы почувствовали, как холодный металлический кончик касается вашей шеи* Мы тут тоже не пальцем деланные. Биф *она перевела взгляд куда-то вглубь зала* тут у нас новичок. Ты не мог бы рассказать ему про Грилмуф? А то мне на третий столик еще эль надо отнести."
      ],
      "*Ками пожала плечами. Всем так всем. Пока она наливала эль, вы торжественно обвели всех взглядом и жестом поприветствовали. Тут чья-то тяжелая рука упала на ваше плечо* Слышь, пойдем выйдем, поговорить надо.",
      ["*Вы выходите с незнакомцем во двор кабака и сразу же получаете удар в висок. От удара вы падаете в грязь и чувствуете, как с вас срезают кошелек. Что ж, этого и стоило ожидать. Не в силах подняться, вы остаетесь лежать в одиночестве.",
        [
          "Ваш крик услышал какой-то мальчишка. Он подошел и помог вам встать. Узнав, что вы не местный и попали в передрягу, он отвел вас к отцу-кузнецу.",
          "Подняться не удалось. Попробовать еще раз?",
          "Отлично! У вас получилось подняться. Кабак уже опустел и только в дальнем углу все еще опустошал кружку парень с улыбкой. Больше никого не было, поэтому вы отправились к нему."
        ],
        "*Незнакомец отвечать не стал, а просто отвернулся и скрылся в дальнем углу кабака. Через несколько секунд вы обнаруживаете, что пропал кошелек. И сразу понимаете, кто этому виной. Что вы будете делать?*",
        [
          "Завсегдатаи кабака ответили вам хохотом. Видимо, вы никому тут не нравитесь.",
          "* Вы аккуратно проходите между столиков, пытаясь обнаружить знакомое лицо. Здесь, вдали от стойки, намного темнее. Завсегдатаи кабака недобро провожают вас взглядами. Внезапно вы спотыкаетесь о чью-то ногу, и лишь последнее мгновение замечаете блеск ножа. Пол стремительно приближается. Наступает темнота*.",
        ],
        "*ВНИМАНИЕ! Вы ввязались в драку? Хотите попытаться выиграть, или сдадитесь и начнете с начала?*"
      ]

    ]
  ]
];

// Определяем опции диалога (варианты ответов на вопросы NPC):
var dialogOption = [
  "Привет, красотка! Что делаешь сегодня вечером?",
  ["Ты меня не так поняла. Хочешь, я украду тебя и покажу Море Желтых Огней, что на северо-западе?",
    ["Ну, во-первых не горы, а море. А во-вторых – да. Что естественно, то не безобразно.",
      "А ты из тех, что сначала строит недотрогу, а потом соглашается практически на все?",
      "Слушай, ты чего такая дерзкая, а? Хочешь, чтобы я тебя по-тихому зажал где-нибудь в подвале?"
    ],
    "Увлекательное занятие, конечно, но может лучше ты покажешь мне комнаты?",
    "Да… с вами, с провинциалками, кашу не сваришь.",
    "Ну и драй себе, найду кого-нибудь посговорчивее."
  ],
  "Ну привет. Да, пожалуйста, эля, если, конечно, в этой дыре его продают.",
  ["А я не отравлюсь? Знаете, я пожалуй еще подумаю.",
    "Ну давай, лей уже. Если понравится, так уж и быть – заплачу.",
    ["Напугала, то же мне. Меня так просто не скрутишь. Я много чего повидал.",
      "На поле… ладно, я пожалуй обойдусь без эля.",
      "Пусть только попробует. Где этот Ижак? Сейчас я ему по кумолу-то настучу!"
    ],
    "Ну раз тут он ценится, этот ваш эль, то всем здесь по кружке за мой счет.",
    ["Ну давай выйдем.", ["Позвать на помощь.",
      "Все-таки попытаться подняться.",
      ["Да",
        "Нет"
      ],
      "Смириться с поражением и начать игру с начала."
    ],
      "Чего тебе надо? Мы знакомы?",
      ["Эй, где этот мужик, что подходил ко мне? Он меня ограбил!",
        "*Попытаться найти вора в кабаке*",
        "*Махнуть рукой. Вам не нужны неприятности.*"
      ],
      "Так, если ты хочешь подраться, то ты не по адресу. Найди себе другое развлечение.",
      ["Конечно, хочу. Давно пора почесать кулаки!",
        "Нет, я в этом не силен(сильна). Лучше начну с начала."
      ]]
  ]
];

// Определяем счетчик опций:
var idOption = 0;
// Создаем переменную значений для первого варианта ответа:
var valueOne = "";
// Создаем переменную значений для второго варианта ответа:
var valueTwo = "";
// Создаем переменную значений для третьего варианта ответа:
var valueThree = "";
// Создаем переменную значений для третьего варианта ответа:
var valueFour = "";

var wakeUp = 0;

var healthNPC = 100;
var healthYou = 100;
var attack = 0;
var shield = 0;
var result = "";
var i = 0;
// Выставляем стартовые значения диалога:
$(".text-npc").html(textKami[0]);
$(".one-option").html(dialogOption[0]);
$(".two-option").html(dialogOption[2]);

$(".restart").click(function(){
  
  location.reload();
   
});



$(".music").click(function(){
sound();

});
                                                                


// Задаем функции изменения диалога при выборе первого варианта ответа:
$(".one-option").click(function() {
  valueOne = $(this).text();
console.log("1");
  // Если выбрано "Привет, красотка! Что делаешь сегодня вечером?", то:
  if (valueOne == dialogOption[0]) {
    $(".text-npc").html(textKami[1][0]);
    $(".one-option").html(dialogOption[1][0]);
    $(".two-option").html(dialogOption[1][2]);
    $(".three-option").html(dialogOption[1][3]);
    $(".four-option").html(dialogOption[1][4]);
    $(".img-face").css("background-image","url('img/face7.png')");

  }
  // Иначе если выбрано "Ты меня не так поняла. Хочешь, я украду тебя и покажу Море Желтых Огней, что на северо-западе?", то:
  else if (valueOne == dialogOption[1][0]) {
    $(".text-npc").html(textKami[1][1][0]);
    $(".one-option").html(dialogOption[1][1][0]);
    $(".two-option").html(dialogOption[1][1][1]);
    $(".three-option").html(dialogOption[1][1][2]);
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face8.png')");

  } 
  // Иначе если выбрано "Ну, во-первых не горы, а море. А во-вторых – да. Что естественно, то не безобразно.", то:
  else if (valueOne == dialogOption[1][1][0]) {
    $(".text-npc").html(textKami[1][1][1][0]);
    $(".one-option").html("Пожалуй стоит промолчать...");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face9.png')");
  } 
  // Иначе если выбраны следующие значения, то:
  else if (valueOne == "Пожалуй стоит промолчать..." || valueOne == "А я не отравлюсь? Знаете, я пожалуй еще подумаю." || valueOne == "Что ж. Похоже наш разговор зашел в тупик..." || valueOne == "Очень жаль... похоже, вы проиграли." || valueOne == "Попробуем снова." || valueOne == "Вернемся к разговору с Ками." || valueOne == "К сожалению, вы проиграли этот бой. Нажмите здесь, чтобы начать заново" || valueOne == "Все с огромным удивлением наблюдали, как вы отделали этого выскочку. Нажмите здесь, чтобы вернуться к разговору с Ками."
  ) {
    $(".text-npc").html(textKami[0]);
    $(".text-npc").css("color", "LightSalmon");
    $(".one-option").html(dialogOption[0]);
    $(".two-option").html(dialogOption[2]);
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face2.png')");
  } 
  // Иначе если выбрано "Напугала, то же мне. Меня так просто не скрутишь. Я много чего повидал.", то:
  else if (valueOne == dialogOption[3][2][0]) {
    $(".text-npc").html(textKami[1][3][1]);
    $(".one-option").html("Послушно плестись к Бифу");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face1.png')");
  } 
  // Иначе если выбраны следующие значения, то:
  else if (valueOne == "Послушно плестись к Бифу" || valueOne == "Отдыхать. Первый этап пройден." || valueOne == "Что ж, попробуем познакомиться."
  ) {
    $(".text-npc").html("ПОЗДРАВЛЯЕМ!");
    $(".one-option").html("ВЫ");
    $(".two-option").html("ПРОШЛИ");
    $(".three-option").html("ПЕРВЫЙ");
    $(".four-option").html("ЭТАП!");
    $(".img-face").css("background-image","url('')");
    $(".img-all").css("background-image", "url('img/tavern.jpg')");
    $(".img-all").css("background-size", "400px 200px");
  } 
  // Иначе если выбрано "Ну давай выйдем.", то:
  else if (valueOne == dialogOption[3][4][0]) {
    $(".text-npc").html(textKami[1][3][3][0]);
    $(".one-option").html(dialogOption[3][4][1][0]);
    $(".two-option").html(dialogOption[3][4][1][1]);
    $(".three-option").html(dialogOption[3][4][1][3]);
    $(".img-all").css("background-image", "url('img/outside.jpg')");
    $(".img-all").css("background-size", "500px 300px");
    $(".img-face").css("background-image","url('')");
  } 
  // Иначе если выбрано "Позвать на помощь.", то:
  else if (valueOne == dialogOption[3][4][1][0]) {
    $(".text-npc").html(textKami[1][3][3][1][0]);
    $(".one-option").html("Отдыхать. Первый этап пройден.");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
  } 
  // Иначе если выбрано "Эй, где этот мужик, что подходил ко мне? Он меня ограбил!", то:
  else if (valueOne == dialogOption[3][4][3][0]) {
    $(".text-npc").html(textKami[1][3][3][3][0]);
    $(".one-option").html("Не удачная идея.");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");

  } 
  // Иначе если выбрано "Не удачная идея.", то:
  else if (valueOne == "Не удачная идея.") {
    $(".text-npc").html(textKami[1][3][3][2]);
    $(".one-option").html(dialogOption[3][4][3][0]);
    $(".two-option").html(dialogOption[3][4][3][1]);
    $(".three-option").html(dialogOption[3][4][3][2]);
    $(".four-option").html("");
  } 
  // Иначе если выбрано "Да", то:
  else if (valueOne == "Да") {
    wakeUp++;
    console.log(wakeUp);

  } 
  // Иначе если выбрано "Конечно, хочу. Давно пора почесать кулаки!", то:
  else if (valueOne == dialogOption[3][4][5][0]) {
    $(".text-npc").html("Вы и незнакомец встали в боевую стойку. Вы будете по очереди наносить удары. Ваша победа полностью зависит от удачи.");
    $(".one-option").html("");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    for (i = 0; i < 1000; i++) {
      console.log("test");
      attack = getRandomInRange(1, 10)*2;
      shield = getRandomInRange(1, 10)*2;
      if (attack < shield) {

        result = "<p>Незнакомец промахнулся. Шанс нанести ответный удар.</p>"
        $(".two-option").prepend(result);
      } else if (attack > shield) {

        healthYou = healthYou - (attack - shield);
        result = "<p>Незнакомец ранил вас на " + (attack - shield) + ". Это больно! У вас осталось " + healthYou + " здоровья.</p>";
        $(".two-option").prepend(result);
        if (healthYou <= 0) {
          $(".one-option").html("К сожалению, вы проиграли этот бой. Нажмите здесь, чтобы начать заново");
          healthNPC = 100;
          healthYou = 100;
          break;
        }
      }
      attack = getRandomInRange(1, 10)*2;
      shield = getRandomInRange(1, 10)*2;
      if (attack < shield) {
        result = "<p>Вы промахнулись. Как бы теперь не огребсти от незнакомца.</p>"
        $(".two-option").prepend(result);
      } else if (attack > shield) {
        healthNPC = healthNPC - (attack - shield);
        result = "<p>Вы ранили незнакомца на " + (attack - shield) + ". У него осталось " + healthNPC + " здоровья.</p>";
        $(".two-option").prepend(result);
        if (healthNPC <= 0) {
          $(".one-option").html("Все с огромным удивлением наблюдали, как вы отделали этого выскочку. Нажмите здесь, чтобы вернуться к разговору с Ками.");
          healthNPC = 100;
          healthYou = 100;
          break;
        }
      }
    }

  }

  if (wakeUp == 5) {
    $(".text-npc").html(textKami[1][3][3][1][2]);
    wakeUp = 0;
    $(".one-option").html("Что ж, попробуем познакомиться.");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('')");
    $(".img-all").css("background-image", "url('img/tavern.jpg')");
    $(".img-all").css("background-size", "400px 200px");
  }
});

// Задаем функции изменения диалога при выборе второго варианта ответа:
$(".two-option").click(function() {
  valueTwo = $(this).text();
// Если выбрано "Ну привет. Да, пожалуйста, эля, если, конечно, в этой дыре его продают.", то:
  if (valueTwo == dialogOption[2]) {
    $(".text-npc").html(textKami[1][2]);
    $(".one-option").html(dialogOption[3][0]);
    $(".two-option").html(dialogOption[3][1]);
    $(".three-option").html(dialogOption[3][3]);
    $(".img-face").css("background-image","url('img/face10.png')");
  } 
  // Если выбрано "Ну давай, лей уже. Если понравится, так уж и быть – заплачу.", то:
  else if (valueTwo == dialogOption[3][1]) {
    $(".text-npc").html(textKami[1][3][0]);
    $(".one-option").html(dialogOption[3][2][0]);
    $(".two-option").html(dialogOption[3][2][1]);
    $(".three-option").html(dialogOption[3][2][2]);
    $(".img-face").css("background-image","url('img/face12.png')");
  } 
  // Если выбрано "На поле… ладно, я пожалуй обойдусь без эля.", то:
  else if (valueTwo == dialogOption[3][2][1]) {
    $(".text-npc").html(textKami[0]);
    $(".one-option").html(dialogOption[0]);
    $(".two-option").html(dialogOption[2]);
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face2.png')");

  } 
  // Если выбрано "Увлекательное занятие, конечно, но может лучше ты покажешь мне комнаты?", то:
  else if (valueTwo == dialogOption[1][2]) {
    $(".text-npc").html(textKami[1][1][2]);
    $(".one-option").html("Что ж. Похоже наш разговор зашел в тупик...");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face7.png')");
  } 
  // Если выбрано "А ты из тех, что сначала строит недотрогу, а потом соглашается практически на все?", то:
  else if (valueTwo == dialogOption[1][1][1]) {
    $(".text-npc").html(textKami[1][1][1][0]);
    $(".one-option").html("Пожалуй стоит промолчать...");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face9.png')");
  } 
  // Если выбрано "Чего тебе надо? Мы знакомы?", то:
  else if (valueTwo == dialogOption[3][4][2]) {
    $(".text-npc").html(textKami[1][3][3][2]);
    $(".one-option").html(dialogOption[3][4][3][0]);
    $(".two-option").html(dialogOption[3][4][3][1]);
    $(".three-option").html(dialogOption[3][4][3][2]);
    $(".four-option").html("");
    $(".img-face").css("background-image","url('')");
  } 
  // Если выбрано "*Попытаться найти вора в кабаке*", то:
  else if (valueTwo == dialogOption[3][4][3][1]) {
    $(".text-npc").html(textKami[1][3][3][3][1]);
    $(".text-npc").css("color", "Crimson");
    $(".one-option").html("Очень жаль... похоже, вы проиграли.");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('')");
  } 
  // Если выбрано "Все-таки попытаться подняться.", то:
  else if (valueTwo == dialogOption[3][4][1][1]) {
    $(".text-npc").html(textKami[1][3][3][1][1]);
    $(".one-option").html(dialogOption[3][4][1][2][0]);
    $(".two-option").html(dialogOption[3][4][1][2][1]);
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('')");
  } 
  // Если выбрано "Нет, я в этом не силен(сильна). Лучше начну с начала.", то:
  else if (valueTwo == dialogOption[3][4][5][1]) {
    $(".text-npc").html(textKami[0]);
    $(".text-npc").css("color", "LightSalmon");
    $(".one-option").html(dialogOption[0]);
    $(".two-option").html(dialogOption[2]);
    $(".three-option").html("");
    $(".four-option").html("");

  }
});
// Задаем функции изменения диалога при выборе третьего варианта ответа:
$(".three-option").click(function() {
  valueThree = $(this).text();
  // Если выбрано "Да… с вами, с провинциалками, кашу не сваришь.", то:
  if (valueThree == dialogOption[1][3]) {
    $(".text-npc").html(textKami[0]);
    $(".one-option").html(dialogOption[0]);
    $(".two-option").html(dialogOption[2]);
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face2.png')");
  } 
  // Если выбрано "Слушай, ты чего такая дерзкая, а? Хочешь, чтобы я тебя по-тихому зажал где-нибудь в подвале?" 
  // и "Пусть только попробует. Где этот Ижак? Сейчас я ему по кумолу-то настучу!", то:
  else if (valueThree == dialogOption[1][1][2] || valueThree == dialogOption[3][2][2]) {
    $(".text-npc").html(textKami[1][1][1][1]);
    $(".text-npc").css("color", "Crimson");
    $(".one-option").html("Очень жаль... похоже, вы проиграли.");
    $(".two-option").html("");
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/Ijak2.png')");

  } 
  // Если выбрано "Ну раз тут он ценится, этот ваш эль, то всем здесь по кружке за мой счет.", то:
  else if (valueThree == dialogOption[3][3]) {
    $(".text-npc").html(textKami[1][3][2]);
    $(".one-option").html(dialogOption[3][4][0]);
    $(".two-option").html(dialogOption[3][4][2]);
    $(".three-option").html(dialogOption[3][4][4]);
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/noname2.png')");
  } 
  // Если выбрано "Смириться с поражением и начать игру с начала." и "*Махнуть рукой. Вам не нужны неприятности.*", то:
  else if (valueThree == dialogOption[3][4][1][3] || valueThree == dialogOption[3][4][3][2]) {
    $(".text-npc").html(textKami[0]);
    $(".text-npc").css("color", "LightSalmon");
    $(".one-option").html(dialogOption[0]);
    $(".two-option").html(dialogOption[2]);
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face2.png')");
    $(".img-all").css("background-image", "url('img/tavern.jpg')");
    $(".img-all").css("background-size", "400px 200px");
  } 
  // Если выбрано "Так, если ты хочешь подраться, то ты не по адресу. Найди себе другое развлечение.", то:
  else if (valueThree == dialogOption[3][4][4]) {
    $(".text-npc").html(textKami[1][3][3][4]);
    $(".one-option").html(dialogOption[3][4][5][0]);
    $(".two-option").html(dialogOption[3][4][5][1]);
    $(".three-option").html("");
    $(".four-option").html("");
    
  }

});
// Задаем функции изменения диалога при выборе четвертого варианта ответа:
$(".four-option").click(function() {
  valueFour = $(this).text();
  // Если выбрано "Ну и драй себе, найду кого-нибудь посговорчивее.", то:
  if (valueFour == dialogOption[1][4]) {
    $(".text-npc").html(textKami[0]);
    $(".text-npc").css("color", "LightSalmon");
    $(".one-option").html(dialogOption[0]);
    $(".two-option").html(dialogOption[2]);
    $(".three-option").html("");
    $(".four-option").html("");
    $(".img-face").css("background-image","url('img/face2.png')");
  }


});


