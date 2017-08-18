function QuestionsApi(Ajax){
    function getAllQuestions(){
        return Ajax.get("api/questions-and-options.json");
    }

    return {
        getAllQuestions: getAllQuestions
    };
}


QuestionsApi.$inject = ["Ajax"];
angular.module("disc.components.questions").factory("QuestionsApi", QuestionsApi);