<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
    import Squizze from "./components/squizze/squizze";
    import PokemonQuiz from "./components/squizze/samples/pokemon.quiz";
    import PokemonAnswers from "./components/squizze/samples/pokemon.squirtle";

    export default {
      name: 'app',
      data () {
        return {
          squizze: new Squizze(PokemonQuiz, PokemonAnswers)
        }
      }
    }
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
