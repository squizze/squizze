(function(){

    "use strict";

    function ResultScreenController(AnswersModel){
        var vc = this;
        vc.answers = AnswersModel.getResults();
    }

    angular.module("disc.components.result-screen").controller("ResultScreenController", ResultScreenController);

}());