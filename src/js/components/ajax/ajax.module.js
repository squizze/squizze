(function(){

    "use strict";

    var Ajax = require("./ajax.model.js");
    Ajax.$inject = ["$http"];

    angular.module("ajax", []);
    angular.module("ajax").factory("Ajax", Ajax);

}());