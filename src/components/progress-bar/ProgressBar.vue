<template>
    <div>
      <progress v-bind:value="questions.filter(question => question.is_answered).length" :max="questions.length"></progress>
    </div>
</template>
<script>
  export default {
      data() {
          return {}
      },
      props: ["questions"]
  }
</script>
