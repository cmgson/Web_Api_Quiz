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
var $correct;
var $incorrect;
var count = 60;


$answerList.hide();
$question.hide();

function endGame () {
    if (count <= 0) {
        clearInterval(timer);
        $("ul").hide();
        $question.hide();
        $gameOver.show();
        $gameOver.html("<h1>GAME OVER!!!</h1>");
    };
};

$startBtn.on("click", function () {
  card0();
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
    }
  }, 1000);
});

function decrement() {
  count -= 10;
}
function timerStuff() {
    console.log("decrement timer");
    if (count >= 10) {
      decrement();
    } else {
      clearInterval(timer);
      count = 0;
      $("ul").hide();
      $question.hide();
      $gameOver.html("<h1>GAME OVER!!!</h1>");
      //write game over function into other cards
        };
};



function card0() {
  $question.html("0");
  $answerBtn1.html("a1 card 0");
  $answerBtn1.attr("id", "correct");

  $answerBtn2.html("a2 card 0");
  $answerBtn2.attr("id", "wrong");

  $answerBtn3.html("a3 card 0");
  $answerBtn3.attr("id", "wrong");

  $answerBtn4.html("a4 card 0");
  $answerBtn4.attr("id", "wrong");

  $("#correct").on("click", function () {
    $("#correct,#wrong").off();
    
    
    $answerBtn1.removeAttr("id", "correct");
    $answerBtn2.removeAttr("id", "wrong");
    $answerBtn3.removeAttr("id", "wrong");
    $answerBtn4.removeAttr("id", "wrong");
    card1();
    });

    $("#wrong").on("click", function () {
        timerStuff();
    });

  
}

function card1() {
    $question.html("1");
    $answerBtn1.html("a1 card 1");
    $answerBtn1.attr("id", "correct");
  
    $answerBtn2.html("a2 card 1");
    $answerBtn2.attr("id", "wrong");
  
    $answerBtn3.html("a3 card 1");
    $answerBtn3.attr("id", "wrong");
  
    $answerBtn4.html("a4 card 1");
    $answerBtn4.attr("id", "wrong");
  
    $("#correct").on("click", function () {
      $("#correct,#wrong").off();
  
      $answerBtn1.removeAttr("id", "correct");
      $answerBtn2.removeAttr("id", "wrong");
      $answerBtn3.removeAttr("id", "wrong");
      $answerBtn4.removeAttr("id", "wrong");

    card2();
  });

  $("#wrong").on("click", function () {
    timerStuff();
  });
};   

function card2() {
    $question.html("2");
    $answerBtn1.html("a1 card 2");
    $answerBtn1.attr("id", "wrong");
  
    $answerBtn2.html("a2 card 2");
    $answerBtn2.attr("id", "correct");
  
    $answerBtn3.html("a3 card 2");
    $answerBtn3.attr("id", "wrong");
  
    $answerBtn4.html("a4 card 2");
    $answerBtn4.attr("id", "wrong");
  
    $("#correct").on("click", function () {
      $("#correct,#wrong").off();
  
      $answerBtn1.removeAttr("id", "wrong");
      $answerBtn2.removeAttr("id", "correct");
      $answerBtn3.removeAttr("id", "wrong");
      $answerBtn4.removeAttr("id", "wrong");
    card3();
  });

  $("#wrong").on("click", function () {
    timerStuff();
  });
}

function card3() {
    $question.html("3");
    $answerBtn1.html("a1 card 3");
    $answerBtn1.attr("id", "wrong");
  
    $answerBtn2.html("a2 card 3");
    $answerBtn2.attr("id", "wrong");
  
    $answerBtn3.html("a3 card 3");
    $answerBtn3.attr("id", "correct");
  
    $answerBtn4.html("a4 card 3");
    $answerBtn4.attr("id", "wrong");
  
    $("#correct").on("click", function () {
      $("#correct,#wrong").off();
  
      $answerBtn1.removeAttr("id", "wrong");
      $answerBtn2.removeAttr("id", "wrong");
      $answerBtn3.removeAttr("id", "correct");
      $answerBtn4.removeAttr("id", "wrong");
    card4();
  });

    $("#wrong").on("click", function () {
        timerStuff();
    });
};

function card4() {
    $question.html("4");
    $answerBtn1.html("a1 card 4");
    $answerBtn1.attr("id", "wrong");
  
    $answerBtn2.html("a2 card 4");
    $answerBtn2.attr("id", "wrong");
  
    $answerBtn3.html("a3 card 4");
    $answerBtn3.attr("id", "wrong");
  
    $answerBtn4.html("a4 card 4");
    $answerBtn4.attr("id", "correct");
  
    $("#correct").on("click", function () {
      $("#correct,#wrong").off();
  
      $answerBtn1.removeAttr("id", "wrong");
      $answerBtn2.removeAttr("id", "wrong");
      $answerBtn3.removeAttr("id", "wrong");
      $answerBtn4.removeAttr("id", "correct");

    card5();
  });

  $("#wrong").on("click", function () {
      timerStuff();
  });
};
