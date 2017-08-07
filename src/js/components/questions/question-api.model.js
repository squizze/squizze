function QuestionsApi(Ajax){
    function getAllQuestions(){
        return Ajax.get("/api/questions-and-options.json");
    }

    return {
        getAllQuestions: getAllQuestions
    };
}

module.exports = QuestionsApi;