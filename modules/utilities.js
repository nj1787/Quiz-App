import { currentQuestionIndex, checkAnswer } from "../script.js";
import { questionDisplay, optionsDisplay } from "./elements.js";
import { questionObjects } from "./data.js";

export function displayQuestionAndOptions() {
  const currentQuestion = questionObjects.filter(
    (q) => q.questionId === currentQuestionIndex
  );

  const { question, options } = currentQuestion[0];

  const shuffledOptions = shuffleOptions(options);

  const h3 = document.createElement("h3");
  h3.innerHTML = question;
  questionDisplay.append(h3);
  const ul = document.createElement("ul");
  shuffledOptions.forEach((o) => {
    const li = document.createElement("button");
    li.setAttribute("class", "option");
    li.addEventListener("click", checkAnswer);
    li.innerHTML = o;
    ul.append(li);
  });
  optionsDisplay.append(ul);
}

export function shuffleOptions(options) {
  let swapIndex1 = Math.floor(Math.random() * (options.length - 0) + 0);
  let swapIndex2 = Math.floor(Math.random() * (options.length - 0) + 0);
  [options[swapIndex1], options[swapIndex2]] = [
    options[swapIndex2],
    options[swapIndex1],
  ];
  return options;
}

export function displayOptionsWhenAnswerCorrect(options, answer) {
  options.forEach((item) => {
    const li = item.childNodes;
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML === answer) {
        li[i].style.color = "green";
        li[i].setAttribute("disabled", "true");
        continue;
      } else {
        li[i].setAttribute("disabled", "true");
      }
    }
  });
}

export function displayOptionsWhenAnswerInCorrect(
  options,
  answer,
  selectedAnswer
) {
  options.forEach((item) => {
    const li = item.childNodes;
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML === selectedAnswer) {
        li[i].style.color = "red";
        li[i].setAttribute("disabled", "true");
        continue;
      } else if (li[i].innerHTML === answer) {
        li[i].style.color = "green";
        li[i].setAttribute("disabled", "true");
        continue;
      } else {
        li[i].setAttribute("disabled", "true");
      }
    }
  });
}
