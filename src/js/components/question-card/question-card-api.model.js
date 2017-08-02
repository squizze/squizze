(function(){

    "use strict";

    function QuestionCardApi(Ajax){
        function getAllQuestions(){
            return Ajax.get("https://api.myjson.com/bins/aihth");
        }

        return {
            getAllQuestions: getAllQuestions
        };
    }

    angular.module("disc.components.question-card").factory("QuestionCardApi", QuestionCardApi);

    QuestionCardApi.$inject = ["Ajax"];


})();
