const AnswersStore = {
    state: {
        answers: []
    },
    mutations: {
        addAnswer (state, answer) {
            state.answers.push(answer);
        }
    }
};
export default AnswersStore;
