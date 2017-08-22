function QuestionController(QuestionStateModel, $state){
    var vc = this;
    vc.isLoading = true;
    var _questionId = window.parseInt($state.params.questionId);

    QuestionStateModel.init(_questionId).then(function(){
        vc.vm = QuestionStateModel;
        vc.isLoading = false;
    });
}

export default QuestionController;
