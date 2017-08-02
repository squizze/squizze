(function(){

    "use strict";

    function AnswersRepository($cacheFactory, QuestionCardApi, $q){

        var _answers = {};
        var _cachedAnswersFactory = $cacheFactory("answersCacheFactory");
        var _cachedAnswers;

        function init(){
            var deferred = $q.defer();

            if(typeof _cachedAnswers === "undefined"){
                var promise = QuestionCardApi.getAllQuestions();
                promise.then(function(results){
                    _answers.options = results.data.options;
                    _answers.groups = results.data.groups;
                    _cachedAnswersFactory.put("answersCacheFactory", _answers);
                    _cachedAnswers = _cachedAnswersFactory.get("answersCacheFactory");
                    deferred.resolve(_answers);
                });
            }else {
                deferred.resolve(_cachedAnswers);
            }
            return deferred.promise;
        }

        function getAllAnswers(){
            return _answers;
        }

        function getAllGroups(){
            return _answers.groups;
        }

        function getAllOptions(){
            return _answers.options;
        }

        return {
            init: init,
            getAllAnswers: getAllAnswers,
            getAllGroups: getAllGroups,
            getAllOptions: getAllOptions
        };
    }

    AnswersRepository.$inject = ["$cacheFactory", "QuestionCardApi", "$q"];
    angular.module("disc.components.answers").factory("AnswersRepository", AnswersRepository);

})();