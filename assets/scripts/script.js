// Where the gobal Var's live
var container = document.getElementById("container");
var begin = document.getElementById("begin");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var timer = document.getElementById("timer")
var submitForm = document.getElementById("submitScore")
var currentStage = 0;
var timeLeft = 75;
var gameOver = false;
var stages = [
    {
        question: "Which is a JavaScript Data Types?",
        choices: ["Alphabet", "Boolean", "Java", "Brains"],
        answer: "Boolean",
    },
    {
        question: "Which company developed JavaScript?",
        choices: ["Netscape", "Apple", "Microsoft", "Spirit Halloween"],
        answer: "Netscape",
    },
    {
        question: "Which is a type of Pop up boxes available in JavaScript?",
        choices: ["Confirm", "Start", "Yes", "Spooky"],
        answer: "Confirm",
    },
    {
        question: "Which tool used during development and debugging for printing content to the debugger?",
        choices: ["Confirm", "Sandy Claws", "For loops", "Console.log"],
        answer: "Console.log",
    },
    {
        question: "What is used to close an If/Else statement?",
        choices: ["Jack Skellington", "Quotes", "Curly Brackets", "Square Brackets"],
        answer: "Curly Brackets",
    },
    {
        question: "What can Arrays in Javascript store?",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All Of The Above"],
        answer: "All Of The Above",
    },
];

function startTimer(){
    var timer = setInterval(function(){
        if(gameOver != true){
            document.getElementById("timer").innerHTML = "Time Remaining: " + timeLeft;
            timeLeft -= 1;
        } else {
            clearInterval(timer);  
        }
    }, 1000);
}

function  renderSubmitScore(){
    var h1 = document.createElement("h4");
    h1.textContent = "Your Score is: " + timeLeft ;
    submitForm.append(h1);
    var br = document.createElement("br");
    var label = document.createElement("label");
    label.setAttribute("for", "initials");
    label.textContent = "Enter Your Initials";
    submitForm.append(label);
    submitForm.append(br);
    var br = document.createElement("br");
    var initials = document.createElement("input");
    initials.setAttribute("type", "text");
    initials.setAttribute("id", "initials");
    initials.setAttribute("name", "initials");
    submitForm.append(initials);
    submitForm.append(br);
    var submit = document.createElement("input");
    submit.setAttribute("class", "btn btn-info");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submitForm.append(submit);
    timer.style.display = "none";
}

function renderQuestions(array) {
    if(array != undefined){
        var newQuestion = document.createTextNode(array["question"]);
        question.append(newQuestion);
        for (i = 0; i < array.choices.length; i++) {
            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-info");
            button.textContent = array.choices[i];
            button.setAttribute("data-value", array.choices[i]);
            choices.append(button);
        }
    } else {
        gameOver = true;
        renderSubmitScore()
        // window.location.href = "highscore.html"
    }
}



// Where the Event Listeners make their home

begin.addEventListener("click", function () {
    startTimer();
    begin.style.display = "none";
    var questionToDisplay = stages[currentStage];
    renderQuestions(questionToDisplay);
});

choices.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        var selectedAnswer = event.target.textContent;
        if(selectedAnswer != stages[currentStage].answer){
            timeLeft -= 10;
        }
        setTimeout(function () {
            currentStage++;
            var questionToDisplay = stages[currentStage];
            question.textContent = "";
            choices.innerHTML = "";
            renderQuestions(questionToDisplay);
        }, 100);
    }
});
