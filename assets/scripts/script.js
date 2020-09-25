// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("scoreContainer");


start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    timer = setInterval(counter(),1000); // 1000ms = 1s
    start.style.display = "none";
    askQuestions();
    quiz.style.display = "block";
    
}

function askQuestions(){
    
}