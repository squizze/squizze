(function(){

    "use strict";

    var AnswersConstant = {
        "A": {
            shortAlias: "D",
            longAlias: "Dominance"
        },
        "B": {
            shortAlias: "I",
            longAlias: "Influence"
        },
        "C": {
            shortAlias: "S",
            longAlias: "Steadliness"
        },
        "D": {
            shortAlias: "C",
            longAlias: "Compliance"
        }
    };

    angular.module("disc.components.answers").constant("ANSWERS_CONSTANT", AnswersConstant);

}());