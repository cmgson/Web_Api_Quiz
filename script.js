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
var $incorrect; //= $('.wrong');
$answerList.hide();
$question.hide();

$startBtn.on('click', function(){
    $startBtn.hide();
    $('ul').show();
    $question.show();
    card0();
});

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
    });
};


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
        console.log("decrement timer");
    });
};

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
        console.log("decrement timer");
    });
};

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

    $(".wrong").on("click", function () {
        console.log("decrement timer");
    });
};

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
        console.log("decrement timer");
    });
}
// function decrement () {
//     $incorrect = $('.wrong');
    

// function card0() {
//     // $(".correct,.wrong").off();
//     $question.html("0");
//     $answerBtn1.html("a1 card 0");
//     $answerBtn2.html("a2 card 0");
//     $answerBtn3.html("a3 card 0");
//     $answerBtn4.html("a4 card 0");
//     $answerBtn1.removeClass('wrong').addClass('correct');
//     $correct = $('.correct');
//     $incorrect = $('.wrong');
//     $correct.on('click', function(){
//         card1();
//         $answerBtn1.removeClass("correct").addClass('wrong');
//     });
//     $incorrect.on('click', function(){
//         //decrement timer
//         console.log("decrement timer");
//     });
    
    
    
// };
// //decrement();

// function card1() {
//     $("correct,wrong").off();
//     $question.html("1");
//     $answerBtn1.html("a1 card 1");
//     $answerBtn2.html("a2 card 1");
//     $answerBtn3.html("a3 card 1");
//     $answerBtn4.html("a4 card 1");
//     $answerBtn1.removeClass('wrong').addClass('correct');
//     $correct = $('.correct');
//     $incorrect = $('.wrong');
//     $correct.on('click', function(){
//         card2();
//         $answerBtn1.removeClass("correct").addClass('wrong');
        
//     });
    
//     $incorrect.on('click', function(){
//         //decrement timer
//         console.log("decrement timer");
//     });
    
    
//     //decrement();
// };

// function card2() {
//     $("correct,wrong").off();
//     $question.html("2");
//     $answerBtn1.html("a1 card 2");
//     $answerBtn2.html("a2 card 2");
//     $answerBtn3.html("a3 card 2");
//     $answerBtn4.html("a4 card 2");
//     $answerBtn2.removeClass('wrong').addClass('correct');
//     $correct = $('.correct');
//    $correct.on('click', function(){
//         card3();
//         $answerBtn2.removeClass("correct").addClass('wrong');
//     });
//     $incorrect.on('click', function(){
//         //decrement timer
//         console.log("decrement timer");
//     });
    
    
//      //decrement();
// };

// function card3() {
//     $("correct,wrong").off();
//     $question.html("3");
//     $answerBtn1.html("a1 card 3");
//     $answerBtn2.html("a2 card 3");
//     $answerBtn3.html("a3 card 3");
//     $answerBtn4.html("a4 card 3");
//     $answerBtn3.removeClass('wrong').addClass('correct');
//     $correct = $('.correct');
//     $correct.on('click', function(){
//         card4();
//         $answerBtn3.removeClass("correct").addClass('wrong');
//     });
//     $incorrect.on('click', function(){
//         //decrement timer
//         console.log("decrement timer");
//     });
    
    
//     //decrement();
// };

// function card4() {
//     $("correct,wrong").off();
//     $question.html("4");
//     $answerBtn1.html("a1 card 4");
//     $answerBtn2.html("a2 card 4");
//     $answerBtn3.html("a3 card 4");
//     $answerBtn4.html("a4 card 4");
//     $answerBtn4.removeClass('wrong').addClass('correct');
//     $correct = $('.correct');
//     $correct.on('click', function(){
//         $answerBtn4.removeClass("correct").addClass('wrong');
//         card0();
//     });
//     $incorrect.on('click', function(){
//         //decrement timer
//         console.log("decrement timer");
//     });
    
    
//      //decrement();
// };


