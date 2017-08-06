(function(){

    "use strict";

    var config = require("./disc.config.js");
    var DiscController = require("./disc.controller.js");
    DiscController.$inject = ["StartModel"];

    angular.module("disc", ["disc.components.questions", "disc.views.home", "disc.components.start"]);
    angular.module("disc").config(config);
    angular.module("disc").controller("DiscController", DiscController);

}());



