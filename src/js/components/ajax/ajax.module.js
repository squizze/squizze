(function(){

    "use strict";
    var angular = require("angular");

    var Ajax = require("./ajax.model");
    Ajax.$inject = ["$http"];

    angular.module("ajax", []);
    angular.module("ajax").factory("Ajax", Ajax);

}());