// import djv from "djv/djv";

class Squizze {

    constructor(quiz, answers) {
        this.quiz = quiz;
        this.answers = answers;
        this.calculate();
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
