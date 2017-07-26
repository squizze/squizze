(function(){

    "use strict";

    angular.module("disc.components.result-screen").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider){

        var resultScreenState = {
            template: "<div>acabou</div>",
            controllerAs: "vc",
            controller: function(){},
            bindToController: true,
            url: "/result"
        };

        $stateProvider.state("resultScreen", resultScreenState);

    }

})();