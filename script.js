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


$answerList.hide();
$question.hide();

$startBtn.on('click', function(){
    $startBtn.hide();
    $('ul').show();
    $question.show();
    card0();
});

function card0() {
    $answerBtns.off("click");
    $question.html("0");
    $answerBtn1.html("a1 card 0");
    $answerBtn2.html("a2 card 0");
    $answerBtn3.html("a3 card 0");
    $answerBtn4.html("a4 card 0");
    $answerBtn1.attr('class','.correct');
    
    $answerBtn1.on("click", function() {
        card1();
        $answerBtn1.removeClass(".correct").addClass('.wrong');
    });
};




function card1() {
    $answerBtns.off("click");
    $question.html("1");
    $answerBtn1.html("a1 card 1");
    $answerBtn2.html("a2 card 1");
    $answerBtn3.html("a3 card 1");
    $answerBtn4.html("a4 card 1");
    $answerBtn1.attr('class','.correct');
    $answerBtn1.on("click", function(){
        card2();
        $answerBtn1.removeClass(".correct").addClass('.wrong');
    });
    
};
    
    


function card2() {
    $answerBtns.off("click");
    $question.html("2");
    $answerBtn1.html("a1 card 2");
    $answerBtn2.html("a2 card 2");
    $answerBtn3.html("a3 card 2");
    $answerBtn4.html("a4 card 2"); 
    $answerBtn2.attr('class','.correct');
    $answerBtn2.on("click",function(){
        card3();
        $answerBtn2.removeClass(".correct").addClass('.wrong');
    });
    
};

function card3() {
    $answerBtns.off("click");
    $question.html("3");
    $answerBtn1.html("a1 card 3");
    $answerBtn2.html("a2 card 3");
    $answerBtn3.html("a3 card 3");
    $answerBtn4.html("a4 card 3"); 
    $answerBtn3.attr('class','.correct');
    $answerBtn3.on("click",function(){
        card4();
        ($answerBtn3).removeClass(".correct").addClass('.wrong');
    });
    
    };
function card4() {
    $answerBtns.off("click");
    $question.html("4");
    ($answerBtn1).html("a1 card 4");
    ($answerBtn2).html("a2 card 4");
    ($answerBtn3).html("a3 card 4");
    ($answerBtn4).html("a4 card 4");
    ($answerBtn4).attr('class','.correct');
    $answerBtn4.on("click",function(){
        card1();
    });
};