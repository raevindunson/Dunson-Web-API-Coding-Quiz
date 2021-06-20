// Received help from Professor Gabriel Perry's repository and office hours

// Quiz questions and answers
var questionList = [
    {
        question: "What year did Javascript first debut?",
        options: ["1998", "1995", "1980", "2000"],
        correct: "1995"
    },
    {
        question: "How do you denote a string in Javascript?",
        options: ["Parentheses", "Exclamation Point", "Quotations", "Brackets"],
        correct: "Quotations"
    },
    {
        question: "How many values does a Boolean data type represent in Javascript?",
        options: ["Two", "Five", "Four", "One"],
        correct: "Two"
    }
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
    startTimer();
    displayQuiz();
};

var timerCount = document.getElementById("timer-count");

function startTimer() {
    var timeRemaining = 30;
    var timerStart = setInterval(() => {
        if (timeRemaining > 0){
            timerCount.textContent = timeRemaining;
        } else {
            clearInterval(timerStart);
            displayScore();
        }
    }, 1000);
}

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

var answerButton = document.getElementById("option-name");

// I had trouble getting this function to work, but it was supposed to ensure that the answer button clicked was labeled as answerChoice
answerButton.addEventListener("click", function(click){
    click.preventDefault;
    var answerChoice = answerButton.match("button");
    compareAnswer(answerChoice);
})

function compareAnswer(answerChoice) {
    if (answerChoice === currentQuestion.correct) {
        rightAnswers++;
        counter++;
        gameOver();
    } else {
        counter++;
        timeRemaining--;
        gameOver();
    }
}

function gameOver() {
    if (counter === amountQuestions) {
        displayScore();
    } else {
        displayQuiz();
    }
}

var score = document.getElementById("score");
var nextSteps = document.getElementById("next");
var restartButton = document.getElementById("restart");
var endButton = document.getElementById("quit");
var save = document.getElementById("save");
var initialsInput = document.getElementById("initials-input");

function displayScore() {
    gameDisplay.style.display = "none";
    questionDisplay.style.display = "none";
    endGame.style.display = "block";
    score.style.display = "block";
    save.style.display = "block";
    nextSteps.style.display = "block";
    restartButton.style.display = "block";
    endButton.style.display = "block";
    score.innerHTML = "";
    var scoreh2 = document.createElement(h2);
    scoreh2.textContent = rightAnswers + "out of" + amountQuestions;
    score.appendChild(scoreh2);
}

var highScoreDisplay = document.getElementById("high-scores");
var initialsSaved = document.getElementById("initials");

endButton.addEventListener('click', function(end) {
    end.preventDefault;
    displayHighScores();
})

function displayHighScores() {
    highScoreDisplay.style.display = "block";
    localStorage.setItem("initials", initialsInput);
    var initials = localStorage.getItem("initials");
    initialsSaved.textContent = initials;
}

restartButton.addEventListener('click', function(play) {
    play.preventDefault();
    startQuiz();
});