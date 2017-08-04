(function(){

    "use strict";

    function config($urlRouterProvider){
        $urlRouterProvider.when("", "/");
    }

    angular.module("disc").config(config);

}());