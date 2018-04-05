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
        results() {
          const results = new Squizze(DISCQuiz, this.$store.state.answers).results;
          return Object.values(results).sort((resultA, resultB) => resultA.sum < resultB.sum);
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
