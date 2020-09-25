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
}
// {
//     name: "Meats",
//     options: ["Pepperoni", "Ham", "Sausage", "Beef", "Chicken"],
// },
// {
//     name: "Veggies",
//     options: ["Green Peppers", "Onions", "Tomatoes", "Banana Peppers"],
// },
];

function renderQuestions(array) {
    for (currentStage = 0; currentStage < array.length; currentStage++) {
        console.log(currentStage)
        // 1. Create an element.
        var newQuestion = document.createTextNode(stages[currentStage]["question"]);
        question.append(newQuestion);
        // 2. Add content
        stages[currentStage]["choices"].forEach(element => renderChoice(choices, element));
        // 3. Append to an existing element
    }
}

function renderChoice(parent, text){
    choice = document.createElement("button")
    choice.textContent = text
    parent.append(choice);
}

start.addEventListener("click", function (){
    start.style.display = "none";
    renderQuestions(stages);
})

choices.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log(currentStage);
        var selectedAnswer = event.target.textContent;
        if (selectedAnswer == stages[currentStage-1]["answer"]){
            console.log(selectedAnswer)
        } else {
            
        }
        

        selection.textContent = "";
        var crustToDisplay = document.createElement("h3");
        crustToDisplay.textContent = selectedCrust;
        selection.append(crustToDisplay);

        setTimeout(function () {
            currentStage++;
            var optionsToDisplay = stages[currentStage].options;
            renderOptions(optionsToDisplay);
        }, 1000);
    }
});