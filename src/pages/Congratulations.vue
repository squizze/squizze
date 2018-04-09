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

</template>
<script>

  import Squizze from "../components/squizze/squizze";
  import DISCQuiz from "../components/squizze/samples/DISC.quiz";

  export default {
    data () {
      return {
      }
    },
    computed: {
        squizze() {
            return new Squizze(DISCQuiz, this.$store.state.get_values());
        },
        results () {
            return Object.values(this.squizze.results).sort((resultA, resultB) => resultA.sum < resultB.sum);
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
</style>
