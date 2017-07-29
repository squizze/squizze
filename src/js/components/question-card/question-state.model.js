(function(){

    "use strict";

    function QuestionStateModel(QuestionsRepository, $q, AnswersModel, $state){
        var model = {
            init: init,
            registerAnswer: registerAnswer,
            question: null
        };
        var _questionId;
        var _nextQuestionId;

        function init(questionId){
            var deferred = $q.defer();
            _questionId = questionId;

            QuestionsRepository.init().then(function(){
                model.question = QuestionsRepository.getById(_questionId);
                deferred.resolve();
            });

            return deferred.promise;
        }

        function registerAnswer(question, value){
            AnswersModel.addAnswer(question, value);
            _nextQuestionId = _questionId + 1;

            if(QuestionsRepository.getLastQuestionId() >= _nextQuestionId){
                _goToNextQuestion();
            }else {
                _endQuestions();
            }

        }

        function _goToNextQuestion(){
            $state.go("question", {"questionId": _nextQuestionId});
        }

        function _endQuestions(){
            AnswersModel.calculates();
            $state.go("resultScreen");
        }

        return model;
    }

    angular.module("disc.components.question-card").factory("QuestionStateModel", QuestionStateModel);

    QuestionStateModel.$inject = ["QuestionsRepository", "$q", "AnswersModel", "$state"];

})();