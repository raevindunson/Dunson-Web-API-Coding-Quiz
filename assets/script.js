// Received help from Professor Gabriel Perry's repository and office hours

// Quiz questions and answers
var questionList = [
    {
        question: "What does HTML stand for?",
        options: ["Hypo Type Math List", "Hydro Time Main Line", "Hyper Text Markup Language", "Hyper Tempo Math Language"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Commonly used data types do NOT include___",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: "Alerts"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypo Type Math List", "Hydro Time Main Line", "Hyper Text Markup Language", "Hyper Tempo Math Language"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Commonly used data types do NOT include___",
        options: ["Strings","Booleans","Alerts","Numbers"],
        correct: "Alerts"
    },
]

// Starting the game
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function (start) {
    start.preventDefault();
    startQuiz();
});

var startPage = document.getElementById("start-page");
var quizContainer = document.getElementById("quiz-container");
var timerContainer = document.getElementById("timer-container");
var questionDisplay = document.getElementById("question-display");
var gameDisplay = document.getElementById("game-display");
var endGame = document.getElementById("end-game");

var questionCount;
var rightAnswers;

function startQuiz() {
    startPage.style.display = "none";
    timerContainer.style.display = "block";
    gameDisplay.style.display = "block";
    questionDisplay.style.display = "block";
    endGame.style.display = "block";
    questionCount = 0;
    rightAnswers = 0;
    displayQuiz();
};

function emptyQuiz() {
    gameDisplay.innerHTML = "";
}

var currentQuestion;
var amountQuestions = questionList.length;

function displayQuiz () {
    emptyQuiz();
    currentQuestion = questionList[questionCount];
    var position = questionCount + 1;
    questionDisplay.textContent = "Question:" + position + "/" + amountQuestions;
    var addQs = document.createElement("h2");
    addQs.textContent = currentQuestion.question;
    gameDisplay.appendChild(addQs)
    displayOptions();
}

function displayOptions() {
    for (let i=0; i < currentQuestion.options.length; i++) {
        var option = document.createElement("button");
        option.setAttribute("type","button");
        option.setAttribute("id","option-name")
        option.setAttribute("data-value", currentQuestion.options[i]);
        option.textContent = currentQuestion.options[i];
        gameDisplay.appendChild(option);
    }
}
