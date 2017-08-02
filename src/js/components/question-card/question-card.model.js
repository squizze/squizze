(function(){

    "use strict";

    function QuestionCardAdapter(){
        function getObjectFromData(data){

            var objectFromData = {
                text: data.text,
                id: window.parseInt(data.id)
            };

            return objectFromData;
        }

        var adapter = {
            getObjectFromData: getObjectFromData
        };

        return adapter;
    }

    angular.module("disc.components.question-card").factory("QuestionCardAdapter", QuestionCardAdapter);

})();
