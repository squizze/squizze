(function(){

    "use strict";

    config.$inject = ["$stateProvider"];

    function config($stateProvider){
        var questionState = {
            templateUrl: "/src/js/components/question-card/question-card.template.html",
            controller: "QuestionController",
            url: "/{questionId:[0-9]{1,2}}",
            controllerAs: "vc"
        };

        $stateProvider.state("question", questionState);
    }

    angular.module("disc.components.question-card").config(config);

})();

