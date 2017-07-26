(function(){

    "use strict";

    angular.module("disc.components.result-screen").controller("ResultScreenController", ResultScreenController);

    function ResultScreenController(AnswersModel){
        var vc = this;
        vc.answers = AnswersModel.getResults();
    }

})();