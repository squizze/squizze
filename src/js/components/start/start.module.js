(function(){

    "use strict";

    var StartModel = require("./start.model.js");
    var StartRun = require("./start.run.js");

    StartModel.$inject = [];
    StartRun.$inject = ["AnswersRepository", "QuestionsRepository", "$q", "StartModel"];

    angular.module("disc.components.start", ["disc.components.questions","disc.components.answers"]);
    angular.module("disc").factory("StartModel", StartModel);
    angular.module("disc.components.start").run(StartRun);

}());