(function(){

    "use strict";

    function config($stateProvider){
        var homeState = {
            templateUrl: "/js/views/home/home.template.html",
            controller: "HomeController",
            url: "/"
        };

        $stateProvider.state("home", homeState);
    }

    angular.module("disc.views.home").config(config);

    config.$inject = ["$stateProvider"];

}());