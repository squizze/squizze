import Djv from "djv/djv";
import QuizSchema from "./quiz.schema";

class Squizze {

    constructor(quiz, answers) {
        this.quiz = quiz;
        this.answers = answers;
        this.calculate();

        const schema_validator = new Djv({ version: 'draft-06' });
        schema_validator.addSchema("quiz", QuizSchema);
        let validation_result = schema_validator.validate("quiz", quiz);

        if(typeof validation_result !== "undefined") {
            throw ` Invalid Quiz. ${validation_result}`;
        }

    }

    calculate () {
        let sum = {};
        let results = Object.assign({}, this.quiz.summary);

        Object.keys(this.quiz.groups).forEach(groupName => {
            this.quiz.groups[groupName].forEach((id) => {
              sum[groupName] = typeof sum[groupName] !== "undefined" ? sum[groupName] + this.answers[id] : this.answers[id];
            });
        });

        Object.keys(this.quiz.summary).forEach(key => {
            let rule = this.quiz.summary[key].rule.replace(/([A-Z][0-9])/g, "sum.$1");
            results[key] = this.quiz.summary[key];
            results[key].sum = eval(rule);
        });
        this.results = results;
    }
}
export default Squizze;
