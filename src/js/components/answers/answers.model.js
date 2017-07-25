(function(){

    "use strict";

    angular.module("disc.components.answers").factory("AnswersModel", AnswersModel);

    function AnswersModel(){
        var model = {
            getAllAnswers: getAllAnswers,
            getAnswerById: getAnswerById,
            addAnswer: addAnswer,
            answers : {}
        };

        function addAnswer(answer, value){
            model.answers[answer.id] = {};
            model.answers[answer.id].value = value;
            model.answers[answer.id].option = answer.option;
            model.answers[answer.id].text = answer.text;
            model.answers[answer.id].sign = answer.sign;
        }

        function getAnswerById(answerId){
            return model.answers[answerId];
        }

        function getAllAnswers(){
            return model.answers;
        }

        return model;
    }

})();