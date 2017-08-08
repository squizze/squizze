(function(){

    "use strict";

    var config = require("./disc.config");
    var DiscController = require("./disc.controller");
    DiscController.$inject = ["StartModel"];

    angular.module("disc", ["disc.components.questions", "disc.views.home", "disc.components.start", "disc.templates"]);
    angular.module("disc").config(config);
    angular.module("disc").controller("DiscController", DiscController);

}());



