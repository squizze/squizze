"use strict";

import AnswersConstant from "./answers.constant";
import AnswersModel from "./answers.model";
import AnswersRepository from "./answers.repository";

AnswersModel.$inject = ["AnswersRepository"];
AnswersRepository.$inject = ["$cacheFactory", "QuestionsApi", "$q"];

angular.module("disc.components.answers", ["disc.components.questions"]);
angular.module("disc.components.answers").constant("ANSWERS_CONSTANT", AnswersConstant);
angular.module("disc.components.answers").factory("AnswersModel", AnswersModel);
angular.module("disc.components.answers").factory("AnswersRepository", AnswersRepository);