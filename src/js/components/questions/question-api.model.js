(function(){

    "use strict";

    function QuestionsApi(Ajax){
        function getAllQuestions(){
            return Ajax.get("https://api.myjson.com/bins/82295");
        }

        return {
            getAllQuestions: getAllQuestions
        };
    }

    angular.module("disc.components.questions").factory("QuestionsApi", QuestionsApi);

    QuestionsApi.$inject = ["Ajax"];


}());
