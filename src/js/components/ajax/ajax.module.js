(function(){

    "use strict";

    var Ajax = require("./ajax.model");
    Ajax.$inject = ["$http"];

    angular.module("ajax", []);
    angular.module("ajax").factory("Ajax", Ajax);

}());