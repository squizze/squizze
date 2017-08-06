(function(){

    "use strict";

    var ResultsStateController = require("./results.controller");
    var ResultsConfig = require("./results.state");

    ResultsConfig.$inject = ["$stateProvider"];

    angular.module("disc.views.results", ["ui.router"]);
    angular.module("disc.views.results").controller("ResultsStateController", ResultsStateController);
    angular.module("disc.views.results").config(ResultsConfig);

}());