import { questionsObjects as obj, currentScore, totalScore } from "./data.js";

const { question, answerOptions: opts } = obj[0];

const questionElement = document.createElement("h3");

const optionsListElement = document.createElement("ul");

opts.forEach((o) => {
  const option = document.createElement("li");
  option.setAttribute("class", "option");
  option.innerHTML = o;
  optionsListElement.appendChild(option);
});

questionElement.innerHTML = question;

const scoreElement = document.createElement("h3");

scoreElement.setAttribute("id", "current-score");

scoreElement.innerHTML = `${currentScore} / ${totalScore}`;

export { questionElement, optionsListElement, scoreElement };
