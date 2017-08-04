(function(){

    "use strict";

    function config($stateProvider){

        var resultScreenState = {
            templateUrl: "/js/views/results/results.template.html",
            controllerAs: "vc",
            controller: "ResultScreenController",
            bindToController: true,
            url: "/results"
        };

        $stateProvider.state("resultScreen", resultScreenState);

    }

    angular.module("disc.views.results").config(config);

    config.$inject = ["$stateProvider"];

}());