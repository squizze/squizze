<template>

  <div>
    <h1>Choose your initial Pokemon!</h1>
    <h2> With simple questions we are going to help choose your first pokemon!</h2>

    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png">
    </div>

    <router-link :to="{name: 'question', params: {question_id: 1}}">Start!</router-link>
    <p> * This is a sample Quiz for Squizze </p>
  </div>

</template>
