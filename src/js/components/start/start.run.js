function StartRun(AnswersRepository, QuestionsRepository, $q, StartModel){
    var promisesToStart = {"answers": AnswersRepository.init(), "questions": QuestionsRepository.init()};
    StartModel.isLoading = true;

    $q.all(promisesToStart).finally(function(){
        StartModel.isLoading = false;
    });
}

module.exports = StartRun;