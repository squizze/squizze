(function(){

    "use strict";

    angular.module("disc.components.question-card").factory("QuestionCardModel", QuestionCardModel);

    function QuestionCardModel(){
        var model = {
            init: init,
            isAnswered: null,
            text: null,
            option: null,
            id: null
        };

        function init(id, text, option){
            model.id = window.parseInt(id);
            model.text = text;
            model.option = option;
        }

        return model;
    }


})();
