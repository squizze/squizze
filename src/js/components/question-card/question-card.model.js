(function(){

    "use strict";

    angular.module("disc.components.question-card").factory("QuestionCardAdapter", QuestionCardAdapter);

    function QuestionCardAdapter(){
        var adapter = {
            getObjectFromData: getObjectFromData
        };

        return adapter;

        function getObjectFromData(data){

            var objectFromData = {
                text: data.text,
                id: window.parseInt(data.id),
                sign: data.plus !== undefined ? "plus" : "minus"
            };

            objectFromData.option = data[objectFromData.sign];

            return objectFromData;
        }

    }


})();
