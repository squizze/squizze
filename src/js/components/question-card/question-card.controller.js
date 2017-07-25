(function(){

    "use strict";

    QuestionController.$inject = ["$state", "QuestionsRepository", "QuestionCardModel"];

    function QuestionController($state, QuestionsRepository, QuestionCardModel){
        var vc = this;

        QuestionsRepository.init().then(function(){
            var _currentQuestion = QuestionsRepository.getById($state.params.questionId);
            var _option = _currentQuestion.minus !== undefined ? {"minus": _currentQuestion.minus } : {"plus": _currentQuestion.plus};
            QuestionCardModel.init(_currentQuestion.text, _option);
            vc.vm = QuestionCardModel;
        });
    }

    angular.module("disc.components.question-card").controller("QuestionController", QuestionController);

})();