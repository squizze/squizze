(function(){

    "use strict";

    var QuestionController = require("./question.controller");
    var QuestionsConfig = require("./question.states");
    var QuestionAdapter = require("./question-adapter.model");
    var QuestionsApi = require("./question-api.model");
    var QuestionStateModel = require("./question-state.model");
    var QuestionsRepository = require("./questions.repository");

    QuestionController.$inject = ["QuestionStateModel", "$state"];
    QuestionsConfig.$inject = ["$stateProvider"];
    QuestionsApi.$inject = ["Ajax"];
    QuestionStateModel.$inject = ["QuestionsRepository", "$q", "AnswersModel", "$state"];
    QuestionsRepository.$inject = ["QuestionsApi", "$q", "$cacheFactory", "QuestionAdapter"];

    angular.module("disc.components.questions", ["ui.router", "ajax", "disc.components.answers", "disc.views.results"]);
    angular.module("disc.components.questions").controller("QuestionController", QuestionController);
    angular.module("disc.components.questions").config(QuestionsConfig);
    angular.module("disc.components.questions").factory("QuestionAdapter", QuestionAdapter);
    angular.module("disc.components.questions").factory("QuestionsApi", QuestionsApi);
    angular.module("disc.components.questions").factory("QuestionStateModel", QuestionStateModel);
    angular.module("disc.components.questions").factory("QuestionsRepository", QuestionsRepository);

}());