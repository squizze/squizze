<template>
  <div>
    <div>
      <h1>{{ DISCQuiz.questions[this.$route.params.question_id - 1].content }}</h1>
    </div>
    <div>
        <button
            v-for="choice in DISCQuiz.choices"
            style="margin:5px;"
            v-on:click="teste($route.params.question_id, choice.value)">
            {{choice.content}}
        </button>
    </div>
  </div>
</template>
<script>
  import DISCQuiz from "../components/squizze/samples/DISC.quiz";

  export default {
      data () {
          return {
              DISCQuiz
          }
      },
      methods: {
          teste (question_id, choice) {
              let is_this_the_last_question = parseInt(this.DISCQuiz.questions[this.DISCQuiz.questions.length -1].id) === parseInt(question_id);
              let next_route = is_this_the_last_question ? {name: "congratulations"} : { name: "question", params: { question_id: parseInt(question_id) + 1 }};
              this.$store.commit("add_answer", {question_id, choice});
              this.$router.push(next_route);
          }
      }
  }
</script>
