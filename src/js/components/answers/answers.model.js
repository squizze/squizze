(function(){

    "use strict";

    function AnswersModel(AnswersRepository){

        var _answers = {};
        var _results = {};
        var _groups = AnswersRepository.getAllGroups();
        var _options = AnswersRepository.getAllResults();
        var _groupsTotal = {};

        function _calculateGroupsValues(){
            for(var group in _groups){
                if(_groups.hasOwnProperty(group)){
                    _groupsTotal[group] = _groups[group].map(function(item){
                        return typeof _answers[item] !== "undefined" ? _answers[item] : 0;
                    }).reduce(function(total, num){
                        return total + num;
                    });
                }
            }
        }

        function _calculateResults(){
            for(var option in _options){
                if(_options.hasOwnProperty(option)){
                    var rule = _options[option].rule;
                    rule = rule.split(" ").map(function(item){
                        return item.match(/[^()*+-]/) ? "_groupsTotal."+item : item;
                    }).join(" ");
                    _results[option] = {};
                    _results[option].total = eval(rule);
                }
            }
        }

        function addAnswer(question, value){
            _answers[question.id] = value;
            _calculateGroupsValues();
            _calculateResults();
        }

        function getResults(){
            return _results;
        }

        var model = {
            addAnswer: addAnswer,
            getResults: getResults
        };

        return model;
    }

    angular.module("disc.components.answers").factory("AnswersModel", AnswersModel);

    AnswersModel.$inject = ["AnswersRepository"];

}());