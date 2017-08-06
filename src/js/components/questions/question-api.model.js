function QuestionsApi(Ajax){
    function getAllQuestions(){
        return Ajax.get("https://api.myjson.com/bins/82295");
    }

    return {
        getAllQuestions: getAllQuestions
    };
}

module.exports = QuestionsApi;