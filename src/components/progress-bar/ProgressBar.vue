<template>
    <div>
        <span v-for="question in questions">
            {{ question.is_answered }}
        </span>

    </div>
</template>
<script>
  export default {
      data() {
          return {
              questions: this.$store.state.questions
          }
      },
      computed: {}
  }
</script>
