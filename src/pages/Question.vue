<template>
  <div>
    <progress-bar :questions="Object.values(this.$store.state.questions)"></progress-bar>
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
  import Squizze from "../components/squizze/squizze";
  import DISCQuiz from "../quizzes/DISC/DISC.quiz";
  import ProgressBar from "../components/progress-bar/ProgressBar.vue";

  export default {
      data () {
          return {
              DISCQuiz
          }
      },
      components: {
          "progress-bar": ProgressBar
      },
      methods: {
          go_to_next_question(question_id) {
              this.$router.push({ name: "question", params: { question_id: parseInt(question_id) + 1}});
          },
          go_to_results() {
              this.$router.push({name: "results", query: this.calculate_sum()});
          },
          calculate_sum() {
              let results = new Squizze(DISCQuiz, this.$store.state.get_values()).results;
              return Object.keys(results).reduce(function(previous, current) {
                  previous[current] = results[current].sum;
                  return previous;
              }, {});
          },
          answer (question_id, choice_value) {
              let question = this.DISCQuiz.questions.filter(item => parseInt(item.id) === parseInt(question_id))[0];
              let answer = this.DISCQuiz.choices.filter(item => parseInt(item.value) === parseInt(choice_value))[0];

              this.$store.commit("answer", {
                  id: question.id,
                  content: question.content,
                  is_answered: true,
                  answer: {
                      content: answer.content,
                      value: answer.value
                  }
              });
              let is_this_the_last_question = parseInt(this.DISCQuiz.questions[this.DISCQuiz.questions.length -1].id) === parseInt(question_id);
              is_this_the_last_question ? this.go_to_results() : this.go_to_next_question(parseInt(question.id));
          }
      }
  }
</script>
