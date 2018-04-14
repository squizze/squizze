<template>
  <div>
    <progress v-bind:value="Object.values(this.$store.state.questions).filter(question => question.is_answered === true).length" :max="Object.values(questions).length"></progress>

    <div>
      <h1>{{ DISCQuiz.questions[this.$route.params.question_id - 1].content }}</h1>
    </div>

    <div>
        <button
            v-for="choice in DISCQuiz.choices"
            style="margin:5px;"
            v-on:click="answer($route.params.question_id, choice.value)">
            {{choice.content}}
        </button>
    </div>
  </div>
</template>
<script>
  import DISCQuiz from "../components/squizze/samples/DISC.quiz";
  import ProgressBar from "../components/progress-bar/ProgressBar.vue";

  export default {
      data () {
          return {
              questions: this.$store.state.questions,
              DISCQuiz
          }
      },
      methods: {
          answer (question_id, choice_value) {
              let question = this.DISCQuiz.questions.filter(item => parseInt(item.id) === parseInt(question_id))[0];
              let answer = this.DISCQuiz.choices.filter(item => parseInt(item.value) === parseInt(choice_value))[0];
              let is_this_the_last_question = parseInt(this.DISCQuiz.questions[this.DISCQuiz.questions.length -1].id) === parseInt(question_id);
              let next_route = is_this_the_last_question ? {name: "congratulations"} : { name: "question", params: { question_id: parseInt(question_id) + 1 }};

              this.$store.commit("answer", {
                  id: question.id,
                  content: question.content,
                  is_answered: true,
                  answer: {
                      content: answer.content,
                      value: answer.value
                  }
              });

              this.$router.push(next_route);
          }
      }
  }
</script>
