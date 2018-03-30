class Squizze {

    constructor(questions, answers) {
        this.questions = questions;
        this.answers = answers;
        this.calculate();
    }

    calculate () {
        let sum = {};
        let results = {};

        Object.keys(this.questions.groups).forEach((groupName) => {
            this.questions.groups[groupName].forEach((id) => {
              sum[groupName] = typeof sum[groupName] !== "undefined" ? sum[groupName] + this.answers[id] : 0;
            });
        });

        Object.keys(this.questions.results).forEach(key => {
            let rule = this.questions.results[key].rule.replace(/([A-Z][0-9])/g, "sum.$1");
            results[key] = eval(rule);
        });

        this.results = results;
    }
}
export default Squizze;
