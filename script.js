const questions = [
    {
        question: "1.What does AdTech stand for?",
        answers: [
            { text: "Advanced Technology", correct: false },
            { text: "Advertising Technology", correct: true },
            { text: "Ad Testing Hub", correct: false },
            { text: "Adaptive Tech", correct: false }
        ]
    },
    {
        question: "2.What do publishers sell to advertisers?",
        answers: [
            { text: "Marketing Data", correct: false },
            { text: "Online Courses", correct: false },
            { text: "Ad Space (Inventory)", correct: true },
            { text: "Software Licensess", correct: false }
        ]
    },
    {
        question: "3.What technology is used to store user data for ad targeting?",
        answers: [
            { text: "Cookies", correct: true },
            { text: "Firewalls", correct: false },
            { text: "VPNs", correct: false },
            { text: "Wi-Fi Networks", correct: false }
        ]
    },
    {
        question: "4.Which of the following is a common AdTech platform for real-time bidding (RTB)?",
        answers: [
            { text: "Google Docs", correct: false },
            { text: "Amazon Web Services", correct: false },
            { text: "Demand-Side Platform (DSP)", correct: true },
            { text: " Photoshop", correct: false }
        ]
    },
    {
        question: "5.What does AdTech primarily focus on in digital marketing",
        answers: [
            { text: "Designing website layouts", correct: false },
            { text: "Managing customer databases", correct: false },
            { text: "Buying, selling, and delivering ads", correct: true },
            { text: "Developing social media content", correct: false }
        ]
    },
    {
        question: "6.Which of the following is NOT a key component in programmatic advertising?",
        answers: [
            { text: "Data Management Platform (DMP)", correct: false },
            { text: "Demand-Side Platform (DSP)", correct: false },
            { text: " Supply-Side Platform (SSP)", correct: false },
            { text: " Virtual Reality Headset", correct: true }
        ]
    },
    {
        question: "7.What does CPM stand for in digital advertising?",
        answers: [
            { text: "Clicks Per Minute", correct: false },
            { text: "Cost Per Thousand Impressions", correct: true },
            { text: "Cost Per Million", correct: false },
            { text: "Customer Profile Management", correct: false }
        ]
    },
    {
        question: "8.Which AdTech method is best for targeting specific user behaviors?",
        answers: [
            { text: "Behavioral Targeting", correct: true },
            { text: "Influencer Marketing", correct: false },
            { text: "Geotargeting", correct: false },
            { text: "Contextual Advertising", correct: false }
        ]
    }



];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
}

startQuiz();
