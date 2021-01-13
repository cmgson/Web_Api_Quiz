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
var $correct;
var $incorrect;
var count = 60;
$gameOver = $("#gameOver");

$answerList.hide();
$question.hide();

$startBtn.on("click", function () {
  $startBtn.hide();
  $("ul").show();
  $question.show();
  card0();
  timer = setInterval(function () {
    $timer.html(count--);
    if (count <= 0) {
      clearInterval(timer);
      $("ul").hide();
      $question.hide();
      $gameOver.html("<h1>GAME OVER</h1>");
      //write game over function into other cards
    }
  }, 1000);
});

function decrement() {
  count -= 10;
}

function card0() {
  $question.html("0");
  $answerBtn1.html("a1 card 0");
  $answerBtn1.addClass("correct");

  $answerBtn2.html("a2 card 0");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("a3 card 0");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("a4 card 0");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();

    $answerBtn1.removeClass("correct");
    $answerBtn2.removeClass("wrong");
    $answerBtn3.removeClass("wrong");
    $answerBtn4.removeClass("wrong");

    card1();
  });

  $(".wrong").on("click", function () {
    console.log("decrement timer");
    if (count >= 10) {
      decrement();
    } else {
      if (count <= 0) {
        clearInterval(timer);
        $("ul").hide();
        $question.hide();
        $gameOver.html("<h1>GAME OVER</h1>");
        //write game over function into other cards
      }
      clearInterval(timer);
      count = 0;
    }
  });
}

function card1() {
  $question.html("1");
  $answerBtn1.html("a1 card 1");
  $answerBtn1.addClass("correct");

  $answerBtn2.html("a2 card 2");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("a3 card 3");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("a4 card 4");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();

    $answerBtn1.removeClass("correct");
    $answerBtn2.removeClass("wrong");
    $answerBtn3.removeClass("wrong");
    $answerBtn4.removeClass("wrong");

    card2();
  });

  $(".wrong").on("click", function () {
    if (count >= 10) {
      decrement();
    } else {
      if (count <= 0) {
        clearInterval(timer);
        $("ul").hide();
        $question.hide();
        $gameOver.html("<h1>GAME OVER</h1>");
        //write game over function into other cards
      }
      clearInterval(timer);
      count = 0;
    }
  });
}

function card2() {
  $question.html("2");
  $answerBtn1.html("a1 card 2");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("a2 card 2");
  $answerBtn2.addClass("correct");

  $answerBtn3.html("a3 card 2");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("a4 card 2");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();

    $answerBtn1.removeClass("wrong");
    $answerBtn2.removeClass("correct");
    $answerBtn3.removeClass("wrong");
    $answerBtn4.removeClass("wrong");

    card3();
  });

  $(".wrong").on("click", function () {
    if (count >= 10) {
      decrement();
    } else {
      if (count <= 0) {
        clearInterval(timer);
        $("ul").hide();
        $question.hide();
        $gameOver.html("<h1>GAME OVER</h1>");
        //write game over function into other cards
      }
      clearInterval(timer);
      count = 0;
    }
  });
}

function card3() {
  $question.html("3");
  $answerBtn1.html("a1 card 3");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("a2 card 3");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("a3 card 3");
  $answerBtn3.addClass("correct");

  $answerBtn4.html("a4 card 3");
  $answerBtn4.addClass("wrong");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();

    $answerBtn1.removeClass("wrong");
    $answerBtn2.removeClass("wrong");
    $answerBtn3.removeClass("correct");
    $answerBtn4.removeClass("wrong");

    card4();
  });
}
$(".wrong").on("click", function () {
  if (count >= 10) {
    decrement();
  } else {
    if (count <= 0) {
      clearInterval(timer);
      $("ul").hide();
      $question.hide();
      $gameOver.html("<h1>GAME OVER</h1>");
      //write game over function into other cards
    }
    clearInterval(timer);
    count = 0;
  }
});

function card4() {
  $question.html("4");
  $answerBtn1.html("a1 card 4");
  $answerBtn1.addClass("wrong");

  $answerBtn2.html("a2 card 4");
  $answerBtn2.addClass("wrong");

  $answerBtn3.html("a3 card 4");
  $answerBtn3.addClass("wrong");

  $answerBtn4.html("a4 card 4");
  $answerBtn4.addClass("correct");

  $(".correct").on("click", function () {
    $(".correct,.wrong").off();

    $answerBtn1.removeClass("wrong");
    $answerBtn2.removeClass("wrong");
    $answerBtn3.removeClass("wrong");
    $answerBtn4.removeClass("correct");

    card5();
  });

  $(".wrong").on("click", function () {
    if (count >= 10) {
      decrement();
    } else {
      if (count <= 0) {
        clearInterval(timer);
        $("ul").hide();
        $question.hide();
        $gameOver.html("<h1>GAME OVER</h1>");
        //write game over function into other cards
      }
      clearInterval(timer);
      count = 0;
    }
  });
}
