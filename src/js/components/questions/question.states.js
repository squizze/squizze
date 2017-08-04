(function(){

    "use strict";

    function config($stateProvider){
        var questionState = {
            templateUrl: "/js/components/questions/question.template.html",
            controller: "QuestionController",
            url: "/{questionId:[0-9]{1,2}}",
            controllerAs: "vc"
        };

        $stateProvider.state("question", questionState);
    }

    config.$inject = ["$stateProvider"];

    angular.module("disc.components.questions").config(config);

}());

