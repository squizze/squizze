(function(){

    "use strict";

    QuestionController.$inject = ["$state", "QuestionsRepository", "QuestionCardModel", "AnswersModel"];

    function QuestionController($state, QuestionsRepository, QuestionCardModel, AnswersModel){
        var vc = this;

        QuestionsRepository.init().then(function(){
            var _currentQuestionId = window.parseInt($state.params.questionId);
            var _currentQuestion = QuestionsRepository.getById(_currentQuestionId);
            var _option = _currentQuestion.minus !== undefined ? {"minus": _currentQuestion.minus } : {"plus": _currentQuestion.plus};
            QuestionCardModel.init(_currentQuestionId, _currentQuestion.text, _option);
            vc.vm = QuestionCardModel;

            vc.registerAnswer = function(value){

                var _answer = {
                    id: vc.vm.id,
                    text: vc.vm.text,
                    sign: vc.vm.option.minus !== undefined ? "minus" : "plus",
                    value: value
                };
                _answer.option = _option[_answer.sign];

                AnswersModel.addAnswer(_answer, value);
                $state.go("question", {"questionId": _currentQuestionId++});
            }
        });

    }

    angular.module("disc.components.question-card").controller("QuestionController", QuestionController);

})();