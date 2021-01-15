// jquery cache
$question = $("#question");
$answerList = $("#answerList");
$answerBtns = $(":button");
$answerBtn1 = $("#btn1");
$answerBtn2 = $("#btn2");
$answerBtn3 = $("#btn3");
$answerBtn4 = $("#btn4");
$timer = $("#timer");
$highScore = $("#highScore");
$startBtn = $("#start");
$gameOver = $("#gameOver");

// these are for the highscore list
$initials = $("#initials");
$highScoreCard = $("#highScoreCard");
$submitBtn = $("#submit");
$lastEntries = $("#lastEntries");
$scoreDisplaySpan = $("#scoreDisplay");

// these are for the timer
var $correct;
var $incorrect;
var count = 60;

// sets up page for start button
$answerList.hide();
$question.hide();
$highScoreCard.hide();

renderEnder();

function renderEnder() {
  var initials = localStorage.getItem("initials");

  $lastEntries.text(initials + ": " + count);
}

$submitBtn.on("click", function (event) {
  event.preventDefault();

  var initialEntry = document.querySelector("#initials").value;
  localStorage.setItem("initials", initialEntry);
  renderEnder();
});

//logic for end of game
function endGame() {
  if (count <= 0) {
    clearInterval(timer);
    $("ul").hide();
    $question.hide();
    $gameOver.show();
    $gameOver.html("<h1>GAME OVER!!!</h1>");
    $highScoreCard.show();
    $scoreDisplaySpan.html("here is where the score will go");
  }
}

//start button initialized show game
$startBtn.on("click", function () {
  cardD();
  $startBtn.hide();
  $("ul").show();
  $question.show();
  timer = setInterval(function () {
    $timer.html(count--);
    if (count <= 0) {
      clearInterval(timer);
      $("ul").hide();
      $question.hide();
      $gameOver.show();
      $gameOver.html("<h1>GAME OVER!!!</h1>");
      $highScoreCard.show();
    }
  }, 1000);
});

//function to decrement timer everytime someone inputs wrong answer
function decrement() {
  count -= 10;
}
// abstracted away some timer stuff
function timerStuff() {
  console.log("decrement timer");
  if (count >= 10) {
    decrement();
  } else {
    clearInterval(timer);
    $timer.html(count);
    count = 0;
    $("ul").hide();
    $question.hide();
    $gameOver.html("<h1>GAME OVER!!!</h1>");
    $highScoreCard.show();
    $scoreDisplaySpan.html("<p>score : " + count + "</p>");
  }
}

function cardD() {
  $question.html(
    "The moral compass in the first movie, Hans, takes hiatus in the 2nd movie, for his brother by what name?"
  );
  $answerBtn1.html("Sal");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("Hansel");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("Lars");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("Jan");
  $answerBtn4.addClass("correct");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct");
    $answerBtns.removeClass("wrong");

    cardC();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function cardC() {
  $question.html("Which team did Banks play for before joining the Ducks?");
  $answerBtn1.html("The Cobras");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("The Raiders");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("District 15");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("The Hawks");
  $answerBtn4.addClass("correct");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct");
    $answerBtns.removeClass("wrong");

    cardB();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function cardB() {
  $question.html(
    "What is the name of the hockey team before they adopt 'The Ducks'?"
  );
  $answerBtn1.html("The bruisers");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("The NorthStars");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("District 5");
  $answerBtn3.addClass("correct");

  $answerBtn4.html("Edina Northern Lights");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct");
    $answerBtns.removeClass("wrong");

    cardA();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function cardA() {
  $question.html("What was Gordon Bombays profession?");
  $answerBtn1.html("Ex-NHL star");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("Career Criminal");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("Truck Driver");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("Lawyer");
  $answerBtn4.addClass("correct");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct");
    $answerBtns.removeClass("wrong");

    card0();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function card0() {
  $question.html(
    "The dorm in mighty ducks 3 is shared by what other movie/show?"
  );
  $answerBtn1.html("Dead Poets Society");
  $answerBtn1.addClass("correct");

  $answerBtn2.html("Saved by the Bell: The College Years");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("High School Musical");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("Pitch Perfect");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct");
    $answerBtns.removeClass("wrong");

    card1();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function card1() {
  $question.html("What famous actor auditioned for the role of Charlie Conway");
  $answerBtn1.html("Jake Gyllenhaal");
  $answerBtn1.addClass("correct");

  $answerBtn2.html("Joseph Gordon Levitt");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("Macaulay Culkin");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("Jonathan Taylor Thomas");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct");
    $answerBtns.removeClass("wrong");

    card2();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function card2() {
  $question.html(
    "Banks is referred to as a cake eater, what city would a person be from in order to be a cake eater?"
  );
  $answerBtn1.html("Farmington");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("Edina");
  $answerBtn2.addClass("correct");

  $answerBtn3.html("Apple Valley");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("Cottage Grove");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct");
    $answerBtns.removeClass("wrong");
    card3();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function card3() {
  $question.html(
    "The name Gordon Bombay is a referrence to what beverage originally?"
  );
  $answerBtn1.html("Brands of Apple Juice");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("Mai-Tai");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("Gin");
  $answerBtn3.addClass("correct");

  $answerBtn4.html("Scotch");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct,");
    $answerBtns.removeClass("wrong");
    card4();
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
}

function card4() {
  $question.html(
    "What famous Song is used in the end credits of the first film?"
  );
  $answerBtn1.html("Back that thang up");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("Danger Zone");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("Get Ready for This");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("We are the Champions");
  $answerBtn4.addClass("correct");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();
    $answerBtns.removeClass("correct,");
    $answerBtns.removeClass("wrong");
    $("ul").hide();
    $question.hide();
    $gameOver.show();
    $gameOver.html("<h1>GAME OVER!!!</h1>");
    $highScore.show();
    $highScoreCard.show();
    $scoreDisplaySpan.html("<p>score : " + count + "</p>");
    clearInterval(timer);
    $highScore.text(count);
  });

  $(".wrong").on("click", function () {
    timerStuff();
  });
  $highScore.text(count);
}
