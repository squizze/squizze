(function(){

    "use strict";

    function AnswersModel(AnswersRepository){
        var model = {
            getAnswerById: getAnswerById,
            addAnswer: addAnswer,
            getResults: getResults,
            calculates: calculates
        };

        var _answers = {};
        var _results = {};

        function addAnswer(question, value){
            _answers[question.id] = value;
            _results.groups = {};
            _results.options = {};

            AnswersRepository.init().then(function(){
                var groups = AnswersRepository.getAllGroups();

                for(var group in groups){
                    _results.groups[group] = groups[group].map(function(item){
                        return _answers[item] !== undefined ? _answers[item] : 0;
                    }).reduce(function(total, num){
                        return total + num;
                    });
                }
                
            });
        }

        function getAnswerById(answerId){
            return model.options[answerId];
        }

        function getResults(){
            return _results;
        }

        function _resetResults(){
            _results = [];
        }

        function calculates(){
            AnswersRepository.init().then(function(){
                var options = AnswersRepository.getAllOptions();

                for(var option in options){
                    var rule = options[option].rule;
                    rule = rule.split(" ").map(function(item){
                        return item.match(/[^()*+-]/) ? "_results.groups."+item : item;
                    }).join(" ");
                    _results.options[option] = eval(rule);
                }
            });
            console.log(_results);
        }

        return model;
    }

    angular.module("disc.components.answers").factory("AnswersModel", AnswersModel);

    AnswersModel.$inject = ["AnswersRepository"];

})();