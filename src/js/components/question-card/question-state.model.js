(function(){

    "use strict";

    angular.module("disc.components.question-card").factory("QuestionStateModel", QuestionStateModel);

    QuestionStateModel.$inject = ["QuestionsRepository", "$q", "AnswersModel", "$state"];

    function QuestionStateModel(QuestionsRepository, $q, AnswersModel, $state){
        var model = {
            init: init,
            registerAnswer: registerAnswer,
            isLoading: false,
            question: null
        };
        var _questionId;
        var _nextQuestionId;

        function init(questionId){
            var deferred = $q.defer();
            _questionId = questionId;
            model.isLoading = true;

            QuestionsRepository.init().then(function(){
                model.question = QuestionsRepository.getById(_questionId);
                model.isLoading = false;
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
        }

        return model;
    }

})();