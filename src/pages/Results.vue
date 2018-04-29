<template>
  <div>
    <h1>Sua característica principal é <span style="color: red;">{{ results[0].longName }}.</span></h1>
    <table>
      <thead>
        <td>Característica</td>
        <td>Soma</td>
      </thead>
      <tbody>
        <tr v-for="result in results">
          <td>{{ result.longName }}</td>
          <td>{{ result.sum }}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <div v-if="is_quiz_done">
      <p v-on:click="toggle_answers_table">
        {{ answers_table_is_open ? "Esconder minhas respostas" : "Exibir minhas respostas" }}
      </p>
      <p v-on:click="restart_quiz()">Refazer o teste.</p>
      <div v-show="answers_table_is_open">
        <h2> Suas respostas </h2>
        <table style="text-align: left">
          <thead>
          <td><strong>Pergunta</strong></td>
          <td><strong>Resposta</strong></td>
          </thead>
          <tbody>
          <tr v-for="question in questions">
            <td>{{ question.content }}</td>
            <td>{{ question.answer.content }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <router-link :to="{name: 'question', params: {question_id: 1}}">Faça o teste.</router-link>
    </div>
  </div>
</template>
<script>

  import Squizze from "../squizze/squizze";
  import DISCQuiz from "../quizzes/DISC/DISC.quiz";

  export default {
    data () {
      return {
          is_quiz_done: true,
          answers_table_is_open: false
      }
    },
    methods: {
        restart_quiz() {
            this.$store.commit("init", DISCQuiz);
            this.$router.push({name: "question", params: {question_id: 1}});
        },
        toggle_answers_table() {
            this.answers_table_is_open = !this.answers_table_is_open;
        },
        verify_quiz_sum(squizze_results, query_results) {
            return Object.keys(squizze_results).every(function (key) {
              return squizze_results[key].sum === query_results[key];
            });
        }
    },
    computed: {
        results () {
            let squizze_results = new Squizze(DISCQuiz, this.$store.state.get_values()).results;
            let query_results = this.$route.query;
            this.is_quiz_done = this.verify_quiz_sum(squizze_results, query_results);
            return Object.keys(query_results)
              .filter(key => squizze_results.hasOwnProperty(key))
              .map(key => {
                  let result = Object.assign({}, squizze_results[key]);
                  result.sum = query_results[key];
                  return result;
              })
              .sort((a, b) => parseInt(a.sum) < parseInt(b.sum));
        },
        questions () {
            return Object.values(this.$store.state.questions);
        }
    }
  }

</script>
<style scoped>
    table {
        margin: 0 auto;
        border: 1px solid #000;
    }
    table td {
        border: 1px solid #000;
    }
    p {
      text-decoration: underline;
      cursor: pointer;
    }
</style>
