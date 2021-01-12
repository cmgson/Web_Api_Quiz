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

($answerBtns).on("click", function() {
    card1();
    // ($answerBtns).on("click", function() {
    //     card2();
    //     ($answerBtns).on("click", function() {
    //         card3();
    //         ($answerBtns).on("click", function() {
    //             card4();
    //         });
    //     });
    // });
});





function card1() {
    ($question).html("1");
    ($answerBtn1).html("a1 card 1");
    ($answerBtn2).html("a2 card 1");
    ($answerBtn3).html("a3 card 1");
    ($answerBtn4).html("a4 card 1");
    ($answerBtn1).attr('class','.correct');
    $($answerBtns).each(function(){
        if($(this).is(".correct")){
            $(this).on("click", function(){
                card2();
            });
        };
    });
};
    
    


function card2() {
    $question.html("2");
    ($answerBtn1).html("a1 card 2");
    ($answerBtn2).html("a2 card 2");
    ($answerBtn3).html("a3 card 2");
    ($answerBtn4).html("a4 card 2"); 
    ($answerBtn2).attr('class','.correct');
    $($answerBtns).each(function(){
        if($(this).is(".correct")){
            $(this).on("click", function(){
                card3();
            });
        };
    });
    ($answerBtn2).removeClass(".correct");
};

function card3() {
    $question.html("3");
    ($answerBtn1).html("a1 card 3");
    ($answerBtn2).html("a2 card 3");
    ($answerBtn3).html("a3 card 3");
    ($answerBtn4).html("a4 card 3"); 
    ($answerBtn3).attr('class','.correct');
    $($answerBtns).each(function(){
        if($(this).is(".correct")){
            $(this).on("click", function(){
                card4();
            });
        };
    });
    ($answerBtn3).removeClass(".correct");
};
function card4() {
    $question.html("4");
    ($answerBtn1).html("a1 card 4");
    ($answerBtn2).html("a2 card 4");
    ($answerBtn3).html("a3 card 4");
    ($answerBtn4).html("a4 card 4");
    ($answerBtn4).attr('class','.correct');
    $($answerBtns).each(function(){
        if($(this).is(".correct")){
            $(this).on("click", function(){
                card1();
            });
        };
    });
    ($answerBtn4).removeClass(".correct");

};



    

