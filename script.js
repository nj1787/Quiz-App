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

import {
  displayOptionsWhenAnswerCorrect,
  displayOptionsWhenAnswerInCorrect,
  displayQuestionAndOptions,
} from "./modules/utilities.js";

displayQuestionAndOptions();

const score = document.createElement("h3");
score.setAttribute("id", "current-score");
score.innerHTML = `${currentScore} / ${totalScore}`;
scoreDisplay.append(score);

displayNextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
  if (currentQuestionIndex === questionObjects.length) {
    questionDisplay.innerHTML = "";
    optionsDisplay.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.innerHTML = `Quiz Completed`;
    h3.style.marginLeft = "37%";
    questionDisplay.append(h3);
    displayNextBtn.setAttribute("disabled", "true");
  } else {
    currentQuestionIndex += 1;
    questionDisplay.innerHTML = "";
    optionsDisplay.innerHTML = "";
    displayQuestionAndOptions();
  }
}

export function checkAnswer(obj) {
  const selectedAnswer = obj.target.innerHTML;
  const currentQuestion = questionObjects.filter(
    (q) => q.questionId === currentQuestionIndex
  );

  const { answer } = currentQuestion[0];
  if (selectedAnswer === answer) {
    currentScore += 1;
    const ul = optionsDisplay.childNodes;
    displayOptionsWhenAnswerCorrect(ul, answer);
  } else {
    currentScore -= 1;
    const ul = optionsDisplay.childNodes;
    displayOptionsWhenAnswerInCorrect(ul, answer, selectedAnswer);
  }
  score.innerHTML = `${currentScore} / ${totalScore}`;
  return;
}
