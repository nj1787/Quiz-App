let currentQuestionIndex = 1;

let currentScore = 0;

const totalScore = 5;

const questionObjects = [
  {
    questionId: 1,
    question: "Which of the following is capital of India ?",
    options: ["New Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "New Delhi",
  },
  {
    questionId: 2,
    question: "Who is the Prime Minister Of India ?",
    options: ["Rajnath Singh", "Amit Shah", "S. Jaishankar", "Narendra Modi"],
    answer: "Narendra Modi",
  },
];

const questionDisplay = document.getElementById("question-display");

const optionsDisplay = document.getElementById("options-display");

const displayNextBtn = document.getElementById("next");

const scoreDisplay = document.getElementById("score-display");

const currentQuestion = questionObjects.filter(
  (q) => q.questionId === currentQuestionIndex
);

const { question, options } = currentQuestion[0];

const h3 = document.createElement("h3");
h3.innerHTML = question;
questionDisplay.append(h3);
const ul = document.createElement("ul");
options.forEach((o) => {
  const li = document.createElement("li");
  li.setAttribute("class", "option");
  li.addEventListener("click", checkAnswer);
  li.innerHTML = o;
  ul.append(li);
});
optionsDisplay.append(ul);

const score = document.createElement("h3");
score.setAttribute("id", "current-score");
score.innerHTML = `${currentScore} / ${totalScore}`;
scoreDisplay.append(score);

displayNextBtn.addEventListener("click", nextQuestion);

// Functionalities

function nextQuestion() {
  currentQuestionIndex += 1;
  questionDisplay.innerHTML = "";
  optionsDisplay.innerHTML = "";
  const currentQuestion = questionObjects.filter(
    (q) => q.questionId === currentQuestionIndex
  );

  const { question, options } = currentQuestion[0];

  const h3 = document.createElement("h3");
  h3.innerHTML = question;
  questionDisplay.append(h3);
  const ul = document.createElement("ul");
  options.forEach((o) => {
    const li = document.createElement("li");
    li.setAttribute("class", "option");
    li.addEventListener("click", checkAnswer);
    li.innerHTML = o;
    ul.append(li);
  });
  optionsDisplay.append(ul);
}

function checkAnswer(obj) {
  const selectedAnswer = obj.target.innerHTML;
  const currentQuestion = questionObjects.filter(
    (q) => q.questionId === currentQuestionIndex
  );

  const { answer } = currentQuestion[0];
  if (selectedAnswer === answer) {
    currentScore += 1;
    optionsDisplay.innerHTML = "";
  } else {
    currentScore -= 1;
    optionsDisplay.innerHTML = "";
  }
  score.innerHTML = `${currentScore} / ${totalScore}`;
}
