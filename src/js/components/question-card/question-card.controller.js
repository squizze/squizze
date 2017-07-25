(function(){

    "use strict";

    QuestionController.$inject = ["$state", "QuestionCardApi"];

    function QuestionController($state, QuestionCardApi){
        var vc = this;
        var samplePromise = QuestionCardApi.getAllQuestions();

        samplePromise.then(function(results){
            vc.question = results.data.questions.filter(function(question){
                return question.id === $state.params.questionId;
            })[0];
        });
    }

    angular.module("disc.components.question-card").controller("QuestionController", QuestionController);

})();