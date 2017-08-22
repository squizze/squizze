import ResultsStateController from "./results.controller";
import ResultsConfig from "./results.state";

ResultsConfig.$inject = ["$stateProvider"];

angular.module("disc.views.results", ["ui.router"]);
angular.module("disc.views.results").controller("ResultsStateController", ResultsStateController);
angular.module("disc.views.results").config(ResultsConfig);
