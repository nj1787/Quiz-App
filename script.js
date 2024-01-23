import {
  questionDisplay,
  optionsDisplay,
  scoreDisplay,
} from "./modules/declarations.js";

import {
  questionElement,
  optionsListElement,
  scoreElement,
} from "./modules/elements.js";

questionDisplay.append(questionElement);

optionsDisplay.append(optionsListElement);

scoreDisplay.append(scoreElement);
