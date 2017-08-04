(function(){

    "use strict";

    angular.module("disc").config(config);

    function config($urlRouterProvider){
        $urlRouterProvider.when("", "/");
    }

}());