// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");

var currentStage = 0;
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
];

// function startTimer

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
    }
}

start.addEventListener("click", function () {
    start.style.display = "none";
    var questionToDisplay = stages[currentStage];
    renderQuestions(questionToDisplay);
});

choices.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log(currentStage);
        var selectedAnswer = event.target.textContent;
        if (currentStage < stages.length) {
            setTimeout(function () {
                currentStage++;
                var questionToDisplay = stages[currentStage];
                question.textContent = "";
                choices.innerHTML = "";
                renderQuestions(questionToDisplay);
            }, 1000);
        }
    }
});
