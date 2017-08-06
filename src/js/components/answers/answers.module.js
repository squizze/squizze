(function(){

    "use strict";

    var AnswersConstant = require("./answers.constant.js");
    var AnswersModel = require("./answers.model.js");
    var AnswersRepository = require("./answers.repository.js");

    AnswersModel.$inject = ["AnswersRepository"];
    AnswersRepository.$inject = ["$cacheFactory", "QuestionsApi", "$q"];

    angular.module("disc.components.answers", ["disc.components.questions"]);
    angular.module("disc.components.answers").constant("ANSWERS_CONSTANT", AnswersConstant);
    angular.module("disc.components.answers").factory("AnswersModel", AnswersModel);
    angular.module("disc.components.answers").factory("AnswersRepository", AnswersRepository);

}());