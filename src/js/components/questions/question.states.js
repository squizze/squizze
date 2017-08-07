function QuestionsConfig($stateProvider){
    var questionState = {
        templateUrl: "./src/js/components/questions/question.template.html",
        controller: "QuestionController",
        url: "/{questionId:[0-9]{1,2}}",
        controllerAs: "vc"
    };

    $stateProvider.state("question", questionState);
}

module.exports = QuestionsConfig;