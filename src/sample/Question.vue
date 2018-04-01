<template>
  <div>
    <h1>{{ PokemonQuizz.questions[$route.params.question_id].content }}</h1>
  </div>
</template>
<script>
  import PokemonQuizz from "../components/squizze/samples/pokemon.quiz";

  export default {
      data () {
          return {
              PokemonQuizz
          }
      }
  }
</script>
