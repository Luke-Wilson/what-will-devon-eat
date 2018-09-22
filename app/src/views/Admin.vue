<template>
  <div>
    admin
    <button class='btn btn-primary' @click='handleRequestAnswer'>Request answer</button>
    <button class='btn btn-primary' :disabled='!foodModule.showAnswer' @click='handleRequestNextQuestion'>Request next question</button>
    <button class='btn btn-primary' @click='handleResetGame'>Reset question count index to 0</button>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "Admin",
  computed: {
    ...mapState(['foodModule'])
  },
  methods: {
    ...mapActions(['getFoods', 'resetGame']),
    handleRequestAnswer() {
      window.socket.emit('requestanswer')
    },
    handleRequestNextQuestion() {
      window.socket.emit('nextquestion', this.foodModule.currentQuestionIndex)
    },
    handleResetGame() {
      this.resetGame()
    }
  },
  mounted() {
    this.getFoods()
  },
}
</script>
