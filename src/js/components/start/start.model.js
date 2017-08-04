(function(){
    "use strict";

    function StartModel(){
        var model = {
            isLoading: null
        };
        return model;
    }

    StartModel.$inject = [];

    angular.module("disc").factory("StartModel", StartModel);



}());
