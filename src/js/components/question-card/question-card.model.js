(function(){

    "use strict";

    angular.module("disc.components.question-card").factory("QuestionCardModel", QuestionCardModel);

    function QuestionCardModel(){
        var model = {
            init: init,
            isAnswered: null,
            text: null,
            option: null
        };

        function init(text, option){
            model.text = text;
            model.option = option;
        }

        return model;
    }


})();
