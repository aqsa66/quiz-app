const quizData = [
    {
        question: "What is the largest planet in our Solar System?",
        answers: [ "Earth","Jupiter","Saturn","Mars"],    
        correct: 1
    },
    {
        question: "What is 4^2?",
        answers: ["16", "4", "8", "10"],
        correct: 0
    },
    {
        question: "What is the capital of Spain?",
        answers: ["Madrid", "Rome", "Athens", "Paris"],
        correct: 3
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: ["Charles Dickens", "Mark Twain", "William Shakespeare", "J.K. Rowling"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const answerButtons = document.querySelectorAll(".answer");
    
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });

    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").innerText = `Score: ${score}`;
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");

    if (selectedIndex === currentQuestion.correct) {
        score++;
        answerButtons[selectedIndex].classList.add("correct");
    } else {
        answerButtons[selectedIndex].classList.add("incorrect");
        answerButtons[currentQuestion.correct].classList.add("correct");
    }

    answerButtons.forEach(button => button.disabled = true);
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `
            <h2>You scored ${score} out of ${quizData.length}</h2>
            <button onclick="restartQuiz()">Restart Quiz</button>
        `;
    }
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
}

loadQuestion();
