(function(){
    "use strict";

    function Ajax($http){
        function get(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: "GET",
                url: url,
                params: params
            });
            return promise;
        }
        function post(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: "POST",
                url: url,
                data: params
            });
            return promise;
        }

        return {
            post: post,
            get: get
        };

    }

    Ajax.$inject = ["$http"];
    angular.module("ajax").factory("Ajax", Ajax);

})();