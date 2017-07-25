(function(){

    "use strict";

    angular.module("disc.components.question-card").factory("QuestionCardApi", QuestionCardApi);

    function QuestionCardApi(){
        var restApi = {
            getAllQuestions: getAllQuestions
        };

        function getAllQuestions(){
            return Ajax.get("https://api.myjson.com/bins/1amnaf");
        }

        return restApi;
    }


})();