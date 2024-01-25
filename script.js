export let currentQuestionIndex = 1;

export let currentScore = 0;

export const totalScore = 5;

import { questionObjects } from "./modules/data.js";

import {
  questionDisplay,
  optionsDisplay,
  scoreDisplay,
  displayNextBtn,
} from "./modules/elements.js";

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

export function checkAnswer(obj) {
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
