const QuizStore = {
    state: {
        questions: {},
        get_values: function get_values() {
            let questions = this.questions;
            return Object.keys(questions).reduce(function(previous, current) {
                previous[current] = questions[current].answer.value;
                return previous;
            }, {});
        }
    },
    mutations: {
        init (state, quiz) {
            quiz.questions.forEach(question => {
                state.questions[question.id] = {
                    content: question.content,
                    is_answered: false,
                    answer: {
                            content: null,
                            value: null,
                    }
                };
            });
        },
        answer (state, question) {
            state.questions[question.id] = {
                content: question.content,
                is_answered: true,
                answer: {
                    content: question.answer.content,
                    value: question.answer.value
                }
            };
        }
    }
};
export default QuizStore;
