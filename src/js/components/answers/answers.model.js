(function(){

    "use strict";

    angular.module("disc.components.answers").factory("AnswersModel", AnswersModel);

    function AnswersModel(){
        var model = {
            getAnswerById: getAnswerById,
            addAnswer: addAnswer,
            calculates: calculates,
            options : {}
        };

        var _results = {};

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

        function calculates(){

            var _temp = {};

            for(var option in model.options){
                _temp[option] = [];

                for(var id in model.options[option]){
                    _temp[option].push(model.options[option][id]);
                }
            }

            for(var result in _temp){
                _results[result] = _temp[result].reduce(function(a,b){
                    return a + b;
                })
            }

            console.log(_results);
        }

        return model;
    }

})();