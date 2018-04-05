const AnswersStore = {
    state: {
        answers: []
    },
    mutations: {
        addAnswer (state, answer) {
            state.answers.push(answer);
            console.log(state.answers);
        }
    }
};
export default AnswersStore;
