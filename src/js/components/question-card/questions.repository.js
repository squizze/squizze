(function(){

    "use strict";

    angular.module("disc.components.question-card").factory("QuestionsRepository", QuestionsRepository);

    QuestionsRepository.$inject = ["QuestionCardApi", "$q", "$cacheFactory"];

    function QuestionsRepository(QuestionCardApi, $q, $cacheFactory){

        var model = {
            init: init,
            getById: getById
        };

        var _cachedQuestionsFactory = $cacheFactory("questionsCacheFactory");
        var _cachedQuestions;
        var _questionsById = {};
        var questions;

        function init(){
            var deferred = $q.defer();

            if(_cachedQuestions !== undefined){
                deferred.resolve(_cachedQuestions);
            }else {
                var promiseToGetQuestions = QuestionCardApi.getAllQuestions();

                promiseToGetQuestions.then(function(result){
                    questions = result.data.questions;
                    _cachedQuestions = _cachedQuestionsFactory.get("questionsCacheFactory");

                    questions.forEach(function(question){
                        _questionsById[question.id] = question;
                    });


                    deferred.resolve(questions);
                });
            }
            return deferred.promise;

        }

        function getById(id){
            return _questionsById[id];
        }

        return model;

    }

})();