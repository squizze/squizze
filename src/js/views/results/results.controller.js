function ResultsStateController(AnswersModel){
    var vc = this;
    vc.answers = AnswersModel.getResults();
}

module.exports = ResultsStateController;
