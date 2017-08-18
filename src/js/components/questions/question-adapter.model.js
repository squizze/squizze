function QuestionAdapter(){
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
angular.module("disc.components.questions").factory("QuestionAdapter", QuestionAdapter);
