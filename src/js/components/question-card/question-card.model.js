(function(){

    "use strict";

    function QuestionCardAdapter(){
        var adapter = {
            getObjectFromData: getObjectFromData
        };

        return adapter;

        function getObjectFromData(data){

            var objectFromData = {
                text: data.text,
                id: window.parseInt(data.id)
            };

            return objectFromData;
        }
    }

    angular.module("disc.components.question-card").factory("QuestionCardAdapter", QuestionCardAdapter);

})();
