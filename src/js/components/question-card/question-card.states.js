(function(){

    "use strict";

    function config($stateProvider){
        var questionState = {
            templateUrl: "/js/components/question-card/question-card.template.html",
            controller: "QuestionController",
            url: "/{questionId:[0-9]{1,2}}",
            controllerAs: "vc"
        };

        $stateProvider.state("question", questionState);
    }

    config.$inject = ["$stateProvider"];

    angular.module("disc.components.question-card").config(config);

})();

