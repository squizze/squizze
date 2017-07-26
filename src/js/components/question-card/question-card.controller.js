(function(){

    "use strict";

    QuestionController.$inject = ["QuestionStateModel", "$state"];

    function QuestionController(QuestionStateModel, $state){
        var vc = this;
        var _questionId = window.parseInt($state.params.questionId);

        QuestionStateModel.init(_questionId).then(function(){
            vc.vm = QuestionStateModel;
        });
    }

    angular.module("disc.components.question-card").controller("QuestionController", QuestionController);

})();