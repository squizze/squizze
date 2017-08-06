function AnswersRepository($cacheFactory, QuestionsApi, $q){

    var _answers = {};
    var _cachedAnswersFactory = $cacheFactory("answersCacheFactory");
    var _cachedAnswers;

    function init(){
        var deferred = $q.defer();

        if(typeof _cachedAnswers === "undefined"){
            var promise = QuestionsApi.getAllQuestions();
            promise.then(function(results){
                _answers.results = results.data.results;
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

    function getAllResults(){
        return _answers.results;
    }

    return {
        init: init,
        getAllAnswers: getAllAnswers,
        getAllGroups: getAllGroups,
        getAllResults: getAllResults
    };
}
module.exports = AnswersRepository;