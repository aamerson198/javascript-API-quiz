// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");

var currentStage = 0;
var stages = [
{
    question: "What are JavaScript Data Types?",
    choices: ["Alphabet", "Boolean", "Java", "Brains"],
    answer: "Boolean"
},
{
    question: "Which company developed JavaScript?",
    choices: ["Netscape", "Apple", "Microsoft", "Sprit Halloween"],
    answer: "Netscape"
},
{
    question: "What are JavaScript Data Types?",
    choices: ["Alphabet", "Boolean", "Java", "Brains"],
    answer: "Boolean"
}
];

function renderQuestions(array) {
    // 1. Create an element.
    var newQuestion = document.createTextNode(array["question"]);
    question.append(newQuestion);
    for (i = 0; i < array.choices.length; i++) {
        // 1. Create an element.
        var button = document.createElement("button");
        // 2. Add content
        button.setAttribute("class", "btn btn-info");
        button.textContent = array.choices[i];
        button.setAttribute("data-value", array.choices[i]);
        // 3. Append to an existing element
        choices.append(button);
    }
}

start.addEventListener("click", function (){
    start.style.display = "none";
    var questionToDisplay = stages[currentStage];
    renderQuestions(questionToDisplay);
})

choices.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log(currentStage);
        var selectedAnswer = event.target.textContent;
        if (selectedAnswer == stages[currentStage]["answer"]){
            console.log(selectedAnswer)
            setTimeout(function () {
                currentStage++;
                var questionToDisplay = stages[currentStage];
                question.textContent = "";
                choices.innerHTML = '';
                renderQuestions(questionToDisplay);
            }, 1000);
        } else {
            
        }
        

    }
});