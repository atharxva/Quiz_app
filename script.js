const questions = [
    {
        questions: "Which is the largest animal on the planet",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}

        ]
    },
    {
        question: "Who is the prime minister of india?", answers: [
            { text: "Narendra Modi", correct: true}, 
            { text: "Rahul Gandhi", correct: false},
            { text: "Draupadi Murmu",correct: false},
            { text: "Manmohan Singh", correct: false},
        ]
    },
    {
        question: "National Bird of india", answers: [
            { text: "Parrot", correct: false}, 
            { text: "Hornbill", correct: false},
            { text: "Peacock",correct: true},
            { text: "Seagull", correct: false},
        ]
    },
    {
        question: "What is the capital of India", answers: [
            { text: "Mumbai", correct: false}, 
            { text: "Delhi", correct: true},
            { text: "Goa",correct: false},
            { text: "Chennai", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerbutton");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion =  questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +"."+currentQuestion.question;
}