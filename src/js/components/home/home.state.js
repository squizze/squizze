(function(){

    "use strict";

    function config($stateProvider){
        var homeState = {
            templateUrl: "/js/components/home/home.template.html",
            controller: "HomeController",
            url: "/"
        };

        $stateProvider.state("home", homeState);
    }

    angular.module("disc.components.home").config(config);

    config.$inject = ["$stateProvider"];

}());