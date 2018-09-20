<template>
  <div>
    admin
    <button @click='handleRequestAnswer'>Request answer</button>
    <button :disabled='!foodModule.showAnswer' @click='handleRequestNextQuestion'>Request next question</button>
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
    ...mapActions(['getFoods']),
    handleRequestAnswer() {
      window.socket.emit('requestanswer')
    },
    handleRequestNextQuestion() {
      window.socket.emit('nextquestion', this.foodModule.currentQuestionIndex)
    },
  },
  mounted() {
    this.getFoods()
  },
}
</script>
