(function(){

    "use strict";

    angular.module("disc.components.answers").factory("AnswersModel", AnswersModel);

    AnswersModel.$inject = ["ANSWERS_CONSTANT"];

    function AnswersModel(ANSWERS_CONSTANT){
        var model = {
            getAnswerById: getAnswerById,
            addAnswer: addAnswer,
            getResults: getResults,
            calculates: calculates,
            options : {}
        };

        var _results = [];

        function addAnswer(answer, value){

            if(!model.options.hasOwnProperty(answer.option)){
                model.options[answer.option] = {};
            } else {
                if(model.options[answer.option].hasOwnProperty(answer.id)){
                    model.options[answer.option][answer.id] = {};
                }
            }

            if(answer.sign === "plus"){
                model.options[answer.option][answer.id] = Math.abs(value);
            }else if(answer.sign === "minus"){
                model.options[answer.option][answer.id] = -Math.abs(value);
            }

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
            _resetResults();
            var _temp = {};

            for(var option in model.options){
                _temp[option] = [];

                for(var id in model.options[option]){
                    _temp[option].push(model.options[option][id]);
                }
            }

            for(var option in _temp){
                var result = {
                    result:_temp[option].reduce(function(a,b){
                        return a + b;
                    }),
                    option: option
                };

                if(ANSWERS_CONSTANT[result.option] !== undefined){
                    angular.extend(result, ANSWERS_CONSTANT[result.option]);
                }

                _results.push(result);

            }

        }

        return model;
    }

})();