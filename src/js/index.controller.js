(function(){
    "use strict";

    function IndexController(StartModel){
        var vc = this;
        vc.start = StartModel;
    }

    angular.module("disc").controller("IndexController", IndexController);
}());