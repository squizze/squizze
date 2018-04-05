const AnswersStore = {
    state: {
        answers: {}
    },
    mutations: {
        add_answer (state, answer) {
            state.answers[answer.question_id] = answer.choice;
        }
    }
};
export default AnswersStore;
