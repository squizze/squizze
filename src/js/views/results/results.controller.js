function ResultsStateController(AnswersModel){
    var vc = this;
    vc.answers = AnswersModel.getResults();
}

export default ResultsStateController;
