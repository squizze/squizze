(function(){

    "use strict";

    var config = require("./disc.config");
    var DiscController = require("./disc.controller");
    var DiscRun = require("./templates/_templates.run");
    DiscController.$inject = ["StartModel"];

    angular.module("disc", ["disc.components.questions", "disc.views.home", "disc.components.start", "disc.templates"]);
    angular.module("disc").config(config);
    angular.module("disc").run(DiscRun);
    angular.module("disc").controller("DiscController", DiscController);

}());



