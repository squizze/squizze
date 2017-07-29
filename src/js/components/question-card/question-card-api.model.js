(function(){

    "use strict";

    function QuestionCardApi(Ajax){
        var restApi = {
            getAllQuestions: getAllQuestions
        };

        function getAllQuestions(){
            return Ajax.get("https://api.myjson.com/bins/qv2rz");
        }

        return restApi;
    }

    angular.module("disc.components.question-card").factory("QuestionCardApi", QuestionCardApi);

    QuestionCardApi.$inject = ["Ajax"];


})();
