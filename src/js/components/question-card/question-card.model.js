(function(){

    "use strict";

    angular.module("disc.components.question-card").factory("QuestionCardModel", QuestionCardModel);

    function QuestionCardModel(){
        var model = {
            isAnswered: null,
            text: null
        };
        return model;
    }


})();
