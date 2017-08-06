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

module.exports = QuestionAdapter;
