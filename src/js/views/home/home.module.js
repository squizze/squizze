(function(){

    "use strict";
    var HomeController = require("./home.controller");
    var HomeConfig = require("./home.state");

    HomeConfig.$inject = ["$stateProvider"];

    angular.module("disc.views.home", ["ui.router"]);
    angular.module("disc.views.home").config(HomeConfig);
    angular.module("disc.views.home").controller("HomeController", HomeController);

}());